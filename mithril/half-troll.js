class Token {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  precedence() {
    switch(this.value) {
      case 'd': return 5;
      case '^': return 4;
      case 'x': return 3;
      case '*': return 3;
      case '/': return 3;
      case '+': return 2;
      case '-': return 2;
    }
  }

  associativity() {
    if ('^' === this.value) {
      return 'right';
    }
    return 'left';
  }
}

class ASTNode {
  constructor(token, leftChildNode, rightChildNode) {
    this.token = token.value;
    this.leftChildNode = leftChildNode;
    this.rightChildNode = rightChildNode;
  }
  toString(count) {
    if (!this.leftChildNode && !this.rightChildNode)
      return this.token + "\t=>null\n" + Array(count+1).join("\t") + "=>null";
    var count = count || 1;
    count++;
    return this.token + "\t=>" + this.leftChildNode.toString(count) + "\n" + Array(count).join("\t") + "=>" + this.rightChildNode.toString(count);
    }
}

function isNumeric(ch) {
  return /\d|\./.test(ch);
}

function isOperator(ch) {
  return /[a-zA-Z]|\+|-|\*|\/|\^/.test(ch);
}

function isLeftParenthesis(ch) {
  return /\(/.test(ch);
}

function isRightParenthesis(ch) {
  return /\)/.test(ch);
}

function tokenize(str) {
  str.replace(/\s+/g, ""); // strip white space
  str=str.split("");

  var result=[];
  var numberBuffer=[];

  str.forEach(function (char, idx) {
    if(isNumeric(char)) {
      numberBuffer.push(char);
    } else if (isOperator(char)) {
      emptyNumberBufferAsLiteral();
      result.push(new Token("Operator", char));
    } else if (isLeftParenthesis(char)) {
      if(numberBuffer.length) {
        emptyNumberBufferAsLiteral();
        result.push(new Token("Operator", "*"));
      }
      result.push(new Token("Left Parenthesis", char));
    } else if (isRightParenthesis(char)) {
      emptyNumberBufferAsLiteral();
      result.push(new Token("Right Parenthesis", char));
    }
  });
  if (numberBuffer.length) {
    emptyNumberBufferAsLiteral();
  }
  if(letterBuffer.length) {
    emptyLetterBufferAsVariables();
  }
  return result;

  function emptyNumberBufferAsLiteral() {
    if(numberBuffer.length) {
      result.push(new Token("Literal", numberBuffer.join("")));
      numberBuffer=[];
    }
  }

}

function parse(tokens){
  var outStack=[];
  var opStack=[];

  Array.prototype.addNode = function (operatorToken) {
    rightChildNode = this.pop();
    leftChildNode = this.pop();
    this.push(new ASTNode(operatorToken, leftChildNode, rightChildNode));
  }

  Array.prototype.peek = function() {
    return this.slice(-1)[0];
  };

  tokens.forEach(function(v) {
    if(v.type === "Literal") {
      outStack.push(new ASTNode(v, null, null));
    } else if(v.type == "Operator") {
        //while there is an operator token o2, at the top of the operator stack and either
        while (opStack.peek() && (opStack.peek().type === "Operator") 
        //o1 is left-associative and its precedence is less than or equal to that of o2, or
        && ((v.associativity() === "left" && v.precedence() <= opStack.peek().precedence())
          //o1 is right associative, and has precedence less than that of o2,
          || (v.associativity() === "right" && v.precedence() < opStack.peek().precedence()))) {
          outStack.addNode(opStack.pop());
      }
      //at the end of iteration push o1 onto the operator stack
      opStack.push(v);
    } else if(v.type === "Left Parenthesis") {
      opStack.push(v);
    }  else if(v.type === "Right Parenthesis") {
      //Until the token at the top of the stack is a left parenthesis, pop operators off the stack onto the output queue.
      while(opStack.peek() 
        && opStack.peek().type !== "Left Parenthesis") {
        outStack.addNode(opStack.pop());
    }
      if(opStack.length == 0){
        throw new Error("Unmatched parentheses");
      }
      opStack.pop(); //Pop the left parenthesis from the stack, but not onto the output queue.
    }
  });

  while(opStack.peek()) {
    outStack.addNode(opStack.pop());
  }

  return outStack.pop();
}
/*
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org/>
 */

'use strict';

function TreasureItem(valueArg, amountArg, descriptionArg) {
	this.baseValue = (typeof valueArg === "number") ? valueArg : 0;
	this.amount = (typeof amountArg === "number") ? amountArg : 0;
	this.description = (typeof descriptionArg === "undefined") ? "" : descriptionArg;
}

TreasureItem.prototype.value = function () {
	return this.baseValue * this.amount;
};

function Material(name, densityMult, valueMult) {
	this.name = name;
	this.densityMult = densityMult;
	this.valueMult = valueMult;
}

function Treasure() {
	this.silverToGoldRatio = 10;
	this.value = 0;
	this.goldAmount = 0;
	this.silverAmount = 0;
	this.items = [];
}

Treasure.prototype.addGold = function (amount) {
	amount = (typeof amount === "number") ? amount : 1;
	this.goldAmount += amount;
};

Treasure.prototype.addSilver = function (amount) {
	amount = (typeof amount === "number") ? amount : 1;
	this.silverAmount += amount;
};

Treasure.prototype.generateByLevel = function (level) {
	var chance;
	level = (typeof level === "number") ? level : 1;
	chance = d6();
	if (chance < 6) {
		this.addSilver(Dice.d6(level));
	} else if (chance > 4) {
		this.addGold(level);
	}
	if (Dice.percentChance(5 * level)) {
		//add 2d6 goods
	}
	if (Dice.percentChance(5 * level)) {
		//add d6 gems
	}
	if (Dice.percentChance(5 * level)) {
		//add d6 jewelry items
	}
	if (Dice.percentChance(2.5 * level)) {
		//add one magic item
	}
};

function artifactOrigin() {
	var i, result;
	i = d(2,6);
	switch (i) {
		case  2: result = "Primordial"; break;
		case  3: result = "Fomorian"; break;
		case  4: result = "Dragon Cult"; break;
		case  5: result = "Death Cult"; break;
		case  6: result = "Imperial Human"; break;
		case  7: result = "Local Human"; break;
		case  8: result = "Wildling Human"; break;
		case  9: result = "Dwarven"; break;
		case 10: result = "Fey"; break;
		case 11: result = "Goblin"; break;
		default: result = "Astral/Demonic"; break;
	}
	return result;
}

function weaponType() {
	var i, result;
	i = d(2,5);
	switch (i) {
		case  2: result = "great sword"; break;
		case  3: result = "warhammer"; break;
		case  4: result = "poleaxe"; break;
		case  5: result = "axe"; break;
		case  6: result = "sword"; break;
		case  7: result = "spear"; break;
		case  8: result = "bow"; break;
		case  9: result = "arrow"; break;
		default: result = "sling"; break;
	}
	return result;
}
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

/* global dice */

/* Declare object */
var boreaTables = {
	'version': '0.1',
};

/* general utility tables */
boreaTables.character = function () {
	var result, roll1, roll2, att1, att2, bynames;
	result = "";
	while (roll1 === roll2) {
		roll1 = dice.d8();
		roll2 = dice.d8();
	}
	bynames = [];

	if (roll1 === 1) {
		att1 = "mighty";
		bynames[bynames.length] = "the Mighty";
		bynames[bynames.length] = "the Strong";
		bynames[bynames.length] = "the Ox";
	} else if (roll1 === 2) {
		att1 = "stout-hearted";
		bynames[bynames.length] = "the Stout";
		bynames[bynames.length] = "the Hardy";
		bynames[bynames.length] = "Ironside";
		bynames[bynames.length] = "the Bear";
	} else if (roll1 === 3) {
		att1 = "swift";
		bynames[bynames.length] = "the Swift";
		bynames[bynames.length] = "the Fleet";
		bynames[bynames.length] = "the Hare";
		bynames[bynames.length] = "the Fox";
	} else if (roll1 === 4) {
		att1 = "keen-eyed";
		bynames[bynames.length] = "Ealge-eye";
		bynames[bynames.length] = "Farseer";
		bynames[bynames.length] = "Keen Eyes";
		bynames[bynames.length] = "the Hawk";
	} else if (roll1 === 5) {
		att1 = "lucky";
		bynames[bynames.length] = "the Lucky";
		bynames[bynames.length] = "the Blessed";
		bynames[bynames.length] = "the Fox";
		bynames[bynames.length] = "the Merry";
	} else if (roll1 === 6) {
		att1 = "fair";
		bynames[bynames.length] = "the Lovely";
		bynames[bynames.length] = "the Winsome";
		bynames[bynames.length] = "the Desired";
		bynames[bynames.length] = "the Merry";
	} else if (roll1 === 7) {
		att1 = "gifted";
		bynames[bynames.length] = "the Canny";
		bynames[bynames.length] = "the Cunning";
		bynames[bynames.length] = "the Fox";
		bynames[bynames.length] = "Raven-tongue";
	} else {
		att1 = "bold";
		bynames[bynames.length] = "the Bold";
		bynames[bynames.length] = "the Hearty";
		bynames[bynames.length] = "the Brash";
		bynames[bynames.length] = "the Lion";
	}

	if (roll2 === 1) {
		att2 = "weak";
		bynames[bynames.length] = "the Weak";
		bynames[bynames.length] = "the Small";
		bynames[bynames.length] = "the Mouse";
	} else if (roll2 === 2) {
		att2 = "faint-hearted";
		bynames[bynames.length] = "the Faint-hearted";
		bynames[bynames.length] = "the Frail";
	} else if (roll2 === 3) {
		att2 = "slow";
		bynames[bynames.length] = "the Slow";
		bynames[bynames.length] = "the Snail";
		bynames[bynames.length] = "the Plodding";
		bynames[bynames.length] = "the Sleepy";
	} else if (roll2 === 4) {
		att2 = "dull-eyed";
		bynames[bynames.length] = "Dull Eyes";
		bynames[bynames.length] = "the Blind";
		bynames[bynames.length] = "the Bat";
		bynames[bynames.length] = "One-eye";
	} else if (roll2 === 5) {
		att2 = "unlucky";
		bynames[bynames.length] = "the Unucky";
		bynames[bynames.length] = "the Cursed";
	} else if (roll2 === 6) {
		att2 = "ugly";
		bynames[bynames.length] = "the Ugly";
		bynames[bynames.length] = "the Unlovely";
		bynames[bynames.length] = "the Foul";
	} else {
		att2 = "gutless";
		bynames[bynames.length] = "the Gutless";
		bynames[bynames.length] = "the Craven";
		bynames[bynames.length] = "the Cur";
		bynames[bynames.length] = "the Mouse";
	}

	result += "X"; //TODO: generate names
	result += " " + dice.pick(bynames);
	result += " (" + att1 + ", " + att2 + ")";
	return result;
};

	/*
Bewitched
Blond, Yellow, Red, Black, Fair-hair, Raven-hair, Greymane
Careless
Careful
Cruel
Fat
Thin
Fearless
Giving
Ring-Giver
Grim
Hammer
Kind
Lame
Law-giver
Learned
Proud
Short
Tall
	*/

boreaTables.reaction = function (modifier) {
	var roll = dice.d6(2);
	roll += (typeof modifier === "number") ? modifier : 0;
	if (roll <= 2) {
		return "Reaction Roll (" + roll + "): Attempts to attack";
	} else if (roll <= 5) {
		return "Reaction Roll (" + roll + "): Hostile reation";
	} else if (roll <= 8) {
		return "Reaction Roll (" + roll + "): Uncertain";
	} else if (roll <= 11) {
		return "Reaction Roll (" + roll + "): Accepts offer";
	} else {
		return "Reaction Roll (" + roll + "): Enthusiast, Loyalty +3";
	}
};

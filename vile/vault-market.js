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
var vmktTables = {
	'version': '0.1',
	races: {}
};

// vmktTables.slaveRace = function () {
// 	switch (dice.d20()) {
// 		case 1: return "bugbear";
// 		case 2: return "dwarf";
// 		case 3: return "elf";
// 		case 4: return "gnome";
// 		case 5: return "gnoll";
// 		case 6: return "goblin";
// 		case 7: return "half-elf";
// 		case 8: 
// 		case 9: return "half-orc";
// 		case 10: 
// 		case 11: 
// 		case 12: return "hobgoblin";
// 		default: return "human";
// 		case 17: return "kuo-toan";
// 		case 18:
// 		case 19: return "orc";
// 		case 20: return "troglodyte";
// 	}
// };

vmktTables.slaveRace = function () {
	switch (dice.d10()) { //TODO change to 12 when half-breeds done
		case 1: //monsters
		case 2: //humanoids
			return dice.pick(vmktTables.races.goblin,
				vmktTables.races.hobgoblin,
				vmktTables.races.bugbear,
				vmktTables.races.gnoll);
		case 3: //dwarves
			return dice.pick(vmktTables.races.dwarfLead,
				vmktTables.races.dwarfIron,
				vmktTables.races.dwarfBrass,
				vmktTables.races.dwarfWild);
		case 4: //smallfolk
			return dice.pick(vmktTables.races.gnome,
				vmktTables.races.gnomeDeep,
				vmktTables.races.halflingHairfoot,
				vmktTables.races.halflingTallfellow,
				vmktTables.races.halflingStout);
		case 6: //elves, any
			return dice.pick(vmktTables.races.elfDark,
				vmktTables.races.elfFaerie,
				vmktTables.races.elfGold,
				vmktTables.races.elfSea,
				vmktTables.races.elfSnow,
				vmktTables.races.elfWood);
		case 7: //elves, non-dark
			return dice.pick(vmktTables.races.elfFaerie,
				vmktTables.races.elfGold,
				vmktTables.races.elfSea,
				vmktTables.races.elfSnow,
				vmktTables.races.elfWood);
		case 8: //humans
			return dice.pick(vmktTables.races.humanBrightlander,
				vmktTables.races.humanBone,
				vmktTables.races.humanCeledonian,
				vmktTables.races.humanHvitur,
				vmktTables.races.humanRamn,
				vmktTables.races.humanToulung,
				vmktTables.races.humanZaytin);
		case 9: //humans
			return dice.pick(vmktTables.races.humanBrightlander,
				vmktTables.races.humanBone,
				vmktTables.races.humanCeledonian,
				vmktTables.races.humanHvitur,
				vmktTables.races.humanRamn,
				vmktTables.races.humanToulung,
				vmktTables.races.humanZaytin);
		case 10: //orcs
			return dice.pick(vmktTables.races.orcCommon,
				vmktTables.races.orcGrey);
		case 11: //halfbreeds
		case 12: //halfbreeds and special/supernatural
	}
};

vmktTables.races.dwarfLead = {
	name: "lead dwarf",
	plural: "lead dwarves",
	adj: "lead dwarven",
	skinColors: ["medium grey","dark grey","charcoal"],
	hairColors: ["medium grey","dark grey","charcoal"],
	eyeColors: ["grey","charcoal"],
	compColors: ["grey","earth tone"]
	//thinner
};
vmktTables.races.dwarfIron = {
	name: "iron dwarf",
	plural: "iron dwarves",
	adj: "iron dwarven",
	skinColors: ["deep tan","light brown","ruddy"],
	hairColors: ["brown","black","grey"],
	eyeColors: ["bright"], //almost never blue
	compColors: ["earth tone"] //with few bright highlights
};
vmktTables.races.dwarfBrass = {
	name: "brass dwarf",
	plural: "brass dwarves",
	adj: "brass dwarven",
	skinColors: ["light brown","pale brown","pale"],
	hairColors: ["brown"],
	eyeColors: ["bright"],
	compColors: ["earth tone"]
};
vmktTables.races.dwarfWild = {
	name: "wild dwarf",
	plural: "wild dwarven",
	adj: "wild dwarven",
	skinColors: ["deep tan","light brown","ruddy"],
	hairColors: ["brown","black","grey"],
	eyeColors: ["bright","black"],
	compColors: ["earth tone"]
};


vmktTables.races.elfDark = {
	name: "dark elf",
	plural: "dark elves",
	adj: "dark elven",
	skinColors: ["pale","white"],
	hairColors: ["black"],
	eyeColors: ["black"],
	compColors: ["midnight","dark green","deep violet","black"]
};
vmktTables.races.elfFaerie = {
	name: "faerie",
	plural: "faeries",
	adj: "fey",
	skinColors: ["pale"],
	hairColors: ["silver","golden","red-gold"],
	eyeColors: ["violet"],
	compColors: ["white","yellow","silver","gold"]
};
vmktTables.races.elfGold = {
	name: "gold elf",
	plural: "gold elves",
	adj: "gold elven",
	skinColors: ["black"],
	hairColors: ["white"],
	eyeColors: ["red","amber"],
	compColors: ["white","black","silver","gold"] //don't wear much, decorate their bodies with gold dust
};
vmktTables.races.elfSea = {
	name: "sea elf",
	plural: "sea elves",
	adj: "sea elven",
	skinColors: ["greenish-silver"],
	hairColors: ["green","blue-green"],
	eyeColors: ["green"],
	compColors: ["blue","blue-green","green"]
};
vmktTables.races.elfSnow = {
	name: "snow elf",
	plural: "snow elves",
	adj: "snow elven",
	skinColors: ["pale white","blinding white","snow-white","ice blue"],
	hairColors: ["pale white","bone white","ashen"],
	eyeColors: ["pale white","ice blue","pale grey"],
	compColors: ["ice blue","deep blue"]
	//females up to 6'4'', males up to 7'
};
vmktTables.races.elfWood = {
	name: "wood elf",
	plural: "wood elves",
	adj: "wood elven",
	skinColors: ["fair"],
	hairColors: ["yellow","coppery"], //range
	eyeColors: ["light brown","light green","hazel"],
	compColors: ["russet","red","brown","tan"]
};

vmktTables.races.gnome = {
	name: "gnome",
	plural: "gnomes",
	adj: "gnomish",
	skinColors: ["wood brown","grey brown"],
	hairColors: ["brown","pure white"], //range
	eyeColors: ["grey-blue","bright blue"], //range
	compColors: ["earth tone"]
};
vmktTables.races.gnomeDeep = {
	name: "svirfneblin",
	plural: "svirfnebli",
	adj: "svirfneblish",
	skinColors: ["medium brown","brownish grey"], //range
	hairColors: ["brown","pure white"], //usually bald
	eyeColors: ["grey"], //range
	compColors: ["earth tone"]
};
vmktTables.races.halflingHairfoot = {
	name: "hairfoot halfling",
	plural: "hairfoot halflings",
	adj: "hairfootish",
	skinColors: ["ruddy"],
	hairColors: ["brown","sandy brown"],
	eyeColors: ["hazel","brown"],
	compColors: ["colorful"] //drab grey, tan or brown trousers and coats
};
vmktTables.races.halflingTallfellow = {
	name: "tallfellow halfling",
	plural: "tallfellow halflings",
	adj: "tallfellow",
	skinColors: ["ruddy","fair"], //more fair
	hairColors: ["sandy brown","sandy blond"], //more fair
	eyeColors: ["hazel","brown"],
	compColors: ["colorful"] //drab grey, tan or brown trousers and coats
	//very rare, taller
};
vmktTables.races.halflingStout = {
	name: "stout halfling",
	plural: "stout halflings",
	adj: "stoutish",
	skinColors: ["ruddy"],
	hairColors: ["brown","hazel"],
	eyeColors: ["hazel","brown"],
	compColors: ["colorful"] //drab grey, tan or brown trousers and coats
	//shorter and stockier
};

vmktTables.races.humanBone = {
	name: "bone human",
	plural: "bone humans",
	adj: "bone human",
	skinColors: ["translucent"],
	hairColors: ["translucent"],
	eyes: ["white","pale pink"],
	compColors: ["black"] //any
};
vmktTables.races.humanBrightlander = {
	name: "brightlander human",
	plural: "brightlander humans",
	adj: "brightlander",
	skinColors: ["mahogany","ebony","coal black","deep brown"],
	hairColors: ["dark brown","black"],
	eyeColors: ["dark brown","black"],
	compColors: ["red","green","yellow"] //bright solid colors, modest style
};
vmktTables.races.humanCeledonian = {
	name: "celedonian human",
	plural: "celedonian humans",
	adj: "celedonian",
	skinColors: ["celedon","jade","viridian"],
	hairColors: ["black","midnight green","midnight blue","myrtle"],
	eyeColors: ["green","emerald","black"],
	compColors: ["black","russet","bronze"] //tend to exotic and revealing fashions
};
vmktTables.races.humanHvitur = {
	name: "hvitur human",
	plural: "hvitur humans",
	adj: "hvitur",
	skinColors: ["pale white","snow-white"],
	hairColors: ["white","blond","gold","red","red-gold"],
	eyeColors: ["ice blue","blue","deep blue","slate","pale green","pale violet"],
	compColors: ["green","blue","red","orange"] //simple/practical, 2-3 in clan/family combinations
};
vmktTables.races.humanRamn = {
	name: "ramn human",
	plural: "ramn humans",
	adj: "ramnan",
	skinColors: ["coppery","bronze","gold"],
	hairColors: ["coppery","dark brown","black","lustrous black"],
	eyeColors: ["dark","amber","green","blue"],
	compColors: ["bright"] //parti-colored robes and coats with puffs, slashes, stripes
};
vmktTables.races.humanToulung = {
	name: "toulung human",
	plural: "toulung humans",
	adj: "toulung",
	skinColors: ["yellow","gold","amber","orange","brick red","red"],
	hairColors: ["coppery","gold","lustrous black","bright red"],
	eyeColors: ["amber","red","gold"],
	compColors: ["copper","gold","brass","turquoise"] //tend to favor jewelry and beadwork
};
vmktTables.races.humanZaytin = {
	name: "zaytin human",
	plural: "zaytin humans",
	adj: "zaytinic",
	skinColors: ["olive"],
	hairColors: ["brown","dark brown","black"],
	eyeColors: ["brown","dark brown","deep green","olive"],
	compColors: ["blue","red","white"] //"modest" in cut and color (meaning simple with little coverage)
};

vmktTables.races.goblin = {
	name: "goblin",
	plural: "goblins",
	adj: "goblish",
	skinColors: ["yellow","dull orange","brick red"], //range
	hairColors: ["black"], //?
	eyeColors: ["reddish","lemon yellow"], //range
	compColors: ["brown drab","dirty grey","stained maroon"]
};
vmktTables.races.hobgoblin = {
	name: "hobgoblin",
	plural: "hobgoblins",
	adj: "hoblish",
	skinColors: ["bright orange-red","red","red with blue tinges"],
	hairColors: ["dark reddish-brown","grey-black"],
	eyeColors: ["yellowish","dark brown"],
	compColors: ["bright bloody colors"] //and black leather
};
vmktTables.races.koalinth = {
	name: "koalinth",
	plural: "koalinths",
	adj: "koalinth",
	skinColors: ["green"],
	hairColors: ["grey-black","pale grey","bluish grey"],
	eyeColors: ["yellowish","dark brown"],
	compColors: ["bright bloody colors"] //and black leather
	//gills, webbed hands and feet
};

vmktTables.races.bugbear = {
	name: "bugbear",
	plural: "bugbears",
	adj: "bugbearean",
	skinColors: ["light yellow","dull yellow","yellow-brown"],
	hairColors: ["tan","brown","brick red"], //range
	eyeColors: ["greenish white"], //red pupils
	compColors: ["dingy"]
};
vmktTables.races.gnoll = {
	name: "gnoll",
	plural: "gnolls",
	adj: "gnollish",
	skinColors: ["greenish grey"],
	hairColors: ["reddish grey","dull yellow"],
	eyeColors: ["dull black"],
	compColors: ["brown","black","grey"]
	//amber claws
};
vmktTables.races.orcCommon = {
	name: "common orc",
	plural: "common orcs",
	adj: "orcish",
	skinColors: ["brown","brownish green","bluish green"],
	hairColors: ["dark brown","black","brown and tan","black and tan"],
	eyeColors: ["black"],
	compColors: ["blood red","rust red","mustard yellow","yellow green","moss green","greenish purple","blackish brown"]
	//pink snouts
};
vmktTables.races.orcGrey = {
	name: "grey orc",
	plural: "grey orcs",
	adj: "grey orcish",
	skinColors: ["stone grey","ash grey","slate grey"],
	hairColors: ["charcoal","black","ashen","black and grey"],
	eyeColors: ["yellow","amber","red"],
	compColors: ["brown","black","dark blue"] //other dark colors
	//tusks, lupine ears
	//height: male 5'0" to 6'10", female 4'7" to 6'3"
	//weight: male 154 to 438 lb, female 114 to 398 lb
};
//thayan red (shock troop) and black (scout) orcs

//troglodytes, kou-toans, Illithids, Trolls
//ghosts, vampires
//lesser demons, succubi, incubi, nighthags, mezzo-daemons
//noble dark elves on nightmares, nycadaemons

vmktTables.races.halfDwarf = {
	name: "half-dwarf",
	plural: "half-dwarves",
	adj: "half-dwarven"
	//always half-human? not 1/2 elven, not 1/2 orcish
};
vmktTables.races.halfElf = {
	name: "half-elf",
	plural: "half-elves",
	adj: "half-elven"
	//always half-human
};
//elf-dark-elf mix
vmktTables.races.halfOrc = {
	name: "half-orc",
	plural: "half-orcs",
	adj: "half-orcish"
	//usually orc dominant, may be half human, goblin, or hobgoblin
};
//elfling (elf/halfling)
//(dwarf-gnome)

vmktTables.items.drug = function() {
	return dice.pick("mushroom powder","poppy milk","lotus dust");
	//hashish
	//coca
	//blue lotus & dream willow bark
	//black lotus
	//golden lotus
	//red mead - priapic berserker drug
};

//humans

//city: 8000-9000 dark elves, 16000-18000 half caste, servants, and slaves, and 1000 or so metics
//gambling dens, bordellos, taverns, drug salons, unsavory shops
//brothels, poison shops, bars, torture parlors, sources of arcane knowledge

//diseased beggars, rakes, thieves
//metic adventurers, scholars, and priests
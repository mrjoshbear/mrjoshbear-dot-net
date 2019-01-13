/* Declare object */
var classicTables = {
	'version': '0.1',
	races: {}
};

classicTables.races.dwarfGrey = {
	name: "duergar",
	plural: "duerga",
	adj: "duergaran",
	skinColors: ["medium grey","dark grey"],
	hairColors: ["medium grey","dark grey"],
	eyeColors: ["grey"],
	compColors: ["grey","earth tone"]
	//thinner
};
classicTables.races.dwarfHill = {
	name: "hill dwarf",
	plural: "hill dwarves",
	adj: "hill dwarven",
	skinColors: ["deep tan","light brown","ruddy"],
	hairColors: ["brown","black","grey"],
	eyeColors: ["bright"], //almost never blue
	compColors: ["earth tone"] //with few bright highlights
};
classicTables.races.dwarfMountain = {
	name: "mountain dwarf",
	plural: "mountain dwarves",
	adj: "mountain dwarven",
	skinColors: ["light brown","pale brown","pale"],
	hairColors: ["brown"],
	eyeColors: ["bright"],
	compColors: ["earth tone"]
};

classicTables.races.elfDark = {
	name: "dark elf",
	plural: "dark elves",
	adj: "dark elven",
	skinColors: ["black"],
	hairColors: ["white"],
	eyeColors: ["red"],
	compColors: ["white","black","silver"]
};
classicTables.races.elfFaerie = {
	name: "faerie",
	plural: "faeries",
	adj: "fey",
	skinColors: ["pale"],
	hairColors: ["golden"],
	eyeColors: ["violet"],
	compColors: ["white","yellow","silver","gold"]
};
classicTables.races.elfGrey = {
	name: "grey elf",
	plural: "grey elves",
	adj: "grey elven",
	skinColors: ["pale"],
	hairColors: ["silver"],
	eyeColors: ["amber"],
	compColors: ["white","yellow","silver","gold"]
};
classicTables.races.elfHigh = {
	name: "high elf",
	plural: "high elves",
	adj: "high elven",
	skinColors: ["pale"],
	hairColors: ["dark"],
	eyeColors: ["green"],
	compColors: ["blue","green","violet"]
}
classicTables.races.elfSea = {
	name: "sea elf",
	plural: "sea elves",
	adj: "sea elven",
	skinColors: ["greenish-silver"],
	hairColors: ["green","blue-green"],
	eyeColors: ["green"],
	compColors: ["blue","blue-green","green"]
};
classicTables.races.elfWood = {
	name: "wood elf",
	plural: "wood elves",
	adj: "wood elven",
	skinColors: ["fair"],
	hairColors: ["yellow","coppery"], //range
	eyeColors: ["light brown","light green","hazel"],
	compColors: ["russet","red","brown","tan"]
};

classicTables.races.gnome = {
	name: "gnome",
	plural: "gnomes",
	adj: "gnomish",
	skinColors: ["wood brown","grey brown"],
	hairColors: ["brown","pure white"], //range
	eyeColors: ["grey-blue","bright blue"], //range
	compColors: ["earth tone"]
};
classicTables.races.gnomeDeep = {
	name: "svirfneblin",
	plural: "svirfnebli",
	adj: "svirfneblish",
	skinColors: ["medium brown","brownish grey"], //range
	hairColors: ["brown","pure white"], //usually bald
	eyeColors: ["grey"], //range
	compColors: ["earth tone"]
};
classicTables.races.halflingHairfoot = {
	name: "hairfoot halfling",
	plural: "hairfoot halflings",
	adj: "hairfootish",
	skinColors: ["ruddy"],
	hairColors: ["brown","sandy brown"],
	eyeColors: ["hazel","brown"],
	compColors: ["colorful"] //drab grey, tan or brown trousers and coats
};
classicTables.races.halflingTallfellow = {
	name: "tallfellow halfling",
	plural: "tallfellow halflings",
	adj: "tallfellow",
	skinColors: ["ruddy","fair"], //more fair
	hairColors: ["sandy brown","sandy blond"], //more fair
	eyeColors: ["hazel","brown"],
	compColors: ["colorful"] //drab grey, tan or brown trousers and coats
	//very rare, taller
};
classicTables.races.halflingStout = {
	name: "stout halfling",
	plural: "stout halflings",
	adj: "stoutish",
	skinColors: ["ruddy"],
	hairColors: ["brown","hazel"],
	eyeColors: ["hazel","brown"],
	compColors: ["colorful"] //drab grey, tan or brown trousers and coats
	//shorter and stockier
};

classicTables.races.goblin = {
	name: "goblin",
	plural: "goblins",
	adj: "goblish",
	skinColors: ["yellow","dull orange","brick red"], //range
	hairColors: ["black"], //?
	eyeColors: ["reddish","lemon yellow"], //range
	compColors: ["brown drab","dirty grey","stained maroon"]
};
classicTables.races.hobgoblin = {
	name: "hobgoblin",
	plural: "hobgoblins",
	adj: "hoblish",
	skinColors: ["bright orange-red","red","red with blue tinges"],
	hairColors: ["dark reddish-brown","grey-black"],
	eyeColors: ["yellowish","dark brown"],
	compColors: ["bright bloody colors"] //and black leather
};
classicTables.races.koalinth = {
	name: "koalinth",
	plural: "koalinths",
	adj: "koalinth",
	skinColors: ["green"],
	hairColors: ["grey-black","pale grey","bluish grey"],
	eyeColors: ["yellowish","dark brown"],
	compColors: ["bright bloody colors"] //and black leather
	//gills, webbed hands and feet
};

classicTables.races.bugbear = {
	name: "bugbear",
	plural: "bugbears",
	adj: "bugbearean",
	skinColors: ["light yellow","dull yellow","yellow-brown"],
	hairColors: ["tan","brown","brick red"], //range
	eyeColors: ["greenish white"], //red pupils
	compColors: ["dingy"]
};
classicTables.races.gnoll = {
	name: "gnoll",
	plural: "gnolls",
	adj: "gnollish",
	skinColors: ["greenish grey"],
	hairColors: ["reddish grey","dull yellow"],
	eyeColors: ["dull black"],
	compColors: ["brown","black","grey"]
	//amber claws
};
classicTables.races.orc = {
	name: "orc",
	plural: "orcs",
	adj: "orcish",
	skinColors: ["brown","brownish green","bluish green"],
	hairColors: ["dark brown","black","brown and tan","black and tan"],
	eyeColors: ["black"],
	compColors: ["blood red","rust red","mustard yellow","yellow green","moss green","greenish purple","blackish brown"]
	//snouts
};

//troglodytes, kou-toans, Illithids, Trolls
//ghosts, vampires
//lesser demons, succubi, incubi, nighthags, mezzo-daemons
//noble dark elves on nightmares, nycadaemons

classicTables.races.halfDwarf = {
	name: "half-dwarf",
	plural: "half-dwarves",
	adj: "half-dwarven"
	//always half-human? not 1/2 elven, not 1/2 orcish
};
classicTables.races.halfElf = {
	name: "half-elf",
	plural: "half-elves",
	adj: "half-elven"
	//always half-human
};
//elf-dark-elf mix
classicTables.races.halfOrc = {
	name: "half-orc",
	plural: "half-orcs",
	adj: "half-orcish"
	//usually orc dominant, may be half human, goblin, or hobgoblin
};
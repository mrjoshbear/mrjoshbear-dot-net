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

/* global dice, nonBinaryNicknames, feminineNickNames, masculineNickNames */

/* Declare object */
var metalTables = {
	'version': '0.1',
};

/* Misc. Convenience Functions */
metalTables.indentLines = function (text) {
	var i, strings, output = "";
	strings = text.split("\n");
	for (i = 0; i < strings.length; i++) {
		output += "\t" + strings[i] + "\n";
	}
	return output;
};

/* general utility tables */
metalTables.reaction = function (modifier) {
	var roll = dice.d6(2);
	roll += (typeof modifier === "number") ? modifier : 0;
	if (roll <= 2) {
		return "Reaction Roll (" + roll + "): Attempts to attack";
	} else if (roll <= 5) {
		return "Reaction Roll (" + roll + "): Hostile reaction";
	} else if (roll <= 8) {
		return "Reaction Roll (" + roll + "): Uncertain";
	} else if (roll <= 11) {
		return "Reaction Roll (" + roll + "): accepts offer";
	} else {
		return "Reaction Roll (" + roll + "): Enthusiast, Loyalty +3";
	}
};

metalTables.loyalty = function (modifier) {
	var roll = dice.d6(3);
	roll += (typeof modifier === "number") ? modifier : 0;
	if (roll <= 3) {
		return "Loyalty (" + roll + "): Will desert at first opportunity";
	} else if (roll <= 6) {
		return "Loyalty (" + roll + "): -2 on morale dice";
	} else if (roll <= 8) {
		return "Loyalty (" + roll + "): -1 on morale dice";
	} else if (roll <= 12) {
		return "Loyalty (" + roll + "): Average morale dice";
	} else if (roll <= 14) {
		return "Loyalty (" + roll + "): +1 on morale dice";
	} else if (roll <= 18) {
		return "Loyalty (" + roll + "): +2 on morale dice";
	} else {
		return "Loyalty (" + roll + "): Need never check morale";
	}
};

metalTables.morale = function (modifier) {
	var roll = dice.d6(2);
	roll += (typeof modifier === "number") ? modifier : 0;
	if (roll <= 2) {
		return "Abject surrender";
	} else if (roll <= 6) {
		return "Rout";
	} else if (roll >= 12) {
		return "Fight to the last";
	} else {
		return "Stand";
	}
};

metalTables.moralePoor = function (modifier) {
	var roll = dice.d6(2);
	roll += (typeof modifier === "number") ? modifier : 0;
	if (roll <= 2) {
		return "Abject surrender";
	} else if (roll <= 8) {
		return "Rout";
	} else {
		return "Stand";
	}
};

metalTables.moraleElite = function (modifier) {
	var roll = dice.d6(2);
	roll += (typeof modifier === "number") ? modifier : 0;
	if (roll <= 2) {
		return "Rout";
	} else if (roll <= 5) {
		return "Retreat";
	} else if (roll >= 12) {
		return "Fight to the last";
	} else {
		return "Stand";
	}
};

/* Music tables : riffs, solos, and breakdowns */


/* Equipment & Loot Tables */

//Manic Panik

metalTables.basicWeapon = function () {
	return dice.pick([
		"ax handle",
		"ball-peen hammer",
		"baseball bat",
		"bayonet",
		"bezeling planisher",
		"big nut on a rope",
		"bowie knife",
		"brass knuckles",
		"butchers' cleaver",
		"cast iron pan",
		"cast-iron skillet",
		"cavalry sabre",
		"collapsing baton",
		"cricket bat",
		"doorknob mace",
		"fireplace poker",
		"golf club",
		"hefty bone",
		"knife spear",
		"lead pipe",
		"machete",
		"mower blade",
		"night stick",
		"nunchaku",
		"padlock flail",
		"pipewrench",
		"pitchfork",
		"really big bolt",
		"rumble chain",
		"switchblade",
		"sword bayonet",
		"tire iron",
		"tomahawk",
		"trench knife"
		]);
};

metalTables.heavyWeapon = function () {
	return dice.pick([
		"sledgehammer",
		"spiked skull on a chain",
		"wrecking bar",
		"nail bat",
		"big blade",
		"fire ax",
		"really, really big bolt",
		"massive double-headed battle ax",
		"wood ax",
		"steel pipe",
		"parking meter",
		"sharpened shovel",
		"tank wrench",
		"pick ax",
		"rebar hammer",
		"sharpened shovel"
		]);
};

metalTables.mechanicalWeapon = function () {
	return dice.pick([
		"blunderbus (1 shot, short range, 2d6 damage point-blank)",
		"musket (1 shot, medium range, 1d6 damage)",
		"hand-cannon (6 shots, medium range)",
		"double-barreled rifle (2 shots, long range)",
		"nail gun (12 shots, short range)",
		"fire bottles (6 pack, short range, pyro damage, may splash near target)",
		"flare gun (1 shot, short range, pyro damage)",
		"crossbow (1 shot, medium range, fires metal bolts)",
		"spear gun (1 shot, medium range, fires metal bolts)",
		]);
};

metalTables.advancedWeapon = function () {
	return dice.pick([
		"service pistol (17 shots, medium range)", //Glock 17
		"service pistol (7 shots, medium range)", //M1911A
		"hunting shotgun (6 shots, medium range, 2d6 daamge point-blank)",
		"henry rifle (15 shots, long range)",
		"service rifle (5 shots, long range)",
		"battle rifle (10 shots, long range)",
		"assault rifle (30 shots, autofire, long range)",
		"LMG/SAW (100 rnd belt, autofire, long range)",
		"sniper rifle (5 shots, extreme range)",
		"pump-action scattergun (8 shots, close range, 2d6 damage point blank)",
		"flamethrower (6 shots, close range, pyro damage)",
		"flash bangs (close range burst, blinding, noise damage)",
		"frag grenades (close range burst, 3d6 damage)",
		"claymore mine (close range burst, 5d6 damage)"
		]);
};

metalTables.explosives = function () {
	return dice.pick([
		"blasting caps (50)",
		"claymore mine",
		"det cord",
		"dynamite",
		"flashbangs",
		"fragmentation grenades",
		"incendiary grenades",
		"land mine, anti-materiel",
		"land mine, anti-personel",
		"plastic explosives",
		"slow fuse",
		"teargas grenades"
		]);
};

metalTables.wastelandWeapon = function () {
	return dice.pick([
		"thundersticks",
		"javelins",
		"molotovs",
		"crossbow",
		"mini-crossbow",
		"electric jezail",
		"musket",
		"blunderbus",
		"zip gun",
		"machete"
		]);
};


metalTables.startingInstrument = function () {
	return dice.pick(["mic stand", "guitar", "bass"]);
};

metalTables.instrument = function () {
	return dice.pick(["mic stand", "guitar", "bass", "upright bass",
		"keyboard", "keytar", "snare drum", "bass drum", "cymbal"]);
};

metalTables.weapon = function () {
	var roll = dice.d6();
	if (roll <= 3) {
		return metalTables.basicWeapon(); 
	} else if (roll <= 4) {
		return metalTables.heavyWeapon();
	} else if (roll <= 5) {
		return metalTables.mechanicalWeapon();
	} else {
		return metalTables.instrument();
	}
};

metalTables.basicArmor = function () {
	return dice.pick([
		"road-sign shield (+2 def)",
		"trash can shield (+2 def)",

		"kutte (no armor, AC 10)",

		"steel-boned corset (light, AC 12)",
		"leather vest (light, AC 12)",
		"leather jacket (light, AC 12)",
		"leopard-lined leather jacket (light, AC 12)",
		"leather duster (light, AC 12)",

		"leather pants (light, AC 12)",
		"leather chaps (light, AC 12)",
		"leather dress (light, AC 12)",
		"leather skirt/kilt (light, AC 12)",

		"spiked motorcycle helmet (+1 def)",
		"horned viking helmet (+1 def)",
		"welding mask (+1 def)",
		"army helmet (+1 def)",

		"battle vest (medium, AC 14)",
		"spiked leather jacket (medium, AC 14)",
		"chain mail (medium, AC 14)",
		"tire armor (medium, AC 14)",
		"metal-plated duster (medium, AC 14)",

		"scrap-metal riot suit (heavy, AC 17",
		]);
};

metalTables.legends = function () {
	return dice.pick([
		"KISS armor (heavy)",
		"Armor of Judas (medium)",
		"fully-patcher Thrasher kutte (light)",
		"Bumblebee (Charvel electric guitar)",
		"Cherry Sunburst 79 Dean M",
		"The Red Rocker (Sammy Hagar's Yamaha AES620 SH)",
		"The Frankenstrat",
		"The Bass of Doom (Fender Jazz Bass, used by Jaco Pastorius)",
		"Eye of Horus (custom bass guitar made by Jens Ritter for Phil Lesh)",
		"The Pick of Destiny"
		]);
};

metalTables.accessories = function () {
	return dice.pick([
		"lucky lighter (+1 to saves)",
		"lucky dog tags (+1 to saves)",
		"pentacle necklace (+1 to saves)",
		"reversed pentacle necklace (+1 to saves)",
		"Iron Cross (may turn pop)",
		"silver cigarette case (with cigs and lighter)",
		"hip Flask (1 dose of healing)",
		"cowboy boots",
		"engineer boots",
		"combat boots",
		"bitch boots",
		"sweet shades",
		"cowboy hat",
		"tophat",
		"spiked belt",
		"bullet belt",
		"bottle-cap belt",
		"spiked codpiece",
		"white wedding dress",
		"long black veil",
		"leopard print dress",
		"leopard print silk scarf",
		"mechanics coveralls",
		"bandana",
		"silver chain necklace",
		"silver chain bracelet",
		"dog collar",
		"stage pass",
		]);
};

metalTables.tradeGoods = function () {
	return dice.pick([
		"lipstick",
		"corpse paint",
		"hairspray",
		"industrial-strength hair gel",
		"cigs (case, w/cheap bic lighter)",
		"cloves (pack, w/ cheap bic lighter)",
		"cigars (box, w/ box of matches)",
		"pipe tabacco",
		"bag of bottlecaps",
		"six pack of energy drinks",
		"stack of porno mags",
		"stack of exotic porno mags",
		"vinyl records (roll alignment)",
		"batteries",
		"silver dollars",
		"family silver",
		"medical drugs",
		"pot",
		"uppers",
		"payote",
		"magic mushrooms"
		]);
};

metalTables.booze = function () {
	return dice.pick([
		"rotgut (save vs. sick, save vs. blind)",
		"Midnite Hobo (bum wine, save vs. hangover)",
		"Mad Train Wine (bum wine, save vs. hangover)",
		"T'bird (bum wine, save vs. hangover)",
		"Wild Rose (bum wine, save vs. hangover)",
		"Malort (save vs. nasea until first success)",
		"McCormick's",
		"Colt 45 (malt)",
		"Olde English 800 (malt)",
		"Mickey's (malt)",
		"King Cobra (malt)",
		"Rock & Rye",
		"Jaeger",
		"Schnapps",
		"black rum",
		"moonshine",
		"Jim (bourbon)",
		"Jack (Tennesee whiskey)",
		"Johnny Red (Scotch)",
		"Jose (tequila)",
		"Old Overcoat (rye)",
		"Wild Turkey (whiskey)",
		"Stoli",
		"Goose",
		"Pappy's",
		"Johnny Blue",
		"white lightning",
		"wasteland mezcal"
		]);
};

metalTables.supplies = function () {
	return dice.pick([
		"24-pack of beer",
		"keg",
		"white lightning",
		"feed grain",
		"sugar",
		"beef jerky",
		"dried meat",
		"pemmican",
		"MREs",
		"bag of salt",
		"jeep can of gas",
		"5-gallon gas can",
		"cooking oil",
		"propane tank",
		"fireworks", //roman candles, bottle rockets, mortars
		"box of shells (20)",
		"box of pistol bullets (20)",
		"box of rifle bullets (20)"
		]);
};

metalTables.tools = function () {
	return dice.pick([
		"50 gallon barrel",
		"acetylene torch",
		"acetylene welder",
		"air compressor",
		"air conditioner",
		"angle grinder",
		"animal catch pole",
		"anvil",
		"arc welder",
		"binoculars",
		"blasting machine",
		"bolt cutters",
		"car battery",
		"CB radio",
		"chain saw",
		"clay pigeon catapult",
		"climbing harness",
		"climbing rope",
		"diesel generator",
		"drill press",
		"engine",
		"fire blanket",
		"fire extinguisher",
		"first aid kit",
		"fishing tackle",
		"gas grill",
		"grease gun",
		"hacksaw",
		"hand pump",
		"hand truck",
		"horseshoe magnet",
		"hose",
		"hydraulic lift",
		"jack",
		"jackhammer",
		"jumper cables",
		"lathe",
		"lawn mower",
		"leaf blower",
		"leafblower",
		"lockpicks",
		"maglight",
		"mini-fridge",
		"pick-axe",
		"pipe cutter",
		"power drill",
		"power saw",
		"pump",
		"road flares",
		"rocket flares",
		"rope",
		"shop fan",
		"shop jack",
		"shop vac",
		"shovel",
		"smoke flares",
		"smoker",
		"socket set",
		"solar panel",
		"soldering iron",
		"sprinkler",
		"spotlight",
		"stretcher",
		"tattoo gun",
		"two-way radios",
		"weed wacker",
		"wheelchair",
		"winch & cable"
		]);
};

metalTables.vehcile = function () {
	switch (dice.d6()) {
		case 1: //bikes
			return dice.pick(["dirt bike","light bike","heavy bike","touring bike"]);
		case 2:
		case 3: //cars
			return dice.pick([
				"k-car",
				"family coupe",
				"sedan",
				"hatchback",
				"roadster",
				"station wagon",
				"SUV",
				"minivan",
				"panel van",
				"muscle car",
				"sports car",
				"police cruiser"
				]);	
		case 4: //light & medium trucks
			return dice.pick([
				"baby pickup",
				"light truck",
				"medium truck",
				"tow truck (hook)",
				"tow truck (flatbed)",
				"dump truck"
				]);
		case 5: //heavy trucks
			return dice.pick([
				"semi",
				"low boy",
				"gas tanker truck",
				"soda hauler",
				"beer hauler",
				"car carrier",
				"reefer truck",
				"logging truck"
				]);
		case 6: //special
			return dice.pick([
				"road equipment",
				"limo",
				"fire truck",
				"ambulance",
				"RV",
				"school bus",
				"coach bus",
				"band tour bus",
				"double-decker bus",
				"band tour van",
				"garbage truck",
				"food truck"
				]);
	}
};

// car colors: black, chrome, rust, primer
// car containers: toolbox, transfer tank, jerrycan, cooler, kegerator
// car weapons: stop strips, oil slicks, improvised support, military support, ram, bombs

metalTables.miscFinds = function () {
	return dice.pick([
		"13 silver bullets",
		"cool goat skull",
		"pack of black candles (and matches)",
		"sack of rock salt",
		"record of backmasked demon-summoning ritual",

		"citronella candles/oil",
		"weed killer",
		"soap",
		"rat poison",

		"gun scope",
		"binoculars",
		"Swiss army knife",
		"multitool",
		"flashlight",
		
		"handcuffs",
		"straight razor",
		"choke chain",
		"bullwhip",
		"gas mask",
		"straightjacket",

		"knife with stag horn handle",
		"fire blanket",
		"paracord bracelet",
		"paracord belt",
		"roll of barbed wire",

		"army blanket",
		"reflector blanket",
		"tarp",
		"sleeping bag",

		"makeup compact",
		"black lipstick",
		"red lipstick",

		"harmonica",
		"CD/cassette/8-track/record player w/ 1d3 albums",
		"tab book",
		"tour book (+1 to tech)",
		
		"bitchin coffin-shaped purse (+ roll again)",
		"bowling ball bag (1-2: bowling ball, 3-4: skull, 5-6 roll again)",
		"duffel bag (+ roll again)",
		"backpack (+ roll on trade goods)",
		"Road case (often 30W x 44L x 33H including casters + roll again)",
		"Instrument case (+ roll again for instrument)",
		"lunchbox (1: skulls 2: hello kitty 3: superhero 4: dinosaur 5: cartoon 6: iron maiden) + roll supplies",
		"big cooler (+ roll on booze)",

		"thermos of coffee",
		"canteen (50/50 booze/water)",
		"totally metal teddy bear",
		"sweet chrome skull",
		"Jolly Roger",
		"rubber duck",
		"fuzzy dice (+1 to drive & vehicle saves)",
		"black light",
		"1st Edition Players Handbook and bag of dice",
		"Dark Dungeons RPG",
		"curling iron",
		"pack of playing cards",
		"bottlerockets",
		"spray paint (1: red 2: black 3: chrome 4: automotive primer)"
		]);
};



/* Encounter Tables */

metalTables.human = function () {
	return dice.pick([
		"trad metalheads",
		"power metalheads",
		"speed metalheads",
		"thrash metalheads",
		"black metalheads",
		"death metalheads",
		"doom metalheads",
		"glam metalheads",
		"punks",
		"goths",
		"greasers",
		"rivetheads",
		"bikers",
		"pop fans",
		"juggalos",
		"band geeks"
		]);
};

metalTables.hostile = function () {
	switch (dice.d10()) {
		case 1: return dice.pick("coke-heads","speed-freaks","heroin zombies","siracha drinkers","vampires","potheads","lotus-eaters");
		case 2: return "cannibals";
		case 3: return dice.pick("ax murderer","masked machete killer","chainsaw murderer","hook handed man","back seat killer","under-car slasher");
		case 4: return "berserkers";
		case 5: return "werewolves";
		case 6: return "evil witches";
		case 7: return "wannabe satanists";
		case 8: return "fundies";
		case 9: return "redneck zombie torture family";
		default: return "bandits";
		// what kind? what are they looking for?
	}
};

metalTables.beasts = function () {
	return dice.pick([
		"goat",
		"overgoat",
		"skull-aurochs",
		"razorbach",
		"murder stag (swiggity swag)",
		"yardbird",
		"white lion",
		"white snake",
		"white snion (snake-lions)",
		"unicorn",
		"metal scorpion",
		"iron-tusk mastodon",
		"sabercat",
		"burning bufalo"
		]);
};

metalTables.undead = function () {
	return dice.pick([
		"dismembered dead",
		"shambling dead",
		"war dead",
		"ghouls",
		"ghost riders",
		"Frankensteins",
		"burning men",
		"haunt",
		"banshee",
		"smoke wraiths"
		]);
};

metalTables.mechanical = function () {
	return dice.pick([
		// "porceline dolls",
		"car crab",
		"demonic digger",
		"crazy taxy",
		"wheelers (tick choppers)",
		"junkyard dogs",
		"chopper-raptor",
		"stego-car-us",
		"tricera-crusher",
		"t-wrecker"
		]);	
};

metalTables.flyer = function () {
	return dice.pick([
		"steel shrikes",
		"thunderbirds",
		"dragons",
		"argon wasps",
		"death bat (undead)",
		"airwolf (mechanical)",
		"gargoyles (demon)"
		]);
};

metalTables.swimmer = function () {
	return dice.pick([
		"fish swarm",
		"raptor-gator",
		"rock lobster",
		"beach shark",
		"drowned dead (undead)",
		"mad jetski (mechanical)"
		]);
};

metalTables.demon = function () {
	return dice.pick([
		"cultists",
		"men-in-black",
		"suits",
		"cenobites",
		"junker demons"
		]);
};


metalTables.encounterWastes = function () {
	var roll = dice.d8();
	switch (roll) {
		case 1: return metalTables.human();
		case 2: return metalTables.undead();
		case 3: return metalTables.flyer();
		case 4: return metalTables.flyer();
		case 5: return metalTables.demon();
		case 6: return metalTables.beasts();
		case 7: return metalTables.beasts();
		default: return metalTables.mechanical();
	}
};

metalTables.encounterCheckWastes = function () {
	if (dice.chanceIn6(1)) {
		return metalTables.encounterWastes();
	} 
	return "no encounter";
};

metalTables.encounterWoods = function () {
	var roll = dice.d8();
	switch (roll) {
		case 1: return metalTables.human();
		case 2: return metalTables.undead();
		case 3: return metalTables.undead();
		case 4: return metalTables.flyer();
		case 5: return metalTables.demon();
		case 6: return metalTables.beasts();
		case 7: return metalTables.beasts();
		default: return metalTables.beasts();
	}
};

metalTables.encounterCheckWoods = function () {
	if (dice.chanceIn6(2)) {
		return metalTables.encounterWoods();
	} 
	return "no encounter";
};

metalTables.encounterMire = function () {
	var roll = dice.d8();
	switch (roll) {
		case 1: return metalTables.human();
		case 2: return metalTables.demon();
		case 3: return metalTables.undead();
		case 4: return metalTables.undead();
		case 5: return metalTables.swimmer();
		case 6: return metalTables.swimmer();
		case 7: return metalTables.beasts();
		default: return metalTables.flyer();
	}
};

metalTables.encounterCheckMire = function () {
	if (dice.chanceIn6(2)) {
		return metalTables.encounterMire();
	} 
	return "no encounter";
};

metalTables.encounterMountains = function () {
	var roll = dice.d8();
	switch (roll) {
		case 1: return metalTables.human();
		case 2: return metalTables.beasts();
		case 3: return metalTables.beasts();
		case 4: return metalTables.demon();
		case 5: return metalTables.undead();
		case 6: return metalTables.mechanical();
		case 7: return metalTables.flyer();
		default: return metalTables.flyer();
	}
};

metalTables.encounterCheckMountains = function () {
	if (dice.chanceIn6(2)) {
		return metalTables.encounterMountain();
	} 
	return "no encounter";
};

metalTables.encounterRoads = function () {
	var roll = dice.d8();
	switch (roll) {
		case 1: return metalTables.human();
		case 2: return metalTables.human();
		case 3: return metalTables.undead();
		case 4: return metalTables.demon();
		case 5: return metalTables.mechanical();
		case 6: return metalTables.mechanical();
		case 7: return metalTables.beasts();
		default: return metalTables.flyer();
	}
};

metalTables.encounterCheckRoads = function () {
	if (dice.chanceIn6(2)) {
		return metalTables.encounterWastes();
	} 
	return "no encounter";
};

metalTables.encounterRuins = function () {
	var roll = dice.d8();
	switch (roll) {
		case 1: return metalTables.human();
		case 2: return metalTables.undead();
		case 3: return metalTables.undead();
		case 4: return metalTables.demon();
		case 5: return metalTables.demon();
		case 6: return metalTables.mechanical();
		case 7: return metalTables.beasts();
		default: return metalTables.flyer();
	}
};

metalTables.encounterCheckRuins = function () {
	if (dice.chanceIn6(3)) {
		return metalTables.encounterRuins();
	} 
	return "no encounter";
};

/* Characters */
metalTables.npcAlignment = function () {
	var roll = dice.d12();
	if (roll <= 2) {
		return dice.flip() ? "Rock" : dice.pick("Classic Rock","Surf Rock","Rockabilily","Hard Rock","Alt Rock","Grunge");
	} else if (roll <= 4) {
		return dice.flip() ? "Metal" : dice.pick("Trad Metal","NWOBHM","NWOAHM","Prog Metal");
	} else if (roll <= 5) {
		return dice.flip() ? "Power Metal" : dice.pick("Folk Metal","Viking Metal","Medieval metal","Pirate Metal");
	} else if (roll <= 6) {
		return dice.pick("Speed Metal","Thrash Metal","Thrash Metal","Groove Metal","Metalcore");
	} else if (roll <= 7) {
		return dice.pick("Death Metal","Doom Metal","Black Metal","Sludge Metal","Blackened Death Metal");
	} else if (roll <= 8) {
		return dice.flip() ? "Goth" : dice.pick("Dark Wave","Post-punk","Deathrock","Gothabilly","Gothic Metal");
	} else if (roll <= 9) {
		return dice.flip() ? "Punk" : dice.pick("hXc","sXe","Crossover Thrash","Horror punk","Riotgrrl","Psychobilly");
	} else if (roll <= 10) {
		return dice.pick("Glam Metal","Hair Metal","Glam Rock","Glam Pop");
	} else {
		return dice.flip() ? "Pop" : dice.pick("Pop","Folk","Disco","New Wave","Pop Punk","Soft Rock");
	}
};

metalTables.npcGender = function () {
	var roll = dice.d100();
	if (roll <= 1) {
		return "*";
	} else if (roll <= 50) {
		return "M";
	} else {
		return "F";
	}
};

metalTables.npcBackground = function () {
	return dice.pick(
		"jock (Athletics)",
		"parkour nerd (Athletics)",
		"ninja enthusiast (Athletics, Stealth)",
		"cabbie (Drive)",
		"biker (Drive)",
		"trucker (Drive)",
		"neopagan (Hoodoo)",
		"witch (Hoodoo)",
		"satanist (Hoodoo)",
		"short-order cook (H&RM)",
		"bartender (H&RM)",
		"barista (H&RM)",
		"hotel clerk (H&RM)",
		"server (H&RM)",
		"home-brewer (H&RM)",
		"mechanic (Mechanics)",
		"welder (Mechanics)",
		"shop nerd (Mechanics)",
		"guitar player (Music)",
		"bass player (Music)",
		"drummer (Music)",
		"singer (Music)",
		"dj (Music, Tech)",
		"tow-truck driver (Drive, Scavenge)",
		"junker (Mechanics, Scavenge)",
		"pawn shop clerk (Scavenge)",
		"hunter (Stealth, Survival)",
		"survivalist (Survival)",
		"pickpocket (Stealth)",
		"burglar (Stealth)",
		"theatre nerd (Tech)",
		"geek (Tech)",
		"guitar tech (Tech)",
		"electrician (Tech)",
		"rounder (Poker)",
		"mathlete (Poker)",
		"hacker (Poker, Tech)"
		);
};

metalTables.npcSkill = function () {
	return dice.pick("athletics","drive","hoodoo","H&RM","mechanics","music","scavenge","stealth","survival","tech");
};

metalTables.npcRockBonus = function (level) {
	level = Math.floor((typeof level === "number") ? level : 1);
	if (level < 1) {
		return 0;
	}
	return Math.floor(level/2) + 3;
};

metalTables.npcGroupie = function (level) {
	var name, gender, alignment, rockBonus, hitPoints, weapon, armor,
		defense, output = "";

	level = Math.floor((typeof level === "number") ? level : 1);
	level = (level < 1 ? 1 : level);

	//randomly pick basics
	alignment = metalTables.npcAlignment();
	gender = metalTables.npcGender();
	if (gender === "*" || dice.flip()) {
		name = dice.pick(nonBinaryNicknames);
	} else if (gender === "M") {
		name = dice.pick(masculineNickNames);
	} else {
		name = dice.pick(feminineNickNames);
	}
	rockBonus = metalTables.npcRockBonus(level) - 2;
	hitPoints = (level + 1) * 4;

	//gear
	weapon = metalTables.basicWeapon();
	defense = 10 + Math.floor(level/2);

	//generate output
	output += name + " ";
	output += "(Groupie " + level + ")";
	output += "\n\t";
	output += gender + " ";
	output += alignment + " ";
	output += "Rock:+" + rockBonus + " ";
	output += "HP:" + hitPoints + " ";
	output += "Def:" + defense + " ";
	output += "\n\t";
	output += weapon;
	if (armor) {
		output += "\n\t" + armor;
	} 
	return output;
};

metalTables.npcRecker = function (level) {
	var name, gender, alignment, rockBonus, hitPoints, weapon, armor,
		defense, output = "";

	level = Math.floor((typeof level === "number") ? level : 1);
	level = (level < 1 ? 1 : level);

	//randomly pick basics
	alignment = metalTables.npcAlignment();
	gender = metalTables.npcGender();
	if (gender === "*" || dice.flip()) {
		name = dice.pick(nonBinaryNicknames);
	} else if (gender === "M") {
		name = dice.pick(masculineNickNames);
	} else {
		name = dice.pick(feminineNickNames);
	}
	rockBonus = metalTables.npcRockBonus(level);
	hitPoints = (level + 2) * 5;

	//gear
	weapon = metalTables.heavyWeapon();
	if (dice.percentChance(5*level-1)) {
		weapon = "BrÃ¼tÃ¤l " + weapon;
	}
	defense = 12 + Math.floor(level/2);
	if (dice.percentChance(5*level-1)) {
		armor = "BrÃ¼tÃ¤l " + metalTables.basicArmor();
		defense += 1;
	}

	//generate output
	output += name + " ";
	output += "('Recker " + level + ")";
	output += "\n\t";
	output += gender + " ";
	output += alignment + " ";
	output += "Rock:+" + rockBonus + " ";
	output += "HP:" + hitPoints + " ";
	output += "Def:" + defense + " ";
	output += "\n\t";
	output += weapon;
	if (armor) {
		output += "\n\t" + armor;
	} 
	return output;
};

metalTables.npcRoadie = function (level) {
	var name, gender, alignment, rockBonus, hitPoints, weapon,  armor,
		defense, output = "";

	level = Math.floor((typeof level === "number") ? level : 1);
	level = (level < 1 ? 1 : level);

	//randomly pick basics
	alignment = metalTables.npcAlignment();
	gender = metalTables.npcGender();
	if (gender === "*" || dice.flip()) {
		name = dice.pick(nonBinaryNicknames);
	} else if (gender === "M") {
		name = dice.pick(masculineNickNames);
	} else {
		name = dice.pick(feminineNickNames);
	}
	rockBonus = metalTables.npcRockBonus(level);
	hitPoints = (level + 2) * 4;

	//gear
	weapon = metalTables.mechanicalWeapon();
	if (dice.percentChance(5*level-1)) {
		weapon = "BrÃ¼tÃ¤l " + weapon;
	}
	defense = 12 + Math.floor(level/2);
	if (dice.percentChance(5*level-1)) {
		armor = "BrÃ¼tÃ¤l " + metalTables.basicArmor();
		defense += 1;
	}

	//generate output
	output += name + " ";
	output += "(Roadie " + level + ")";
	output += "\n\t";
	output += gender + " ";
	output += alignment + " ";
	output += "Rock:+" + rockBonus + " ";
	output += "HP:" + hitPoints + " ";
	output += "Def:" + defense + " ";
	output += "\n\t";
	output += weapon;
	if (armor) {
		output += "\n\t" + armor;
	} 
	return output;
};

metalTables.npcRocker = function (level) {
	var name, gender, alignment, rockBonus, hitPoints, weapon, armor,
		defense, output = "";

	level = Math.floor((typeof level === "number") ? level : 1);
	level = (level < 1 ? 1 : level);

	//randomly pick basics
	alignment = metalTables.npcAlignment();
	gender = metalTables.npcGender();
	if (gender === "*" || dice.flip()) {
		name = dice.pick(nonBinaryNicknames);
	} else if (gender === "M") {
		name = dice.pick(masculineNickNames);
	} else {
		name = dice.pick(feminineNickNames);
	}
	rockBonus = metalTables.npcRockBonus(level);
	hitPoints = (level + 2) * 4;

	//gear
	weapon = metalTables.instrument();
	if (dice.percentChance(5*level-1)) {
		weapon = "BrÃ¼tÃ¤l " + weapon;
	}
	defense = 11 + Math.floor(level/2);
	if (dice.percentChance(5*level-1)) {
		armor = "BrÃ¼tÃ¤l " + metalTables.basicArmor();
		defense += 1;
	}

	//generate output
	output += name + " ";
	output += "(Rocker " + level + ")";
	output += "\n\t";
	output += gender + " ";
	output += alignment + " ";
	output += "Rock:+" + rockBonus + " ";
	output += "HP:" + hitPoints + " ";
	output += "Def:" + defense + " ";
	output += "\n\t";
	output += weapon;
	if (armor) {
		output += "\n\t" + armor;
	} 
	return output;
};


/* Map Generation */
metalTables.mapFaction = function () {
	switch (dice.d6()) {
		case 1: return "Human";
		case 2: return "Demon";
		case 3: return "Hostile";
		default: return "Abandoned";
	}
};

metalTables.mapWild = function () {
	return dice.pick([
		"airplane crash site",
		"box canyon",
		"cabin",
		"campground",
		"cave",
		"copse/clearing",
		"dude ranch",
		"drug farm",
		"drug lab",
		"dry Lake",
		"farm",
		"fire watch tower",
		"lake",
		"mine",
		"missile silo",
		"pass/road",
		"quarry",
		"ranch",
		"ranger station",
		"rock formation",
		"sinkhole",
		"waterfall/dam",
		"special"
		]);
};

metalTables.mapRoad = function() {
	return dice.pick([
		"airfield",
		"bridge/overpass/crossroads",
		"car wash",
		"caravan",
		"c-store",
		"church",
		"crash pileup",
		"diner",
		"drive-in",
		"electrical substation",
		"farm",
		"fast food",
		"fireworks stand",
		"feed store",
		"flea market",
		"garbage dump",
		"gas station",
		"graveyard",
		"gun range",
		"house",
		"junkyard",
		"MC clubhouse",
		"motel",
		"oil derrick/pipeline",
		"rest area",
		"roadhouse",
		"roadside attraction",
		"sports field",
		"self-storage",
		"trailer park",
		"transport/towing company",
		"truck stop",
		"truck wreck",
		"vet",
		"special"
		]);
};

metalTables.mapTown = function() {
	return dice.pick([
		"antique store",
		"apartment",
		"bank",
		"barber/salon",
		"bar/club",
		"big box store",
		"bookstore/library",
		"brew pub",
		"bunker/fallout shelter",
		"c-store",
		"car wash",
		"car dealership",
		"cemetery",
		"church",
		"cinema/theatre",
		"clinic",
		"clothing store",
		"construction site",
		"courthouse/city hall",
		"factory/machine shop",
		"fire station",
		"fort",
		"funeral home/mortuary",
		"garage",
		"grain elevator",
		"grocer",
		"gun store",
		"hospital",
		"hotel",
		"house",
		"lumber yard",
		"National Guard armory",
		"outfitter/sporting goods",
		"park",
		"parking",
		"pawn shop",
		"playground",
		"police station",
		"public works station",
		"radio/tv station",
		"restaurant",
		"record store",
		"school",
		"warehouse",
		"special"
		]);
};

metalTables.mapNearTown = function () {
	return dice.flip() ? metalTables.mapTown() : metalTables.mapRoad();
};

metalTables.mapNearWild = function () {
	return dice.flip() ? metalTables.mapWild() : metalTables.mapRoad();
};

metalTables.mapAny = function () {
	switch (dice.d3()) {
		case 1: return metalTables.mapWild();
		case 2: return metalTables.mapTown();
		default: return metalTables.mapRoad();
	}
};

metalTables.mapSpecial = function () {
	return dice.pick([
		"coal seem fire",
		"solar power plant",
		"radio telescope",
		"prison",
		"mountain resort",
		"demolition derby",
		"military base",
		"henge cult",
		"cannibals",
		"pop concert",
		"evil pyramid (like on Powerslave)",
		"dragon's lair",
		"summer camp",
		"riverboat casino",
		"waterpark",
		"heavy metal stylites",
		]);
};

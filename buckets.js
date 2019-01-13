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

/* Declare dice object */
var wordBuckets = {
	'version':'0.1.1',
};

var wordBucketSupport = {
	'version':'0.1.1',
};

/* basic randomization helpers */
wordBucketSupport.randomIntFromInterval = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

wordBucketSupport.choose = function (list) {
	var newList;
	//if it's an array, return a random element
	if (Array.isArray(list)) {
		return list[wordBucketSupport.randomIntFromInterval(0, list.length-1)];
	} else if (typeof list === "object") {
		//if it's an object, return a random property
		newList = [];
		for (var key in list) {
  			if (list.hasOwnProperty(key)) {
    			newList[newList.length] = list[key];
  			}
		}
		if (newList.length > 0) {
			return wordBucketSupport.choose(newList);
		}
	}
	//just return the thing itself; it'll probably be stringified
	return list;
};

wordBucketSupport.replacer = function (match) {
	return wordBucketSupport.choose(wordBuckets[match.substring(1,match.length-1)]);
};

wordBucketSupport.process = function (item) {
	var pattern = /\[\w*\]/;
	if (item.match(pattern)) {
		return wordBucketSupport.process(item.replace(pattern,wordBucketSupport.replacer));
	} else {
		return item;
	}
};

wordBucketSupport.get = function (bucketName) {
	var bucket = wordBuckets[bucketName];
	var item = this.choose(bucket);
	var ret = this.process(item);
	return ret;
};


wordBuckets.testNames = [
	"Billy [testNames]",
	"Joe [testNames]",
	"Bob"
];

/* Miscelleneous */

wordBuckets.pulpCivLevel = ["Savage","Nomadic","Civilized","Enlightened","Decadent","Degenerate"];


wordBuckets.temperment = ["phlegmatic","choleric","sanguine","melancholic"];
wordBuckets.dispositionWarhammer = ["zealot","sharper","idiot"];
wordBuckets.directionCardinal = ["east","south","west","north"];
wordBuckets.season = ["spring","summer","winter","autumn"];
wordBuckets.elementClassical = ["air","earth","fire","water"];
wordBuckets.metalAncient = ["lead","tin","mercury","copper","iron","silver","gold"];
wordBuckets.vice = ["lust","gluttony","greed","sloth","wrath","envy","pride","despair"];
wordBuckets.virtue = ["chastity","temperance","charity","diligence","patience","gratitude","humility","hope"];
wordBuckets.virtueUltima = ["honesty","compassion","valor","justice","honor","sacrifice","spirituality","humility"];
wordBuckets.virtueExtended = ["benevolence","charity","determination","diligence","endurance","equanimity","fairness",
	"fidelity","foresight","gentleness","gratitude","honor","hospitality","humor","impartiality","integrity","justice",
	"loyalty","meekness","mercy","moderation","modesty","morality","obedience","perseverance","piety","prudence",
	"purity","reason","restraint","sincerity","silence","spirituality","stability","tenacity","unity","vigilance",
	"wisdom"];
wordBuckets.viceExtended = ["anger","jealousy","laziness","lust","gluttony","greed","avarice","sloth","wrath","envy",
	"pride","vanity","vainglory","luxury"];

wordBuckets.alignmentOdd = ["lawful","neutral","chaotic"];
wordBuckets.alignmentDl = ["good","neutral","evil"];
wordBuckets.alignmentNinefold = ["lawful-good","lawful-neutral","lawful-evil","neutral-good","true neutral","neutral-evil",
	"chaotic-good","chaotic-neutral","chaotic-evil"];
wordBuckets.alignmentColor = ["black","blue","green","red","white"];


wordBuckets.spellbookFormCommon = ["bound codex"];
wordBuckets.spellbookFormUnusual = ["bundle of scrolls","clay tablet","tapestry","knotted strings","stone tablets",
	"[spellbookFormRare]"];
wordBuckets.spellbookFormRare = ["talking mirror","familiar","haunted doll","figurine with magic mouth"];
wordBuckets.spellbookForm = ["[spellbookFormCommon]","[spellbookFormUnusual]"];


wordBuckets.bandNames = ["Villains by Necessity","Dinosaur Vicars","Pudding Fisting","My Chemical Lemonade",
	"Team Smoochesey","My Chemical Makeout","Eagle Eyed Tiger","Maggot Drawer","Flashback Tuxedo",
	"Stench of the Unborn","Swole Octopodes","Dirty Steve and the Thunder Chief","El Cidre"];

wordBuckets.noise = [
	"bang", "bellow", "buzz", "chanting", "chime", "chirp", "chuckle", "clank", "clash", "click", "cough", "creak", 
	"footsteps", "giggle", "gong", "grating", "groan", "grunt", "hiss", "horn", "howl", "hum", "jingle", "knock", 
	"laugh", "knock", "mumble", "murmur", "music", "pounding", "rattle", "ring", "rustle", "ring", "scrabble", 
	"scratch", "scream", "scuttle", "shuffle", "slam", "slither", "snap", "sob", "splash", "splinter", "squeak", 
	"squeal", "tap", "thud", "thump", "tinkle", "whine", "whisper", "whistle"];

wordBuckets.villageComplication = [
	"plagued by werewolves",	"harboring werewolves",
	"raided by bandits",		"harboring bandits",
	"hall or shrine has powerful relic",	"hall or shine holds dangerous bound spirit or godling",
	"guarded by the spirit of a hero buried in the shrine",		"haunted by the ghost of a murder victim or suicide",
	"tradition of cannibalizing the honored dead",	"secretly kills and eats travelers",
	"religious tradition of hospitality to travelers",	"captures and sacrifices travelers to dark gods",
	"built of non-native stone",	"built of transient material like mud or sod",
	"naturally defensive terrain element",	"undefended",
	"built on or next to clean and fruitful water",	"no convenient water source",

	"all doors face the same direction",
	"leader recently deceased",
	"openly hostile to witches/magic-users", "openly accept witches/magic-users",
	"feuding with neighboring village", "practice duel exogamy with neighboring village",
	"leader/priest is dead",	"leader/priest is a child",
	"nothing in particular - creepily so"
];

wordBuckets.relationship = [
	"works for",		"frequently employs",
	"worried about",	"worries",
	"puppet of",		"manipulating",
	"rival of",
	"jealous of",		"envious of",
	"betrayed by",		"betrayed",
	"blackmailing",		"blackmailed by",
	"assaulted by",		"has assaulted",
	"student of",		"teacher of",
	"serves",			"served by",
	"annoys",			"annoyed by",
	"schemes with",		"scheming against",
	"suspicious of",	"suspected by",
	"irritates",		"irritated by",
	"lusts after",		"is lusted after by",
	"owes favor to",	"owed a favor by",
	"ally of",			"enemy of"
];

wordBuckets.whatsInItsPocketses = [
	"d6 gold pieces",
	"3d6 silver pieces",
	"semi-precious stone",
	"odd stone inscribed with rune or symbol",
	"marital aid",
	"scalp",
	"IOU on scrap of parchment",
	"map to nearby location on scrap of parchment"
	"pet rat (50% bites, 50% diseased)",
	"key to nearby door or chest",
	"half an onion",
	"an apple",
	"hunk of stinky cheese",
	"pair of knuckle-bones",
	"flask of vile hooch",
	"holy symbol",
	"thumbscrew",
	"folding knife",
	"small pix of herbal remedy for embarrassing malady",
	"small pix of spice",
	"small pouch of salt",
];

wordBuckets.occupationMedieval = [
	"alchemist", "alewife", "archer", "armorer", "apothecary", "architect", "artist", "astrologer", "atilliator", 
	"bailiff", "balancemaker", "baker", "barber", "barker", "basketmaker", "beadle", "beekeeper", "beggar", 
	"bellfounder", "besom-maker", "blacksmith", "bleacher", "bonecarver", "bookbinder", "bottler", "butcher", "butler", 
	"bowyer", "brazier", "brewer", "bricker", "bricklayer", "broderer", "builder", "buttonmaker", "cabinetmaker", 
	"canvasser", "carder""cartographer", "cartwright", "candlemaker", "carpenter", "carter", "catchpole", "chandler", 
	"chapman", "chainmaker", "cheesemaker""cheesemonger", "clerk", "clothier", "collier", "confectioner", "cook", 
	"cooper", "coppersmith", "cordwainer", "costermonger", "cottar", "crier", "cutler", "dentist", "ditcher", "draper", 
	"drover", "drummer", "drysalter", "dyer", "eggler", "ewerer", "farrier", "fisher", "fishmonger", "fletcher", 
	"fowler", "fuller", "furrier", "gamekeeper", "gardener", "gilder", "girdler", "glovemaker", "goldsmith", 
	"gravedigger", "greengrocer", "groom", "haberdasher", "harlot", "harper", "hatmaker", "haymonger", "horner", 
	"horseleech", "illuminator", "innkeeper", "ironmonger", "ivorist", "joiner", "knacker", "knifemaker", "lampwright", 
	"lapidary", "laundress", "leadworker", "lighterman", "limner", "link boy", "locksmith", "lorimer", "lutenist", 
	"luthier", "herbalist", "janitor", "jester", "jeweler", "mason", "maid", "mailmaker", "mercer", "messenger", 
	"midwife", "miller", "miner", "miniaturist", "minstrel", "minter", "moneylender", "nailmaker", "nedeller", 
	"netmaker", "painter", "parchmenter""pastrycook", "paver", "peddler", "pewterer", "pieman", "piper", "physician", 
	"plasterer", "plumer", "poet", "porter", "potter", "poulter", "provisioner", "quarryer", "quilter", "ragpicker", 
	"raker", "reedmaker", "ropemaker", "roofer", "saddler", "salter", "sawyer", "scabbard-maker", "scribe", "scholar", 
	"scullion", "sculptor", "seamstress", "sexton", "shipwright", "shoemaker", "silversmith", "singer", "smelter", 
	"spinster", "stationer", "stonecutter", "surgeon", "sweeper", "swordsmith", "tailor", "tanner", "tassler", 
	"teamster", "threadmaker", "tinker", "tinsmith", "turner", "tutor", "vintner", "wagoner", "watchman", 
	"waterbearer", "wattler", "weaver", "wetnurse", "wheeler", "woodcarver", "woodcutter"
];

wordBuckets.courtOfficer = [
	"almoner", "chamberlain", "chancellor", "chaplain", "constable", "herald", "marshall", "page", "reeve", "steward"
];

wordBuckets.bookContents = [
	"accounts",
	"annals",
	"alchemist's notes",
	"almanac",
	"bestiary",
	"biography",
	"heraldry",
	"myths",
	"calendar"
	"catalog",
	"contracts",
	"diary",
	"dictionary",
	"sketches",
	"forgery",
	"grammar",
	"heresy",
	"history",
	"will",
	"laws",
	"letter",
	"lunatic ravings",
	"magic tricks",
	"atlas", //maps
	"memoir",
	"navigation", //nautical chart, star chart
	"novel",
	"painting",
	"poetry",
	"prayers",
	"property deed", //charters
	"recipes", //cookbook
	"trial record",
	"proclamation",
	"music", //sheet
	"spellbook",
	"armory",
	"brewing",
	"exotic flora/fauna",
	"herbalism",
	"local flora/fauna",
	"mathematics", //calculation, tables
	"medicine",
	"architecture", //masonry, carpentry, joinery
	"theology",
	"travelogue", //planar?
	"forbidden lore",
];

wordBuckets.injury = [
	"larynx damaged, speech impossible",
	"loose 1d6 teeth",
	"ear removed",
	"eye destroyed",
	"knee split, slowed",
	"fingers destroyed",
	"leg lost at ankle",
	"leg lost at knee",
	"leg lost at hip",
	"shield arm lost at wrist",
	"shield arm lost at elbow",
	"shield arm lost at shoulder",
	"weapon arm lost at wrist",
	"weapon arm lost at elbow",
	"weapon arm lost at shoulder",
	"abdominal injury, carrying capacity halved",
	"chest injury, breathing hurts, can't jog or hold breath",
	"abdominal injury, organ pierced, death in 1d6 days",
	"chest injury, lung pierced, drown in your own blood",
	"chest injury, heart pierced, death",
	"throat cut, bleeding badly",
	"vein cut, bleeding",
	"artery cut, bleeding badly",
	"skull cleaved",
	"decapitated"
];

/* Fortunes & Divination */

wordBuckets.numeralPlural = ["two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
wordBuckets.omenousThing = ["crow","vulture","owl","raven","dragon","black one","moon"];
wordBuckets.omenousThings = ["crows","vultures","owls","ravens","dragons","black ones","moons"];
wordBuckets.omenousTime = ["midnight","dawn","noon","dusk","the new moon","the full moon","the rising moon",
	"the setting moon","the setting sun","the rising sun"];
wordBuckets.omenousDate = ["midsummer","midwinter","yule","the equinox","the quarter-day","the last moon of [season]",
	"the first moon of [season]"];
wordBuckets.omenousDirection = [
	"on the [directionCardinal]-wind",
	"from the [directionCardinal]",
	"up from the earth",
	"down from the sky",
	"out of time",
	"from the stars"
];

wordBuckets.fortunetellingAppearVerb = ["appear","are revealed"];
wordBuckets.fortunetellingQualityNoun = ["weal","woe","doom","judgement","glory","fortune","curses","blessings"];
wordBuckets.fortunetellingQualityAdjective = ["wealthy","woeful","doomed","fortunate","fated","cursed","blessed"];
wordBuckets.fortunetellingPredicate = [
	"[fortunetellingQualityNoun] will come [omenousDirection]",
	"[fortunetellingQualityNoun will come [omenousDirection]",
	"[the [omenousTime] will be [fortunetellingQualityAdjective]",
	"look to [direction]",
	"look to [person]",
	"[thing] will be [fortunetellingQualityAdjective]"
	"[fortunetellingQualityNoun] is foretold",
	"[fortunetellingQualityNoun] will come to [thing]",
	"remember [virtue]",
	"beware [vice]"

];
wordBuckets.fortunetelling = [
	"When the [omenousThing] appears at [omenousTime], [fortunetellingPredicate]",
	"When the [numberPlural] [omenousThings] [fortunetellingAppearVerb], [fortunetellingPredicate]",
	"When [omenousThing] and [omenousThing] [fortunetellingAppearVerb], [fortunetellingPredicate]",
	"When [omenousThing] appears at [omenousDate], [fortunetellingPredicate]",
	"At [omenousDate], [fortunetellingPredicate]",
	"At [omenousTime] on [omenousDate], [fortunetellingPredicate]",
	"That which is [adjective] is [adjective]",
	"Those who live in [condition] desire [nounAbstract]",
	"[omenousThings] and [omenousThings] come in threes",
	"[omenousThing], [omenousThing] and [omenousThing] are a [fortunetellingQualityAdjective] threesome",
	"The [omenousThing] of the [omenousThing] will rule over the [thing] of [thing]",
	"The [omenousThing] spells doom for the [omenousThing]",
];

/* METAL */

wordBuckets.metalVerb = [
	"burn", "cry", "breathe", "dream", "pray", "scream"
];

wordBuckets.metalNoun = [
	"veins", "eternity", "beast", "ashes", "soul", "sorrow", "sword", "gods", "reign", "tears", "flames"
];

/* Dungeons & Adventure Sites */
//Dungeon vs. Castle vs. Lair?

// hideout, hall (bards/barbarians?), temple, abbey, fortified church, vault, fastness, tower, border/pass fort

wordBuckets.dungeonType = [
	"barbarian stronghold",
	"witch coven",
	"crypt",
	"desecrated temple",
	"dragon's den",
	"giant's stronghold",
	"harpy nest",
	"human stronghold",
	"laboratory",
	"mine",
	"natural cave",
	"orc stronghold",
	"prison",
	"ruined castle",
	"scorpion nest",
	"spider nest",
	"vampire haunt",
	"volcanic caves"
];

/* Plant & Herb Names */
wordBuckets.plantNamesPrefix = [
	"amber", "arrow", "autumn", "bachelor", "bare", "bear", "bear", "bee", "birth", "black", "bladder", "blue", "bog", 
	"bone", "brown", "buck", "bungle", "burr", "butter", "butterfly", "cat", "chaste", "cock", "cone", "cough", "cow", 
	"curly", "demon", "desert", "devils", "dusk", "dwarf", "elder", "elf", "eye", "fae", "father", "fairy", "fever", 
	"finger", "flea", "fools", "garden", "giant", "goat", "gold", "golden", "green", "grey", "hart", "heart", "hen", "holy", "honey", 
	"horn", "horse", "hound", "iron", "jewel", "kine", "king", "kith", "knot", "lavender", "lemon", "lion", "lung", 
	"maiden", "marsh", "merry", "milk", "monk", "moon", "mother", "mountain", "old", "passion", "penny", "pig", 
	"prickly", "priest", "purple", "queen", "royal", "rakes", "red", "rupture", "saint", "sand", "scarlet", "sea", 
	"sheep", "skull", "slip", "spear", "star", "stink", "stone", "sun", "sweat", "sweet", "torch", "trail", "twilight", 
	"walking", "wet", "white", "wild", "winter", "witch", "wolf", "woolly", "wyrm", "yellow"
];
wordBuckets.plantNamesSuffix = [
	"apple", "ball", "balm", "balsam", "bane", "bark", "beans", "beard", "berry", "bloom", "blossom", "bonnet", "bower",
	"bread", "breath", "bramble", "bright", "broom", "buds", "button", "burr", "bush", "cap", "carpet", "cauldron",
	"celery", "cherry", "claw", "clove", "cress", "crown", "daisy", "delight", "ears", "fig", "finger", "fodder", "grain",
	"grape", "grass", "green", "gum", "hair", "haw", "hazel", "head", "heather", "helmet", "herb", "hood", "ivy",
	"kettle", "leaf", "lichen", "lily", "love", "maids", "mallow", "mantle", "mint", "moss", "mustard", "myrtle", "necklace",
	"nettle", "onion", "orchid", "parsley", "parsnip", "pear", "pepper", "pine", "plum", "poppy", "purge", "radish",
	"rod", "root", "rose", "seal", "seed", "shoe", "slip", "sorrel", "suckle", "sumac", "tail", "tea", "thistle",
	"thorn", "vine", "wattle", "weed", "wood", "wort", "wrack"
];
wordBuckets.plantName = ["[plantNamesPrefix][plantNamesSuffix"];

/* Place Names */
wordBuckets.placeNamePrefix = [
	"Aelf", "Ald", "Ash", "Axe", "Barrow", "Bear", "Bee", "Black", "Blue", "Breeze", "Bryn", "Byrn", "Cant", "Caribou", 
	"Cedar", "Claw", "Cloud", "Coal", "Cold", "Copper", "Crow", "Dark", "Dawn", "Dead", "Deer", "Down", "Dusk", "Dverg",
	"Dwarf", "Eagle", "East", "Elf", "Even", "Fair", "Far", "Feast", "Fel", "Fey", "Flax", "Fog", "Forth", "Fox", 
	"Frost", "Gale", "Goat", "Gold", "Good", "Great", "Green", "Grey", "Grief", "Grim", "Gull", "Gyre", "Hale", 
	"Hammer", "Hawk", "Hay", "Heath", "Heather", "Hel", "Helm", "Hemlock", "High", "Honey", "Hoof", "Horn", "Hot", 
	"Ice", "In", "Iron", "Jam", "Ken", "Kolb", "Krak", "Light", "Long", "Lor", "Low", "Marten", "Milk", "Mist", "Moon",
	"Moose", "Moss", "Moth", "Near", "Night", "Noon", "North", "Oak", "Old", "Orca", "Out", "Owl", "Ox", "Pine", 
	"Plough", "Rabbit", "Raven", "Red", "Rime", "Root", "Rot", "Run", "Rye", "Salmon", "Salt", "Sea", "Seal", "Seed", 
	"Shade", "Sheave", "Shep", "Shield", "Sig", "Silver", "Sky", "Small", "Smoke", "South", "Spear", "Spruce", "Stan", 
	"Star", "Stone", "Storm", "Sun", "Sword", "Sæx", "Tern", "Thorn", "Tin", "Tooth", "Troll", "Up", "Urd", "Wald", 
	"Warm", "West", "Whale", "White", "Wich", "Willow", "Witch", "Woad", "Wolf", "Wood", "Wool", "Wyrm", "Yew", "Yng", 
	"Young"];

wordBuckets.placeNameCastleSuffix = ["berg","caer","castle","hall","hearth","hold","rock","tower"];
wordBuckets.placeNameCastle = ["[placeNamePrefix][placeNameCastleSuffix]"];
wordBuckets.placeNameTownSuffix = ["borough","burg","burgh","bury","don","haven","ington","ston","town","wall"];
wordBuckets.placeNameTown = ["[placeNamePrefix][placeNameTownSuffix]"];
wordBuckets.placeNameVillageSuffix = ["gate","field","holm","ley","spring","stead","sted","vale","ville","worth","wich"];
wordBuckets.placeNameVillage = ["[placeNamePrefix][placeNameVillageSuffix]"];
wordBuckets.placeNameHamletSuffix =["ald","back","croft","cote","heath","ham","ingham","thorpe","wald"];
wordBuckets.placeNameHamlet = ["[placeNamePrefix][placeNameHamletSuffix]"];
wordBuckets.placeName = [
	"[placeNamePrefix][placeNameSuffix]"
];

/* Treasures */
wordBuckets.treasureMaterial = ["copper", "bronze", "brass", "silver", "gilt", "electrum", "gold", "jeweled"];
wordBuckets.treasureForm = [
	"basin", "book", "bottle", "bowl", "box", "candle snuffer", "candlestick", "case", "casket", "coffer", "comb", "cup",
	"decanter", "dish", "ear spoon", "ewer", "flask", "fork", "horn", "hourglass", "icon", "jug", "key", "knife", "lamp",
	"mirror", "pitcher", "plate", "platter", "scroll case", "scepter", "statuette", "vase", "vial"
];
wordBuckets.treasureSimple = ["[treasureMaterial] [treasureForm]"];

/* Sword Names */
wordBuckets.swordNamePrefix = [
	"Ald", "Ash", "Barrow", "Battle", "Bear", "Bee", "Black", "Blue", "Breeze", "Cloud", "Cold", "Copper", "Crow",
	"Dark", "Day", "Dawn", "Drake", "Dread", "Dusk", "Dverg", "Dwarf", "Eagle", "Elf", "Fair", "Fel", "Fey", "Fierce",
	"Fiend", "Foe", "Frost", "Gale", "Glory", "Gold", "Good", "Grave", "Great", "Green", "Grey", "Grief", "Grim",
	"Hale", "Hawk", "Heart", "Hel"," Helm", "High", "Horn", "Ice", "Iron", "Light", "Long", "Night", "Noon", "Oak",
	"Old", "Ox", "Pale", "Raven", "Red", "Rime", "Salt", "Sea", "Shade", "Sheave", "Shield", "Silver", "Sky", "Small",
	"Smoke", "Spear", "Star", "Stone", "Storm", "Sun", "War", "Wave", "White", "Wich", "Wind", "Witch", "Wolf", "Wood",
	"Wyrm"
];
wordBuckets.swordNameTarget = ["Aelf", "Bear", "Beast", "Dragon", "Drake", "Dwarf", "Elf", "Fey", "Fiend", "Foe", 
	"Giant","Goblin", "Hel", "Man", "Orc", "Serpent", "Witch", "Wolf", "Wyrm"];
wordBuckets.swordNameKiller = ["beater","biter","cleaver","crusher","cutter","killer","slayer","slicer","splitter"];
wordBuckets.swordNameObject = ["Arm","Armor","Axe","Heart","Helm","Horn","Leg","Mail","Shield","Spear","Stone",
	"Tooth","Wood"];
wordBuckets.swordNameBreaker = ["biter","breaker","cleaver","crusher","cutter","eater","slicer","splitter"];
wordBuckets.swordNameSuffix = ["blade","brand","claw","cleaver","edge","flame","hammer","thorn","sword","sæx"];
wordBuckets.swordName = [
	"[swordNamePrefix][swordNameSuffix]",
	"[swordNameTarget][swordNameKiller]",
	"[swordNameObject][swordNameBreaker]"
];

/* Hirelings */
wordBuckets.hirelingRace = ["beastfolk","elf","dwarf","goblin","halfling","human","orc"];
wordBuckets.hirelingGender = ["male","male","male","male","male","male","male","male","male","male","enby",
	"female","female","female","female","female","female","female","female","female","female"]
wordBuckets.hirelingMelee = ["axe","mace","sword","spear"];
wordBuckets.hirelingRanged = ["longbow","crossbow","sling"];
wordBuckets.hirelingHeavy = ["greatsword","maul","greataxe","pike"];
//hireling armor?
wordBuckets.hireling = [
	"a [hirelingGender] [hirelingRace] with [hirelingMelee]",
	"a [hirelingGender] [hirelingRace] with [hirelingMelee] and shield",
	"a [hirelingGender] [hirelingRace] with [hirelingRanged] and dagger",
	"a [hirelingGender] [hirelingRace] with [hirelingRanged] and [hirelingMelee]",
	"a [hirelingGender] [hirelingRace] with [hirelingHeavy]"
];


wordBuckets.orcTribePrefix = ["Bleeding","Broken","Burning","Death","Grinning","Pale","Red","Storm","Vile"];
wordBuckets.orcTribeSuffix = ["Axe","Bone","Eye","Hand","Maw","Moon","Reaver","Rock","Rune","Skull","Tooth"];
wordBuckets.orcTribeName = ["[orcTribePrefix] [orcTribeSuffix]"];

wordBuckets.animalsESIV = ["bear","dragon","fox","hawk","moth","owl","serpent","whale","wolf"];
wordBuckets.animalViking = ["boar","cat","cow","deer","goat","horse","raven","wolf","wyrm"];
wordBuckets.animalVenery = ["hart","hind","hare","bear","boar","wolf"];

wordBuckets.lovecraftianAdjective = ["Amorphous", "Batrachian", "Charnel", "Coruscating", "Effulgent", "Eldritch",
	 "Foetid", "Fungoid", "Furtive", "Gelid", "Gibbering", "Lurking", "Noisome", "Non-Euclidean", "Spectral",
	 "Squamous", "Tenebrous", "Ululating"];

/* Heraldry */
wordBuckets.heraldicMetal = ["argent", "or"];
wordBuckets.heraldicColour = ["gules","sable","azure","vert","purpure"];
wordBuckets.heraldicFur = ["ermine", "ermines", "erminois", "pean", "vair", "counter-vair"];
wordBuckets.heraldicTincture = ["[heraldicMetal]","[heraldicColour]"];

wordBuckets.heraldicOrdinary = ["cross","pale","fess","bar","bend","bend sinister","chevron","saltire","chief"];
wordBuckets.heraldicChargeGeometric = ["excutcheon","lozenge","billet","roundel","mullet","estoile","crescent"];
wordBuckets.heraldicChargePart = ["heart","hand","arm"];
wordBuckets.heraldicAnimal = ["lion","eagle","swan","wolf","bear","horse","bull","ox","stag","fox","ram","dog",
	"martlet","peacock","cock","phoenix","raven", "sea lion","sea horse","dolphin","serpent","dragon","wyvern","wyrm",
	"salamander","bee","ant","sphinx","griffin","unicorn","hippogriff"];
wordBuckets.heraldicAnimalPart = ["stag head","wolf head","antlers","lion paw","eagle wing"];
wordBuckets.heraldicPlant = ["wheat","apple","oak","grapes","fleur-de-lis","rose","lotus","thistle","trefoil",
	"quatrefoil"];
wordBuckets.heraldicObject = ["key","sun","moon","star","fountain","mount","tower","portcullis","wheel","ship","anchor",
	"escallop","spur","crown","sword","mace","book","harp","anvil","hammer","axe","sickle","scales","knot"];
wordBuckets.heraldicCharge= [
	"[heraldicOrdinary]",
	"[heraldicChargeGeometric]",
	"[heraldicAnimal]",
	"[heraldicPlant]",
	"[heraldicObject]"
];
wordBuckets.heraldicChargeSimple = [
	"[heraldicMetal], [heraldicCharge] [heraldicColour]",
	"[heraldicColour], [heraldicCharge] [heraldicMetal]"
];

/* Epithets */
wordBuckets.epithetStrong = ["Bear","Bull","Iron-handed","Mighty","Powerful","Steely-Threwed","Stout","Strong"];
wordBuckets.epithetWimpy = ["Feeble","Impotent","Weak","Weakling"];
wordBuckets.epithetIntelligent = ["Astute","Brilliant","Canny","Clever","Cunning","Fox","Genius","Intelligent",
	"Learned","Mastermind","Sagacious","Wit"];
wordBuckets.epithetStupid = ["Fool","Ignorant","Half-wit","Simple","Stupid","Unlearned","Untutored","Witless"];
wordBuckets.epithetWise = ["Astute","Deep-Minded","Enlightened","Insightful","Prudent","Wise"];
wordBuckets.epithetFoolish = ["Absent-Minded","Careless","Fool","Rash"];
wordBuckets.epithetTough = ["Hale","Hardy","Ironside","Ironsided","Invincible","Stout","Tough"];
wordBuckets.epithetWeak = ["Frail","Ill","Infirm"];
wordBuckets.epithetAgile = ["Agile","Cat","Dextrous","Graceful","Nimble","Quick","Spry","Swift"];
wordBuckets.epithetClumsy = ["Careless","Graceless","Slow"];
wordBuckets.epithetCharismatic = ["Affable","Alluring","Charming","Debonaire","Eloquent","Enchanting","Silver-Tongued"];
wordBuckets.epithetOdius = ["Boring","Drab","Dull","Odius"];

wordBuckets.epithetBeautiful = ["Alluring","Beautiful","Bewitching","Desired","Enchanting","Fair","Handsome",];
wordBuckets.epithetUgly = ["Hideous","Horrid","Ill-Favored","Loathly","Loathsome","Ugly"];
wordBuckets.epithetBrave = ["Bold","Brash","Brave","Courageous","Fearless","Lionheart","Lionhearted","Rash","Valiant"];
wordBuckets.epithetCowardly = ["Coward","Fearful","Yellow",];

wordBuckets.epithetSkilled = ["Able","Master","Skilled","Sagaious"];
wordBuckets.epithetMagical = ["Astrologer","Bewitching","Cabalist","Enchanting","Magical","Uncanny"];
wordBuckets.epithetGreat = ["Absolute","Absolutist","Amazing","Ambitious","Astonishing","August","Champion","Chosen",
	"Crowned","Grand","Great","Inexorable","Invincible","Magnificent","Victorious"];
wordBuckets.epithetFallen = ["Accursed","Bad","Bastard","Damned",];
wordBuckets.epithetReligious = ["Ascetic", "Apostate","Apostle","Baptist","Blessed","Chaste","Confessor","Deacon",
	"Enlightened","Fanatic","Friar","God-loving","Heretic","Holy","Iconoclast","Martyr","Monk","Pilgrim","Pious",
	"Priest","Sacristan"];
wordBuckets.epithetViolent = ["Battler","Bloodaxe","Bloodthirsty","Bloody","Bone-breaker","Conqueror","Death-dealer",
	"Ear-collector","Executioner","Eye-gouger","Impaler","Killer","Kin-slayer","Kine-slayer","Scourge","Slayer",
	"Warlike","Wrathful"];
wordBuckets.epithetKillerSuffix = ["bane","hammer","killer","scourge","slayer"];

wordBuckets.epithetJust = ["Fair","Just","Law-giver","Lawful","Righteous"];
wordBuckets.epithetEvil = ["Blackguard","Blasphemer","Cruel","Dark","Devil","Demon","Evil","Fiend","Malefactor","Vile"];
wordBuckets.epithetVirtuous = ["Charitable","Chaste","Compassionate","Energetic","Generous","Good","Hopeful","Honest",
	"Humble","Kind","Patient","Prudent","Temperate"];
wordBuckets.epithetVicious = ["Envious","Indolent","Glutton","Greedy","Liar","Lustful","Prideful","Proud","Slothful",
	"Vainglorious","Wicked","Wrathful"];


/* Colors */
wordBuckets.colorsBasic = ["red","pink","orange","brown","yellow","green","blue","purple","white","grey","black"];
wordBucket.colorsBlack = ["bistre", "charcoal", "coal-black""corbeau", "ebony", "fuligin", "jet", "onyx", "pitch", 
	"sable", "sanguoire"];
wordBucket.colorsBlue = ["aquamarine", "azure", "blue-grey", "cerulean", "cobalt", "indigo", "iris", "glaucous", 
	"midnight", "navy", "pavonated", "perse", "periwinkle", "sapphire", "smalt", "turquoise", "ultramarine", "zaffre"];
wordBucket.colorsBrown = ["amber", "beige", "bistre", "bronze", "buff", "burnet", "castory", "chestnut", "chocolate", 
	"coffee", "copper", "cordovan", "ecru", "fawn", "fulvous", "khaki", "liver", "mahogany", "russet", "rust", "sepia", 
	"sienna", "tan", "taupe", "tawny", "umber"];
wordBucket.colorsGreen = ["bottle green", "caesious", "celadon", "chartreuse", "corbeau", "emerald", "feldrau", "jade", 
	"jasper", "lime", "malchite", "mint green", "moss green", "myrtle", "olive", "sea green", "teal", "verdigris", 
	"viridian"];
wordBucket.colorsGrey = ["ashen", "charcoal", "cesious", "cinerous", "columbine", "glaucous", "gridelin", "grizzled", 
	"perse", "silver", "slate", "taupe"];
wordBucket.colorsOrange = ["amber", "bittersweet", "bronze", "cinnabar", "copper", "coral", "gamboge", "jacinthe", 
	"sinople", "topaz", "umber", "vermilion"];
wordBucket.colorsRed = ["alizarin", "amaranth", "auburn", "brick", "burgandy", "carmine", "carnelian", "cerise", 
	"cinnabar", "claret", "coquelicot", "coral", "crimson", "damask", "kermes", "oxblood", "puce", "rose", "ruby", 
	"rust", "sanguine", "scarlet", "vermilion"];
wordBucket.colorsViolet = ["amaranth", "amethyst", "aubergine", "cerise", "claret", "gridelin", "heliotrope", 
	"lavender", "lilac", "magenta", "mauve", "mulberry", "murex", "porphyrous", "purple", "rose", "thistle", "violet"];
wordBucket.colorsWeird = ["actinic", "apocyan", "cosmogone", "dolm", "gant", "irrigo", "jale", "octarine", "peligin", 
	"smaudre", "ulfire", "violant", "viric"];
wordBucket.colorsWhite = ["beige", "bone", "cream", "eggshell", "ivory", "linen", "magnolia", "smoke", "snow"];
wordBucket.colorsYellow = ["amber", "buff", "chartreuse", "citrine", "ecru", "fulvous", "gold", "khaki", "peridot", 
	"primrose", "saffron", "straw", "sulphureous", "topaz", "xanthic"];
wordBuckets.colorsExtended = [
	"[colorsBasic]",
	"[colorsBlack]",
	"[colorsBlue]",
	"[colorsBrown",
	"[colorsGreen]",
	"[colorsGrey]",
	"[colorsOrange]",
	"[colorsRed]",
	"[colorsViolet]",
	"[colorsWhite]",
	"[colorsYellow]"
];

/* Documents and Passages */

wordBuckets.charter = [
	"In the name of [religion], I [name], grant to you, [name], [placename], with all its [improvements] and [improvements], and in the place they call [placename]. Whatever lies within its boundaries we give to you in all integrity. If any person should come against this same donation so as to disrupt it, let them find perpetual [malady], and let this gift remain as before firm and stable and for all time."
];
wordBuckets.documentIOU = [
	"IOU "
];
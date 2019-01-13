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

var feminineNickNames = [
	"A-Lotta",
	"Acid",
	"Action Girl",
	"Ada Bloodlace",
	"Adamant Eve",
	"Addie Kedavra",
	"Adora Beetle",
	"Aeon Fucks",
	"Agatha Frisky",
	"Agressica",
	"Agrodite",
	"Ali Cat",
	"Alison Chains",
	"Alley Banger",
	"Altercation",
	"Amanda Hug & Kick",
	"Amandageddon",
	"Amazon",
	"Amber",
	"Amelia Blackheart",
	"Amilla the Hun",
	"Anais Sin",
	"Anarchick",
	"Andrea the Giant",
	"Ann Archy",
	"Anna Sassin",
	"Anne Spank",
	"Aretha Spankin",
	"Arsenic Annie",
	"Audrey Heartburn",
	"Aunty Agony",
	"Ayn Rend",
	"B-52",
	"Bad Penny",
	"Bandersnatch",
	"Beeratrix",
	"Beracuda ",
	"Bettie Blackeye",
	"Bettie Cage",
	"Black no. 1",
	"Bleech",
	"Bombinatrix",
	"Bombshell",
	"Bossy Bossy",
	"Buffy",
	"Cadni Razors",
	"Calamity Jade",
	"Callous Alice",
	"Carly Chaos",
	"Carnage Queen",
	"Catherine the Irate",
	"Cecelia B. Demented",
	"Cemetary Jane",
	"Chainsaw Chelsea",
	"Chastity",
	"Cherry",
	"Chop Suzzy",
	"Cowgirl",
	"Cruella",
	"Crystal Steph",
	"Cupcakes",
	"Curvette",
	"Czarrina ",
	"Dakota",
	"Damiana Devilhorns",
	"Damnit Janet",
	"Darling Nikki",
	"Das Bitch",
	"Dawn Corleone",
	"Dead Prudence",
	"DeeDee The De-Virginator",
	"Delilah Dread",
	"Delish",
	"Delta Tango",
	"Demolition Darcy",
	"Depeche Maud",
	"Devil Mae Clare",
	"Dita Von Squeeze",
	"Diva Negativa",
	"Dixie Diesel",
	"Donna Skatrix",
	"Doris Daytripper",
	"Double-D",
	"Edith Headlock",
	"Ellen the Viking",
	"Envy McAdams",
	"Erzebet",
	"Fairuza Hulk",
	"Fast Lane Jane",
	"Fay Rage",
	"Felon Ripley",
	"Felony O'Leary",
	"Forna Kate",
	"Frau Nein",
	"Genghis Connie",
	"Gillotine Grace",
	"Ginger",
	"The Glamazon",
	"Glinda Gams",
	"Glitterella",
	"GoGo",
	"Grace Lightning",
	"Greta Goodnight",
	"Harely Hemlock",
	"Harlequin",
	"Helen Killer",
	"Helena Destroy",
	"Hella Louise",
	"Hellcat",
	"Hellvira",
	"Heroin Monroe",
	"Hester Sin",
	"Hips McFee",
	"Hope",
	"Hot Lips",
	"Inkerbelle",
	"Iona Switchblade",
	"Ivy",
	"Jacks",
	"Jaclyn The Assassin",
	"Jazz",
	"Jenny Chaos",
	"Jenny Jukebox",
	"Jess the Ripper",
	"Jezebel",
	"Joan of Aargh",
	"Josie",
	"Judith",
	"Judy Gloom",
	"Kate Mosh",
	"Kelly Cut-Throat",
	"Kennedy",
	"KiKi Ka-Boom",
	"Kinkerbell",
	"Kitty Crowbar",
	"Lasher Lil",
	"Leia Orgasma",
	"Lethal Lexi",
	"Letty Machete",
	"Lilith",
	"Lita",
	"Liza Pirelli",
	"Lizzy",
	"Loosey",
	"Lucretia ",
	"Magenta ",
	"Maggie Mayhem",
	"Malaria Jane",
	"Malevolent Mara ",
	"Malice",
	"Mallory Knocks",
	"Manic Mandy",
	"Marcie",
	"Margarita",
	"Mary Jane Mustang",
	"Mary Loo Rotten",
	"Mary Mosh",
	"Medusa",
	"Mercy",
	"Mia Mauler",
	"Misery",
	"Miss Fortune",
	"Miss Hiplash",
	"Miss Melee",
	"Miss Vicious",
	"Molly Mohawk",
	"Morticia Mynx",
	"Moxie",
	"Ms. Scarlet",
	"Mustang Sally",
	"Nancy Noir",
	"Nanny Nightmare",
	"Naomi Knuckles",
	"Napalm Sally",
	"Nasty Nikki Nightstick",
	"Necro Nympho",
	"Nightshade",
	"Nurse Edna",
	"Nyx",
	"Painbow Brite",
	"Penny Lane",
	"Poison Allie",
	"Polly Pistons",
	"Prudence",
	"Public Emily",
	"Punchin' Judy",
	"Rachel Rage",
	"Ramona",
	"Rat Girl",
	"Raven",
	"Razz",
	"Rhoda Chief",
	"Right Hook Brooke",
	"Rizzy",
	"Rosie the Regulator",
	"Roxy",
	"Ruby",
	"Sacralicious Sabrina",
	"Sadie Istic",
	"Sally Sawed-Off",
	"Sandra Bullet",
	"Sapphire",
	"Saracuda",
	"Siren",
	"Skullie",
	"Slaps",
	"Snarky Brewster",
	"Splitz",
	"Spooky",
	"Stiletto Siren",
	"Stoli Stacy",
	"Storm",
	"Sue Ellen The Fellon",
	"Suzzy",
	"Sweenie Domme",
	"Sybil Unrest",
	"Tatiana the Torcher",
	"Tess Von Tease",
	"The Boom",
	"The Calico Fornicator",
	"The Screamstress",
	"Twisted Tink",
	"Ty Wire",
	"Valerie the Valkyrie",
	"Velvet",
	"Vexen",
	"Vixen",
	"Vixie",
	"Wendy Snarling",
	"Yeti Page",
	"Yvonne the Terrible",
	"Zoey Von Zoom",
	];	

masculineNickNames = [
	"Ace",
	"Action Boy",
	"Adamphetamine",
	"Arcade",
	"Archy",
	"Backwood",
	"Balsac",
	"Bam Bam",
	"Bandit",
	"Barbicide",
	"Barfly",
	"Barkin' Bobby",
	"Barney Rubble",
	"Bash Gordon",
	"Big Alpaca",
	"Big Wheel",
	"Bloody Bill",
	"Bors",
	"Boss Hogg",
	"Brick",
	"Brokeback",
	"Bronco",
	"Bubba",
	"Buckshot",
	"Cabbage Patch",
	"Canuk",
	"Caveman",
	"Chazz",
	"Cheddar",
	"Chef",
	"Chop-Chop",
	"Cobra Kai",
	"Cook-Cook",
	"Cookies Milkin",
	"Cottonmouth",
	"Coup the Loupe",
	"Cowboy",
	"Crash",
	"Cringer",
	"Cue-Ball",
	"Cyclops",
	"DamnYankeeAllOneWord",
	"David Awesome Explosion",
	"David Smashelhoff",
	"Deadwood",
	"Diamond Dog",
	"Dirtbeard",
	"Dodger",
	"Dogbreath",
	"Donnie Fiasco",
	"Duncan Disorderly",
	"Dutch",
	"Eddie",
	"Egon Strangler",
	"El Duderino",
	"Elwood",
	"Fafnir",
	"Fat Mike",
	"Felonious Punk",
	"Feral Daryl",
	"Freddy Good-Time",
	"Fritz",
	"Furious George",
	"Gator",
	"Goose",
	"Gutter",
	"Hacksaw",
	"Haiduke",
	"Hatchet Harry",
	"Hawkeye",
	"Hillbilly",
	"Huckleberry ",
	"Hurt Reynolds",
	"Iceberg Pete",
	"Igor the Butcher",
	"Inky",
	"Ironhorse",
	"Jackdaw",
	"Jaeger",
	"Jailbreak ",
	"Jedger",
	"Jericho",
	"Jerry Skids",
	"Jester",
	"Juke of Hurl",
	"K-Bar",
	"Keelhaul",
	"Kermit the Flogger",
	"Knuckles",
	"Larry Lights-Out",
	"Lars",
	"Lead Belly",
	"Lemmy",
	"Lex Lightspeed",
	"Lock-Stock",
	"Lucky Chucky",
	"Matt the Knife",
	"Maverick",
	"Maynard",
	"Merv the Perv",
	"Mickey Mental",
	"Mickie the Mauler",
	"Missfit Murphy",
	"Moose",
	"Mother",
	"Mountain Man",
	"Mr. Clean",
	"Mr. Knife",
	"Mr. Pink",
	"Mr. Stitches",
	"Mumbles",
	"Nasher the Smasher",
	"Nick Noxious",
	"Nighthawk",
	"Oakley",
	"Panhead",
	"Papa Roadkill",
	"Pig Pen",
	"Piston Pete",
	"Pitman",
	"Pretty Boy",
	"Prong",
	"Psychobilly",
	"Ragged Andy",
	"Ram Bam",
	"Rambler",
	"Rancid Randall",
	"Ranger Rick",
	"Red Beard",
	"Red Dawn",
	"Reverend Killjoy",
	"Reverend Love",
	"Rex",
	"Richter",
	"Rigger Morris",
	"Riley Coyote",
	"Rocky",
	"Sarge",
	"Screwball",
	"Sicko Dan",
	"Skippy",
	"Slutman",
	"Snotface",
	"Soap",
	"Space Monkey",
	"Speedy Todd",
	"Stick Shift",
	"Swiss Army Mike",
	"T-Bone",
	"Tater",
	"Teddy",
	"The Cleaner",
	"The Fett",
	"The Hammer",
	"The Head",
	"The Rev",
	"The Rhino",
	"The Sauce",
	"The Swede",
	"The Todd",
	"The Walrus",
	"Thorvald",
	"Tiny",
	"Two-Bit",
	"Two-Stroke",
	"Upchuck",
	"Vicodan",
	"Victor Vintage",
	"Weird Ed",
	"Wheely Dan",
	"Whiskey Jack",
	"Yngwie",
	"Zapho",
	"Zebro",
	"Ziggy"
	];

var nonBinaryNicknames = [
	"10-Speed",
	"12-Guage",
	"12-Step",
	"2-Way",
	"3-Way",
	"3rd-Degree",
	"4-Alarm",
	"5-Spot",
	"6-Shot",
	"60-Grit",
	"7/11",
	"8-Ball",
	"9-Ball",
	"A-B-O",
	"Adam Rant",
	"Adderoller",
	"After Party",
	"Agro",
	"AK",
	"Alcatraz",
	"Allspark",
	"Alpaca",
	"Amaretto ",
	"Amsterdam",
	"Anaconda",
	"Angel",
	"Anger Management",
	"Anytime",
	"Apex",
	"Applejacked",
	"Arm & Hammer",
	"Assbutt",
	"Atari",
	"Aviator",
	"Axel",
	"B-Side",
	"Babyface",
	"Backstabber",
	"Backwash",
	"Bambi Killer",
	"Bandit",
	"Bang Bang",
	"Barretta",
	"Bayou",
	"Bear Claw",
	"Beaver",
	"Berlin",
	"Bitchface",
	"Biter",
	"Bitter",
	"BJ",
	"Blackout",
	"Blaze",
	"Blow-Up",
	"Blunt",
	"Body Bag",
	"Boo Boo Loo",
	"Boomstick",
	"Bootlicker",
	"Bucks",
	"Buffalo ",
	"Burnout",
	"Butch",
	"C-47",
	"Caboose",
	"Cakeface",
	"Cannonball",
	"Carjack",
	"Carnivore",
	"Chance",
	"Chelsea ",
	"Chernobyl",
	"Cheshire",
	"Choke & Stroke",
	"Chronic",
	"Cinders",
	"Cobalt",
	"Cold Shoulder",
	"Commando",
	"Connjugal",
	"Cootie Pie",
	"Crazy Train",
	"Crisco",
	"Crybaby",
	"Daisy Chain",
	"Danger Mouth",
	"Danger Zone",
	"Darby",
	"Dead Poets",
	"Decepticon",
	"Diamondback",
	"Dine n'Dash",
	"Dippin Dot",
	"DMZ",
	"Double Clutch",
	"Double Pounder",
	"Dozer",
	"DP",
	"Drive-in",
	"Drop Dead Red",
	"Dropkick",
	"Dyson",
	"Face Invader",
	"Ferocious D",
	"Fever Dog",
	"Filthy Thirds",
	"Firebug",
	"Fisto",
	"Flash Pants",
	"Freakachu",
	"Freckles",
	"Free Bird",
	"Fright Night",
	"Full-Tilt",
	"Funsize",
	"Gadget",
	"Giggles",
	"Glasgow",
	"Glitterbomb",
	"Glock Ness",
	"Goatfucker",
	"Greazy",
	"Grindhouse",
	"Grue",
	"Guilty Pleasure",
	"Gummi Bear",
	"Hellevator",
	"Hex",
	"Honor Roll",
	"Hoover",
	"Hothead",
	"Jalapeno Face",
	"Jet",
	"Jiffy Pop",
	"Joy Ride",
	"Juvie Hall",
	"Karats",
	"Kelsey Slammer",
	"Kickstand",
	"Lecter",
	"Lil-Devil",
	"Loco-Motion",
	"Low-Down",
	"Lucky Strikes",
	"Mathlete",
	"Mayhem",
	"McFisty",
	"Mercury",
	"Metal Flake",
	"Micro Machine",
	"Midnight Special",
	"Monkey",
	"Monster Mash",
	"Mopes",
	"Motor Mouse",
	"Motorboat",
	"Motormouth",
	"Mudder",
	"Mudflap",
	"Mugshot",
	"Nails",
	"Naughty",
	"Neecko",
	"Nerg",
	"Night Train",
	"Nutter-Butter",
	"Ollie Oi!",
	"Orange Crush",
	"Pack Rat",
	"Page Burner",
	"Painkiller",
	"Panda Bomb",
	"Payne",
	"Peaches",
	"Piggy",
	"Pinball",
	"Pinch",
	"Polaroid",
	"Psycho",
	"Quarantine",
	"Quicky B",
	"Rack'n'Roll",
	"Raine",
	"Red Ex",
	"Red Hots",
	"Red Rider",
	"Rhinestones",
	"Riddle",
	"Rinkrat",
	"Riot Act",
	"Ripper",
	"Rock'n'Rye",
	"Rocket",
	"Rodeo",
	"Rough Cut",
	"Rubbers",
	"Sage",
	"Schnapps",
	"Sex Machine",
	"Shark",
	"Sharkbait",
	"Sheriff",
	"Slime",
	"Smack",
	"Smash Adams",
	"Smokey",
	"Snowball",
	"Special K",
	"Speed",
	"Spit Roast",
	"Spitfire",
	"Squeal",
	"Straitjacket ",
	"Strip-Mall",
	"Sunshine",
	"Tequila Mockingbird",
	"The Baptist",
	"The Crushinator",
	"The Dismemberist",
	"The Impaler",
	"The Jolly Mean Giant",
	"The Killer Purple",
	"The Morbid Mangler",
	"The Naughty Professor",
	"The Wumpus",
	"The Zookeeper",
	"Thrill-Kill",
	"Tool Time",
	"Top Shelf",
	"Trauma Junkie",
	"Turbo",
	"Two-Tone",
	"Vegemite",
	"Vex",
	"Wambulance",
	"Waxjob",
	"Wild West",
	"Wingnut",
	"Wrexas",
	"Xanadu",
	"Zipper"
	];
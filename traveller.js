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
function World() {
	this.tech = dice.d6(1);

	var roll = dice.d6(2);
	if (roll <= 4) {
		this.starport = "A";
		this.tech += 6;
	} else if (roll <= 6) {
		this.starport = "B";
		this.tech += 4;
	} else if (roll <= 8) {
		this.starport = "C";
		this.tech += 2;
	} else if (roll <= 9) {
		this.starport = "D";
	} else if (roll <= 11) {
		this.starport = "E";
	} else {
		this.starport = "X";
		this.tech -= 4;
	}

	this.navalBase = dice.d6(2) >= 8;
	this.scoutBase = dice.d6(2) >= 7;
	this.gasGiant = dice.d6(2) <= 9;

	this.size = dice.d6(2) - 2;
	this.atmosphere = dice.d6(2) + this.size - 7;
	this.hydrography = dice.d6(2) + this.atmosphere - 7;
	this.population = dice.d6(2) - 2;
	this.government = dice.d6(2) + population - 7;
	this.law = dice.d6(2) + government - 7;

	this.tech = dice.d6(1);
	this.tech += this.size < 5 ? 1 : 0;
	this.tech += this.size < 2 ? 1 : 0;
	this.tech += this.atmosphere < 4 : 1 : 0;
	this.tech += this.atmosphere > 9 : 1 : 0;
	this.tech += this.hydrography > 8 : 1 : 0;
	this.tech += this.hydrography > 9 : 1 : 0;
	this.tech += this.population < 6 : 1 : 0;
	this.tech += this.population > 8 : 2 : 0;
	this.tech += this.population > 9 : 2 : 0;
	this.tech += this.government == 0 ? 1 : 0;
	this.tech += this.government == 5 ? 1 : 0;
	this.tech += this.government == 0xD ? -2 : 0;

	this.trade = [];
	if (this.atmosphere >= 4 && this.atmosphere <= 9
			&& this.hydrography >= 4 && this.atmosphere <= 8
			&& this.population >= 5 && this.population <= 7) {
		this.trade.push("agricultural");
	}
	if (this.atmosphere <= 3 && this.hydrography <= 3 && this.population >= 6) {
		this.trade.push("non-agricultural");
	}
	if (this.population >= 9 &&
			(this.atmosphere == 0 || this.atmosphere == 1 || this.atmosphere == 2
			|| this.atmosphere == 4 || this.atmosphere == 7 || this.atmosphere == 9)) {
		this.trade.push("industrial");
	}
	if (this.population <= 6) {
		this.trade.push("non-industrial");
	}
	if ((this.atmosphere == 6 || this.atmosphere == 8)
			&& this.population >= 6 && this.population <= 8
			&& this.government >= 4 && this.government <= 9) {
		this.trade.push("rich");
	}
	if (this.hydrography == 0xA) {
		this.trade.push("water world");
	}
	if (this.hydrography == 0 && this.atmosphere >= 2) {
		this.trade.push("desert world");
	}
	if (this.atmosphere == 0) {
		this.trade.push("vacuum world");
	}
	if (this.size == 0) {
		this.trade.push("asteroid belt");
	}
	if (this.atmosphere <= 1 && this.hydrography >= 1) {
		this.trade.push("ice-capped")
	}

};

World.prototype.descStarport = function() {
	switch (this.starport) {
		case "A": return "excellent quality, refined fuel, annual maintenance, full starship yard";
		case "B": return "good quality, refined fuel, annual maintenance, non-starship yard";
		case "C": return "routine quality, unrefined fuel, reasonable repair facilities";
		case "D": return "poor quality, unrefined fuel, no repair/shipyard facilities";
		case "E": return "frontier quality, no fuel or facilities";
		case "X": return "no starport";
	}
};

World.prototype.descSize = function() {
	switch (this.size) {
		case 0: return "asteroid belt";
		case 1: return "1600 km";
		case 2: return "3200 km / 0.16 g(Luna-like";
		case 3: return "4800 km";
		case 4: return "6400 km / 0.4 g (Mars-like)";
		case 5: return "8000 km";
		case 6: return "9600 km";
		case 7: return "11200 km / 0.9 g (Venus-like)";
		case 8: return "12800 km / 1.0 g (Earth-like)";
		case 9: return "14400 km";
		case 10: return "16000 km";
	}
};

World.prototype.descAtmosphere = function() {
	switch (this.atmosphere) {
		case 0: return "no atmosphere";
		case 1: return "trace";
		case 2: return "very thin, tainted";
		case 3: return "very thin";
		case 4: return "thin, tainted";
		case 5: return "thin";
		case 6: return "standard";
		case 7: return "standard, tainted";
		case 8: return "dense";
		case 9: return "dense, tainted";
		case 10: return "exotic";
		case 11: return "corrosive";
		case 12: return "insidious";
	}
};

World.prototype.descHydrography = function() {
	if (this.hydrography == 0) {
		return "no free standing water";
	}
	if (this.hydrography == 10) {
		return "no land masses";
	}
	return (10*this.hydrography) + "% water";
};

World.prototype.descPopulation = function() {
	if (this.population == 0) {
		return "uninhabited";
	}
	return (10^this.population) + " inhabitants";
};

World.prototype.descGovernment = function() {
	switch (this.government) {
		case 0: return "no government structure";
		case 1: return "company/corporation";
		case 2: return "participatory democracy";
		case 3: return "self-perpetuating oligarchy";
		case 4: return "representative democracy";
		case 5: return "feudal technocracy";
		case 6: return "captive government";
		case 7: return "balkanization";
		case 8: return "civil service bureaucracy";
		case 9: return "impersonal bureaucracy";
		case 10: return "charismatic dictator";
		case 11: return "non-charismatic dictator";
		case 12: return "charismatic oligarchy";
		case 13: return "religious dictatorship";
	}
};

World.prototype.descLaw = function() {
	switch (this.law) {
		case 0: return "no prohibitions";
		case 1: return "body pistols, explosives, and poison gas prohibited";
		case 2: return "portable energy weapons prohibited";
		case 3: return "fully automatic weapons prohibited";
		case 4: return "light assault weapons prohibited";
		case 5: return "personal concealable weapons prohibited";
		case 6: return "most firearms prohibited";
		case 7: return "all firearms prohibited";
		case 8: return "long blades controlled";
		case 9: return "possession of weapons in public prohibited";
		case 10: return "possession of any weapon prohibited";
	}
};

World.prototype.descTechnology = function() {
	switch (this.tech) {
		case 0: return "stone age/primitive";
		case 1: return "bronze age/iron age";
		case 2: return "early modern period";
		case 3: return "pre-industrial period";
		case 4: return "industrial era";
		case 5: return "pre-atomic era";
		case 6: return "atomic era";
		case 7: return "microchip era";
		case 8: return "pre-information era";
		case 9: return "information age";
		case 10: return "gravity age";
		case 11: return "interstellar era";
		case 12: return "interstellar era";
		case 13: return "high-imperial era";
		case 14: return "high-imperial era";
		case 15: return "imperial cutting-edge";
		case 16: return "post-human technology";
	}
};
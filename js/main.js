

function Stats(batting, hr, runs, rbi, sb, era, k, saves, wins, whip) {
	this.batting = batting;
	this.hr = hr;
	this.runs = runs;
	this.rbi = rbi;
	this.sb = sb
	this.era = era;
	this.k = k;
	this.saves = saves;
	this.wins = wins;
	this.whip = whip
	this.pitching = function() {
		return this.era + this.k + this.saves + this.wins + this.whip;
	};
	this.hitting = function() {
		return this.batting + this.hr + this.runs + this.rbi + this.sb;
	};
	this.overallScore = function() {
		return this.pitching() + this.hitting();
	};
};

// Season 11 
	
	var someCrying = new Stats(9,12,8,11,6,12,9,5,12,11);	
	var northside = new Stats(12,11,12,12,11,7,3,11,2,3);
	var hopeCliff = new Stats(10,7,6,7,5,9,12,7.5,6,4);
	var syosset = new Stats(11,10,9,10,8,2,11,7.5,6,4);
	var pitbull = new Stats(2,8.5,10,4,12,1,10,12,7,5);
	var brianwilson = new Stats(3,3,3,5,10,10,8,10,11,8);
	var wilpon = new Stats(4,6,11,9,9,5,7,9,8,2);
	var sawtooth = new Stats(6,5,7,7,4,11,2,4,5,7);
	var tsauv = new Stats(8,8.5,5,7,2,3,5,3,9,6);
	var nysox = new Stats(5,4,4,2,7,8,6,1,4,1);
	var nuggets = new Stats(7,2,2,3,3,4,4,2,3,9);
	var pinstripes = new Stats(1,1,1,1,1,6,1,6,1,12);


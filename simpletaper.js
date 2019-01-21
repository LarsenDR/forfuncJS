// Function to calculate a simple taper equation
// returning the diameter athe height of interest h.
// by David R. Larsen, October 11, 2012
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/


simpleTaper = function(h, dbh, ht, htcb, stumpR, stemR, bh)  {
	diameterCrownBase = dbh + stemR*(htcb-bh);
	crownLength = ht - htcb;
	topRate = diameterCrownBase / crownLength;
	d = 0.0;

	if( h < bh ){
		d = dbh + stumpR*(h-bh);
	}else if(( h >= bh) && (h < htcb )){
		d = dbh + stemR*(h-bh);
	}else{
		d = (ht - h) * topRate;
	}
	return d;
};


console.log("diameter =", simpleTaper(12, 16, 65, 30, -0.0713, -0.0169, 4.5));

// Function to calculate the quadratic mean diameter 
// from basal area and tree per acre
// by David R. Larsen, January 20, 2019
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/
qmd = function( ba, tpa, unittype){
    let qmd;
    if( unittype == "imperial" ){
		return Math.sqrt( (ba/tpa)/0.005454154 );
	}else if( unittype == "metric" ){
		return Math.sqrt( (ba/tpa)/0.00007854 );
	}else{
        return 0.0;
    }
	
    return( qmd );
};


console.log("qmd =", qmd(80.0, 200.0, "imperial") );
console.log("qmd =", qmd(18.3, 494.1, "metric") );
console.log("qmd =", qmd(80.0, 200.0, "cunits") );
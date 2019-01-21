// Function to calculate stand density index 
// from quadratic mean diameter and tree per acre
// by David R. Larsen, January 20, 2019
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/

// Function to calculate a quadratic mean 
sdi = function( tpa, qmd, unittype) {
	if( unittype == "imperial" ){
		return tpa * Math.pow(( qmd / 10.0 ),1.605);
	}else if( unittype == "metric" ){
		return tpa * Math.pow(( qmd / 25.4 ),1.605);
	}else{
	    return 0.0;
    }
}

console.log("sdi =", sdi(200.0, 12.3, "imperial") );
console.log("sdi =", sdi(494.1, 31.0, "metric") );
console.log("sdi =", sdi(200.0, 1.0, "cunits") );
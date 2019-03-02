// Function to calculate  cubic volume
// from small end diameter, large end diameter and log length
// by David R. Larsen, February 8, 2019
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/

cubicvolume = function(sdia, ldia, length, equationtype, unittype, sameunits) {
    let As, Al, value;
     	if( unittype == "imperial") {
		if( sameunits == true) {
			As = Math.PI * Math.pow(sdia, 2.0);
			Al = Math.PI * Math.pow(ldia, 2.0);
		} else {
			As = Math.PI / (4.0 * 144.0) * Math.pow((sdia), 2.0);
			Al = Math.PI / (4.0 * 144.0) * Math.pow((ldia), 2.0);
		}

		if( equationtype == "smailian") {
			value = length / 2.0 * (As + Al);
		} else if( equationtype == "cone") {
			value = length / 3.0 * (As + Math.sqrt(As*Al) + Al);
		} else if( equationtype == "neiloid") {
			value = length / 4.0 * (As + Math.cbrt(Math.pow(As, 2.0)*Al) + Math.cbrt(As*Math.pow(Al, 2.0)) + Al);
		}
	} else if( unittype == "metric") {
		if( sameunits == true) {
			As = Math.PI * Math.pow(sdia, 2.0);
			Al = Math.PI * Math.pow(ldia, 2.0);
		} else {
			As = Math.PI / (4.0 * 10000.0) * Math.pow((sdia), 2.0);
			Al = Math.PI / (4.0 * 10000.0) * Math.pow((ldia), 2.0);
		}

		if( equationtype == "smailian") {
			value = length / 2.0 * (As + Al);
		} else if( equationtype == "cone") {
			value = length / 3.0 * (As + Math.sqrt(As*Al) + Al);
		} else if( equationtype == "neiloid") {
			value = length / 4.0 * (As + Math.cbrt(Math.pow(As, 2.0)*Al) + Math.cbrt(As*Math.pow(Al, 2)) + Al);
		}
	}
	return value;
}

	console.log("smalian =", cubicvolume(10.0, 12.0, 16.0, "smailian", "imperial", false));
	console.log("smalian =", cubicvolume(25.0, 29.0, 5.0, "smailian", "metric", false));
	console.log("smalian =", cubicvolume(10.0, 12.0, 16.0, "smailian", "cunits", false));
	console.log("cone =", cubicvolume(10.0, 12.0, 16.0, "cone", "imperial", false));
	console.log("cone =", cubicvolume(25.0, 29.0, 5.0, "cone", "metric", false));
	console.log("cone =", cubicvolume(10.0, 12.0, 16.0, "cone", "cunits", false));
	console.log("neiloid =", cubicvolume(10.0, 12.0, 16.0, "neiloid", "imperial", false));
	console.log("neiloid =", cubicvolume(25.0, 29.0, 5.0, "neiloid", "metric", false));
	console.log("neiloid =", cubicvolume(10.0, 12.0, 16.0, "neiloid", "cunits", false));

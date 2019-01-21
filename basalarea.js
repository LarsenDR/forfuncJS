// Function to calculate the basal area per acre
// from diameter and weight
// by David R. Larsen, January 20, 2019
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/

basalarea = function(dia, wt, unittype) {
    let cst = 0.005454154;
    let ba = 0.0;
	if( unittype == "metric" ){
		cst = 0.00007856;
	};

    for (i = 0; i < dia.length; i++) {
		ba = ba + cst*dia[i]*dia[i]*wt[i];
	};
	return ba;
}


let dia = [8.0, 6.0, 8.0, 5.0, 4.0, 6.0, 7.0];
let wt = [10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0];
let wt2 = [25.0, 25.0, 25.0, 25.0, 25.0, 25.0, 25.0];
console.log("basalarea imperial =", basalarea(dia, wt, "imperial"));
console.log("basalarea metric =", basalarea(dia, wt2, "metric"));

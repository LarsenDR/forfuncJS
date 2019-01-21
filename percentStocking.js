// Function to calculate percent stocking
// from basal area  and tree per acre
// by David R. Larsen, January 20, 2019
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/


//  Percent stocking has only been worked out for imperial measurements

parameters = function(group) {
  if( group == "upland.oak" ){
     value = [-0.00507,0.01698,0.00307];
  }else if( group == "northern.red.oak" ){
     value = [0.02476,0.006272,0.00469];
  }else{
     value = [-0.00507,0.01698,0.00307];
  }
  return value;
;
}

// Function to calculate a quadratic mean
qmd = function(ba, tpa ){
	val = Math.sqrt( ((ba / tpa) / 0.005454154) );
	return val;
}

// percentStocking is a function that return the percent stocking
// using a Gingrich style tree area equation
percentStocking = function(ba, tpa, group) {
	let percent;
        dia = qmd( ba, tpa );
	amd = -0.259 + 0.973 * dia;
	b = parameters( group );
	percent = (b[0] + b[1] * amd + b[2] * Math.pow(dia, 2.0)) * tpa;
	if( percent < 0.0 ){
	    percent = 0.0;
	}
	return percent;
}

console.log("percent stocking( 55, 100, \"upland.oak\") = ", percentStocking(55.0, 100.0, "upland.oak"))
console.log("percent stocking( 100, 200, \"upland.oak\") = ", percentStocking(100.0, 200.0, "upland.oak"))
console.log("percent stocking( 50, 100, \"northern.red.oak\") = ", percentStocking(50.0, 100.0, "northern.red.oak"))
console.log("percent stocking( 100, 50, \"upland.oak\") = ", percentStocking(100.0, 50.0, "upland.oak"))
console.log("percent stocking( 50, 400, \"upland.oak\") = ", percentStocking(50.0, 400.0, "upland.oak"))
	
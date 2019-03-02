// Function to calculate Mesavage and Girard tree Volumes
// from dbh and merchantable tree height, and Girard form class
// by David R. Larsen, June 21, 2015
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/

// Function to calculate a quadratic mean
mesavage = function(dbh, mht, voltype, girard) {
	let a, b, c;
	L = mht / 16.0;
	cor = (1.0 + ((girard - 78.0) * 0.03));

	if( voltype == "Int1/4") {
		a = [-13.35212, 9.58615, 1.52968];
		b = [1.79620, -2.59995, -0.27465];
		c = [0.04482, 0.45997, -0.00961];
	} else if( voltype == "Scribner") {
		a = [-22.50365, 17.53508, -0.59242];
		b = [3.02888, -4.34381, -0.02302];
		c = [-0.01969, 0.51593, -0.02035];
	} else if( voltype == "Doyle") {
		a = [-29.37337, 41.51275, 0.55743];
		b = [2.78043, -8.77272, -0.04516];
		c = [0.04177, 0.59042, -0.01578];
	}
	v1 = (a[0] + a[1]*L + a[2]*Math.pow(L, 2));
	v2 = (b[0] + b[1]*L + b[2]*Math.pow(L, 2)) * dbh;
	v3 = (c[0] + c[1]*L + c[2]*Math.pow(L, 2)) * Math.pow(dbh, 2);
	volume = (v1 + v2 + v3) * cor;
	return volume;
};

console.log("Int 1/4 (78)=", mesavage(24.0, 40.0, "Int1/4", 78.0));
console.log("Int 1/4 (82)=", mesavage(24.0, 40.0, "Int1/4", 82.0));
console.log("Scribner (78)=", mesavage(24.0, 40.0, "Scribner", 78.0));
console.log("Scribner (82)=", mesavage(24.0, 40.0, "Scribner", 82.0));
console.log("Doyle (78)=", mesavage(24.0, 40.0, "Doyle", 78.0));
console.log("Doyle (82)=", mesavage(24.0, 40.0, "Doyle", 82.0));
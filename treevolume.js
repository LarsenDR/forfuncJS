// Function to calculate the Beers, 1964 tree volume
// from diameter at breast height and merchantable height
// by David R. Larsen, October 11, 2012
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/

treeVolume = function(dbh, mht, volumeType ){
	let volume 
	if( mht > 0.0) {
		a = (Math.pow(dbh, 2.0) * (dbh + 190.0)) / 100000.0;
		b = 1.0 / 100.0 * ((mht*(168.0-mht))/64.0 + (32.0 / mht));
		c = 475.0 + (3.0*Math.pow(mht, 2.0))/128.0;

		if( volumeType == "cords") {
			volume = a * b;
		} else if( volumeType == "cubic") {
			volume = 76.0 * a * b;
		} else if( volumeType == "cubicbark") {
			volume = 92.0 * a * b;
		} else if( volumeType == "boardfeet") {
			volume = a * b * c;
		} else {
			volume = 0.0;
		}
		return volume;
	}
	return 0.0;
}

	console.log("Cords =", treeVolume(10, 26, "cords"));
	console.log("Cubic =", treeVolume(10, 26, "cubic"));
	console.log("Cubic with bark =", treeVolume(10, 26, "cubicbark"));
	console.log("International 1/4 boardfeet =", treeVolume(10, 26, "boardfeet"));
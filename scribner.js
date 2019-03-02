// Function to calculate the Scribner Board foot volume 
// from small end diameter and log length
// by David R. Larsen, October 11, 2012
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/


scribner = function( sdia, length){
    value = ( 0.79 * Math.pow(sdia,2) - 2 * sdia - 4 ) * (length / 16);
    return value;
}

console.log( "scribner =", scribner(sdia=10,length=16));
console.log( "scribner =", scribner(sdia=28,length=16));
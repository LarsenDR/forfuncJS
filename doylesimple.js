// Function to calculate the Doyle Board foot volume 
// from small end diameter and log length
// by David R. Larsen, February 8, 2019
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/


doyle = function( sdia, length){
    value = Math.pow((( sdia - 4.0) / 4.0 ), 2) * length;
    return value;

};

console.log( "doyle =", doyle(sdia=10,length=16));
console.log( "doyle =", doyle(sdia=28,length=16));
/**
 * Function to calculate the quadratic mean from values and weights 
 * from from array data
 * by David R. Larsen, November 5, 2019
 * Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/
 * 
 *  @param {number array} data Data values.
 *  @param {number array} wt Data Value Weight.
 *  @return The Quadratic Mean Diameter data values and weights.
 *  @customfunction
 */

quadmean = function(data, wt) {
    let qmd = 0.0;
    let num = 0.0;
	
    for (i = 0; i < dia.length; i++) {
        qmd = qmd + (dia[i]*dia[i])*wt[i];
        num = num + wt[i];
    };
    let temp = Math.sqrt(qmd/num);
    return temp;
}

// node.js test functions.
// remove is using in spreadsheets.
let dia = [8.0, 6.0, 8.0, 5.0, 4.0, 6.0, 7.0];
let wt = [10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0];
let wt2 = [25.0, 25.0, 25.0, 25.0, 25.0, 25.0, 25.0];
console.log("quadmean wt = 10 =", quadmean(dia, wt, "imperial"));
console.log("quadmean wt = 25 =", quadmean(dia, wt2, "metric"));



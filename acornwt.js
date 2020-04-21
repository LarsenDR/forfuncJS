// Function to calculate mean acorn weight (in lb) from dbh and species and trees per acre
// by David R. Larsen, Copyright October 9, 2012
// Creative Commons http://creativecommons.org/licenses/by-nc/3.0/us/

acornwt = function(dbh, species) {
  let acwt = 0;
  if( (species == "black") && (dbh > 9.9) && (dbh < 36.1) ){
    acwt = -1.9065 + 0.2973 * dbh;
  }else if((species == "chestnut") && (dbh > 9.9) && (dbh < 36.1)){
    acwt = 0.0008271 * Math.pow(dbh,3) - 0.08157 * Math.pow(dbh,2) + 2.692 * dbh - 18.85;
  }else if((species = "red") && (dbh > 9.9) && (dbh < 36.1)) {
    acwt = 0.0004016*Math.pow(dbh,4) - 0.0349937*Math.pow(dbh,3) + 0.9864357*Math.pow(dbh,2) - 9.5233885*dbh + 27.32720516;
  }else if ((species = "scarlet") && (dbh > 9.9) && (dbh < 36.1)){ 
    acwt = 0.0005975*Math.pow(dbh,4) - 0.05325*Math.pow(dbh,3) + 1.651*Math.pow(dbh,2) - 19.97*dbh + 84.71;
  }else if((species = "white") && (dbh > 9.9) && (dbh < 36.1)){
    acwt = 0.0001987*Math.pow(dbh,4) - 0.02027*Math.pow(dbh,3) + 0.694*Math.pow(dbh,2) - 8.768*dbh + 37.36;
  }else{
    acwt = 0.0;
  }
  return acwt;
}

console.log("acornwt imperial =", acornwt( 14.3, "black" ) );
console.log("acornwt imperial =", acornwt( 22.6, "white" ) );
console.log("acornwt imperial =", acornwt( 18.9, "scarlet" ) );
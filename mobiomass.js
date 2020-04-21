// Function to calculate tree biomass (in lb) from dbh, total height and species 
// by David R. Larsen, Copyright April 21, 2020
//
// Equations from Goerndt, M. E., D. R. Larsen, C. D. Keating. 2014. Evaluation of 
// aboveground biomass weight and merchantable biomass weight for four hardwood 
// species in Missouri.i In the proceedings of the Central Hardwood Conference 
// March 10-12, 2014, Carbondale Illinois, USDA Forest Service GTR-NRS-P-142. 
// Pages 234-250
// Creative Commons http://creativecommons.org/licenses/by-nc/3.0/us/

mobiomass = function(dbh, mht, species) {
    let mobio;
    if( (species == "black") && (dbh > 9.9) && (dbh < 36.1) ){
      mobio = 1.67079 + 0.04796 * Math.pow(dbh,2) + 0.81549 * Math.log(Math.pow(dbh,2) * mht);
    }else if((species == "post") && (dbh > 9.9) && (dbh < 36.1)){
      mobio = -0.50714 + 0.01655 * Math.pow(dbh,2) + 0.81549 * Math.log(Math.pow(dbh,2) * mht);
    }else if((species = "hickory") && (dbh > 9.9) && (dbh < 36.1)) {
      mobio = 0.70177 + 0.05791 * Math.pow(dbh,2) + 0.60755 * Math.log(Math.pow(dbh,2) * mht);
    }else if((species = "white") && (dbh > 9.9) && (dbh < 36.1)){
      mobio = 0.61557 + 0.00373 * Math.pow(dbh,2) + 0.71159 * Math.log(Math.pow(dbh,2) * mht);
    }else{
      mobio = 0.0;
    }
    return mobio;
  }
  
  console.log("imperial =", mobiomass( 14.3, 28.3, "black" ) );
  console.log("imperial =", mobiomass( 22.6, 45.0, "white" ) );
  console.log("imperial =", mobiomass( 17.6, 20.0, "post" ) );
  console.log("imperial =", mobiomass( 18.9, 24.0, "hickory" ) );
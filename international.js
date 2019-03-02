// Function to calculate the International 1/4" Board foot volume 
// from small end diameter and log length
// by David R. Larsen, October 11, 2012
// Creative Commons,  http://creativecommons.org/licenses/by-nc/3.0/us/


int14Volume = function( sdia, length){
    if( length == 4 ){
      value = 0.22 * Math.pow( sdia, 2) - 0.71 * sdia;
    }else if( length == 8 ){
      value = 0.44 * Math.pow( sdia, 2) - 1.20 * sdia - 0.30;
    }else if( length == 12 ){;
      value = 0.66 * Math.pow( sdia, 2) - 1.47 * sdia - 0.79;
    }else if( length == 16 ){;
      value = 0.88 * Math.pow( sdia, 2) - 1.52 * sdia - 1.36;
    }else if( length == 20 ){;
      value = 1.10 * Math.pow( sdia, 2) - 1.35 * sdia - 1.90;
    }else if( length == 24 ){
      value = 1.10 * Math.pow(sdia, 2) - 1.35 * sdia - 1.90 + 0.22 * Math.pow(sdia, 2) - 0.71 * sdia;
    }else if( length == 28 ){
      value = 1.10 * Math.pow(sdia, 2) - 1.35 * sdia - 1.90 + 0.44 * Math.pow(sdia, 2) - 1.20 * sdia - 0.30;
    }else if( length == 32 ){
      value = 1.10 * Math.pow(sdia, 2) - 1.35 * sdia - 1.90 + 0.66 * Math.pow(sdia, 2) - 1.47 * sdia - 0.79;
    }else if( length == 36 ){
      value = 1.10 * Math.pow(sdia, 2) - 1.35 * sdia - 1.90 + 0.88 * Math.pow(sdia, 2) - 1.52 * sdia - 1.36;
    }else if( length == 40 ){
      value = (1.10 * Math.pow(sdia, 2) - 1.35 * sdia - 1.90) * 2;
    }
    return value;
};

console.log( "International 1/4 volume =", int14Volume(sdia=10,length=16));
console.log( "International 1/4 volume =", int14Volume(sdia=28,length=16));
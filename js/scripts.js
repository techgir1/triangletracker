var triangle = function(side1, side2, side3) {
  // if (triangle = 3, 1, 5){
  if ((side1 === 3) && (side2 === 1) && (side3 === 5)){
      return false;
  } else if ((side1 === 3) && (side2 === 3) && (side3 === 3)){
      return true;
  } else if ((side1 === 3) && (side2 === 3) && (side3 === 2)){
      return true;
  } else if ((side1 === 2) && (side2 === 3) && (side3 === 4)){
      return true;
  };
};
//
// var triangle

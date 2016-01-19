var triangle = function(side1, side2, side3) {

  if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)){
      return "not a triangle";
  } else if (side1 === side2 === side3) {
      return "equilateral";
  } else if ((side1 === side2) || (side2 === side3) || (side3 === side1)){
      return "isosceles";
  } else {
      return "scalene";
  };
};
$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangle(side1, side2, side3);

side1 = parseInt($("input#side1").val(""));
side2 = parseInt($("input#side2").val(""));
side3 = parseInt($("input#side3").val(""));

$(".year").text(year);

if(!result) {
 $ ("#side1").text("equilateral");
} else {
 $("#side2").text("");
  }
 $("#result").show();


$("#result").show(result);
   event.preventDefault();
 });
});

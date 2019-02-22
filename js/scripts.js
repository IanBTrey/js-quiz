//==== Business logic====//

$(document).ready(function() {

$("form#mumbiForm").submit(function(event){
var qN1 = $("input:radio[name=language]:checked").val();
var qN2 = $("input:radio[name=block]:checked").val();
var qN3 = $("input:radio[name=jquery]:checked").val();
var qN4 = $("input:radio[name=inline]:checked").val();
var qN5 = $("input:radio[name=github]:checked").val();
var qN6 = $("input:radio[name=type]:checked").val();

var totalScore = parseInt(qN1)+parseInt(qN2)+parseInt(qN3)+parseInt(qN4)+parseInt(qN5)+parseInt(qN6);
$("#totalScore").text("HEY THERE! THIS IS WHAT YOU SCORED: " + totalScore + " marks out of a possible 96 marks");
if (totalScore>=80 && totalScore<=100) {
  alert("passed")

}
else if (totalScore>=50 && totalScore<80) {
  alert("fairly passed")

}
else {
  alert("fail")
}

//==== User Interface ====//

$("form#mumbiForm").slideUp(1250);
$("#totalScore").show(3000);
$(".hide").show()
event.preventDefault();
});

});

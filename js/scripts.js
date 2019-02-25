$(document).ready(function() {

  $("form#mumbiForm").submit(function(event){
    var qNI = $("input:radio[name=jquery]:checked").val();
    var qNII = $("input:radio[name=js]:checked").val();
    var qNIII = $("input:radio[name=founder]:checked").val();
    var qNIV = $("input:radio[name=DOM]:checked").val();
    var qNV = $("input:radio[name=html]:checked").val();
    var qNVI = $("input:radio[name=insert]:checked").val();
    var qNVII = $("input:radio[name=script]:checked").val();
    var qNVIII = $("input:radio[name=alert]:checked").val();
    var qNIX = $("input:radio[name=create]:checked").val();
    var qNX = $("input:radio[name=programming]:checked").val();

    var totalScore = parseInt(qNI)+parseInt(qNII)+parseInt(qNIII)+parseInt(qNIV)+parseInt(qNV)+parseInt(qNVI)+parseInt(qNVII)+parseInt(
      qNVIII)+parseInt(qNIX)+parseInt(qNX);
   $("#totalScore").text("Bonjour! THIS IS WHAT YOU GET AFTER THE QUIZ!  ===>> " + totalScore + " points out of a possible 100 points");

    //==== User Interface ====//

    var percent=totalScore/100 *100;
    if(percent>=80 && percent <=100){
      alert("excellent")
    }
    else if (percent>=50 && percent <80) {
      alert("Fair...you can do better mate!")

    }
    else {
      alert("fail...you need to retake the test!!!")
    }


    $("form#mumbiForm").slideUp(700);
    $("#totalScore").show(5000);
    $(".hide").show(5000)
     event.preventDefault();


  });

});

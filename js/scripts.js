$(document).ready(function() {

  $("form#mumbiForm").submit(function(event){
     event.preventDefault();
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


    var totalScore =parseInt(qNI)+parseInt(qNII)+parseInt(qNIII)+parseInt(qNIV)+parseInt(qNV)+parseInt(qNVI)+parseInt(qNVII)+
      parseInt(qNVIII)+parseInt(qNIX)+parseInt(qNX);

   if("#totalScore").text("Bonjour! THIS IS WHAT YOU GET AFTER THE QUIZ!  ===>> " + totalScore + " points out of a possible 100 points"){
     $("#totalScore").text("select all options");
   }

    


    //==== User Interface ====//

    $("form#mumbiForm").slideUp(300);
    $("#totalScore").show(5000);

     event.preventDefault();


  });

});

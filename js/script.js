$(document).ready(function(){
  $("form").submit(function(e){
    var sideone = $("#one").val();
    var sidetwo= $("#two").val();
    var sidethree = $("#three").val();
    console.log(sideone);
    console.log(sidetwo);
    console.log(sidethree);


    if (sideone === sidetwo && sidetwo === sidethree) {
      var result = "equilateral";
      }
    else if ( (sideone === sidetwo) || (sidetwo === sidethree) || (sideone === sidethree) )  {
      var result = "isosceles";
    }
    else {var result = "scalene"}

    $("#output").text(result);
    e.preventDefault();

  });


});

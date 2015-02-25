/*global $:false */

$(function($) {

  "use strict";

  $("#topnav").load("topnav.html", function() {



    $("#car-makes").on("change", function() {
      var carMakesVal = $("#car-makes").val();

      $("#car-models").html("<option value='0'>-- Model --</option>");

      if (carMakesVal) {
        $("#car-models").prop('disabled', false);

        if (carMakesVal == "acura") {
          $("#car-models").append("<option value='ilx'>ILX</option><option value='mdx'>MDX</option>");
        } else {
          $("#car-models").append("<option value='accord'>Accord</option><option value='civic'>Civic</option>");
        }

      }

    });

    $("#car-models").on("change", function() {
      var carMakesVal = $("#car-makes").val();
      if (carMakesVal === "honda") {
        window.location = "filter.html";
      } else {
        window.location = "car-overview.html";
      }

    });

  });

  var carousel = $("#myCarousel").length;
  if (carousel) {
    $("#myCarousel").carousel({
      interval: false
    });
  }
  var count = 0;
  while (count < 3) {
    $("#thumbtoclone").clone().appendTo("#filterThumbRow");
    count++;
  }

});

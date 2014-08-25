$(document).ready(function() {

  // Segement Overview
  (function() {
    var $containers = $(".segments-overview .container");

    // Vignette hover
    $containers.hover(function(e) {
      $containers.not(this).toggleClass("hover-fade");
    });

    // Vignette click scroll to
    $containers.click(function(e) {
      var targetName = $(this).data("target");

      $('html, body').animate({
        scrollTop: $("#" + targetName).offset().top
      }, 500);
    });

  })();

});

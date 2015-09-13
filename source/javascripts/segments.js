$(document).ready(function() {

  // Segement Overview
  (function() {
    var $containers = $(".segments-overview a");

    // Vignette hover
    $containers.hover(function(e) {
      $containers.not(this).toggleClass("unselected");
    });

    // Vignette click scroll to
    $containers.click(function(e) {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: ($(e.currentTarget.hash).offset().top - $('nav.navbar-fixed-top').height())
      }, 500);
    });

  })();

});

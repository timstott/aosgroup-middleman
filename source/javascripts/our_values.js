$(document).ready(function() {

  // Segement Overview
  (function() {
    var $containers = $("#our_values .value"),
        toggle = function() {
          $containers.not(this).find("ul").slideUp();
          $(this).find("ul").slideToggle();
        };

    $containers.click(toggle);

    // Trigger initial click
    $($containers[0]).trigger('click');
  })();

});

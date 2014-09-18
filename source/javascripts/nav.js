$(document).ready(function() {

  var $nav = $("#main-menu"),
      navScrollHandler, navScrollTimeout;

  // Slide down menu
  navScrollHandler = function() {

    var currentHeight = $(document).scrollTop(),
        navHeight     = $nav.height(),
        offset        = navHeight * -1;

    if (currentHeight > navHeight + navHeight / 2) {

      if ($nav.hasClass("fixed")) { return; }

      $nav.css("margin-top", offset + "px");
      $nav.addClass("fixed");
      $nav.animate({"margin-top": ""}, 125);

    } else if (currentHeight + 10 < navHeight) {
      $nav.removeClass("fixed");
    }
  };

  $(document).scroll(function() {
    clearTimeout(navScrollTimeout);

    navScrollTimeout = setTimeout(navScrollHandler, 50);
  });

  // Scroll to the top instead of reloading the page
  $nav.find(".pure-menu-selected").on("click", function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 500);
  });

});

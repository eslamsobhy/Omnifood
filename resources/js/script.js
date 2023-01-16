$(document).ready(function () {
  // class toggling feature using waypoint to determine where to toggle!
  // for the sticky navigation!
  $(".js--features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    { offset: "140px" }
  );

  // for scrolling buttons
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-features").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--features").offset().top },
      1000
    );
  });

  // for navigation scrolling

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});

// Animations on scroll
// features
$(".js--wp-1").waypoint(
  function (direction) {
    $(".js--wp-1").addClass("animate__fadeInUp");
  },
  { offset: "50%" }
);

// mobile phone
$(".js--wp-2").waypoint(
  function (direction) {
    $(".js--wp-2").addClass("animate__slideInUp");
  },
  { offset: "50%" }
);

// cities
$(".js--wp-3").waypoint(
  function (direction) {
    $(".js--wp-3").addClass("animate__rotateInUpRight");
  },
  { offset: "50%" }
);

// testimonials
$(".js--wp-4-1").waypoint(
  function (direction) {
    $(".js--wp-4-1").addClass("animate__slideInLeft");
  },
  { offset: "50%" }
);

$(".js--wp-4-2").waypoint(
  function (direction) {
    $(".js--wp-4-2").addClass("animate__slideInUp");
  },
  { offset: "50%" }
);

$(".js--wp-4-3").waypoint(
  function (direction) {
    $(".js--wp-4-3").addClass("animate__slideInRight");
  },
  { offset: "50%" }
);

// Plans
$(".js--wp-5").waypoint(
  function (direction) {
    $(".js--wp-5").addClass("animate__pulse");
  },
  { offset: "50%" }
);

// The problem:
// - we want to toggle the class once we enter a specific section
// - we used waypoints js plugin to do so
// - once we enter the desired section (".js--features"), we will toggle the class
// - the direction parameter determines either we are scrolling up, or down
// - the object passed with the offset property makes us decide where exactly to do the toggle
// - {offset: 140px} => will toggle before entering the desired section by 140px

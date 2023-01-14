$(document).ready(function () {
  // class toggling feature using waypoint to determine where to toggle!
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
});

// The problem:
// - we want to toggle the class once we enter a specific section
// - we used waypoints js plugin to do so
// - once we enter the desired section (".js--features"), we will toggle the class
// - the direction parameter determines either we are scrolling up, or down
// - the object passed with the offset property makes us decide where exactly to do the toggle
// - {offset: 140px} => will toggle before entering the desired section by 140px

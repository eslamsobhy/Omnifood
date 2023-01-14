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

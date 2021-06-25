$("document").ready(function () {
  $(".navtoggler").on("click", function () {
    $(".togglenav").removeClass("hide"), $(".navtogglerx").removeClass("hide");
    $(".navtoggler").addClass("hide");
  });

  $(".navtogglerx").on("click", function () {
    $(".togglenav").addClass("hide"),
      $(".navtoggler").removeClass("hide"),
      $(".navtogglerx").addClass("hide");
  });
});

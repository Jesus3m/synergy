$(document).ready(function () {
  $(".filter-item").click(function (e) {
    e.preventDefault();
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".img-probe").show("1000");
    } else {
      $(".img-probe")
        .not("." + value)
        .hide("1000");
      $(".img-probe")
        .filter("." + value)
        .show("1000");
    }
  });
});

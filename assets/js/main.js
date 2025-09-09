setInterval(function () {
    $(".eventCard").each(function () {
        var endTime = new Date($(this).data("end"));
        var now = new Date();

        if (now >= endTime && !$(this).hasClass("expired")) {
            $(this).addClass("expired");
            $(this).removeAttr("href");
        }
    });
}, 1000);


$(document).ready(function() {
  $(".interestLink").attr({
    "href": "",
    "target": "_blank"
  });
  $(".interestLink").each(function(index) {
    $(this).attr("href", "https://example.com/page");
  });
});

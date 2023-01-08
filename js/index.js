$(document).ready(function (event) {
    var top_header = $(".carousel .fill");

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({
            "background-position": "center calc(50% + " + st * 0.8 + "px)",
        });
    });

    $(".backToTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});

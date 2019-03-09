for (let i = 1; i < 6; i++) {
    $("#1" + i).click(function() {
        $('html, body').animate({
            scrollTop: $("#" + i).offset().top
        }, 1000);
    });
}

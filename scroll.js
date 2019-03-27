for (let i = 1; i < 6; i++) {
    $("#1" + i).click(function() {
        $('html, body').animate({
            scrollTop: $("#" + i).offset().top
        }, 1500);
    });
}

for (let i = 0; i < 5; i++) {
    $("#2" + i).click(function() {
        $('html, body').animate({
            scrollTop: $("#" + i).offset().top
        }, 1500);
    });
}

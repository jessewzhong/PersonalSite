function overall() {
    var elem = document.getElementsByClassName("top");
    var height = elem[0].offsetHeight;
    var change1 = document.getElementById("0");
    change1.style.height = "calc(100vh - " + height + "px)";
    var change2 = document.getElementById("01");
    change2.style.height = "calc(80vh - " + height + "px)";
}

function seektop() {
    var elem = document.getElementsByClassName("top");
    var height = elem[0].offsetHeight;
    var change = document.getElementsByClassName("up");
    for (let i = 0; i < change.length; i++) {
        change[i].style.top = "calc(5vh + " + height + "px)";
    }
}

overall();
seektop();
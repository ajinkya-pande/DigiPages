function showItem(item, bool) {
    document.getElementById(item).style.visibility = "visible";
    if (bool)
        disableScroll();
}

function hideItem(item, bool) {
    document.getElementById(item).style.visibility = "hidden";
    if (bool)
        enableScroll();
}

function disableScroll() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

        // if scroll happens, set it to the previous value
        window.onscroll = function () {
            window.scrollTo(LeftScroll, TopScroll);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}

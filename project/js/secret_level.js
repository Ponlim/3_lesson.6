// Инициализация слайдера
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = false;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = 'compiled';

if (typeof revslider_showDoubleJqueryError === "undefined") {
    function revslider_showDoubleJqueryError(sliderID) {
        console.log("You have some jquery.js library include that comes after the Slider Revolution files js inclusion.");
        console.log("To fix this, you can:");
        console.log("1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on");
        console.log("2. Find the double jQuery.js inclusion and remove it");
        return "Double Included jQuery Library";
    }
}

var tpj = jQuery;

var revapi1;

if (window.RS_MODULES === undefined)
    window.RS_MODULES = {};
if (RS_MODULES.modules === undefined)
    RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
    once: RS_MODULES.modules["revslider11"] !== undefined ? RS_MODULES.modules["revslider11"].once : undefined,
    init: function() {
        window.revapi1 = window.revapi1 === undefined || window.revapi1 === null || window.revapi1.length === 0 ? document.getElementById("rev_slider_1_1") : window.revapi1;
        if (window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length == 0) {
            window.revapi1initTry = window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
            if (window.revapi1initTry < 20)
                requestAnimationFrame(function() {
                    RS_MODULES.modules["revslider11"].init()
                });
            return;
        }
        window.revapi1 = jQuery(window.revapi1);
        if (window.revapi1.revolution == undefined) {
            revslider_showDoubleJqueryError("rev_slider_1_1");
            return;
        }
        revapi1.revolutionInit({
            revapi: "revapi1",
            visibilityLevels: "1240,1024,1024,1024",
            gridwidth: "1600,1600,1600,1600",
            gridheight: "1200,1200,1200,1200",
            lazyType: "smart",
            spinner: "spinner2",
            perspectiveType: "local",
            responsiveLevels: "1240,1024,1024,1024",
            progressBar: {
                disableProgressBar: true
            },
            navigation: {
                onHoverStop: false
            },
            parallax: {
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 55, 60, 70, 80, 85, 90, 55],
                type: "scroll"
            },
            viewPort: {
                global: true,
                globalDist: "-200px",
                enable: false,
                visible_area: "20%"
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
}

if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
}
/*  Copyright 2014 gokoururi
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */

/*  Remove mascot class from element "main" if its width is <= mascotMinWidth */
function controlMascot(mascot, mascotMinWidth) {
    $(window).resize(function(event) {
        if ( $(window).width() <= mascotMinWidth && $("main").hasClass("mascot") ) {
            removeMascot();
        } else if( $(window).width() > mascotMinWidth && ! $("main").hasClass("mascot") ) {
            setMascot(mascot);
        }
    });
}

function setMascot(mascot) {
    $('main').addClass("mascot");
    $('main').css("background-image", "url(" + mascot + ")");
    $('main').removeClass("plain");
}

function removeMascot() {
    $('main').removeClass("mascot");
    $('main').css("background-image", "");
    $('main').addClass("plain");
}

function setBackground(background) {
    $('#bg').css("background-image", "url(" + background + ")");
}

$(document).ready(function(event) {
    var mascotEnable    = true;

    var mascot          = mascotPath + mascotList[Math.floor(Math.random() * mascotList.length)];
    var mascotMinWidth  = 1280;

    var background      = backgroundPath + backgroundList[Math.floor(Math.random() * backgroundList.length)];

    setBackground(background);

    if ( mascotEnable ) {
        setMascot(mascot);
        controlMascot(mascot, mascotMinWidth);
    } else { removeMascot(); }
});

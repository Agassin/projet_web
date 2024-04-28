
/*----------------------------------------------------*/
/*  Preloader
/*----------------------------------------------------*/

var handlePreloader = function () {
    var preloader = $('#preloader');
    if (preloader.length) {
        preloader.delay(100).fadeOut('slow', function () {
            $(this).remove();
        });

        // change the body overflow to auto
        $('body').css({ 'overflow': 'auto' });
    }
}

// A $( document ).ready() block.
$(document).ready(function() {
    handlePreloader();
});
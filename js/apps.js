$(function() {



// var jumboHeight = $('.jumbotron').outerHeight();
// console.log(jumboHeight);
// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('.bg').css('height', (jumboHeight) + 'px');
// }
//
// $(window).scroll(function(e){
//     parallax();
// });
//

// var progress = setInterval(function () {
//     var $bar = $('.bar');
//
//     if ($bar.width() >= 400) {
//         clearInterval(progress);
//         $('.progress').removeClass('active');
//     } else {
//         $bar.width($bar.width() + 40);
//     }
//     $bar.text($bar.width() / 4 + "%");
// }, 800);

/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj = {
    "btn_about": {
        "strokepath": [],
        "dimensions": {
            "width": 167,
            "height": 181
        }
    }
};


/*
 Setup and Paint your lazyline!
 */

 $(document).ready(function(){
 $('.btn_about').lazylinepainter(
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
}).lazylinepainter('paint');
 });








});

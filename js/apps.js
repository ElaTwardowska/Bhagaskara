$(function() {

//sticky menu

var nav = $(".menu-row");
var menu = $(".menu-content");
var top = menu.offset().top;

$(window).on("scroll", function() {
  var scrollTop = $(window).scrollTop();

  if (scrollTop > top) {
    menu.addClass("sticky");
  } else {
    menu.removeClass("sticky");
  };
});

$(window).on("resize", function() {

  if (menu.hasClass("sticky") === true) {
    top = nav.offset().top;
  } else {
    top = menu.offset().top;
  }
});


//slider

var slider = $("div.slider");
var nextBtn = $(".nextBtn");
var prevBtn = $(".prevBtn");
var teamItems = $(".team_list_item");
var list = $(".team_list");
var currentItem = 0;
var teamItemsWidth = teamItems.width();

console.log(teamItemsWidth);

  // $(".slider").width(teamItemsWidth);


nextBtn.click(function() {
  changeSlide(-1);
});
prevBtn.click(function() {
  changeSlide(1);
});

function changeSlide(direction) {

  currentItem += direction;
  if (currentItem > teamItems.length - 1) {
    currentItem = 0;
  } else if (currentItem < 0) {
    currentItem = teamItems.length - 1;
  }
  list.offset({
    left: -(currentItem * teamItemsWidth)
  });
}

//carousel

$('.carousel').carousel();

//animation

var windowWidth=$(window).width();
if (windowWidth > 1200) {

    $(window).scroll(function() {
        $('.animatedEntrance').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 700) {
              console.log('okok');
                $(this).addClass("fadeInLeft"); // slideUp, slideDown, slideLeft, slideRight, slideExpandUp, expandUp, fadeIn, expandOpen, bigEntrance, hatch
            }
        });
    });
}

if (windowWidth < 1200) {
    /////////////////////////////////////
    //  Disable Mobile Animated
    /////////////////////////////////////
    $("body").removeClass("noIE");
}

$('.noIE .animated:not(.animation-done)').waypoint(function() {
          var animation = $(this).data('animation');
          $(this).addClass('animation-done').addClass(animation);
      }, {
          triggerOnce: true,
          offset: '90%'
      });


//Responsive Photo Gallery

$('ul.first').bsPhotoGallery({
  "classes" : "col-lg-4 col-md-4 col-sm-3 col-xs-4 col-xxs-12",
  "hasModal" : true
});



//lazylinepainter

// var pathObj = {
//     "btn_about": {
//         "strokepath": [],
//         "dimensions": {
//             "width": 167,
//             "height": 181
//         }
//     }
// };
//
//
// /*
//  Setup and Paint your lazyline!
//  */
//
//  $(document).ready(function(){
//  $('.btn_about').lazylinepainter(
//  {
//     "svgData": pathObj,
//     "strokeWidth": 2,
//     "strokeColor": "#e09b99"
// }).lazylinepainter('paint');
 });

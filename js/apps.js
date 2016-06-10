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

  var windowWidth = $(window).width();
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
    "classes": "col-lg-4 col-md-4 col-sm-3 col-xs-4 col-xxs-12",
    "hasModal": true
  });

  //form

  function formValidation() {


      var form = $("#contactForm");
      var emailInput = $("#emailInput");
      var passwordInput = $("#passwordInput");
      var messageInput = $("#messageInput");
      var error = $(".error");

    form.on("submit", function(e) {


      var email = emailInput.val();
      var password = passwordInput.val();
      var message = messageInput.val();


  //     if(password.length < 5 || (email.indexOf("@") ===-1) && (email.indexOf(".")===-1 ) || message.length<10) {
  //       error.text("formularz błędnie wypełniony");
  //       e.preventDefault();
  //     }



      if (password.length > 5) {
        if ((email.search("@") !== -1) && (email.search(".") !== -1)) {
          if (message.length > 10) {
            error.text("formularz został wysłany")
          } else {
            e.preventDefault();
            error.text("wiadomosc musi byc dluzsza niz 10 znakow")
          }
        } else {
          e.preventDefault();
          error.text("email musi zawirac @ i kropke");
        }
      } else {
        e.preventDefault();
        error.text("hasło musi miec więcej niż 5 znakow")
      };

        });
      };

formValidation();

});

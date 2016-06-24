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
          top = nav.offset().top-10;
        } else {
          top = menu.offset().top-10;
        }
      });

      //scroll

      var scroll = $(".scroll");
                scroll.on("click", function(event){
                    $('html,body').animate({
                        scrollTop:$(".menu-row").offset().top-18
                    }, 600);
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
        list.animate({
          left: -(currentItem * teamItemsWidth)
        });
      }

      //carousel

      $('.carousel').carousel();

      //animation - section SKILLS

      var windowWidth = $(window).width();
      if (windowWidth > 1200) {

        $(window).scroll(function() {
          $('.animatedEntrance').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 700) {
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
        "classes": "col-lg-4 col-md-6 col-sm-6 col-xs-6 col-xxs-12",
        "hasModal": true
      });

      //portfolio choose

      function portfolio() {
        var select = $(".select");
        var all = $(".btn_all");
        var web = $(".btn_web");
        var apps = $(".btn_apps");
        var icon = $(".btn_icons");
        var portfolioItem = $(".portfolio_item");
        var appimg = $(".appimg");
        var iconimg = $(".iconimg");
        var webimg = $(".webimg");

        all.on("click", function(e) {
          portfolioItem.show(1000);
          all.addClass("selectactive");
          web.removeClass("selectactive");
          icon.removeClass("selectactive");
          apps.removeClass("selectactive");
        });
        web.on("click", function(e) {
          web.addClass("selectactive");
          all.removeClass("selectactive");
          icon.removeClass("selectactive");
          apps.removeClass("selectactive");
          appimg.hide(1000);
          iconimg.hide(1000);
          webimg.show(1000);
        });
        apps.on("click", function(e) {
            apps.addClass("selectactive");
            web.removeClass("selectactive");
            icon.removeClass("selectactive");
            all.removeClass("selectactive");
            webimg.hide(1000);
            iconimg.hide(1000);
            appimg.show(1000);

          });
        icon.on("click", function(e){
             icon.addClass("selectactive");
             web.removeClass("selectactive");
             all.removeClass("selectactive");
             apps.removeClass("selectactive");
             appimg.hide(1000);
             webimg.hide(1000);
             iconimg.show(1000);

         });

          }; portfolio();



          //form

          function formValidation() {


            var form = $("#contactForm");
            var emailInput = $("#emailInput");
            var passwordInput = $("#passwordInput");
            var messageInput = $("#messageInput");
            var error = $(".error");

            form.on("submit", function(e) {

              e.preventDefault();
            });

            var email = emailInput.val();
            var password = passwordInput.val();
            var message = messageInput.val()
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

          };

          formValidation();

        });

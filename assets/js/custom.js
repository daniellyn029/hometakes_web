/* Add custom jQuery */

var $ = jQuery.noConflict(); // For custom jQuery to work 
$(document).ready(function() {
  
  // query loader
  $('body').queryLoader2({
    barColor: "#999999",
    backgroundColor: "#ffffff",
    barHeight: 2,
    completeAnimation: "grow",
    minimumTime: 100,
    maxTime: 200,
    onComplete: function hidePreLoader() {
        $("#preloader").fadeOut();
    }
  });
  
  $('a:has(img)').css('border-bottom','none'); // no borders on image links
  $('form').addClass('forms'); // use kube forms
  $('#contact-site-form').addClass('units-row'); // responsive

  // responsive form items
  $('#contact-site-form input[type="text"], #contact-site-form input[type="email"] ').addClass('width-100'); 
  $('#contact-site-form div div:lt(2)').wrap('<div class="unit-50"></div>');
  $('.form-item-subject, .form-item-message').addClass('width-100').wrap('<div class="unit-100"></div>');
  $('input[type="submit"]').addClass('btn');
  $('input[type="submit"]:active').addClass('btn-active');
  $('.page-contact .region-content').addClass('units-row');

  $('.embedded-video .player').addClass('video-wrapper'); // responsive video

  // title icons
  $('h1:contains("Support & FAQ")').prepend('<i class="fa fa-question-circle"></i> ');
  $('h1:contains("Contact")').prepend('<i class="fa fa-envelope"></i> ');

  // mobile menu
  $('.menu-switch').click(function() {
    $('.main-menu').slideToggle();
  });
  
  // stop video when exiting fullscreen
  $('.exit-fullscreen').click(function() {
    $('.ms-slide-vcbtn').trigger('click');
  }); 

  // back button fix

  $('.main-menu a, .menu a, .social a, .create-account, .order-tour, .photolink, .videolink, .pricing-link').click(function() {
    $('#vid1 iframe, #vid2 iframe, #vid3 iframe, #vid4 iframe').detach();
    $('#vid1').append('<iframe width="800" height="450" src="//www.youtube.com/embed/_ACuzw7BaW8?rel=0&modestbranding=1&showinfo=1&enablejsapi=1&autoplay=0&html5=1" frameborder="0" allowfullscreen></iframe>');
    $('#vid2').append('<iframe width="800" height="450" src="//www.youtube.com/embed/sRJnL9PwKVc?rel=0&modestbranding=1&showinfo=1&enablejsapi=1&autoplay=0&html5=1" frameborder="0" allowfullscreen></iframe>');
    $('#vid3').append('<iframe width="800" height="450" src="//www.youtube.com/embed/46AcTcvNctw?rel=0&modestbranding=1&showinfo=1&enablejsapi=1&autoplay=0&html5=1" frameborder="0" allowfullscreen></iframe>');
    $('#vid4').append('<iframe width="800" height="450" src="//www.youtube.com/embed/8nUTBaVXEz0?rel=0&modestbranding=1&showinfo=1&enablejsapi=1&autoplay=0&html5=1" frameborder="0" allowfullscreen></iframe>');
  });


  // target mobile browsers for fullscreen apps

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    $('.photolink').click(function() {
      $('.exit-fullscreen-mobile').css({
        'display' : 'block',
        'position' : 'fixed'
      });
      $('.sliders .block-views').css({
        'position' : 'fixed',
        'top' : '0',
        'bottom' : '0',
        'width' : '100%',
        'height' : 'auto',
        'overflow' : 'auto',
        'z-index' : '99',
        'background-color' : 'black'
      }).append('<div class="info">Please rotate your device 90 degrees to view photos</div>');
      $('#viewsstyle--slideshow--block').css({
        'height' : '100%'
      });
    });

    $('.exit-fullscreen-mobile').click(function() {
      $('.info').detach();
      $(this).css({
        'display' : 'none'
      });
      $('.sliders .block-views').css({
        'position' : '',
        'top' : '',
        'bottom' : '',
        'width' : '',
        'height' : '',
        'overflow' : '',
        'z-index' : '',
        'background-color' : ''
      });
      $('#viewsstyle--slideshow--block').css({
        'height' : ''
      });
    });

    $('.videolink').click(function() {
      $(this).prop( "onclick", null );
      $('.mswrapper ').css({
        'position' : 'fixed',
        'top' : '0',
        'bottom' : '0',
        'width' : '100%',
        'height' : 'auto',
        'overflow' : 'auto',
        'z-index' : '99',
        'background-color' : 'black'
      });
      $('#masterslider').css({
        'height' : '100%'
      });
    });

    $('.exit-fullscreen').click(function() {
      $('.mswrapper ').css({
        'position' : '',
        'top' : '',
        'bottom' : '',
        'width' : '',
        'height' : '',
        'overflow' : '',
        'z-index' : '',
        'background-color' : ''
      });
      $('#masterslider').css({
        'height' : ''
      });
    });

  } // mobile devices

  // IE9 & IE10

  if( /IE9|IE10/i.test(navigator.userAgent) ) {

    ('.sliders').css({
      'display' : 'none'
    });

  } // IE9 & IE10
  
});

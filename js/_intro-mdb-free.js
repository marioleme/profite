/*!
 * Material Design for Bootstrap 4
 * Version: MDB FREE: 4.5.4
 *
 *
 * Copyright: Material Design for Bootstrap
 * https://mdbootstrap.com/
 *
 * Read the license: https://mdbootstrap.com/license/
 *
 *
 * Documentation: https://mdbootstrap.com/
 *
 * Getting started: https://mdbootstrap.com/getting-started/
 *
 * Tutorials: https://mdbootstrap.com/bootstrap-tutorial/
 *
 * Templates: https://mdbootstrap.com/templates/
 *
 * Support: https://mdbootstrap.com/forums/forum/support/
 *
 * Contact: office@mdbootstrap.com
 *
 * Atribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.js , Hammer.js
 *
 */


/*

  jquery.easing.js
  velocity.min.js
  chart.js
  wow.js
  scrolling-navbar.js
  waves.js
  forms-free.js
  enhanced-modals.js

*/
$(document).ready(function () {
  $('.js-slick').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    draggable: false,
    fade: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,

     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


  });
  

});
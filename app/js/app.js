// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
  let header= $('.header');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      header.addClass('header_fixed');
    } else { 
      header.removeClass('header_fixed');
    }
  });
});

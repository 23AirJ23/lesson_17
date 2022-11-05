$(document).ready(function () {
   $('.burger').click(function (event) {
      $('.burger,.body-columns__row').toggleClass('active');
      $('body').toggleClass('lock');
   });
});


$(document).ready(function () {
   $('.footer-column__label').click(function (event) {
      if ($('.main-footer__column').hasClass('one')) {
         $('.footer-column__label').not($(this)).removeClass('active');
         $('nav.footer-column__item').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next('nav.footer-column__item').slideToggle(300);
   });
});

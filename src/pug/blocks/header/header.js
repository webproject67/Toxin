(function ($) {
  $.fn.hamburgerClick = function () {
    function main(e) {
      e.click(function () {
        $(this).toggleClass('page-header__hamburger_active');
        $(this).siblings('.main-nav').find('.nav-link').slideToggle(300);
        $(this).siblings('.main-nav').find('.nav-reg').slideToggle(300);
        $(this).siblings('.main-nav').find('.nav-reg__name').slideToggle(300);
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };
})(jQuery);

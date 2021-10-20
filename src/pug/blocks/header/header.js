(function ($) {
  $.fn.hamburgerClick = function () {
    function main(e) {
      e.click(function () {
        $(this).toggleClass('header__hamburger_state_active');
        $(this).siblings('.header__nav').find('.header__list').slideToggle(300);
        $(this)
          .siblings('.header__nav')
          .find('.header__link_state_bordered')
          .slideToggle(300);
        $(this)
          .siblings('.header__nav')
          .find('.header__links')
          .slideToggle(300);
      });
    }
    this.each(function () {
      main($(this));
    });
    return this;
  };
})(jQuery);

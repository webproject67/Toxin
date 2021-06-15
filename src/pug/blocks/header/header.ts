const handleHamburgerClick = function (this: HTMLElement) {
  $(this).toggleClass('page-header__hamburger_active');
  $(this).siblings('.main-nav').find('.nav-link__list').slideToggle(300);
  $(this).siblings('.main-nav').find('.nav-reg__list').slideToggle(300);
  $(this).siblings('.main-nav').find('.nav-reg__name').slideToggle(300);
};

const $hamburger: JQuery<HTMLElement> = $('.js-page-header__hamburger');
$hamburger.on('click', handleHamburgerClick);

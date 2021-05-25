const handleHamburgerClick = function (this: HTMLElement) {
  $(this).toggleClass('page-header__hamburger--active')
  $(this).siblings('.main-nav').find('.nav-link__list').slideToggle(300);
  $(this).siblings('.main-nav').find('.nav-reg__list').slideToggle(300);
  $(this).siblings('.main-nav').find('.nav-reg__name').slideToggle(300);
};

$('.js-page-header__hamburger').on('click', handleHamburgerClick);
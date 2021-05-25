const handleItemClick = function (this: HTMLElement) {
  $(this).find('.nav-link__options').slideToggle(300);
};

$('.js-nav-link__item').on('click', handleItemClick);
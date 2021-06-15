const handleItemClick = function (this: HTMLElement) {
  $(this).find('.nav-link__options').slideToggle(300);
};

const $navLinkItem: JQuery<HTMLElement> = $('.js-nav-link__item');
$navLinkItem.on('click', handleItemClick);

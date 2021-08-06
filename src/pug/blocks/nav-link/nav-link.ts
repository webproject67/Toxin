const handleItemClick = function (this: HTMLElement) {
  $(this).find('.nav-link__options').slideToggle(300);
};

const $navLinkItem = $('.js-nav-link__item');
$navLinkItem.on('click', handleItemClick);

const handleDocumentClick1 = function (evt: Event) {
  if ($(evt.target!).closest('.js-nav-link__item').length) return;
  $navLinkItem.find('.nav-link__options').hide('normal');
};

$(document).on('click', handleDocumentClick1);

const handleButtonClick = function (this: HTMLElement) {
  $(this).toggleClass('button-like__button_active');
  const $button = $(this).children('.button-like__button_font_another');
  let $value = Number($button.html());

  if ($(this).hasClass('button-like__button_active')) {
    $button.html(String(($value += 1)));
    $(this).contents()[0].nodeValue = 'favorite';
  } else {
    $button.html(String(($value -= 1)));
    $(this).contents()[0].nodeValue = 'favorite_border';
  }
};

const $buttonLike = $('.js-button-like__button');
$buttonLike.each(function () {
  $(this).on('click', handleButtonClick);
});

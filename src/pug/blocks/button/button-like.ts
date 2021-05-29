const handleButtonClick = function(this: HTMLElement) {
  $(this).toggleClass('button-like__button_active');
  let $button: JQuery<HTMLElement> = $(this).children('.button-like__button_font_another');
  let $value:string | number = $button.html();

  if($(this).hasClass('button-like__button_active')) {
    $value = +$value + 1;
    $button.html($value as unknown as string);
    $(this).contents()[0].nodeValue = 'favorite';
  } else {
    $value = +$value - 1;
    $button.html($value as unknown as string);
    $(this).contents()[0].nodeValue = 'favorite_border';
  }
};

const $buttonLike: JQuery<HTMLElement> = $('.js-button-like__button');
$buttonLike.each(function() {
  $(this).on('click', handleButtonClick);
})
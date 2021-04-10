$('.button-like__button').each(function() {
  $(this).on('click', function() {
    $(this).toggleClass('button-like__button--active');
    let button: JQuery<HTMLElement> = $(this).children('.button-like__button--number');
    let value:string | number = button.html();

    if($(this).hasClass('button-like__button--active')) {
      value = +value + 1;
      button.html(value as unknown as string);
      $(this).contents()[0].nodeValue = 'favorite';
    } else {
      value = +value - 1;
      button.html(value as unknown as string);
      $(this).contents()[0].nodeValue = 'favorite_border';
    }
  })
})
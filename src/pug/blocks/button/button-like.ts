$('.button-like__button').each(function() {
  $(this).on('click', function() {
    $(this).toggleClass('button-like__button--active');
    let value:any = +$(this).children('.button-like__button--number').html();

    if($(this).hasClass('button-like__button--active')) {
      value += 1
      $(this).children('.button-like__button--number').html(value);
      $(this).contents()[0].nodeValue = 'favorite';
    } else {
      value -= 1
      $(this).children('.button-like__button--number').html(value);
      $(this).contents()[0].nodeValue = 'favorite_border';
    }
  })
})
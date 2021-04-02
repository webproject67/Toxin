$('.nav-link__item:nth-child(3n-1)').on('click', function () {
  $(this).find('.nav-link__options').slideToggle(300);
})
$('.checkbox-list').on('click', function() {
  $(this).find('.checkbox-list__icon').toggleClass('checkbox-list__icon--rotate');
  $(this).find('.checkbox__list').toggleClass('checkbox__list--display');
})
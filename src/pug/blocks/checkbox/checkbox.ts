$('.checkbox-list__btn').on('click', function() {
  $(this).find('.checkbox-list__icon').toggleClass('checkbox-list__icon--rotate');
  $(this).siblings('.checkbox').find('.checkbox__list').slideToggle(300);
})
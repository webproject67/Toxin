const handleBtnClick = function(this: HTMLElement) {
  $(this).find('.checkbox-list__icon').toggleClass('checkbox-list__icon--rotate');
  $(this).siblings('.checkbox').find('.checkbox__list').slideToggle(300);
};

$('.js-checkbox-list__btn').on('click', handleBtnClick);
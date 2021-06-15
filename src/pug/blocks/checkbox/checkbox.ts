const handleBtnClick = function (this: HTMLElement) {
  $(this)
    .find('.checkbox-list__icon')
    .toggleClass('checkbox-list__icon_transformed');
  $(this).siblings('.checkbox').find('.checkbox__list').slideToggle(300);
};

const $checkboxList = $('.js-checkbox-list__btn');
$checkboxList.on('click', handleBtnClick);

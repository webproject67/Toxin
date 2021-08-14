interface JQuery {
  addRating: Function;
}

const $buttonRate = $('.js-button-rate');
$buttonRate.each(function () {
  $(this).addRating({ selectedRatings: $(this).data('count') });
  $(this)
    .find('i')
    .removeClass('material-icons')
    .addClass('button-rate__icon');
});

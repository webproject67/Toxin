interface JQuery {
  like: Function;
  addRating: Function;
}

const $buttonLike = $('.js-button-like');
$buttonLike.like();

const $buttonRate = $('.js-button-rate');
$buttonRate.each(function () {
  $(this).addRating({ selectedRatings: $(this).data('count') });
  $(this).find('i').removeClass('material-icons').addClass('button-rate__icon');
});

interface JQuery {
  addRating({}): JQuery
}

const $buttonRate: JQuery<HTMLElement> = $('.js-button-rate');
$buttonRate.each(function() {
  $(this).addRating({selectedRatings: $(this).data('count')});
  $(this).find('i').removeClass('material-icons').addClass('font-icon font-lg button-rate__icon')
})
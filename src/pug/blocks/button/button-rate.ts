$('.button-rate').each(function() {
  $(this).addRating({selectedRatings: $(this).data('count')});
  $('i.material-icons').removeClass('material-icons').addClass('font-icon font-lg button-rate__icon')
})
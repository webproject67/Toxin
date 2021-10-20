(function ($) {
  $.fn.rating = function (options) {
    const config = $.extend(
      {
        icon: 'rate__icon',
      },
      options
    );

    this.each(function () {
      $(this).addRating({ selectedRatings: $(this).data('count') });
      $(this).find('i').removeClass('material-icons').addClass(config.icon);
    });
    return this;
  };
})(jQuery);

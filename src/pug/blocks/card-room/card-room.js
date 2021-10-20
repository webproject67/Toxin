(function ($) {
  $.fn.roller = function () {
    this.each(function () {
      $(this).flexslider({
        animation: 'slide',
      });
    });
    return this;
  };
})(jQuery);

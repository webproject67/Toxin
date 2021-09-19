(function ($) {
  $.fn.btnClick = function () {
    function main(e) {
      e.click(function () {
        $(this)
          .find('.checkbox-list__icon')
          .toggleClass('checkbox-list__icon_transformed');
        $(this).siblings('.checkbox').find('.checkbox__list').slideToggle(300);
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };
})(jQuery);

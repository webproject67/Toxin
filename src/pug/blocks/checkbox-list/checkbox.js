(function ($) {
  $.fn.btnClick = function () {
    function main(e) {
      const evt = e;
      e.find('.checkbox-list__button').click(function () {
        evt.toggleClass('checkbox-list_state_active');
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };
})(jQuery);

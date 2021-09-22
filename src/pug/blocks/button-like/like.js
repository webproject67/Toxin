(function ($) {
  $.fn.like = function (options) {
    const config = $.extend(
      {
        active: 'button-like_active',
      },
      options
    );

    function main(e) {
      e.click(function () {
        $(this).toggleClass(config.active);

        let $value = Number($(this).html());

        if ($(this).hasClass(config.active)) {
          $(this).html(String(($value += 1)));
        } else {
          $(this).html(String(($value -= 1)));
        }
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };
})(jQuery);

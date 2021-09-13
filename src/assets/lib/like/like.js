(function ($) {
  $.fn.like = function (options) {
    const config = $.extend(
      {
        active: 'button-like_active',
        text: '.button-like_font_another',
      },
      options
    );

    function main(e) {
      e.click(function () {
        $(this).toggleClass(config.active);

        const $button = $(this).children(config.text);
        let $value = Number($button.html());

        if ($(this).hasClass(config.active)) {
          $button.html(String(($value += 1)));
          $(this).contents()[0].nodeValue = 'favorite';
        } else {
          $button.html(String(($value -= 1)));
          $(this).contents()[0].nodeValue = 'favorite_border';
        }
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };
})(jQuery);

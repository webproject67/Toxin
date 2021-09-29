import { getNumSlider } from '../../../scripts/utils';

(function ($) {
  $.fn.slide = function (options) {
    const config = $.extend(
      {
        text: '.js-slide__text',
      },
      options
    );

    this.each(function () {
      $(this).slider({
        range: true,
        min: 0,
        max: 15800,
        values: [5000, 10000],
        slide: (evt, ui) =>
          $(config.text).text(
            `${getNumSlider(ui.values[0])}₽ - ${getNumSlider(ui.values[1])}₽`
          ),
        step: 10,
      });
    });
    return this;
  };
})(jQuery);

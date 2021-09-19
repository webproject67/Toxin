import { getBoolEmail } from '../../../scripts/utils';

(function ($) {
  $.fn.onClick = function () {
    function main(e) {
      e.click(function () {
        const $input = $('#email');
        const $value = String($input.val());
        if (!getBoolEmail($value)) {
          $input.css('border', '1px solid red');
        } else {
          $input.css('border', '1px solid rgba(31, 32, 65, 0.25)');
          $input.val('Спасибо!');
        }
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };
})(jQuery);

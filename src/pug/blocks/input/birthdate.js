(function ($) {
  $.fn.keydowns = function () {
    function main(e) {
      const input = e;

      e.keydown((evt) => {
        const additionalKeysAllowed = () =>
          evt.keyCode === 46 ||
          evt.keyCode === 8 ||
          evt.keyCode === 9 ||
          evt.keyCode === 27 ||
          (evt.keyCode === 65 && evt.ctrlKey === true) ||
          (evt.keyCode >= 35 && evt.keyCode <= 39);

        const onlyNumbersAreAllowed = () =>
          (evt.keyCode < 48 || evt.keyCode > 57) &&
          (evt.keyCode < 96 || evt.keyCode > 105);

        const putsAPoint = () =>
          evt.currentTarget.value.length === 2 ||
          evt.currentTarget.value.length === 5;

        if (additionalKeysAllowed()) return;
        if (onlyNumbersAreAllowed()) evt.preventDefault();
        if (putsAPoint()) input.val(`${evt.currentTarget.value}.`);
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };
})(jQuery);

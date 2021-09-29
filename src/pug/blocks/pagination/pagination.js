(function ($) {
  $.fn.pageNumber = function () {
    this.each(function () {
      $(this).pagination({
        items: 15,
        itemsOnPage: 1,
        displayedPages: 3,
        edges: 1,
        prevText: '',
        nextText: 'arrow_forward',
        cssStyle: 'light-theme',
      });
    });
    return this;
  };
})(jQuery);

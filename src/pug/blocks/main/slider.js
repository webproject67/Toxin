(function ($) {
  const $body = $('body');
  const $slider = $('.js-slider');
  const setHeightMain = (main, heightDesktop, heightMobile) => {
    let height;

    if (Number($body.width()) >= 768) {
      height = heightDesktop;
    } else {
      height = heightMobile;
    }

    $slider.height(height);
  };

  $.fn.slider1 = function () {
    this.each(function () {
      $(this).children().rbtSlider({
        auto: 5,
      });

      setHeightMain($(this).children(), 830, 710);

      const handleWindowResize = function () {
        setHeightMain($(this).children(), 830, 710);
      };

      $(window).on('resize', handleWindowResize);
    });
    return this;
  };

  $.fn.slider2 = function () {
    this.each(function () {
      $(this).children().rbtSlider({
        auto: 5,
      });

      setHeightMain($(this).children(), 683, 690);

      const handleWindowResize = function () {
        setHeightMain($(this).children(), 683, 690);
      };

      $(window).on('resize', handleWindowResize);
    });
    return this;
  };

  $.fn.slider3 = function () {
    this.each(function () {
      $(this).children().rbtSlider({
        auto: 5,
      });

      setHeightMain($(this).children(), 702, 677);

      const handleWindowResize = function () {
        setHeightMain($(this).children(), 702, 677);
      };

      $(window).on('resize', handleWindowResize);
    });
    return this;
  };
})(jQuery);

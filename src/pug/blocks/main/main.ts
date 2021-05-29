interface JQuery {
  rbtSlider({}): JQuery
}

const $body: JQuery<HTMLElement> = $('body');
const $slider: JQuery<HTMLElement> = $('.js-slider');

const setHeightMain = (
  main: JQuery<HTMLElement>, 
  heightDesktop: number, 
  heightMobile: number
): void => {
  let height: number;
  ($body.width() as number >= 768) ? height = heightDesktop : height = heightMobile;
  $slider.height(height)
}

const setupOptions = (
  main: JQuery<HTMLElement>, 
  heightDesktop: number, 
  heightMobile: number
): void => {
  main.rbtSlider({
		'auto': 5
	});
  
  setHeightMain(main, heightDesktop, heightMobile)

  const handleWindowResize = function () { 
    setHeightMain(main, heightDesktop, heightMobile)
  };
  
  $(window).on('resize', handleWindowResize);
}

const $image1: JQuery<HTMLElement> = $('.js-page-main_image1');
$image1.each(function() {
  setupOptions($(this).children(), 830, 690)
})

const $image2: JQuery<HTMLElement> = $('.js-page-main_image2');
$image2.each(function() {
  setupOptions($(this).children(), 683, 661)
})

const $image3: JQuery<HTMLElement> = $('.js-page-main_image3');
$image3.each(function() {
  setupOptions($(this).children(), 702, 677)
})
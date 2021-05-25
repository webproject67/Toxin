interface JQuery {
  rbtSlider({}): JQuery
}

const setHeightMain = (
  main: JQuery<HTMLElement>, 
  heightDesktop: number, 
  heightMobile: number
): void => {
  let height: number;
  ($('body').width() as number >= 768) ? height = heightDesktop : height = heightMobile;
  $('.js-slider').height(height)
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

$('.js-page-main--position1').each(function() {
  setupOptions($(this).children(), 830, 690)
})

$('.js-page-main--position2').each(function() {
  setupOptions($(this).children(), 683, 661)
})

$('.js-page-main--position3').each(function() {
  setupOptions($(this).children(), 702, 677)
})
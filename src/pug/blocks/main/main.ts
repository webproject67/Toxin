interface JQuery {
  rbtSlider({}): JQuery
}

const setHeightMain = (
  main: JQuery<HTMLElement>, 
  heightDesktop: number, 
  heightMobile: number
): void => {
  if($('body').width() as number >= 768) {
    $('.slider').height(heightDesktop)
  } else {
    $('.slider').height(heightMobile)
  }
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
  
  $(window).on('resize', function () { 
    setHeightMain(main, heightDesktop, heightMobile)
  })
}

$('.page-main--position1').each(function() {
  setupOptions($(this).children(), 830, 690)
})

$('.page-main--position2').each(function() {
  setupOptions($(this).children(), 683, 661)
})

$('.page-main--position3').each(function() {
  setupOptions($(this).children(), 702, 677)
})
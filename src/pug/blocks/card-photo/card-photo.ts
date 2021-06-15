interface JQuery {
  flexslider({}): JQuery;
}

const $flexslider: JQuery<HTMLElement> = $('.js-flexslider');
$flexslider.flexslider({
  animation: 'slide',
});

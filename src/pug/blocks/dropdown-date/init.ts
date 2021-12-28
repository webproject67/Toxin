interface JQuery {
  twoInputsHalfEmpty(): JQuery;
  oneInput(): JQuery;
  twoInputsEmpty(): JQuery;
  twoInputsFilled(): JQuery;
  noInput(): JQuery;
}

$('.js-calendarTwoInputsHalfEmpty').twoInputsHalfEmpty();
$('.js-calendarOneInput').oneInput();
$('.js-calendarTwoInputsEmpty').twoInputsEmpty();
$('.js-calendarTwoInputsFilled').twoInputsFilled();
$('.js-calendarNoInput').noInput();

$('.cards__block3').each(() => {
  const myDatepicker = $('.date1').datepicker({
    startDate: new Date(2019, 7, 1),
    range: true,
    clearButton: true,
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    navTitles: {
      days: 'MM <i>yyyy</i>'
    }
  }).data('datepicker');
  
  myDatepicker.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
  $('.datepicker--buttons').append('<span class="datepicker--btn">Применить</span>');
  $('.datepicker--cell-day[data-year="2019"][data-month="7"][data-date="8"]').addClass("-current-");
  myDatepicker.show();

  $(".datepicker--btn").click(() => {
    if (myDatepicker.selectedDates.length === 2) myDatepicker.hide();
  });
});
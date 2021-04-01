interface JQuery {
  datepicker({}): JQuery
  addRating({}): JQuery
  pagination({}): JQuery
  flexslider({}): JQuery 
}



$('.date3').each(() => {
  const getMonthString = (month:string) => {
    switch (month) {
      case '01':
        return 'янв';
      case '02':
        return 'фев';
      case '03':
        return 'мар';
      case '04':
        return 'апр';
      case '05':
        return 'май';
      case '06':
        return 'июн';
      case '07':
        return 'июл';
      case '08':
        return 'авг';
      case '09':
        return 'сен';
      case '10':
        return 'окт';
      case '11':
        return 'ноя';
      case '12':
        return 'дек';
    }
  }
  
  const myDatepicker = $('.date3').datepicker({
    startDate: new Date(2019, 7, 1),
    range: true,
    clearButton: true,
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    navTitles: {
      days: 'MM <i>yyyy</i>'
    },
    onSelect: (date) => {
      const dates = date.split(",");
      const date1 = dates[0].split(".");
      let value = `${date1[0]} ${getMonthString(date1[1])}`;
      if (dates[1]) {
        const date2 = dates[1].split(".");
        value += ` - ${date2[0]} ${getMonthString(date2[1])}`
      }  
      $('.date3').val(value)
      if (dates[0] === '') $('.date3').val('');
    }
  }).data('datepicker');
  
  myDatepicker.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
  $('.datepicker--btn').remove();
  $('.datepicker--buttons').append('<span class="datepicker--btn">Применить</span>');
  myDatepicker.hide();

  $(".datepicker--btn").on('click', () => {
    if (myDatepicker.selectedDates.length === 2) myDatepicker.hide();
  });
  $('.datepicker').width(264);
  $('.datepicker--content').css( 'padding', '0' );
});

$('.date2').each(() => {
  const myDatepicker = $('.date2').datepicker({
    startDate: new Date(2019, 7, 1),
    range: true,
    clearButton: true,
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    navTitles: {
      days: 'MM <i>yyyy</i>'
    },
    onSelect: (date) => {
      const dates = date.split(",");
      $('#date1').val(dates[0])
      $('#date2').val(dates[1])
      if (dates[0] === '08.08.2019') $('#date1').val('ДД.ММ.ГГГГ');
    }
  }).data('datepicker');
  
  myDatepicker.selectDate([new Date(2019, 7, 8), new Date(2019, 7, 19)]);
  $('.datepicker--btn').remove();
  $('.datepicker--buttons').append('<span class="datepicker--btn">Применить</span>');
  myDatepicker.hide();
  $('#date2').on('click', () => myDatepicker.show());

  $(".datepicker--btn").on('click', () => {
    if (myDatepicker.selectedDates.length === 2) myDatepicker.hide();
  });
});

$('.date4').each(() => {
  const myDatepicker = $('.date4').datepicker({
    range: true,
    clearButton: true,
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    navTitles: {
      days: 'MM <i>yyyy</i>'
    },
    onSelect: (date) => {
      const dates = date.split(",");
      $('#date1').val(dates[0])
      $('#date2').val(dates[1])
    }
  }).data('datepicker');
  
  $('.datepicker--buttons').append('<span class="datepicker--btn">Применить</span>');
  myDatepicker.hide();
  $('#date2').on('click', () => myDatepicker.show());

  $(".datepicker--btn").on('click', () => {
    if (myDatepicker.selectedDates.length === 2) myDatepicker.hide();
  });
});

$('.date5').each(() => {
  const myDatepicker = $('.date5').datepicker({
    startDate: new Date(2019, 7, 1),
    range: true,
    clearButton: true,
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    navTitles: {
      days: 'MM <i>yyyy</i>'
    },
    onSelect: (date) => {
      const dates = date.split(",");
      $('#date3').val(dates[0])
      $('#date4').val(dates[1])
    }
  }).data('datepicker');
  
  myDatepicker.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
  $('.datepicker--btn').remove();
  $('.datepicker--buttons').append('<span class="datepicker--btn">Применить</span>');
  $('.datepicker--cell-day[data-year="2019"][data-month="7"][data-date="8"]').addClass("-current-");
  $('#date4').on('click', () => myDatepicker.show());
  $(".datepicker--btn").on('click', () => {
    if (myDatepicker.selectedDates.length === 2) myDatepicker.hide();
  });
});

$('.date1').each(() => {
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
  $('.datepicker--btn').remove();
  $('.datepicker--buttons').append('<span class="datepicker--btn">Применить</span>');
  $('.datepicker--cell-day[data-year="2019"][data-month="7"][data-date="8"]').addClass("-current-");
  myDatepicker.show();

  $(".datepicker--btn").on('click', () => {
    if (myDatepicker.selectedDates.length === 2) myDatepicker.hide();
  });
});
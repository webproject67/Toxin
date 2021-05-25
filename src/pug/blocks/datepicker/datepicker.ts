interface JQuery {
  datepicker({}): JQuery
}

const getOptionsDatepicker = (input: JQuery<HTMLElement>):void => {
  input.datepicker({
    range: true,
    clearButton: true,
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    navTitles: {
      days: 'MM <i>yyyy</i>'
    }
  }).data('datepicker');
  input.find('.datepicker--buttons').append('<span class="datepicker--btn">Применить</span>');
  const handleDatepickerClick = () => input.hide();
  input.find('.datepicker--btn').on('click', handleDatepickerClick);
}

$('.js-datepick1').each(function () {
  getOptionsDatepicker($(this));
  $(this).data('datepicker').selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
  $(this).find('.datepicker--cell-day[data-year="2019"][data-month="7"][data-date="8"]').addClass('-current-');
  let width: number;
  ($('body').width() as number <= 348) ? width = 288 :  width = 318;
  $('.js-datepicker').width(width)
})

$('.js-datepick2').each(function () {
  getOptionsDatepicker($(this));
  $(this).datepicker({
    onSelect: (date) => {
      const dates: string[] = date.split(',');
      $('#date1').val(dates[0]);
      $('#date2').val(dates[1]);
    }
  }).data('datepicker');
  $(this).hide();
  const handleDateClick = () => $('.js-datepick2').toggle();
  $(this).siblings('#date1').on('click', handleDateClick);
  const handleInputsClick = () => $('.js-datepick2').toggle();
  $(this).closest('.form__inputs').find('#date2').on('click', handleInputsClick);
});

$('.js-datepick3').each(function () {
  getOptionsDatepicker($(this));
  $(this).datepicker({
    onSelect: (date) => {
      const dates: string[] = date.split(',');
      $('#date3').val(dates[0]);
      $('#date4').val(dates[1]);
    }
  }).data('datepicker').selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
  $(this).hide();
  const handleDateClick = () => $('.js-datepick3').toggle();
  $(this).siblings('#date3').on('click', handleDateClick);
  const handleInputsClick = () => $('.js-datepick3').toggle();
  $(this).closest('.form__inputs').find('#date4').on('click', handleInputsClick);
});

$('.js-datepick4').each(function () {
  getOptionsDatepicker($(this));
  $(this).datepicker({
    onSelect: (date) => {
      const dates: string[] = date.split(',');
      let date1:string;
      (dates[0] === '08.08.2019') ? date1 = 'ДД.ММ.ГГГГ' : date1 = dates[0];
      $('#date1').val(date1);
      $('#date2').val(dates[1]);
    }
  }).data('datepicker').selectDate([new Date(2019, 7, 8), new Date(2019, 7, 19)]);
  $(this).hide();
  const handleDateClick = () => $('.js-datepick4').toggle();
  $(this).siblings('#date1').on('click', handleDateClick);
  const handleBlockClick = () => $('.js-datepick4').toggle();
  $(this).closest('.form-elements__block').find('#date2').on('click', handleBlockClick);
  let width: number;
  ($('body').width() as number <= 348) ? width = 288 : width = 318;
  $('.js-datepicker').width(width)
});

$('.js-datepick5').each(function () {
  const getMonthString = (month:string):string => {
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
      default:
        return 'undefined'
    }
  }
  getOptionsDatepicker($(this));
  $(this).datepicker({
    onSelect: (date) => {
      const dates: string[] = date.split(',');
      const date1: string[] = dates[0].split('.');
      let value: string = `${date1[0]} ${getMonthString(date1[1])}`;
      if (dates[1]) {
        const date2: string[] = dates[1].split('.');
        value += ` - ${date2[0]} ${getMonthString(date2[1])}`;
      }  
      let date1Value:string;
      (dates[0] === '') ? date1Value = '' : date1Value = value;
      $('#date').val(date1Value);
    }
  }).data('datepicker').selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
  $(this).hide();
  const handleDateClick = () => $('.js-datepick5').toggle();
  $(this).siblings('#date').on('click', handleDateClick);
  $(this).find('.datepicker').width(264);
  $(this).find('.datepicker--content').css('padding', '0');
});
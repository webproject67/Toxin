(function ($) {
  const handleDocumentClick = function (evt) {
    const clickOnAClass = () =>
      $(evt.target).closest('.js-datepicker').length ||
      $(evt.target).closest('.input').length ||
      $(evt.target).closest('.datepicker--cell').length ||
      $(evt.target).closest('.datepicker--nav-title').length ||
      $(evt.target).closest('.datepicker--nav-action').length;

    if (clickOnAClass()) return;
    $('.js-calendar1').hide();
    $('.js-calendar2').hide();
    $('.js-calendar3').hide();
    $('.js-calendar4').hide();
  };

  const getOptionsDatepicker = (input) => {
    input
      .datepicker({
        range: true,
        clearButton: true,
        prevHtml: 'arrow_back',
        nextHtml: 'arrow_forward',
        navTitles: {
          days: 'MM <i>yyyy</i>',
        },
      })
      .data('datepicker');
    input
      .find('.datepicker--buttons')
      .append('<span class="datepicker--btn">Применить</span>');
    const handleDatepickerClick = () => input.hide();
    input.find('.datepicker--btn').on('click', handleDatepickerClick);

    $(document).on('click', handleDocumentClick);
  };

  $.fn.calendar1 = function () {
    this.each(function () {
      getOptionsDatepicker($(this));
      $(this)
        .datepicker({
          onSelect: (date) => {
            const dates = date.split(',');
            const [dateOne] = dates;
            let date1;

            if (dates[0] === '08.08.2019') {
              date1 = 'ДД.ММ.ГГГГ';
            } else {
              date1 = dateOne;
            }

            $('#input5').val(date1);
            $('#input6').val(dates[1]);
          },
        })
        .data('datepicker')
        .selectDate([new Date(2019, 7, 8), new Date(2019, 7, 19)]);
      $(this).hide();
      const handleDateClick = () => $('.js-calendar1').toggle();
      $(this).siblings('#input5').on('click', handleDateClick);
      $(this)
        .closest('.form-elements__list')
        .find('#input6')
        .on('click', handleDateClick);

      let width;

      if (Number($('body').width()) <= 399) {
        width = 264;
      } else {
        width = 318;
      }

      $('.js-datepicker').width(width);
    });
    return this;
  };

  $.fn.calendar2 = function () {
    this.each(function () {
      const getMonthString = (month) => {
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
            return 'undefined';
        }
      };
      getOptionsDatepicker($(this));
      $(this)
        .datepicker({
          onSelect: (date) => {
            const dates = date.split(',');
            const date1 = dates[0].split('.');
            let value = `${date1[0]} ${getMonthString(date1[1])}`;
            if (dates[1]) {
              const date2 = dates[1].split('.');
              value += ` - ${date2[0]} ${getMonthString(date2[1])}`;
            }

            let date1Value;

            if (dates[0] === '') {
              date1Value = '';
            } else {
              date1Value = value;
            }

            $('#input7').val(date1Value);
          },
        })
        .data('datepicker')
        .selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
      $(this).hide();
      const handleDateClick = () => $('.js-calendar2').toggle();
      $(this).siblings('#input7').on('click', handleDateClick);
      $(this).find('.datepicker').width(264);
    });
    return this;
  };

  $.fn.calendar3 = function () {
    this.each(function () {
      getOptionsDatepicker($(this));
      $(this)
        .datepicker({
          onSelect: (date) => {
            const dates = date.split(',');
            $('#arrivalSearch').val(dates[0]);
            $('#exitSearch').val(dates[1]);
          },
        })
        .data('datepicker');
      $(this).hide();
      const handleDateClick = () => $('.js-calendar3').toggle();
      $(this).siblings('#arrivalSearch').on('click', handleDateClick);
      $(this)
        .closest('.form-search')
        .find('#exitSearch')
        .on('click', handleDateClick);

      let width;

      if (Number($('body').width()) <= 437) {
        width = 225;
      } else {
        width = 318;
      }

      $('.js-datepicker').width(width);
    });
    return this;
  };

  $.fn.calendar4 = function () {
    this.each(function () {
      getOptionsDatepicker($(this));
      $(this)
        .datepicker({
          onSelect: (date) => {
            const dates = date.split(',');
            $('#arrivalBooking').val(dates[0]);
            $('#exitBooking').val(dates[1]);
          },
        })
        .data('datepicker')
        .selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
      $(this).hide();
      const handleDateClick = () => $('.js-calendar4').toggle();
      $(this).siblings('#arrivalBooking').on('click', handleDateClick);
      $(this)
        .closest('.form-booking')
        .find('#exitBooking')
        .on('click', handleDateClick);

      let width;

      if (Number($('body').width()) <= 437) {
        width = 225;
      } else {
        width = 318;
      }

      $('.js-datepicker').width(width);
    });
    return this;
  };

  $.fn.calendar5 = function () {
    this.each(function () {
      getOptionsDatepicker($(this));
      $(this)
        .data('datepicker')
        .selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
      $(this)
        .find(
          '.datepicker--cell-day[data-year="2019"][data-month="7"][data-date="8"]'
        )
        .addClass('-current-');

      let width;

      if (Number($('body').width()) <= 399) {
        width = 257;
      } else {
        width = 318;
      }

      $('.js-datepicker').width(width);
    });
    return this;
  };
})(jQuery);

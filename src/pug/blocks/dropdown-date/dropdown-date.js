(function ($) {
  const handleDocumentClick = function (evt) {
    const clickOnAClass = () =>
      $(evt.target).closest('.js-datepicker').length ||
      $(evt.target).closest('.input').length ||
      $(evt.target).closest('.datepicker--cell').length ||
      $(evt.target).closest('.datepicker--nav-title').length ||
      $(evt.target).closest('.datepicker--nav-action').length;

    if (clickOnAClass()) return;
    $('.js-calendarTwoInputsHalfEmpty').hide();
    $('.js-calendarOneInput').hide();
    $('.js-calendarTwoInputsEmpty').hide();
    $('.js-calendarTwoInputsFilled').hide();
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

  $.fn.twoInputsHalfEmpty = function () {
    this.each(function () {
      const dropdown = $(this).parents('.form-elements__item');
      const inputLeft = dropdown.find('.input__text-field:first');
      const inputRight = dropdown.find('.input__text-field:last');
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
            inputLeft.val(date1);
            inputRight.val(dates[1]);
          },
        })
        .data('datepicker')
        .selectDate([new Date(2019, 7, 8), new Date(2019, 7, 19)]);
      $(this).hide();
      const handleDateClick = () =>
        $('.js-calendarTwoInputsHalfEmpty').toggle();
      inputLeft.on('click', handleDateClick);
      inputRight.on('click', handleDateClick);

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

  $.fn.oneInput = function () {
    this.each(function () {
      const dropdown = $(this).parents('.dropdown-date');
      const inputLeft = dropdown.find('.input__text-field');
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

            inputLeft.val(date1Value);
          },
        })
        .data('datepicker')
        .selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
      $(this).hide();
      const handleDateClick = () => $('.js-calendarOneInput').toggle();
      inputLeft.on('click', handleDateClick);
      $(this).find('.datepicker').width(264);
    });
    return this;
  };

  $.fn.twoInputsEmpty = function () {
    this.each(function () {
      const dropdown = $(this).parents('.form-search__dates');
      const inputLeft = dropdown.find('.input__text-field:first');
      const inputRight = dropdown.find('.input__text-field:last');
      getOptionsDatepicker($(this));
      $(this)
        .datepicker({
          onSelect: (date) => {
            const dates = date.split(',');
            inputLeft.val(dates[0]);
            inputRight.val(dates[1]);
          },
        })
        .data('datepicker');
      $(this).hide();
      const handleDateClick = () => $('.js-calendarTwoInputsEmpty').toggle();
      inputLeft.on('click', handleDateClick);
      inputRight.on('click', handleDateClick);

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

  $.fn.twoInputsFilled = function () {
    this.each(function () {
      const dropdown = $(this).parents('.form-booking__dates');
      const inputLeft = dropdown.find('.input__text-field:first');
      const inputRight = dropdown.find('.input__text-field:last');
      getOptionsDatepicker($(this));
      $(this)
        .datepicker({
          onSelect: (date) => {
            const dates = date.split(',');
            inputLeft.val(dates[0]);
            inputRight.val(dates[1]);
          },
        })
        .data('datepicker')
        .selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
      $(this).hide();
      const handleDateClick = () => $('.js-calendarTwoInputsFilled').toggle();
      inputLeft.on('click', handleDateClick);
      inputRight.on('click', handleDateClick);

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

  $.fn.noInput = function () {
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

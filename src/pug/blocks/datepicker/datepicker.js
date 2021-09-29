(function ($) {
  const handleDocumentClick = function (evt) {
    const clickOnAClass = () =>
      $(evt.target).closest('.js-datepicker').length ||
      $(evt.target).closest('.input__input').length ||
      $(evt.target).closest('.datepicker--cell').length ||
      $(evt.target).closest('.datepicker--nav-title').length ||
      $(evt.target).closest('.datepicker--nav-action').length;

    if (clickOnAClass()) return;
    $('.js-datepick1').hide();
    $('.js-datepick2').hide();
    $('.js-datepick3').hide();
    $('.js-datepick4').hide();
    $('.js-datepick5').hide();
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

  $.fn.datepick1 = function () {
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

      if (Number($('body').width()) <= 348) {
        width = 288;
      } else {
        width = 318;
      }

      $('.js-datepicker').width(width);
    });
    return this;
  };

  $.fn.datepick2 = function () {
    this.each(function () {
      getOptionsDatepicker($(this));
      $(this)
        .datepicker({
          onSelect: (date) => {
            const dates = date.split(',');
            $('#date1').val(dates[0]);
            $('#date2').val(dates[1]);
          },
        })
        .data('datepicker');
      $(this).hide();
      const handleDateClick = () => $('.js-datepick2').toggle();
      $(this).siblings('#date1').on('click', handleDateClick);
      const handleInputsClick = () => $('.js-datepick2').toggle();
      $(this)
        .closest('.form__inputs')
        .find('#date2')
        .on('click', handleInputsClick);
    });
    return this;
  };

  $.fn.datepick3 = function () {
    this.each(function () {
      getOptionsDatepicker($(this));
      $(this)
        .datepicker({
          onSelect: (date) => {
            const dates = date.split(',');
            $('#date3').val(dates[0]);
            $('#date4').val(dates[1]);
          },
        })
        .data('datepicker')
        .selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
      $(this).hide();
      const handleDateClick = () => $('.js-datepick3').toggle();
      $(this).siblings('#date3').on('click', handleDateClick);
      const handleInputsClick = () => $('.js-datepick3').toggle();
      $(this)
        .closest('.form__inputs')
        .find('#date4')
        .on('click', handleInputsClick);
    });
    return this;
  };

  $.fn.datepick4 = function () {
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

            $('#date1').val(date1);
            $('#date2').val(dates[1]);
          },
        })
        .data('datepicker')
        .selectDate([new Date(2019, 7, 8), new Date(2019, 7, 19)]);
      $(this).hide();
      const handleDateClick = () => $('.js-datepick4').toggle();
      $(this).siblings('#date1').on('click', handleDateClick);
      const handleBlockClick = () => $('.js-datepick4').toggle();
      $(this)
        .closest('.form-elements__block')
        .find('#date2')
        .on('click', handleBlockClick);

      let width;

      if (Number($('body').width()) <= 348) {
        width = 288;
      } else {
        width = 318;
      }

      $('.js-datepicker').width(width);
    });
    return this;
  };

  $.fn.datepick5 = function () {
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

            $('#date').val(date1Value);
          },
        })
        .data('datepicker')
        .selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
      $(this).hide();
      const handleDateClick = () => $('.js-datepick5').toggle();
      $(this).siblings('#date').on('click', handleDateClick);
      $(this).find('.datepicker').width(264);
    });
    return this;
  };
})(jQuery);

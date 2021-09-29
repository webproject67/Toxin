(function ($) {
  const setInputValue = function (input) {
    const counts = [0, 0, 0];
    const inputNumber = input.find('.input__number');
    inputNumber.map(function (i) {
      counts[i] = Number($(this).text());
      return counts;
    });

    const inputOptionFirst = input.find('.input__option:first').text();
    if (inputOptionFirst === 'взрослые') {
      const count1 = counts[0] + counts[1];
      const count2 = counts[2];
      const countMore1 = count1 >= 2;
      const countLess1 = count1 <= 4;
      const countResult1 = countMore1 && countLess1;
      const countMore2 = count2 >= 2;
      const countLess2 = count2 <= 4;
      const countResult2 = countMore2 && countLess2;

      let value1;
      if (count1 === 0) {
        value1 = 'Сколько гостей';
      } else if (count1 === 1) {
        value1 = 'гость';
      } else if (countResult1) {
        value1 = 'гостя';
      } else {
        value1 = 'гостей';
      }

      let value2;
      if (count2 === 1) {
        value2 = 'младенец';
      } else if (countResult2) {
        value2 = 'младенца';
      } else {
        value2 = 'младенцев';
      }

      const count1Bool = count1 === 0;
      const count2Bool = count2 === 0;
      const countResult3 = count1Bool && count2Bool;
      if (countResult3) {
        input.find('.input__input').val(`${value1}`);
      } else if (count1Bool) {
        input.find('.input__input').val(`${count2} ${value2}`);
      } else if (count2Bool) {
        input.find('.input__input').val(`${count1} ${value1}`);
      } else {
        input
          .find('.input__input')
          .val(`${count1} ${value1}, ${count2} ${value2}`);
      }
    } else if (inputOptionFirst === 'спальни') {
      let value1;
      const countMore1 = counts[0] >= 2;
      const countLess1 = counts[0] <= 4;
      const countResult1 = countMore1 && countLess1;
      if (counts[0] === 0) {
        value1 = 'Сколько спален';
      } else if (counts[0] === 1) {
        value1 = 'спальня';
      } else if (countResult1) {
        value1 = 'спальни';
      } else {
        value1 = 'спален';
      }

      let value2;
      const countMore2 = counts[1] >= 2;
      const countLess2 = counts[1] <= 4;
      const countResult2 = countMore2 && countLess2;
      if (counts[1] === 1) {
        value2 = 'кровать';
      } else if (countResult2) {
        value2 = 'кровати';
      } else {
        value2 = 'кроватей';
      }

      const count1Bool = counts[0] === 0;
      const count2Bool = counts[1] === 0;
      const countResult = count1Bool && count2Bool;
      if (countResult) {
        input.find('.input__input').val(`${value1}`);
      } else if (count1Bool) {
        input.find('.input__input').val(`${counts[1]} ${value2}`);
      } else if (count2Bool) {
        input.find('.input__input').val(`${counts[0]} ${value1}`);
      } else {
        input
          .find('.input__input')
          .val(`${counts[0]} ${value1}, ${counts[1]} ${value2}...`);
      }
    }
  };

  $.fn.handleInputClick = function () {
    function main(evt) {
      evt.click(() => {
        evt.toggleClass('input__input_bordered');
        evt.siblings('.input__select-options').slideToggle(300);
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };

  $.fn.handleLinkRightClick = function () {
    function main(evt) {
      evt.click(() => {
        evt
          .parents('.input')
          .find('.input__input')
          .toggleClass('input__input_bordered');
        evt.parents('.input').find('.input__select-options').slideToggle(300);
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };

  $.fn.handleLinkLeftClick = function () {
    function main(evt) {
      evt.click(function () {
        const input = evt.parents('.input');
        input.find('.input__number').map(function () {
          $(this).text(0);
          return $(this);
        });
        $(this).text('');
        input.find('.input__btn:nth-child(1)').addClass('input__btn_opaque');
        input.find('.input__input').val('Сколько гостей');
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };

  $.fn.handleBtnPlusClick = function () {
    function main(evt) {
      evt.click(() => {
        const input = evt.parents('.input');
        const $value = Number(evt.siblings('.input__number').text()) + 1;
        evt.siblings('.input__number').text($value);
        evt.siblings('.input__btn').removeClass('input__btn_opaque');
        input.find('.button-link2:first').text('очистить');

        setInputValue(input);
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };

  $.fn.handleBtnMinusClick = function () {
    function main(evt) {
      evt.click(function () {
        const input = evt.parents('.input');
        let value = Number(evt.siblings('.input__number').text()) - 1;
        if (value <= 0) {
          value = 0;
          $(this).addClass('input__btn_opaque');
        }
        $(this).siblings('.input__number').text(value);

        let total = 0;
        input.find('.input__number').map(function () {
          total += Number($(this).text());
          return total;
        });
        if (total === 0) {
          input.find('.button-link2:first').text('');
        }

        setInputValue(input);
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };

  $.fn.handleDocumentClick = function () {
    function main(evt) {
      evt.click((e) => {
        const $onPopup = evt.find('.input__input_bordered');
        if (e.target.closest('.input')) return;
        if ($onPopup.length) {
          $onPopup.toggleClass('input__input_bordered');
          $onPopup.siblings('.input__select-options').slideToggle(300);
        }
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };
})(jQuery);

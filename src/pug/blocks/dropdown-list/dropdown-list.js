(function ($) {
  const upper = '.dropdown-list';
  const label = '.input';
  const result = '.input__text-field';
  const border = 'input__text-field_theme_bordered';
  const borderJS = '.input__text-field_theme_bordered';
  const select = '.dropdown-list__select';
  const desc = '.dropdown-list__text:first';
  const btnMinus = '.dropdown-list__btn:nth-child(1)';
  const translucent = 'dropdown-list__btn_state_translucent';
  const quantity = '.dropdown-list__number';
  const btnLinkLeft = '.button:first';

  const setInputValue = function (input) {
    const counts = [0, 0, 0];
    const inputNumber = input.find(quantity);
    inputNumber.map(function (i) {
      counts[i] = Number($(this).text());
      return counts;
    });

    const inputOptionFirst = input.find(desc).text();
    if (inputOptionFirst === 'взрослые') {
      const countGrownup = counts[0] + counts[1];
      const countChildren = counts[2];
      const countMoreGrownup = countGrownup >= 2;
      const countLessGrownup = countGrownup <= 4;
      const countResultGrownup = countMoreGrownup && countLessGrownup;
      const countMoreChildren = countChildren >= 2;
      const countLessChildren = countChildren <= 4;
      const countResultChildren = countMoreChildren && countLessChildren;

      let grownup;
      if (countGrownup === 0) {
        grownup = 'Сколько гостей';
      } else if (countGrownup === 1) {
        grownup = 'гость';
      } else if (countResultGrownup) {
        grownup = 'гостя';
      } else {
        grownup = 'гостей';
      }

      let children;
      if (countChildren === 1) {
        children = 'младенец';
      } else if (countResultChildren) {
        children = 'младенца';
      } else {
        children = 'младенцев';
      }

      const countGrownupBool = countGrownup === 0;
      const countChildrenBool = countChildren === 0;
      const countResult = countGrownupBool && countChildrenBool;
      if (countResult) {
        input.find(result).val(`${grownup}`);
      } else if (countGrownupBool) {
        input.find(result).val(`${countChildren} ${children}`);
      } else if (countChildrenBool) {
        input.find(result).val(`${countGrownup} ${grownup}`);
      } else {
        input
          .find(result)
          .val(`${countGrownup} ${grownup}, ${countChildren} ${children}`);
      }
    } else if (inputOptionFirst === 'спальни') {
      let bedroom;
      const countMoreBedroom = counts[0] >= 2;
      const countLessBedroom = counts[0] <= 4;
      const countResultBedroom = countMoreBedroom && countLessBedroom;
      if (counts[0] === 0) {
        bedroom = 'Сколько спален';
      } else if (counts[0] === 1) {
        bedroom = 'спальня';
      } else if (countResultBedroom) {
        bedroom = 'спальни';
      } else {
        bedroom = 'спален';
      }

      let bed;
      const countMoreBed = counts[1] >= 2;
      const countLessBed = counts[1] <= 4;
      const countResultBed = countMoreBed && countLessBed;
      if (counts[1] === 1) {
        bed = 'кровать';
      } else if (countResultBed) {
        bed = 'кровати';
      } else {
        bed = 'кроватей';
      }

      let bathroom;
      const countMoreBathroom = counts[2] >= 2;
      const countLessBathroom = counts[2] <= 4;
      const countResultBathroom = countMoreBathroom && countLessBathroom;
      if (counts[2] === 1) {
        bathroom = 'ванная комната';
      } else if (countResultBathroom) {
        bathroom = 'ванные комнаты';
      } else {
        bathroom = 'ванных комнат';
      }

      const countBedroomNull = counts[0] === 0;
      const countBedNull = counts[1] === 0;
      const countBathroomNull = counts[2] === 0;
      const countNull = countBedroomNull && countBedNull && countBathroomNull;
      const countBedroom = countBedNull && countBathroomNull;
      const countBed = countBedroomNull && countBathroomNull;
      const countBathroom = countBedroomNull && countBedNull;
      if (countNull) {
        input.find(result).val(`${bedroom}`);
      } else if (countBedroom) {
        input.find(result).val(`${counts[0]} ${bedroom}`);
      } else if (countBed) {
        input.find(result).val(`${counts[1]} ${bed}`);
      } else if (countBathroom) {
        input.find(result).val(`${counts[2]} ${bathroom}`);
      } else if (countBedroomNull) {
        input.find(result).val(`${counts[1]} ${bed}, ${counts[2]} ${bathroom}`);
      } else if (countBathroomNull) {
        input.find(result).val(`${counts[0]} ${bedroom}, ${counts[1]} ${bed}`);
      } else if (countBedNull) {
        input
          .find(result)
          .val(`${counts[0]} ${bedroom}, ${counts[2]} ${bathroom}`);
      } else {
        input
          .find(result)
          .val(`${counts[0]} ${bedroom}, ${counts[1]} ${bed}...`);
      }
    }
  };

  $.fn.uploadedDocument = function () {
    function main(evt) {
      const dropdownList = evt.find(upper);

      dropdownList.map((i, dropdown) => {
        let total = 0;

        $(dropdown)
          .find(quantity)
          .map((ind, elem) => {
            total += Number($(elem).text());
            return total;
          });

        if (total === 0) {
          $(dropdown).find(btnLinkLeft).text('');
        }

        return null;
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };

  $.fn.handleInputClick = function () {
    function main(evt) {
      evt.click(() => {
        evt.toggleClass(border);
        evt.parents(label).siblings(select).slideToggle(300);
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
        evt.parents(upper).find(result).toggleClass(border);
        evt.parents(upper).find(select).slideToggle(300);
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
        const input = evt.parents(upper);
        input.find(quantity).map(function () {
          $(this).text(0);
          return $(this);
        });
        $(this).text('');
        input.find(btnMinus).addClass(translucent);
        input.find(result).val('Сколько гостей');
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
        const input = evt.parents(upper);
        const $value = Number(evt.siblings(quantity).text()) + 1;
        evt.siblings(quantity).text($value);
        evt.siblings(btnMinus).removeClass(translucent);
        input.find(btnLinkLeft).text('очистить');

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
        const input = evt.parents(upper);
        let value = Number(evt.siblings(quantity).text()) - 1;
        if (value <= 0) {
          value = 0;
          $(this).addClass(translucent);
        }
        $(this).siblings(quantity).text(value);

        let total = 0;
        input.find(quantity).map(function () {
          total += Number($(this).text());
          return total;
        });
        if (total === 0) {
          input.find(btnLinkLeft).text('');
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
        const $onPopup = evt.find(borderJS);
        if (e.target.closest(upper)) return;
        if ($onPopup.length) {
          $onPopup.toggleClass(border);
          $onPopup.parents(label).siblings(select).slideToggle(300);
        }
      });
    }

    this.each(function () {
      main($(this));
    });
    return this;
  };
})(jQuery);

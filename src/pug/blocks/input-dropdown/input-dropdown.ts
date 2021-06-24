const Value = {
  AGE: 'взрослые',
  ROOM: 'спальни',
};

const $inputDropdown = $('.js-input-dropdown');
$inputDropdown.each(function () {
  const setInputValue = () => {
    let counts = [0, 0, 0];
    const $inputNumber = $input.find('.input__number');
    $inputNumber.map(function (i) {
      counts[i] = Number($(this).text());
    });

    const $inputOptionFirst = $input.find('.input__option:first').text();
    if ($inputOptionFirst === Value.AGE) {
      const count1 = counts[0] + counts[1];
      const count2 = counts[2];

      let value1: string;
      if (count1 === 0) {
        value1 = 'Сколько гостей';
      } else if (count1 === 1) {
        value1 = 'гость';
      } else if (count1 >= 2 && count1 <= 4) {
        value1 = 'гостя';
      } else {
        value1 = 'гостей';
      }

      let value2: string;
      if (count2 === 1) {
        value2 = 'младенец';
      } else if (count2 >= 2 && count2 <= 4) {
        value2 = 'младенца';
      } else {
        value2 = 'младенцев';
      }

      if (count1 === 0 && count2 === 0) {
        $input.find('.input__input').val(`${value1}`);
      } else if (count1 === 0) {
        $input.find('.input__input').val(`${count2} ${value2}`);
      } else if (count2 === 0) {
        $input.find('.input__input').val(`${count1} ${value1}`);
      } else {
        $input
          .find('.input__input')
          .val(`${count1} ${value1}, ${count2} ${value2}`);
      }
    } else if ($inputOptionFirst === Value.ROOM) {
      let value1: string;
      if (counts[0] === 0) {
        value1 = 'Сколько спален';
      } else if (counts[0] === 1) {
        value1 = 'спальня';
      } else if (counts[0] >= 2 && counts[0] <= 4) {
        value1 = 'спальни';
      } else {
        value1 = 'спален';
      }

      let value2: string;
      if (counts[1] === 1) {
        value2 = 'кровать';
      } else if (counts[1] >= 2 && counts[1] <= 4) {
        value2 = 'кровати';
      } else {
        value2 = 'кроватей';
      }

      if (counts[0] === 0 && counts[1] === 0) {
        $input.find('.input__input').val(`${value1}`);
      } else if (counts[0] === 0) {
        $input.find('.input__input').val(`${counts[1]} ${value2}`);
      } else if (counts[1] === 0) {
        $input.find('.input__input').val(`${counts[0]} ${value1}`);
      } else {
        $input
          .find('.input__input')
          .val(`${counts[0]} ${value1}, ${counts[1]} ${value2}...`);
      }
    }
  };

  const $input = $(this);

  const handleInputClick = function (this: HTMLElement) {
    $input.find('.input__input').toggleClass('input__input_bordered');
    $input.find('.input__select-options').slideToggle(300);
  };

  $input.find('.input__input').on('click', handleInputClick);

  const handleDocumentClick = function (evt: any) {
    if ($(evt.target).closest('.input').length) return;
    if ($input.find('.input__input_bordered').length) {
      $input.find('.input__input').toggleClass('input__input_bordered');
      $input.find('.input__select-options').slideToggle(300);
    }
  };

  $(document).on('click', handleDocumentClick);

  const handleLink1Click = function () {
    $input.find('.input__input').toggleClass('input__input_bordered');
    $input.find('.input__select-options').slideToggle(300);
  };

  $input.find('.button-link2__link:last').on('click', handleLink1Click);

  const handleBtn3Click = function (this: HTMLElement) {
    let $value = Number($(this).siblings('.input__number').text());
    $value++;
    $(this).siblings('.input__number').text($value);
    $(this).siblings('.input__btn').removeClass('input__btn_opaque');
    $input.find('.button-link2__link:first').text('очистить');

    setInputValue();
  };

  $input.find('.input__btn:nth-child(3)').on('click', handleBtn3Click);

  const handleBtn1Click = function (this: HTMLElement) {
    let $value = Number($(this).siblings('.input__number').text());
    $value--;
    if ($value <= 0) {
      $value = 0;
      $(this).addClass('input__btn_opaque');
    }
    $(this).siblings('.input__number').text($value);

    let $total = 0;
    $input.find('.input__number').map(function () {
      $total += Number($(this).text());
    });
    if ($total === 0) {
      $input.find('.button-link2__link:first').text('');
    }

    setInputValue();
  };

  $input.find('.input__btn:nth-child(1)').on('click', handleBtn1Click);

  const handleLink2Click = function (this: HTMLElement) {
    $input.find('.input__number').map(function () {
      $(this).text(0);
    });
    $(this).text('');
    $input.find('.input__btn:nth-child(1)').addClass('input__btn_opaque');
    $input.find('.input__input').val('Сколько гостей');
  };

  $input.find('.button-link2__link:first').on('click', handleLink2Click);
});

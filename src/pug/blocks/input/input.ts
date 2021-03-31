import {getBool, getBoolEmail} from '../../../scripts/utils';

$('.input-dropdown').each(function() {
  const setInputValue = () => {
    let counts = [0, 0, 0];
    input.find('.input__number').map(function (i) {
      counts[i] = +$(this).text()
    })
    if (input.find('.input__option:first').text() === 'взрослые') {
      const count1 = counts[0] + counts[1];
      const count2 = counts[2];

      let value1 = '';
      if (count1 === 0) {
        value1 = 'Сколько гостей'
      } else if (count1 === 1) {
        value1 = 'гость'
      } else if (count1 >= 2 && count1 <= 4) {
        value1 = 'гостя'
      } else {
        value1 = 'гостей'
      }

      let value2 = '';
      if (count2 === 1) {
        value2 = 'младенец'
      } else if (count2 >= 2 && count2 <= 4) {
        value2 = 'младенца'
      } else {
        value2 = 'младенцев'
      }

      if(count1 === 0 && count2 === 0) {
        input.find('.input__input').val(`${value1}`) 
      } else if (count1 === 0) {
        input.find('.input__input').val(`${count2} ${value2}`)
      } else if (count2 === 0) {
        input.find('.input__input').val(`${count1} ${value1}`)
      } else {
        input.find('.input__input').val(`${count1} ${value1}, ${count2} ${value2}`)
      }
    } else if (input.find('.input__option:first').text() === 'спальни') {
      let value1 = '';
      if (counts[0] === 0) {
        value1 = 'Сколько спален'
      } else if (counts[0] === 1) {
        value1 = 'спальня'
      } else if (counts[0] >= 2 && counts[0] <= 4) {
        value1 = 'спальни'
      } else {
        value1 = 'спален'
      }

      let value2 = '';
      if (counts[1] === 1) {
        value2 = 'кровать'
      } else if (counts[1] >= 2 && counts[1] <= 4) {
        value2 = 'кровати'
      } else {
        value2 = 'кроватей'
      }

      if(counts[0] === 0 && counts[1] === 0) {
        input.find('.input__input').val(`${value1}`) 
      } else if (counts[0] === 0) {
        input.find('.input__input').val(`${counts[1]} ${value2}`)
      } else if (counts[1] === 0) {
        input.find('.input__input').val(`${counts[0]} ${value1}`)
      } else {
        input.find('.input__input').val(`${counts[0]} ${value1}, ${counts[1]} ${value2}...`)
      }
    }
  }

  const input = $(this);

  $(this).find('.input__input').on('click', function() {
    $(this).toggleClass('input__input--border');
    input.find('.input__select-options').toggleClass('input__select-options--display');
  })

  input.find('.button-link2__link:last').on('click', function() {
    input.find('.input__input').toggleClass('input__input--border');
    input.find('.input__select-options').toggleClass('input__select-options--display');
  })

  input.find('.input__btn:nth-child(3)').on('click', function() {
    let value = +$(this).siblings('.input__number').text();
    value++;
    $(this).siblings('.input__number').text(value);
    $(this).siblings('.input__btn').removeClass('input__btn--opacity');
    input.find('.button-link2__link:first').text('очистить');

    setInputValue();
  })
  
  input.find('.input__btn:nth-child(1)').on('click', function() {
    let value = +$(this).siblings('.input__number').text();
    value--;
    if(value <= 0) {
      value = 0;
      $(this).addClass('input__btn--opacity');
    };
    $(this).siblings('.input__number').text(value);

    let total = 0;
    input.find('.input__number').map(function () {
      total += +$(this).text()
    })
    if(total === 0) {
      input.find('.button-link2__link:first').text('');
    }

    setInputValue();
  })

  input.find('.button-link2__link:first').on('click', function() {
    input.find('.input__number').map(function () {
      $(this).text(0);
    })
    $(this).text('');
    input.find('.input__btn:nth-child(1)').addClass('input__btn--opacity');
    input.find('.input__input').val('Сколько гостей')
  })
})

$('#birthdate').each(() => {
  $('#birthdate').on('change', () => {
    const value:string = <string>$('#birthdate').val();
    if(!getBool(value)) {
      $('#birthdate').css('border', '1px solid red');
    } else {
      $('#birthdate').css('border', '1px solid rgba(31, 32, 65, 0.25)');
    }
  });
});

$('.input__submit').on('click', (evt) => {
  evt.preventDefault();
  const value:string = <string>$('#email').val();
  if(!getBoolEmail(value)) {
    $('#email').css('border', '1px solid red');
  } else {
    $('#email').css('border', '1px solid rgba(31, 32, 65, 0.25)');
    $('#email').val('Спасибо!');
  }
})
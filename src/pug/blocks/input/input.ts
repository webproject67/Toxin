import {getBool, getBoolEmail} from '../../../scripts/utils';

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
import {getBoolEmail} from '../../../scripts/utils';

$('.input__form').on('submit', (evt) => {
  evt.preventDefault();
  const input: JQuery<HTMLElement> = $('#email');
  const value:string = <string>input.val();
  if(!getBoolEmail(value)) {
    input.css('border', '1px solid red');
  } else {
    input.css('border', '1px solid rgba(31, 32, 65, 0.25)');
    input.val('Спасибо!');
  }
})
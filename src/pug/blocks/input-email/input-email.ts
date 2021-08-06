import { getBoolEmail } from '../../../scripts/utils';

const handleFormSubmit = (evt: Event) => {
  evt.preventDefault();
  const $input = $('#email');
  const $value = String($input.val());
  if (!getBoolEmail($value)) {
    $input.css('border', '1px solid red');
  } else {
    $input.css('border', '1px solid rgba(31, 32, 65, 0.25)');
    $input.val('Спасибо!');
  }
};

const $form = $('.js-input__form');
$form.on('submit', handleFormSubmit);

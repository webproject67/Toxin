import { getBoolBirthdate } from '../../../scripts/utils';

const handleInputChange = function (this: HTMLElement) {
  const $value = String($(this).val());
  if (!getBoolBirthdate($value)) {
    $(this).css('border', '1px solid red');
  } else {
    $(this).css('border', '1px solid rgba(31, 32, 65, 0.25)');
  }
};

const $birthdate = $('#birthdate');
$birthdate.on('change', handleInputChange);

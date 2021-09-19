interface JQuery {
  handleInputClick: Function;
  handleLinkRightClick: Function;
  handleLinkLeftClick: Function;
  handleBtnPlusClick: Function;
  handleBtnMinusClick: Function;
  handleDocumentClick: Function;
}

const $inputDropdown = $('.js-input-dropdown');
$inputDropdown.find('.input__input').handleInputClick();
$inputDropdown.find('.button-link2:last').handleLinkRightClick();
$inputDropdown.find('.button-link2:first').handleLinkLeftClick();
$inputDropdown.find('.input__btn:nth-child(3)').handleBtnPlusClick();
$inputDropdown.find('.input__btn:nth-child(1)').handleBtnMinusClick();
$(document).handleDocumentClick();

interface JQuery {
  handleInputClick: Function;
  handleLinkRightClick: Function;
  handleLinkLeftClick: Function;
  handleBtnPlusClick: Function;
  handleBtnMinusClick: Function;
  handleDocumentClick: Function;
  uploadedDocument: Function;
}

const $dropdown = $('.js-dropdown-list');
$dropdown.find('.input__text-field').handleInputClick();
$dropdown.find('.button:last').handleLinkRightClick();
$dropdown.find('.button:first').handleLinkLeftClick();
$dropdown.find('.dropdown-list__btn:nth-child(3)').handleBtnPlusClick();
$dropdown.find('.dropdown-list__btn:nth-child(1)').handleBtnMinusClick();
$(document).handleDocumentClick();
$(document).uploadedDocument();

const handleFormSubmit = (evt: Event) => evt.preventDefault();
const $form = $('.js-form');
$form.on('submit', handleFormSubmit);

const handleFormSearchSubmit = () => {
  window.location.href = 'search-room.html';
};
const $formSearch = $('.js-form-search');
$formSearch.on('submit', handleFormSearchSubmit);

const handleFormMockSubmit = () => {
  window.location.href = '/mock-address';
};
const $formMock = $('.js-form-mock-address');
$formMock.on('submit', handleFormMockSubmit);

const handleFormSubmit = (evt: JQuery.SubmitEvent<HTMLElement>) =>
  evt.preventDefault();
const $form = $('.js-form');
$form.on('submit', handleFormSubmit);

const handleFormSearchSubmit = () => (location.href = 'search-room.html');
const $formSearch = $('.js-form-search');
$formSearch.on('submit', handleFormSearchSubmit);

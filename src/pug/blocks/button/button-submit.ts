const handleFormSubmit = (evt: JQuery.SubmitEvent<HTMLElement>) =>
  evt.preventDefault();
const $form: JQuery<HTMLElement> = $('.js-form');
$form.on('submit', handleFormSubmit);

const handleFormSearchSubmit = () => (location.href = 'search-room.html');
const $formSearch: JQuery<HTMLElement> = $('.js-form-search');
$formSearch.on('submit', handleFormSearchSubmit);

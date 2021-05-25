const handleFormSubmit = (evt: JQuery.SubmitEvent<HTMLElement>) => evt.preventDefault();

$('.js-form').on('submit', handleFormSubmit);

const handleFormSearchSubmit = () => location.href = 'search-room.html';

$('.js-form-search').on('submit', handleFormSearchSubmit);
interface JQuery {
  pagination({}): JQuery
}

const $pagination: JQuery<HTMLElement> = $('.js-pagination__nav');
$pagination.pagination({
    items: 15,
    itemsOnPage: 1,
    displayedPages: 3,
    edges: 1,
    prevText: '',
    nextText: 'arrow_forward',
    cssStyle: 'light-theme'
});
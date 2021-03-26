import getNum from '../../../scripts/utils';

$('.slider__slider').slider({
  range: true,
  min: 0,
  max: 15800,
  values: [5000, 10000],
  slide: (evt, ui) => $('.slider__text--color').text(`${getNum(ui.values![0])}₽ - ${getNum(ui.values![1])}₽`)
});
import {getNumSlider} from '../../../scripts/utils';

$('.js-slide__slide').slider({
  range: true,
  min: 0,
  max: 15800,
  values: [5000, 10000],
  slide: (evt, ui) => $('.js-slide__text').text(`${getNumSlider(ui.values![0])}₽ - ${getNumSlider(ui.values![1])}₽`),
  step: 10
});
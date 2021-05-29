import {getNumSlider} from '../../../scripts/utils';

const $slide: JQuery<HTMLElement> = $('.js-slide__slide');
const $slideText: JQuery<HTMLElement> = $('.js-slide__text');
$slide.slider({
  range: true,
  min: 0,
  max: 15800,
  values: [5000, 10000],
  slide: (evt, ui) => $slideText.text(`${getNumSlider(ui.values![0])}₽ - ${getNumSlider(ui.values![1])}₽`),
  step: 10
});
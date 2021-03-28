import {rateButtonsFormElements} from '../../../scripts/data';

$('.button-rate').each((i) => {
  $(`#rate${i + 1}`).addRating({selectedRatings: rateButtonsFormElements[i]});
  $('i.material-icons').removeClass('material-icons').addClass('font-icon font-lg button-rate__icon')
})
const getNumSlider = (num: number) =>
  num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

export default getNumSlider;

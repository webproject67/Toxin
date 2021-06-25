const getBoolEmail = (date: string) => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  date,
);

const getNumSlider = (num: number) => num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

export { getBoolEmail, getNumSlider };

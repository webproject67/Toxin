const getBoolBirthdate = (date:string):boolean => /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/.test(date);

const getBoolEmail = (date:string):boolean => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(date);

const getNumSlider = (num:number):string => num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

export {getBoolBirthdate, getBoolEmail, getNumSlider};
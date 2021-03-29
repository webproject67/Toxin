export const getNum = (num:number):string => num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

export const getBool = (date:string):boolean => /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/.test(date);

export const getBoolEmail = (date:string):boolean => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(date);
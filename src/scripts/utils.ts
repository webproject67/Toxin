export const getNum = (num:number):string => num.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

export const getBool = (date:string):boolean => /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/.test(date);
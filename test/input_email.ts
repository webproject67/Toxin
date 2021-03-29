import {getBoolEmail} from '../src/scripts/utils';

describe('Правильный Email', () => {
  it('webproject67@gmail.com', () => {
    expect(getBoolEmail('webproject67@gmail.com')).toBe(true); 
  });
  
  it('234@mail.ru', () => {
    expect(getBoolEmail('234@mail.ru')).toBe(true); 
  });
});

describe('Неправильный Email', () => {
  it('', () => {
    expect(getBoolEmail('')).toBe(false); 
  });
  
  it(' ', () => {
    expect(getBoolEmail(' ')).toBe(false); 
  });
  
  it('сAбака', () => {
    expect(getBoolEmail('сAбака')).toBe(false); 
  });
 
  it('cat', () => {
    expect(getBoolEmail('cat')).toBe(false); 
  });
  
  it('guru@', () => {
    expect(getBoolEmail('guru@')).toBe(false); 
  });
  
  it('merge@gmail', () => {
    expect(getBoolEmail('merge@gmail')).toBe(false); 
  });
});
import {getBool} from '../src/scripts/utils';

describe('Ввод поля даты правильный', () => {
  it('12.12.2012', () => {
    expect(getBool('12.12.2012')).toBe(true); 
  });
});

describe('Ввод поля даты неправильный', () => {
  it('12,12,2012', () => {
    expect(getBool('12,12,2012')).toBe(false); 
  });
  
  it('12122012', () => {
    expect(getBool('12122012')).toBe(false); 
  });
});
import {getNum} from '../src/scripts/utils';

describe('Ставит пробел после каждого третьего символа в строке', () => {
  it('0 === 0', () => {
    expect(getNum(0)).toBe('0'); 
  });

  it('10 === 10', () => {
    expect(getNum(10)).toBe('10'); 
  });

  it('100 === 100', () => {
    expect(getNum(100)).toBe('100'); 
  });

  it('1000 === 1 000', () => {
    expect(getNum(1000)).toBe('1 000'); 
  });

  it('10000 === 10 000', () => {
    expect(getNum(10000)).toBe('10 000'); 
  });
});
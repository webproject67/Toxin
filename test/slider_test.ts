import getNumSlider from '../src/scripts/utils';

describe('Ставит пробел после каждого третьего символа в строке', () => {
  it('0 === 0', () => {
    expect(getNumSlider(0)).toBe('0');
  });

  it('10 === 10', () => {
    expect(getNumSlider(10)).toBe('10');
  });

  it('100 === 100', () => {
    expect(getNumSlider(100)).toBe('100');
  });

  it('1000 === 1 000', () => {
    expect(getNumSlider(1000)).toBe('1 000');
  });

  it('10000 === 10 000', () => {
    expect(getNumSlider(10000)).toBe('10 000');
  });
});

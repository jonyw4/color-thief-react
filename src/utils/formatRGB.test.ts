import formatRGB from './formatRGB';

const rgbArray: [number, number, number] = [230, 102, 34];

describe('formatRGB', () => {
  test('should return a string of RGB', () => {
    expect(formatRGB(rgbArray, 'rgbString')).toBe('rgb(230, 102, 34)');
  });
  test('should return a string of HEX', () => {
    expect(formatRGB(rgbArray, 'hex')).toBe('#e66622');
  });
  test('should return a array of RGB', () => {
    expect(formatRGB(rgbArray, 'hex')).toBe(rgbArray);
  });
});

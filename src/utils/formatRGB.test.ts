import formatRGB from './formatRGB';

const rgbArray: [number, number, number] = [230, 102, 34];
const red: [number, number, number] = [255, 0, 0];
const hslArray: [number, number, number] = [21, 80, 52];

describe('formatRGB', () => {
  test('should return a string of RGB', () => {
    expect(formatRGB(rgbArray, 'rgbString')).toBe('rgb(230, 102, 34)');
  });
  test('should return a string of HEX', () => {
    expect(formatRGB(rgbArray, 'hex')).toBe('#e66622');
  });
  test('should return a array of RGB', () => {
    expect(formatRGB(rgbArray, 'rgbArray')).toBe(rgbArray);
  });
  test('should return a array of HSL', () => {
    expect(formatRGB(rgbArray, 'hslArray')).toStrictEqual(hslArray);
  });
  test('should return a string of hsl', () => {
    expect(formatRGB(rgbArray, 'hslString')).toBe('hsl(21, 80%, 52%)');
  });
  test('should return a css keyword', () => {
    expect(formatRGB(red, 'keyword')).toBe('red');
  });
});

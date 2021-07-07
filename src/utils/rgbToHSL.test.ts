import rgbToHSL from './rgbToHSL';

describe('rgbToHSL', () => {
  test('should convert rgb to hsl correctly', () => {
    const rgbArray = [230, 102, 34];
    const hsl = rgbToHSL(rgbArray[0], rgbArray[1], rgbArray[2]);
    expect(hsl).toBe([21, 80, 52]);
  });
});

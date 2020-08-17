import rgbToHex from './rgbToHex';

describe('rgbToHex', () => {
  test('should convert rgb to hex correctly', () => {
    const rgbArray = [230, 102, 34];
    const hex = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);
    expect(hex).toBe('#e66622');
  });
});

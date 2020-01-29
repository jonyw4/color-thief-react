import rgbToHex from '../rgbToHex';

describe('fn: rgbToHex', () => {
  test('should return a right hex', () => {
    const rgbArray = [230, 102, 34];
    const hex = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);
    expect(hex).toBe('#e66622');
  });
});

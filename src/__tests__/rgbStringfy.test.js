import rgbStringfy from '../rgbStringfy';

describe('fn: rgbStringfy', () => {
  test('should return a right string of RGB', () => {
    const rgbArray = [230, 102, 34];
    const hex = rgbStringfy(rgbArray[0], rgbArray[1], rgbArray[2]);
    expect(hex).toBe('rgb(230, 102, 34)');
  });
});

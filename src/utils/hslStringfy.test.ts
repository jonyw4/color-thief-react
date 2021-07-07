import hslStringfy from './hslStringfy';

describe('hslStringfy', () => {
  test('should return a right string of HSL', () => {
    const hslArray = [230, 102, 34];
    const hsl = hslStringfy(hslArray[0], hslArray[1], hslArray[2]);
    expect(hsl).toBe('hsl(21, 80%, 52%)');
  });
});

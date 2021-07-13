import hslStringfy from './hslStringfy';

describe('hslStringfy', () => {
  test('should return a right string of HSL', () => {
    const hslArray = [21, 80, 52];
    const hsl = hslStringfy(hslArray);
    expect(hsl).toBe('hsl(21, 80%, 52%)');
  });
});

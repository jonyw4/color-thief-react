import formatHex from './formatHex';

describe('formatHex', () => {
  test('should format a hex string', () => {
    const hex = 'BCC0C7';
    const formattedHex = formatHex(hex);
    expect(formattedHex).toBe('#bcc0c7');
  });
});

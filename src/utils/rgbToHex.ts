/**
 * Transform RGB to HEX
 */
export default function rgbToHex(r: number, g: number, b: number): string {
  function transform(number: number) {
    const hex = number.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }
  return `#${[r, g, b].map(transform).join('')}`;
}

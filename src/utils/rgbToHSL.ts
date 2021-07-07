/**
 * Transform RGB to HSL
 */
export default function rgbToHSL(r: number, g: number, b: number): number[] {
  const _r = r / 255;
  const _g = g / 255;
  const _b = b / 255;
  const max = Math.max(_r, _g, _b);
  const min = Math.min(_r, _g, _b);
  let h = 0;
  let s = 0;
  const v = max;
  if (max != min) {
    const delta = max - min;
    s = delta / max;
    switch (max) {
      case _r:
        h = (_g - _b) / delta + (g < b ? 6 : 0);
        break;
      case _g:
        h = (_b - _r) / delta + 2;
        break;
      case _b:
        h = (_r - _g) / delta + 4;
        break;
    }
  }
  return [Math.round(h * 60), Math.round(s * 100), Math.round(v * 100)];
}

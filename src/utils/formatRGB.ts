import rgbStringfy from './rgbStringfy';
import hslStringfy from './hslStringfy';
import rgbToHex from './rgbToHex';
import rgbToHSL from './rgbToHSL';
import type { ColorFormats, ArrayRGB } from '../types';

/**
 * Transform a RGB Array to another color format
 */
export default function formatRGB<T extends ColorFormats>(
  arrayRGB: ArrayRGB,
  format: T
): T extends 'rgbArray' ? ArrayRGB : string {
  const responses: { [key in ColorFormats]: () => any } = {
    rgbString: () => rgbStringfy(...arrayRGB),
    hex: () => rgbToHex(...arrayRGB),
    rgbArray: () => arrayRGB,
    hslString: () => hslStringfy(rgbToHSL(...arrayRGB)),
    hslArray: () => rgbToHSL(...arrayRGB),
  };

  return responses[format]();
}

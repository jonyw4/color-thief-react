import rgbStringfy from './rgbStringfy';
import rgbToHex from './rgbToHex';
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
    rgbArray: () => arrayRGB
  };

  return responses[format]();
}

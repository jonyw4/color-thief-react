import { ArrayRGB } from 'colorthief/dist/color-thief.umd.js';
import rgbStringfy from './rgbStringfy';
import rgbToHex from './rgbToHex';
import type { ColorFormats } from '../types';

/**
 * Transform a RGB Array to another color format
 */
export default function formatRGB(
  arrayRGB: ArrayRGB,
  format: ColorFormats
): string | ArrayRGB {
  const responses: { [key in ColorFormats]: string | ArrayRGB } = {
    rgbString: rgbStringfy(...arrayRGB),
    hex: rgbToHex(...arrayRGB),
    rgbArray: arrayRGB
  };

  return responses[format];
}

import convert from 'color-convert';
import rgbStringfy from './rgbStringfy';
import hslStringfy from './hslStringfy';
import type { ColorFormats, ArrayRGB } from '../types';
import formatHex from './formatHex';

/**
 * Transform a RGB Array to another color format
 */
export default function formatRGB<T extends ColorFormats>(
  arrayRGB: ArrayRGB,
  format: T
): T extends 'rgbArray' ? ArrayRGB : string {
  const responses: { [key in ColorFormats]: () => any } = {
    rgbString: () => rgbStringfy(...arrayRGB),
    hex: () => formatHex(convert.rgb.hex(...arrayRGB)),
    rgbArray: () => arrayRGB,
    hslString: () => hslStringfy(convert.rgb.hsl(...arrayRGB)),
    hslArray: () => convert.rgb.hsl(...arrayRGB),
    keyword: () => convert.rgb.keyword(...arrayRGB)
  };

  return responses[format]();
}

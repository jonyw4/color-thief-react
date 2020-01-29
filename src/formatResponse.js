import rgbStringfy from './rgbStringfy';
import rgbToHex from './rgbToHex';

export default function formatResponse(arrayRGB, format) {
  switch (format) {
    case 'rgbString':
      return rgbStringfy(arrayRGB[0], arrayRGB[1], arrayRGB[2]);
    case 'hex':
      return rgbToHex(arrayRGB[0], arrayRGB[1], arrayRGB[2]);
    default:
      return arrayRGB;
  }
}

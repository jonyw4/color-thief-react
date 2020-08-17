import ColorThief, { ArrayRGB } from 'colorthief/dist/color-thief.umd.js';
import { loadImage, formatRGB } from '.';
import type { ColorFormats } from '../types';

/**
 * Get a list of colors from img url
 */
export default async function getColorsPaletteFromImgUrl(
  imgUrl: string,
  colorCount = 2,
  format: ColorFormats = 'rgbString',
  crossOrigin: string | null = null,
  quality = 10
): Promise<(string | ArrayRGB)[]> {
  const img = await loadImage(imgUrl, crossOrigin);
  const cf = new ColorThief();
  const arrayRGB = cf.getPalette(img, colorCount, quality);

  return arrayRGB.map((color) => formatRGB(color, format));
}

import ColorThief from 'colorthief/dist/color-thief.umd.js';
import { loadImage, formatRGB } from '.';
import { ColorFormats, ArrayRGB } from '../types';

/**
 * Get a list of colors from img url
 */
export default async function getColorsPaletteFromImgUrl<
  T extends ColorFormats
>(
  imgUrl: string,
  colorCount = 2,
  format: T,
  crossOrigin: string | null = null,
  quality = 10
): Promise<(T extends 'rgbArray' ? ArrayRGB : string)[]> {
  const img = await loadImage(imgUrl, crossOrigin);
  const cf = new ColorThief();
  const arrayRGB = cf.getPalette(img, colorCount, quality);

  return arrayRGB.map((color) => formatRGB(color, format));
}

import ColorThief from 'colorthief/dist/color-thief.umd.js';
import { loadImage, formatRGB } from '.';
import type { ColorFormats, ArrayRGB } from '../types';

export default async function getPredominantColorFromImgURL<
  T extends ColorFormats
>(
  imgSrc: string,
  format: T,
  crossOrigin: string | null = null,
  quality = 10
): Promise<T extends 'rgbArray' ? ArrayRGB : string> {
  const img = await loadImage(imgSrc, crossOrigin);
  const ct = new ColorThief();
  const arrayRGB = ct.getColor(img, quality);
  return formatRGB(arrayRGB, format);
}

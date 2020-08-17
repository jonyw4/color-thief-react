import ColorThief, { ArrayRGB } from 'colorthief/dist/color-thief.umd.js';
import { loadImage, formatRGB } from '.';
import type { ColorFormats } from '../types';

export default async function getPredominantColorFromImgURL(
  imgSrc: string,
  format: ColorFormats = 'rgbString' as const,
  crossOrigin: string | null = null,
  quality = 10
): Promise<string | ArrayRGB> {
  const img = await loadImage(imgSrc, crossOrigin);
  const ct = new ColorThief();
  const arrayRGB = ct.getColor(img, quality);
  return formatRGB(arrayRGB, format);
}

/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */

import ColorThief from 'colorthief/dist/color-thief.umd.js';
import formatResponse from '../formatResponse';
import loadImage from '../loadImage';

/**
 * Get the main color from a URL image
 * @param {String} imgSrc
 * @param {String} format
 * @param {String} crossOrigin
 * @param {Number} quality
 * @returns {Promise} Promise object represents a clArray representing [R, G, B]
 */
export default async function getColor(
  imgSrc,
  format = 'rgbString',
  crossOrigin = null,
  quality = 10,
) {
  const img = await loadImage(imgSrc, crossOrigin);
  const colorthief = new ColorThief();
  const arrayRGB = colorthief.getColor(img, quality);
  return formatResponse(arrayRGB, format);
}

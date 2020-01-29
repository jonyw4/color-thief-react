/**
 * Load a image like a browser
 * @param {String} url
 * @param {String} crossOrigin
 * @returns {Promise} Promise object that returns a image
 */
export default function loadImage(url, crossOrigin = undefined) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`Failed to load image's URL: ${url}`));
    });
    img.crossOrigin = crossOrigin;
    img.src = url;
  });
}

/**
 * Load a image in a promise
 */
export default function loadImage(
  url: string,
  crossOrigin: string | null = null
): Promise<HTMLImageElement> {
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

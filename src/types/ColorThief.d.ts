declare module 'colorthief/dist/color-thief.umd.js' {
  type ArrayRGB = [number, number, number];
  export default class ColorThief {
    /**
     * Use the median cut algorithm provided by quantize.js to cluster similar
     * colors and return the base color from the largest cluster.
     *
     * Quality is an optional argument. It needs to be an integer. 1 is the highest quality settings.
     * 10 is the default. There is a trade-off between quality and speed. The bigger the number, the
     * faster a color will be returned but the greater the likelihood that it will not be the visually most dominant color.
     * */
    getColor(sourceImage: HTMLImageElement, quality?: number): ArrayRGB;

    /**
     *
     * Use the median cut algorithm provided by quantize.js to cluster similar colors.
     *
     * colorCount determines the size of the palette; the number of colors returned. If not set, it
     * defaults to 10.
     *
     * quality is an optional argument. It needs to be an integer. 1 is the highest quality settings.
     * 10 is the default. There is a trade-off between quality and speed. The bigger the number, the
     * faster the palette generation but the greater the likelihood that colors will be missed.
     */
    getPalette(
      sourceImage: HTMLImageElement,
      colorCount?: number,
      quality?: number
    ): ArrayRGB[];

    getColorFromUrl(
      imageUrl: string,
      callback: (dominantColor: ArrayRGB, imageUrl: string) => any,
      quality?: number
    ): void;
    getImageData(imageUrl: string, callback: (imageData: string) => any): void;
    getColorAsync(
      imageUrl: string,
      callback: (dominantColor: ArrayRGB, ColorThief: this) => any,
      quality?: number
    ): void;
  }
}

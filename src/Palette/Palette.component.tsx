import * as React from 'react';
import { ColorFormats, ReducerState, ArrayRGB } from '../types';
import usePalette from './usePalette';

function Palette<
  F extends ColorFormats,
  S extends ReducerState<F extends 'rgbArray' ? ArrayRGB[] : string[]>
>({
  src,
  colorCount = 2,
  format,
  crossOrigin = undefined,
  quality = 10,
  children
}: PaletteProps<F, S>): JSX.Element {
  const state: S = usePalette(src, colorCount, format, {
    crossOrigin,
    quality
  });

  return <>{children(state)}</>;
}

export type PaletteProps<
  F extends ColorFormats,
  S extends ReducerState<F extends 'rgbArray' ? ArrayRGB[] : string[]>
> = {
  /**
   * Count of colors of the palette
   */
  colorCount?: number;
  /**
   * Link of the image
   */
  src: string;
  /**
   * Format of the response.
   */
  format: F;
  /**
   * Tag cross-origin for image
   */
  crossOrigin?: string;
  /**
   * Quality determines how many pixels are skipped before the nex one is sampled.We rarely need to sample every single pixel in the image to get good results. The bigger the number, the faster a value will be returned. Read more in https://lokeshdhakar.com/projects/color-thief/
   */
  quality?: number;
  children: (state: S) => React.ReactNode;
};

export default Palette;

import React from 'react';
import { ColorFormats } from 'types';
import useColor, { UseColorState } from './useColor';

function Color({
  src,
  format = 'rgbString',
  crossOrigin = undefined,
  quality = 10,
  children
}: ColorProps): JSX.Element {
  const state = useColor(src, format, { crossOrigin, quality });

  return <>{children(state)}</>;
}

export type ColorProps = {
  /**
   * Link of the image
   */
  src: string;
  /**
   * Format of the response.
   */
  format?: ColorFormats;
  /**
   * Tag cross-origin for image
   */
  crossOrigin?: string;
  /**
   * Quality determines how many pixels are skipped before the nex one is sampled.We rarely need to sample every single pixel in the image to get good results. The bigger the number, the faster a value will be returned. Read more in https://lokeshdhakar.com/projects/color-thief/
   */
  quality?: number;
  children: (state: UseColorState) => React.ReactNode;
};

export default Color;

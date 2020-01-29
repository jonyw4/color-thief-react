import React from 'react';
import PropTypes from 'prop-types';
import usePalette from './usePalette';

const Palette = ({
  src, colorCount, format, crossOrigin, quality, children,
}) => {
  const palette = usePalette(src, colorCount, format, { crossOrigin, quality });

  return <>{children(palette)}</>;
};

Palette.defaultProps = {
  format: 'rgbString',
  colorCount: 2,
  crossOrigin: null,
  quality: 10,
};

Palette.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  /**
   * Required. Link of the image
   */
  src: PropTypes.string.isRequired,

  /**
   * Format of the response. Can be 'rgbToString' or 'rgbToArray' or 'hex'
   */
  format: PropTypes.oneOf(['rgbString', 'rgbArray', 'hex']),

  /**
   * Count of colors of the palette
   */
  colorCount: PropTypes.number,

  /**
   * Tag cross-origin for image
   */
  crossOrigin: PropTypes.string,

  /**
   * Quality determines how many pixels are skipped before the nex one is sampled.We rarely need to sample every single pixel in the image to get good results. The bigger the number, the faster a value will be returned. Read more in https://lokeshdhakar.com/projects/palette-thief/
   */
  quality: PropTypes.number,
};

export default Palette;

import React from 'react';
import PropTypes from 'prop-types';
import useColor from './useColor';

const Color = ({
  src,
  format,
  crossOrigin,
  quality,
  children,
}) => {
  const color = useColor(src, format, { crossOrigin, quality });

  return <>{children(color)}</>;
};

Color.defaultProps = {
  format: 'rgbString',
  crossOrigin: null,
  quality: 10,
};

Color.propTypes = {
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
   * Tag cross-origin for image
   */
  crossOrigin: PropTypes.string,

  /**
   * Quality determines how many pixels are skipped before the nex one is sampled.We rarely need to sample every single pixel in the image to get good results. The bigger the number, the faster a value will be returned. Read more in https://lokeshdhakar.com/projects/color-thief/
   */
  quality: PropTypes.number,
};

export default Color;

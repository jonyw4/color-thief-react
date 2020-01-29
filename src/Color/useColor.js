import { useEffect, useReducer } from 'react';
import getColor from './getColor';

const initialState = {
  loading: true,
  data: null,
  error: undefined,
};

/**
 * useColor reducer
 * @param {object} state
 * @param {object} action
 */
function reducer(state, action) {
  switch (action.type) {
    case 'getColor':
      return initialState;
    case 'resolveColor':
      return { ...state, data: action.payload, loading: false };
    case 'rejectColor':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

/**
 * React hook for useColor from colorThief
 * @param {String} imgSrc
 * @param {String} format
 * @param {String} crossOrigin
 * @param {Number} quality
 */
export default function useColor(
  imgSrc,
  format = 'rgbString',
  options = {},
) {
  const { crossOrigin = null, quality = 10 } = options;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'getColor' });

    getColor(imgSrc, format, crossOrigin, quality)
      .then((color) => {
        dispatch({ type: 'resolveColor', payload: color });
      })
      .catch((ex) => {
        dispatch({ type: 'rejectColor', payload: ex });
      });
  }, [imgSrc]);

  return state;
}

import { useCurrentEffect } from 'use-current-effect';
import { useReducer } from 'react';
import {
  getPredominantColorFromImgURL,
  reducer,
  initialReducerState
} from '../utils';
import { ColorFormats, ReducerState, UnwrapPromise } from '../types';

export type UseColorState = ReducerState<
  UnwrapPromise<ReturnType<typeof getPredominantColorFromImgURL>>
>;

/**
 * React Hook to use get color from img url
 */
export default function useColor(
  imgSrc: string,
  format: ColorFormats = 'rgbString',
  options: { crossOrigin?: string; quality?: number } = {}
): UseColorState {
  const { crossOrigin = null, quality = 10 } = options;

  const [state, dispatch] = useReducer(
    reducer,
    <UseColorState>initialReducerState
  );

  useCurrentEffect(
    (isCurrent) => {
      dispatch({ type: 'start', payload: null });

      getPredominantColorFromImgURL(imgSrc, format, crossOrigin, quality)
        .then((color) => {
          if (isCurrent()) {
            dispatch({ type: 'resolve', payload: color });
          }
        })
        .catch((ex) => {
          if (isCurrent()) {
            dispatch({ type: 'reject', payload: ex });
          }
        });
    },
    [imgSrc]
  );

  return state;
}

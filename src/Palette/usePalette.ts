import { useCurrentEffect } from 'use-current-effect';
import { useReducer } from 'react';
import {
  getColorsPaletteFromImgUrl,
  reducer,
  initialReducerState
} from '../utils';
import { ColorFormats, ReducerState } from 'types';

export type UsePaletteState = ReducerState<
  ReturnType<typeof getColorsPaletteFromImgUrl>
>;

/**
 * React Hook to get palette color from img url
 */
export default function usePalette(
  imgSrc: string,
  colorCount = 2,
  format: ColorFormats = 'rgbString',
  options: { crossOrigin?: string; quality?: number } = {}
): UsePaletteState {
  const { crossOrigin = null, quality = 10 } = options;

  const [state, dispatch] = useReducer(
    reducer,
    <UsePaletteState>initialReducerState
  );

  useCurrentEffect(
    (isCurrent) => {
      dispatch({ type: 'start', payload: null });

      getColorsPaletteFromImgUrl(
        imgSrc,
        colorCount,
        format,
        crossOrigin,
        quality
      )
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

import * as React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import Color from './Color.component';

describe('Color', () => {
  const src = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
  const timeout = 15000;

  test(
    'should be a children with rgb array',
    async () => {
      const format = 'rgbArray';
      const children = jest.fn(() => <></>);
      await act(async () => {
        render(
          <Color
            src={src}
            format={format}
            children={children}
            crossOrigin="Anonymous"
          />
        );
      });

      expect(children).toHaveBeenCalledWith({
        loading: true,
        error: undefined,
        data: undefined
      });

      await waitFor(() => expect(children).toHaveBeenCalledTimes(2), {
        timeout
      });

      expect(children).toHaveBeenCalledWith({
        loading: false,
        error: undefined,
        data: [199, 203, 205]
      });
    },
    timeout
  );

  test(
    'should be a children with rgb string',
    async () => {
      const format = 'rgbString';
      const children = jest.fn(() => <></>);
      await act(async () => {
        render(
          <Color
            src={src}
            format={format}
            children={children}
            crossOrigin="Anonymous"
          />
        );
      });

      expect(children).toHaveBeenCalledWith({
        loading: true,
        error: undefined,
        data: undefined
      });

      await waitFor(() => expect(children).toHaveBeenCalledTimes(2), {
        timeout
      });

      expect(children).toHaveBeenCalledWith({
        loading: false,
        error: undefined,
        data: 'rgb(199, 203, 205)'
      });
    },
    timeout
  );

  test(
    'should be a children with hex',
    async () => {
      const format = 'hex';
      const children = jest.fn(() => <></>);
      await act(async () => {
        render(
          <Color
            src={src}
            format={format}
            children={children}
            crossOrigin="Anonymous"
          />
        );
      });

      expect(children).toHaveBeenCalledWith({
        loading: true,
        error: undefined,
        data: undefined
      });

      await waitFor(() => expect(children).toHaveBeenCalledTimes(2), {
        timeout
      });

      expect(children).toHaveBeenCalledWith({
        loading: false,
        error: undefined,
        data: '#c7cbcd'
      });
    },
    timeout
  );
  test(
    'should try to get color from a inexistent image and return error',
    async () => {
      const children = jest.fn(() => <></>);
      await act(async () => {
        render(
          <Color
            src="error.jpg"
            format="hex"
            children={children}
            crossOrigin="Anonymous"
          />
        );
      });

      expect(children).toHaveBeenCalledWith({
        loading: true,
        error: undefined,
        data: undefined
      });

      await waitFor(() => expect(children).toHaveBeenCalledTimes(2), {
        timeout
      });

      expect(children).toHaveBeenCalledWith({
        loading: false,
        error: new Error(
          'Color Thief React | Failed to load image URL: error.jpg'
        ),
        data: undefined
      });
    },
    timeout
  );
});

import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import Palette from './Palette.component';

describe('Palette', () => {
  const src = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
  const timeout = 10000;

  test(
    'should be a children with rgb array',
    async () => {
      const format = 'rgbArray';
      const children = jest.fn(() => <></>);

      await act(async () => {
        render(
          <Palette
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
        data: [
          [188, 192, 199],
          [97, 61, 122]
        ]
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
          <Palette
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
        data: ['rgb(188, 192, 199)', 'rgb(97, 61, 122)']
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
          <Palette
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
        data: ['#bcc0c7', '#613d7a']
      });
    },
    timeout
  );

  test(
    'should be a children with hex with 4 colors',
    async () => {
      const format = 'hex';
      const children = jest.fn(() => <></>);

      await act(async () => {
        render(
          <Palette
            src={src}
            format={format}
            children={children}
            colorCount={4}
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
        data: ['#c0c3c8', '#613d7a', '#5b6fa1', '#966a59']
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
          <Palette
            src="error.jpg"
            children={children}
            crossOrigin="Anonymous"
            format="rgbArray"
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

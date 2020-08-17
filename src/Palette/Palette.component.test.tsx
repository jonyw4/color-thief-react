/* eslint-disable react/no-children-prop */
import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import Palette from './Pallete.component';

describe('Palette', () => {
  const src = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
  const timeout = 10000;

  test(
    'should be a children with default format',
    async () => {
      const children = jest.fn(() => null);

      await act(async () => {
        render(
          <Palette src={src} children={children} crossOrigin="Anonymous" />
        );
      });

      expect(children).toHaveBeenCalledWith({
        loading: true,
        error: undefined,
        data: []
      });

      await waitFor(() => expect(children).toHaveBeenCalledTimes(2), {
        timeout
      });

      expect(children).toHaveBeenCalledWith({
        loading: false,
        error: undefined,
        data: ''
      });
    },
    timeout
  );

  test(
    'should be a children with rgb array',
    async () => {
      const format = 'rgbArray';
      const children = jest.fn(() => null);

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
        data: []
      });

      await waitFor(() => expect(children).toHaveBeenCalledTimes(2), {
        timeout
      });

      expect(children).toHaveBeenCalledWith({
        loading: false,
        error: undefined,
        data: ''
      });
    },
    timeout
  );

  test(
    'should be a children with rgb string',
    async () => {
      const format = 'rgbString';
      const children = jest.fn(() => null);

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
        data: []
      });

      await waitFor(() => expect(children).toHaveBeenCalledTimes(2), {
        timeout
      });

      expect(children).toHaveBeenCalledWith({
        loading: false,
        error: undefined,
        data: ''
      });
    },
    timeout
  );

  test(
    'should be a children with hex',
    async () => {
      const format = 'hex';
      const children = jest.fn(() => null);

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
        data: []
      });

      await waitFor(() => expect(children).toHaveBeenCalledTimes(2), {
        timeout
      });

      expect(children).toHaveBeenCalledWith({
        loading: false,
        error: undefined,
        data: ''
      });
    },
    timeout
  );

  test(
    'should be a children with hex with 4 colors',
    async () => {
      const format = 'hex';
      const children = jest.fn(() => null);

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
        data: []
      });

      await waitFor(() => expect(children).toHaveBeenCalledTimes(2), {
        timeout
      });

      expect(children).toHaveBeenCalledWith({
        loading: false,
        error: undefined,
        data: ''
      });
    },
    timeout
  );
});

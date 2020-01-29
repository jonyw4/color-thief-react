/* eslint-disable react/no-children-prop */
import React from 'react';
import { render, wait, act } from '@testing-library/react';
import { Palette, getPalette } from '../..';

describe('Palette', () => {
  const src = 'https://i.picsum.photos/id/237/536/354.jpg';
  const timeout = 10000;

  test('should be a children with default format', async () => {
    const format = 'rgbString';
    const children = jest.fn(() => null);
    const colors = await getPalette(src, 2, format, 'Anonymous');

    await act(async () => {
      render(
        <Palette
          src={src}
          children={children}
          crossOrigin="Anonymous"
        />,
      );
    });

    expect(children).toHaveBeenCalledWith({
      loading: true,
      error: undefined,
      data: [],
    });

    await wait(() => expect(children).toHaveBeenCalledTimes(2));

    expect(children).toHaveBeenCalledWith({
      loading: false,
      error: undefined,
      data: colors,
    });
  }, timeout);

  test('should be a children with rgb array', async () => {
    const format = 'rgbArray';
    const children = jest.fn(() => null);
    const palette = await getPalette(src, 2, format, 'Anonymous');

    await act(async () => {
      render(
        <Palette
          src={src}
          format={format}
          children={children}
          crossOrigin="Anonymous"
        />,
      );
    });

    expect(children).toHaveBeenCalledWith({
      loading: true,
      error: undefined,
      data: [],
    });

    await wait(() => expect(children).toHaveBeenCalledTimes(2));

    expect(children).toHaveBeenCalledWith({
      loading: false,
      error: undefined,
      data: palette,
    });
  }, timeout);

  test('should be a children with rgb string', async () => {
    const format = 'rgbString';
    const children = jest.fn(() => null);
    const palette = await getPalette(src, 2, format, 'Anonymous');

    await act(async () => {
      render(
        <Palette
          src={src}
          format={format}
          children={children}
          crossOrigin="Anonymous"
        />,
      );
    });

    expect(children).toHaveBeenCalledWith({
      loading: true,
      error: undefined,
      data: [],
    });

    await wait(() => expect(children).toHaveBeenCalledTimes(2));

    expect(children).toHaveBeenCalledWith({
      loading: false,
      error: undefined,
      data: palette,
    });
  }, timeout);

  test('should be a children with hex', async () => {
    const format = 'hex';
    const children = jest.fn(() => null);
    const palette = await getPalette(src, 2, format, 'Anonymous');

    await act(async () => {
      render(
        <Palette
          src={src}
          format={format}
          children={children}
          crossOrigin="Anonymous"
        />,
      );
    });

    expect(children).toHaveBeenCalledWith({
      loading: true,
      error: undefined,
      data: [],
    });

    await wait(() => expect(children).toHaveBeenCalledTimes(2));

    expect(children).toHaveBeenCalledWith({
      loading: false,
      error: undefined,
      data: palette,
    });
  }, timeout);

  test('should be a children with hex with 4 colors', async () => {
    const format = 'hex';
    const colorCount = 4;
    const children = jest.fn(() => null);
    const palette = await getPalette(src, colorCount, format, 'Anonymous');

    await act(async () => {
      render(
        <Palette
          src={src}
          format={format}
          children={children}
          colorCount={4}
          crossOrigin="Anonymous"
        />,
      );
    });

    expect(children).toHaveBeenCalledWith({
      loading: true,
      error: undefined,
      data: [],
    });

    await wait(() => expect(children).toHaveBeenCalledTimes(2));

    expect(children).toHaveBeenCalledWith({
      loading: false,
      error: undefined,
      data: palette,
    });
  }, timeout);
});

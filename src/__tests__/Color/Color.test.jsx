/* eslint-disable react/no-children-prop */
import React from 'react';
import { render, act, wait } from '@testing-library/react';
import { Color, getColor } from '../..';

describe('Color', () => {
  const src = 'https://i.picsum.photos/id/237/536/354.jpg';
  const timeout = 10000;

  test('should be a children with default format', async () => {
    const format = 'rgbString';
    const children = jest.fn(() => null);
    const color = await getColor(src, format, 'Anonymous');

    await act(async () => {
      render(
        <Color
          src={src}
          children={children}
          crossOrigin="Anonymous"
        />,
      );
    });

    expect(children).toHaveBeenCalledWith({
      loading: true,
      error: undefined,
      data: null,
    });

    await wait(() => expect(children).toHaveBeenCalledTimes(2));

    expect(children).toHaveBeenCalledWith({
      loading: false,
      error: undefined,
      data: color,
    });
  }, timeout);

  test('should be a children with rgb array', async () => {
    const format = 'rgbArray';
    const children = jest.fn(() => null);
    const color = await getColor(src, format, 'Anonymous');

    await act(async () => {
      render(
        <Color
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
      data: null,
    });

    await wait(() => expect(children).toHaveBeenCalledTimes(2));

    expect(children).toHaveBeenCalledWith({
      loading: false,
      error: undefined,
      data: color,
    });
  }, timeout);

  test('should be a children with rgb string', async () => {
    const format = 'rgbString';
    const children = jest.fn(() => null);
    const color = await getColor(src, format, 'Anonymous');

    await act(async () => {
      render(
        <Color
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
      data: null,
    });

    await wait(() => expect(children).toHaveBeenCalledTimes(2));

    expect(children).toHaveBeenCalledWith({
      loading: false,
      error: undefined,
      data: color,
    });
  }, timeout);

  test('should be a children with hex', async () => {
    const format = 'hex';
    const children = jest.fn(() => null);
    const color = await getColor(src, format, 'Anonymous');

    await act(async () => {
      render(
        <Color
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
      data: null,
    });

    await wait(() => expect(children).toHaveBeenCalledTimes(2));

    expect(children).toHaveBeenCalledWith({
      loading: false,
      error: undefined,
      data: color,
    });
  }, timeout);
});

import { getPalette } from '../..';

describe('getPalette', () => {
  test('return default values', async () => {
    const src = 'https://i.picsum.photos/id/237/536/354.jpg';
    const actual = await getPalette(src, 'rgbString', 'Anonymous');

    expect(actual).toMatchSnapshot();
  });
});

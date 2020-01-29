import { getColor } from '../..';

describe('getColor', () => {
  test('return default values', async () => {
    const src = 'https://i.picsum.photos/id/237/536/354.jpg';
    const actual = await getColor(src, 'rgbString', 'Anonymous');

    expect(actual).toMatchSnapshot();
  });
});

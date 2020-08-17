import getColorsPaletteFromImgUrl from './getColorsPaletteFromImgUrl';

describe('getColorsPaletteFromImgUrl', () => {
  it('should get a palette of colors from a image url', async () => {
    const src = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
    await expect(
      getColorsPaletteFromImgUrl(src, 3, 'rgbString', 'Anonymous')
    ).resolves.toEqual([
      'rgb(192, 195, 200)',
      'rgb(97, 61, 122)',
      'rgb(91, 111, 161)'
    ]);
  });
});

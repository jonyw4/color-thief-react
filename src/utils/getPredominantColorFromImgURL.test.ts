import getPredominantColorFromImgURL from './getPredominantColorFromImgURL';

describe('getPredominantColorFromImgURL', () => {
  it('should get a color from a image url', async () => {
    const src = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
    await expect(
      getPredominantColorFromImgURL(src, 'rgbString', 'Anonymous')
    ).resolves.toBe('rgb(199, 203, 205)');
  });
});

import loadImage from './loadImage';

describe('loadImage', () => {
  test('should try to load a image and load correctly', async () => {
    const img = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
    await expect(loadImage(img)).resolves.toMatchSnapshot();
  });
  test('should try load a false image and throw an error', async () => {
    const img = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.jpg';
    await expect(loadImage(img)).rejects.toThrow(Error);
  });
});

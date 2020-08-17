import loadImage from './loadImage';

describe('loadImage', () => {
  const events: Partial<
    {
      [key in keyof WindowEventMap]: jest.Mock;
    }
  > = {};

  beforeEach(() => {
    const events = {};
    window.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });
  });
  test('should try to load a image and load correctly', async () => {
    events.load?.mockImplementation(() => true);
    await expect(
      loadImage('https://i.picsum.photos/id/237/536/354.jpg')
    ).resolves.toBe('');
  });
  test('should try load a image and throw an error', async () => {
    events.load?.mockImplementation(() => true);
    events.error?.mockImplementation(() => true);
    await expect(
      loadImage('https://i.picsum.photos/id/237/536/354.jpg')
    ).rejects.toThrow(Error);
  });
});

import delay from '../../../../src/libs/delay';

describe('delay', () => {
  it('should call setTimeout', async () => {
    jest.spyOn(window, 'setTimeout');
    await delay();
    expect(window.setTimeout).toHaveBeenCalled();
  });
});

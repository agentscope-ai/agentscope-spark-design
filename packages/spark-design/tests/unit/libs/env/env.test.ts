import { getLang, isCN } from '../../../../src/libs/env';

describe('env utils', () => {
  it('should get language', () => {
    expect(getLang()).toBe('zh-CN');
  });

  it('should check if is Chinese', () => {
    expect(isCN()).toBe(true);
  });
});

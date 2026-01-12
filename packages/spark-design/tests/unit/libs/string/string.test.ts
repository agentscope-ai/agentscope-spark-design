import {
  base64Decoder,
  base64Encoder,
  parseJsonSafely,
} from '../../../../src/libs/string';

describe('string utils', () => {
  const data = {
    name: '张三',
  };
  const str = '{"name":"张三"}';
  const encodedStr = 'eyJuYW1lIjoi5byg5LiJIn0=';

  it('should parse JSON safely', () => {
    expect(parseJsonSafely(str)).toEqual(data);
  });

  it('should encode string to base64', () => {
    expect(base64Encoder(str)).toEqual(encodedStr);
  });

  it('should decode base64 to string', () => {
    expect(base64Decoder(encodedStr)).toEqual(str);
  });
});

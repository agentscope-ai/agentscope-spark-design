import { clearData, getDataProp, JsonParse } from '../../../../src/libs/data';

describe('data utils', () => {
  const data = {
    name: '张三',
  };

  it('should get data property', () => {
    expect(getDataProp(data, 'name')).toEqual('张三');
  });

  it('should parse JSON', () => {
    const str = '{"name":"张三"}';
    expect(JsonParse(str)).toEqual(data);
  });

  it('should clear data', () => {
    const originData = {
      name: '张三',
      class: 'BaseData',
    };
    expect(clearData(originData)).toEqual(data);
  });
});

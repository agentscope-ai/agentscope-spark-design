import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { waitForDom, waitForFunc } from '../../../../src/libs/waitFor';

describe('waitFor utils', () => {
  afterEach(cleanup);

  it('should wait for function condition', async () => {
    let count = 0;
    await waitForFunc(
      () => {
        count += 1;
        return count > 2;
      },
      { intervalTime: 1 },
    );
    expect(count).toBe(3);
  });

  it('should wait for DOM element', async () => {
    function Demo() {
      const [show, setShow] = useState(false);
      useEffect(() => {
        setTimeout(() => {
          setShow(true);
        }, 50);
      }, []);
      return show ? <div id="test">已展示</div> : null;
    }
    const { container } = render(<Demo />);
    expect(container.querySelector('#test')).toBeNull();
    await waitForDom('#test');
    expect(container.querySelector('#test')).toBeTruthy();
  });
});

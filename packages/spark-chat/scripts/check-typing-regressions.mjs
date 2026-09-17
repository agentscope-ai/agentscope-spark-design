import { buildSync } from 'esbuild';
import assert from 'node:assert/strict';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const result = buildSync({
  entryPoints: [
    fileURLToPath(
      new URL(
        '../components/Markdown/core/hooks/typingController.ts',
        import.meta.url,
      ),
    ),
  ],
  bundle: true,
  write: false,
  platform: 'node',
  format: 'esm',
});
const { createTypingController } = await import(
  `data:text/javascript;base64,${Buffer.from(
    result.outputFiles[0].text,
  ).toString('base64')}`
);

function setup(t) {
  t.mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 1000 });
  const output = [];
  const controller = createTypingController((text) => output.push(text));
  t.after(() => controller.stop());
  return { controller, output, tick: (ms = 10) => t.mock.timers.tick(ms) };
}

test('idle gaps do not make the next chunk appear at once', (t) => {
  const { controller, output, tick } = setup(t);
  controller.update('', 10);
  tick(60_000);
  controller.update('你好吗', 10);
  assert.deepEqual(output, []);
  tick();
  assert.deepEqual(output, ['你']);
  tick();
  tick();
  assert.equal(output.at(-1), '你好吗');
  tick(60_000);
  controller.update('你好吗朋友', 10);
  assert.equal(output.at(-1), '你好吗');
  tick();
  assert.equal(output.at(-1), '你好吗朋');
  tick();
  assert.equal(output.at(-1), '你好吗朋友');
});

test('frequent incoming chunks cannot starve the display timer', (t) => {
  const { controller, output, tick } = setup(t);
  controller.update('a', 10);
  tick(3);
  controller.update('ab', 10);
  tick(3);
  controller.update('abc', 10);
  tick(4);
  assert.deepEqual(output, ['a']);
  tick();
  tick();
  assert.equal(output.at(-1), 'abc');
});

test('emoji surrogate pairs are never partially rendered', (t) => {
  const { controller, output, tick } = setup(t);
  controller.update('😀中𠮷', 10);
  tick();
  tick();
  tick();
  assert.deepEqual(output, ['😀', '😀中', '😀中𠮷']);
});

test('a replacement or shortened document clears the previous queue', (t) => {
  const { controller, output, tick } = setup(t);
  controller.update('abcdef', 10);
  tick();
  tick();
  controller.update('XYZ', 10);
  assert.equal(output.at(-1), '');
  tick();
  assert.equal(output.at(-1), 'X');
  controller.update('', 10);
  tick(100);
  assert.equal(output.at(-1), '');
});

test('disabling typing flushes the tail and cancels pending work', (t) => {
  const { controller, output, tick } = setup(t);
  controller.update('abcdef', 10);
  tick();
  controller.update('abcdef', false);
  assert.equal(output.at(-1), 'abcdef');
  const count = output.length;
  tick(1000);
  assert.equal(output.length, count);
});

test('history displays immediately and enabling typing does not replay it', (t) => {
  const { controller, output, tick } = setup(t);
  controller.update('history', false);
  assert.deepEqual(output, ['history']);
  controller.update('history', 10);
  tick(100);
  assert.deepEqual(output, ['history']);
  controller.update('history!', 10);
  tick();
  assert.equal(output.at(-1), 'history!');
});

test('stop cleans up; restarting supports React StrictMode effect replay', (t) => {
  const { controller, output, tick } = setup(t);
  controller.update('abc', 10);
  controller.stop();
  tick(100);
  assert.deepEqual(output, []);
  controller.update('abc', 10);
  tick();
  assert.deepEqual(output, ['a']);
});

test('default interval, speed changes and invalid intervals are deterministic', (t) => {
  const { controller, output, tick } = setup(t);
  controller.update('abc', true);
  tick(4);
  assert.deepEqual(output, []);
  tick(1);
  assert.deepEqual(output, ['a']);
  controller.update('abc', 20);
  tick(19);
  assert.equal(output.at(-1), 'a');
  tick(1);
  assert.equal(output.at(-1), 'ab');
  for (const value of [0, -1, NaN, Infinity]) {
    controller.update(`instant-${value}`, value);
    assert.equal(output.at(-1), `instant-${value}`);
  }
});


test('delayed rendering catches up at the configured average rate', (t) => {
  const { controller, output, tick } = setup(t);
  controller.update('abcdefghij', 5);
  tick(20);
  assert.equal(output.at(-1), 'abcd');
  tick(10);
  assert.equal(output.at(-1), 'abcdef');
  tick(100);
  assert.equal(output.at(-1), 'abcdefghij');
  tick(60_000);
  controller.update('abcdefghijklm', 5);
  tick(5);
  assert.equal(output.at(-1), 'abcdefghijk');
});

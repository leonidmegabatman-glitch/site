import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pngSize } from '../scripts/lib/png.mjs';

function fakePng(width, height) {
  const buf = Buffer.alloc(24);
  Buffer.from('89504e470d0a1a0a', 'hex').copy(buf, 0);
  buf.writeUInt32BE(13, 8);
  buf.write('IHDR', 12, 'ascii');
  buf.writeUInt32BE(width, 16);
  buf.writeUInt32BE(height, 20);
  return buf;
}

test('читает размеры из заголовка PNG', () => {
  assert.deepEqual(pngSize(fakePng(1200, 900)), { width: 1200, height: 900 });
});

test('отвергает не-PNG', () => {
  assert.throws(() => pngSize(Buffer.alloc(24)), /не PNG/);
});

test('отвергает обрезанный файл', () => {
  assert.throws(() => pngSize(Buffer.from([0x89, 0x50])), /заголовка PNG/);
});

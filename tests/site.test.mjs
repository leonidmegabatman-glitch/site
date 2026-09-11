import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');

function read(rel) {
  const p = join(DIST, rel);
  assert.ok(existsSync(p), `нет файла ${rel} — сначала запусти bun run build`);
  return readFileSync(p, 'utf8');
}

test('корень уводит на русскую версию', () => {
  const html = read('index.html');
  assert.match(html, /url=\/site\/ru\//);
});
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

test('корень строится через base и ведёт на /site/ru/', () => {
  const html = read('index.html');
  assert.match(html, /url=\/site\/ru\//);
  assert.match(html, /href="\/site\/ru\/"/);
});

test('обе языковые версии главной собираются', () => {
  assert.match(read('ru/index.html'), /Клавдия — десктопное приложение/);
  assert.match(read('en/index.html'), /Klavdiya is a desktop application/);
});

test('переключатель языка ведёт на парную страницу', () => {
  const ru = read('ru/index.html');
  assert.match(ru, /href="\/site\/en\/"/);
  const en = read('en/index.html');
  assert.match(en, /href="\/site\/ru\/"/);
});
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractLinks, checkLinks } from '../scripts/lib/links.mjs';

const html = `
  <a href="/site/ru/interface/settings/general/">Общие</a>
  <a href="https://example.com">внешняя</a>
  <a href="#theme">якорь</a>
  <img src="/site/icon.png" />
`;

test('вытаскивает только внутренние ссылки', () => {
  const links = extractLinks(html);
  assert.deepEqual(links, ['/site/ru/interface/settings/general/', '/site/icon.png']);
});

test('существующая цель не даёт замечаний', () => {
  const exists = (p) => p === 'ru/interface/settings/general/index.html' || p === 'icon.png';
  assert.deepEqual(checkLinks(html, '/site/', exists), []);
});

test('битая цель попадает в отчёт', () => {
  const exists = () => false;
  const problems = checkLinks(html, '/site/', exists);
  assert.equal(problems.length, 2);
  assert.match(problems[0], /битая ссылка/);
});
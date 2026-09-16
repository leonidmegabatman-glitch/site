import { test } from 'node:test';
import assert from 'node:assert/strict';
import { flattenKeys, coverageReport } from '../scripts/lib/inventory.mjs';

test('разворачивает вложенный объект в точечные ключи', () => {
  const keys = flattenKeys({ a: { b: 'x', c: { d: 'y' } }, e: 'z' });
  assert.deepEqual(keys.sort(), ['a.b', 'a.c.d', 'e']);
});

test('считает покрытие и устаревшие ключи', () => {
  const report = coverageReport(['a.b', 'a.c', 'x.y'], ['a.b', 'gone']);
  assert.deepEqual(report.covered, ['a.b']);
  assert.deepEqual(report.uncovered.sort(), ['a.c', 'x.y']);
  assert.deepEqual(report.stale, ['gone']);
});
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkCards } from '../scripts/lib/cards.mjs';

const base = {
  path: 'interface/settings/general',
  title: 'Общие',
  elements: [
    {
      id: 'theme',
      title: 'Тема',
      kind: 'button',
      where: 'Настройки → Общие',
      why: 'Меняет оформление.',
      how: [],
      notes: [],
    },
  ],
};

test('корректная страница не даёт замечаний', () => {
  assert.deepEqual(checkCards([base]), []);
});

test('ловит дублирующийся id', () => {
  const page = structuredClone(base);
  page.elements.push(structuredClone(page.elements[0]));
  assert.match(checkCards([page])[0], /дублирующийся id/);
});

test('ловит пустое обязательное поле', () => {
  const page = structuredClone(base);
  page.elements[0].why = '   ';
  assert.match(checkCards([page])[0], /пустое поле «why»/);
});

test('ловит обводку без снимка', () => {
  const page = structuredClone(base);
  page.elements[0].highlight = { x: 0, y: 0, w: 0.1, h: 0.1 };
  assert.match(checkCards([page])[0], /обводка без скриншота/);
});

test('ловит снимок без обводки', () => {
  const page = structuredClone(base);
  page.elements[0].screenshot = 'a/b.png';
  assert.match(checkCards([page])[0], /скриншот без координат/);
});
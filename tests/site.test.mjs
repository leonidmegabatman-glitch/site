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

test('все внутренние ссылки идут через base', () => {
  const html = read('ru/interface/settings/general/index.html');
  const links = [...html.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map((m) => m[1]);
  const broken = links.filter((l) => !l.startsWith('/site/'));
  assert.deepEqual(broken, [], `ссылки без base: ${broken.join(', ')}`);
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

test('на странице есть три колонки и крошки', () => {
  const html = read('ru/index.html');
  assert.match(html, /class="doc__sidebar"/);
  assert.match(html, /class="doc__main"/);
  assert.match(html, /class="crumbs"/);
});

test('на странице виден раздел «Знакомство»', () => {
  const html = read('ru/index.html');
  assert.match(html, /Знакомство/);
});

test('на главной нет блока «Назад» без предыдущей страницы', () => {
  const html = read('ru/index.html');
  assert.doesNotMatch(html, />Назад</);
});

test('страница «Что нужно доснять» существует в обоих языках', () => {
  assert.match(read('ru/what-to-shoot/index.html'), /Что нужно доснять/);
  assert.match(read('en/what-to-shoot/index.html'), /Screenshots needed/);
});

test('карточка элемента рендерит все обязательные части', () => {
  const html = read('ru/interface/settings/general/index.html');
  assert.match(html, /class="card__kind"/);
  assert.match(html, /Где найти/);
  assert.match(html, /Зачем нужен/);
});

test('на странице «Общие» десять карточек с нужными якорями', () => {
  const html = read('ru/interface/settings/general/index.html');
  for (const id of [
    'language', 'theme', 'theme-custom-colors', 'co-authored-by', 'verbose-output',
    'chat-history-days', 'environment-setup', 'claude-install', 'remember-tabs', 'startup-greeting',
  ]) {
    assert.match(html, new RegExp(`id="${id}"`), `нет карточки ${id}`);
  }
});

test('снимок отрисован вместо заглушки, с обводкой', () => {
  const html = read('ru/interface/settings/general/index.html');
  assert.doesNotMatch(html, /нужен снимок|screenshot needed/, 'заглушка осталась, хотя файл снимка есть');
  assert.match(html, /class="shot__highlight"/, 'нет обводки элемента');
});
test('индекс поиска собран', () => {
  assert.ok(existsSync(join(DIST, 'pagefind', 'pagefind.js')), 'нет dist/pagefind/pagefind.js — запусти bun run search');
});

test('на странице есть фильтр языка для поиска', () => {
  assert.match(read('ru/index.html'), /data-pagefind-filter="locale"/);
});

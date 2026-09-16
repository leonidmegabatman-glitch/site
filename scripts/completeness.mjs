import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parseFrontmatter } from './lib/frontmatter.mjs';
import { flattenKeys, coverageReport } from './lib/inventory.mjs';

const KLAVDIYA = process.env.KLAVDIYA_REPO ?? 'C:/claude/klavdiya';
const CONTENT = join(process.cwd(), 'src', 'content', 'doc', 'ru');
const LOCALES = join(KLAVDIYA, 'src', 'locales', 'ru');

function walk(dir, filter) {
  const out = [];
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, name.name);
    if (name.isDirectory()) out.push(...walk(full, filter));
    else if (filter(full)) out.push(full);
  }
  return out;
}

const localeKeys = [];
for (const file of walk(LOCALES, (f) => f.endsWith('.json'))) {
  const namespace = file.split(/[\\/]/).pop().replace(/\.json$/, '');
  const json = JSON.parse(readFileSync(file, 'utf8'));
  localeKeys.push(...flattenKeys(json).map((k) => `${namespace}:${k}`));
}

const cardKeys = [];
for (const file of walk(CONTENT, (f) => f.endsWith('.md'))) {
  const { data } = parseFrontmatter(readFileSync(file, 'utf8'));
  for (const el of data.elements ?? []) {
    if (el.uiKey) cardKeys.push(el.uiKey);
  }
}

const report = coverageReport(localeKeys, cardKeys);
const total = localeKeys.length;
const percent = total === 0 ? 0 : Math.round((report.covered.length / total) * 100);

console.log(`Ключей в локалях Клавдии: ${total}`);
console.log(`Описано карточками: ${report.covered.length} (${percent}%)`);
console.log(`Устаревших ссылок в карточках: ${report.stale.length}`);
for (const key of report.stale) console.log(`  устаревший: ${key}`);

if (process.argv.includes('--list')) {
  console.log('\nНе описано:');
  for (const key of report.uncovered) console.log(`  ${key}`);
}
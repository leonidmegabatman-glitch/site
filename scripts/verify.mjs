import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { parseFrontmatter } from './lib/frontmatter.mjs';
import { checkCards } from './lib/cards.mjs';
import { checkLinks } from './lib/links.mjs';
import { checkShots } from './lib/shots.mjs';

const ROOT = process.cwd();
const CONTENT = join(ROOT, 'src', 'content', 'doc');
const SHOTS = join(ROOT, 'src', 'assets', 'screenshots');
const DIST = join(ROOT, 'dist');
const BASE = '/site/';

function walk(dir, filter) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full, filter));
    else if (filter(full)) out.push(full);
  }
  return out;
}

function readPages() {
  return walk(CONTENT, (f) => f.endsWith('.md')).map((file) => {
    const { data } = parseFrontmatter(readFileSync(file, 'utf8'));
    return { path: relative(CONTENT, file).replace(/\\/g, '/').replace(/\.md$/, ''), ...data };
  });
}

function availableShots() {
  if (!existsSync(SHOTS)) return new Set();
  return new Set(walk(SHOTS, (f) => f.endsWith('.png')).map((f) => relative(SHOTS, f).split(sep).join('/')));
}

const pages = readPages();
const problems = [];

problems.push(...checkCards(pages));
problems.push(...checkShots(pages, availableShots()));

if (!existsSync(DIST)) {
  problems.push('нет папки dist — сначала bun run build');
} else {
  for (const file of walk(DIST, (f) => f.endsWith('.html'))) {
    const html = readFileSync(file, 'utf8');
    const exists = (target) => existsSync(join(DIST, target));
    problems.push(...checkLinks(html, BASE, exists).map((p) => `${relative(DIST, file)}: ${p}`));
  }
}

if (problems.length > 0) {
  console.error(`Проверки не пройдены (${problems.length}):\n`);
  for (const problem of problems) console.error(`  • ${problem}`);
  process.exit(1);
}

console.log(`Проверки пройдены: ${pages.length} страниц к��нтента.`);
import { parse } from 'yaml';

/** Разбирает .md на YAML-фронтматтер и тело. */
export function parseFrontmatter(text) {
  if (!text.startsWith('---')) return { data: {}, body: text };
  const end = text.indexOf('\n---', 3);
  if (end === -1) throw new Error('фронтматтер не закрыт');
  const raw = text.slice(3, end);
  const body = text.slice(text.indexOf('\n', end + 1) + 1);
  return { data: parse(raw) ?? {}, body };
}
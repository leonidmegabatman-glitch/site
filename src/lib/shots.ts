import { localeOf, pathOf } from './nav';
import type { Locale } from './i18n';

export interface MissingShot {
  path: string;
  title: string;
  elementId: string;
  elementTitle: string;
  screenshot: string;
}

export function missingScreenshots(
  entries: { id: string; data: any }[],
  available: Set<string>,
  locale: Locale,
): MissingShot[] {
  const out: MissingShot[] = [];
  for (const entry of entries) {
    if (localeOf(entry.id) !== locale) continue;
    const page = pathOf(entry.id);
    for (const el of entry.data.elements ?? []) {
      // Поле не указано — файл ожидается по правилу: путь страницы + id элемента.
      const expected = el.screenshot ?? `${page}/${el.id}.png`;
      if (available.has(expected)) continue;
      out.push({
        path: page,
        title: entry.data.title,
        elementId: el.id,
        elementTitle: el.title,
        screenshot: expected,
      });
    }
  }
  return out;
}
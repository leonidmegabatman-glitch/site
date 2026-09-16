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
    for (const el of entry.data.elements ?? []) {
      if (!el.screenshot) continue;
      if (available.has(el.screenshot)) continue;
      out.push({
        path: pathOf(entry.id),
        title: entry.data.title,
        elementId: el.id,
        elementTitle: el.title,
        screenshot: el.screenshot,
      });
    }
  }
  return out;
}
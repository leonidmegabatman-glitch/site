import { DEFAULT_LOCALE, LOCALES, type Locale } from './i18n';

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Собирает внутренний адрес с учётом base и языка. */
export function href(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${BASE}/${locale}/${clean}/` : `${BASE}/${locale}/`;
}

/** Тот же адрес, но для другого языка. */
export function altHref(locale: Locale, path: string, other: Locale): string {
  return href(other, path);
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}

export function coerceLocale(value: string): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}
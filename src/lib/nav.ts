import type { Locale } from './i18n';

export const SECTIONS = [
  { id: 'znakomstvo', order: 1, ru: 'Знакомство', en: 'Getting started' },
  { id: 'interface', order: 2, ru: 'Интерфейс', en: 'Interface' },
  { id: 'recipes', order: 3, ru: 'Рецепты', en: 'Recipes' },
  { id: 'tricks', order: 4, ru: 'Хитрости со сторонними приложениями', en: 'Tips with third-party apps' },
  { id: 'reference', order: 5, ru: 'Справочники', en: 'Reference' },
] as const;

export type SectionId = (typeof SECTIONS)[number]['id'];

export function sectionTitle(id: SectionId, locale: Locale): string {
  const found = SECTIONS.find((s) => s.id === id);
  return found ? found[locale] : id;
}

export function localeOf(entryId: string): Locale {
  return entryId.startsWith('en/') ? 'en' : 'ru';
}

export function pathOf(entryId: string): string {
  // glob-загрузчик даёт id вида 'ru/index' и 'ru/interface/settings/general';
  // 'index' в конце — это корень раздела, ему соответствует пустой путь.
  return entryId.replace(/^(ru|en)\//, '').replace(/(^|\/)index$/, '');
}
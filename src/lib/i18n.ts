export type Locale = 'ru' | 'en';

export const LOCALES: Locale[] = ['ru', 'en'];
export const DEFAULT_LOCALE: Locale = 'ru';

const STRINGS = {
  search: { ru: 'Поиск', en: 'Search' },
  searchPlaceholder: { ru: 'Поиск по документации…', en: 'Search the docs…' },
  searchEmpty: { ru: 'Ничего не найдено', en: 'Nothing found' },
  searchHint: { ru: '↑↓ выбрать · Enter открыть · Esc закрыть', en: '↑↓ to select · Enter to open · Esc to close' },
  onThisPage: { ru: 'На этой странице', en: 'On this page' },
  back: { ru: 'Назад', en: 'Back' },
  next: { ru: 'Вперёд', en: 'Next' },
  langSwitch: { ru: 'Язык', en: 'Language' },
  theme: { ru: 'Тема', en: 'Theme' },
  themeLight: { ru: 'Светлая', en: 'Light' },
  themeDark: { ru: 'Тёмная', en: 'Dark' },
  menu: { ru: 'Разделы', en: 'Sections' },
  screenshotNeeded: { ru: 'нужен снимок', en: 'screenshot needed' },
  whatToShoot: { ru: 'Что нужно доснять', en: 'Screenshots needed' },
  whatToShootIntro: {
    ru: 'На этих страницах не хватает снимков. Файл появится — заглушка исчезнет сама.',
    en: 'These pages are missing screenshots. Add the file and the placeholder disappears.',
  },
  nothingMissing: {
    ru: 'Все снимки на месте.',
    en: 'All screenshots are in place.',
  },
  inDevelopment: { ru: 'в разработке', en: 'in progress' },
  docVersion: { ru: 'Документация для 0.6.0', en: 'Documentation for 0.6.0' },
  kindButton: { ru: 'кнопка', en: 'button' },
  kindCheckbox: { ru: 'галочка', en: 'checkbox' },
  kindField: { ru: 'поле', en: 'field' },
  kindSwitch: { ru: 'переключатель', en: 'switch' },
  kindPanel: { ru: 'панель', en: 'panel' },
  kindSelect: { ru: 'выпадающий список', en: 'select' },
  kindTab: { ru: 'вкладка', en: 'tab' },
  kindMenu: { ru: 'меню', en: 'menu' },
  kindLink: { ru: 'ссылка', en: 'link' },
  whereLabel: { ru: 'Где найти', en: 'Where to find it' },
  whyLabel: { ru: 'Зачем нужен', en: 'What it is for' },
  howLabel: { ru: 'Как пользоваться', en: 'How to use it' },
  notesLabel: { ru: 'Нюансы', en: 'Notes' },
} as const;

type StringKey = keyof typeof STRINGS;

export function t(locale: Locale, key: StringKey): string {
  return STRINGS[key][locale];
}
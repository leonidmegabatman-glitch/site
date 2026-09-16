const INTERNAL = /(?:href|src)="(\/[^"#]*)"/g;

/** Возвращает внутренние адреса из HTML, без якорей и внешних ссылок. */
export function extractLinks(html) {
  const out = [];
  let match;
  INTERNAL.lastIndex = 0;
  while ((match = INTERNAL.exec(html)) !== null) {
    out.push(match[1]);
  }
  return out;
}

/**
 * Проверяет, что каждый внутренний адрес указывает на существующий файл.
 * @param {string} html
 * @param {string} base — префикс сайта, например '/site/'
 * @param {(path: string) => boolean} exists — путь относительно dist
 */
export function checkLinks(html, base, exists) {
  const problems = [];
  for (const raw of extractLinks(html)) {
    const withoutBase = raw.startsWith(base) ? raw.slice(base.length) : raw;
    let target = withoutBase.replace(/^\//, '');
    if (target === '') target = 'index.html';
    else if (target.endsWith('/')) target += 'index.html';
    if (!exists(target)) {
      problems.push(`битая ссылка: ${raw} → ${target}`);
    }
  }
  return problems;
}
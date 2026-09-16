/** Возвращает снимки, упомянутые в карточках, но отсутствующие на диске. */
export function checkShots(pages, available) {
  const problems = [];
  for (const page of pages) {
    for (const el of page.elements ?? []) {
      if (!el.screenshot) continue;
      if (!available.has(el.screenshot)) {
        problems.push(`нет снимка: ${page.path}#${el.id} → ${el.screenshot}`);
      }
    }
  }
  return problems;
}
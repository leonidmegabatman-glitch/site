/** Проверяет заполненность карточек и согласованность снимков с обводкой. */
export function checkCards(pages) {
  const problems = [];
  for (const page of pages) {
    const seen = new Set();
    for (const el of page.elements ?? []) {
      const at = `${page.path}#${el.id}`;
      if (seen.has(el.id)) problems.push(`${at}: дублирующийся id`);
      seen.add(el.id);

      for (const field of ['title', 'where', 'why']) {
        if (!el[field] || String(el[field]).trim() === '') {
          problems.push(`${at}: пустое поле «${field}»`);
        }
      }

      if (el.screenshot && !el.highlight) {
        problems.push(`${at}: скриншот без координат обводки`);
      }
      if (el.highlight && !el.screenshot) {
        problems.push(`${at}: обводка без скриншота`);
      }
    }
  }
  return problems;
}
/** Разворачивает вложенный объект локали в плоский список точечных ключей. */
export function flattenKeys(obj, prefix = '') {
  const out = [];
  for (const [key, value] of Object.entries(obj)) {
    const full = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      out.push(...flattenKeys(value, full));
    } else {
      out.push(full);
    }
  }
  return out;
}

/**
 * Сопоставляет ключи локалей с ключами, на которые ссылаются карточки.
 * «Устаревшие» — те, что упомянуты в карточках, но исчезли из локалей.
 */
export function coverageReport(localeKeys, cardKeys) {
  const localeSet = new Set(localeKeys);
  const cardSet = new Set(cardKeys.filter(Boolean));
  return {
    covered: [...cardSet].filter((k) => localeSet.has(k)),
    uncovered: [...localeSet].filter((k) => !cardSet.has(k)),
    stale: [...cardSet].filter((k) => !localeSet.has(k)),
  };
}
import type { Locale } from './i18n';
import { localeOf, pathOf, SECTIONS, type SectionId } from './nav';

export interface PageRef {
  path: string;
  title: string;
  section: SectionId;
  order: number;
  hasElements: boolean;
}

export interface TreeNode {
  path: string;
  title: string;
  children: TreeNode[];
}

export function pagesOf(entries: { id: string; data: { title: string; section: SectionId; order: number; elements?: unknown[] } }[], locale: Locale): PageRef[] {
  return entries
    .filter((e) => localeOf(e.id) === locale)
    .map((e) => ({
      path: pathOf(e.id),
      title: e.data.title,
      section: e.data.section,
      order: e.data.order,
      hasElements: (e.data.elements?.length ?? 0) > 0,
    }))
    .sort((a, b) => a.order - b.order);
}

/** Плоский порядок чтения: по разделу, затем по order. */
export function orderOf(entries: Parameters<typeof pagesOf>[0], locale: Locale): PageRef[] {
  const sectionOrder = new Map(SECTIONS.map((s) => [s.id, s.order]));
  return pagesOf(entries, locale).sort((a, b) => {
    const sa = sectionOrder.get(a.section) ?? 99;
    const sb = sectionOrder.get(b.section) ?? 99;
    return sa - sb || a.order - b.order || a.path.localeCompare(b.path);
  });
}

export function buildTree(entries: Parameters<typeof pagesOf>[0], locale: Locale): TreeNode[] {
  const pages = pagesOf(entries, locale);
  const roots: TreeNode[] = [];

  const ensure = (nodes: TreeNode[], path: string, title: string): TreeNode => {
    const existing = nodes.find((n) => n.path === path);
    if (existing) {
      if (title) existing.title = title;
      return existing;
    }
    const created: TreeNode = { path, title, children: [] };
    nodes.push(created);
    return created;
  };

  for (const page of pages) {
    const segments = page.path ? page.path.split('/') : [];
    if (segments.length === 0) continue;
    let level = roots;
    let acc = '';
    segments.forEach((segment, index) => {
      acc = acc ? `${acc}/${segment}` : segment;
      const isLast = index === segments.length - 1;
      const node = ensure(level, acc, isLast ? page.title : '');
      level = node.children;
    });
  }

  const sortRecursive = (nodes: TreeNode[]) => {
    nodes.sort((a, b) => {
      const oa = pages.find((p) => p.path === a.path)?.order ?? 0;
      const ob = pages.find((p) => p.path === b.path)?.order ?? 0;
      return oa - ob || a.path.localeCompare(b.path);
    });
    nodes.forEach((n) => sortRecursive(n.children));
  };
  sortRecursive(roots);

  return roots;
}
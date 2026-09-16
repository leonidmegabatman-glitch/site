import { useCallback, useEffect, useRef, useState } from 'react';

interface Hit {
  url: string;
  title: string;
  excerpt: string;
}

interface Props {
  locale: 'ru' | 'en';
  labels: {
    placeholder: string;
    empty: string;
    hint: string;
  };
}

const BASE = import.meta.env.BASE_URL;

export default function Search({ locale, labels }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<Hit[]>([]);
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const pagefindRef = useRef<any>(null);

  const loadPagefind = useCallback(async () => {
    if (pagefindRef.current) return pagefindRef.current;
    const mod = await import(/* @vite-ignore */ `${BASE}pagefind/pagefind.js`);
    await mod.options({ excerptLength: 20 });
    pagefindRef.current = mod;
    return mod;
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((v) => !v);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('[data-search-open]')) {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      if (query.trim().length < 2) {
        setHits([]);
        return;
      }
      try {
        const pagefind = await loadPagefind();
        const result = await pagefind.search(query, { filters: { locale } });
        const data = await Promise.all(result.results.slice(0, 15).map((r: any) => r.data()));
        if (cancelled) return;
        setHits(
          data.map((d: any) => ({
            url: d.url,
            title: d.meta?.title ?? d.url,
            excerpt: d.excerpt ?? '',
          })),
        );
        setCursor(0);
      } catch (error) {
        if (!cancelled) setHits([]);
      }
    };
    const timer = setTimeout(run, 120);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query, locale, loadPagefind]);

  if (!open) return null;

  return (
    <div className="search-overlay" onClick={() => setOpen(false)}>
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="search-input"
          value={query}
          placeholder={labels.placeholder}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setCursor((c) => Math.min(c + 1, hits.length - 1));
            }
            if (e.key === 'ArrowUp') {
              e.preventDefault();
              setCursor((c) => Math.max(c - 1, 0));
            }
            if (e.key === 'Enter' && hits[cursor]) {
              window.location.href = hits[cursor].url;
            }
          }}
        />
        <div className="search-results">
          {hits.length === 0 && query.trim().length >= 2 && <p className="search-empty">{labels.empty}</p>}
          {hits.map((hit, index) => (
            <a
              key={hit.url}
              href={hit.url}
              className={index === cursor ? 'search-hit search-hit--active' : 'search-hit'}
              onMouseEnter={() => setCursor(index)}
            >
              <span className="search-hit__title" dangerouslySetInnerHTML={{ __html: hit.title }} />
              <span className="search-hit__excerpt" dangerouslySetInnerHTML={{ __html: hit.excerpt }} />
            </a>
          ))}
        </div>
        <div className="search-hint">{labels.hint}</div>
      </div>
    </div>
  );
}
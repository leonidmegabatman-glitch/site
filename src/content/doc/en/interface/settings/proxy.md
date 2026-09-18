---
title: Proxy
description: Proxy configuration for Claude API requests.
section: interface
order: 18
elements:
  - id: proxy-enable
    title: Enable proxy
    kind: switch
    where: Settings → Proxy → first toggle
    uiKey: proxy:enable
    why: Activates proxy usage for all Claude API requests. Needed when direct access is blocked or traffic must be logged.
  - id: proxy-http
    title: HTTP proxy
    kind: field
    where: Settings → Proxy → HTTP field
    uiKey: proxy:httpProxy
    why: Proxy URL for HTTP requests. Format "http://host:port".
  - id: proxy-https
    title: HTTPS proxy
    kind: field
    where: Settings → Proxy → HTTPS field
    uiKey: proxy:httpsProxy
    why: Proxy URL for HTTPS requests. Format "https://host:port".
  - id: proxy-no-proxy
    title: No proxy
    kind: field
    where: Settings → Proxy → "No proxy" field
    uiKey: proxy:noProxy
    why: A comma-separated list of hosts that should bypass the proxy. For example, "localhost,127.0.0.1".
  - id: proxy-all
    title: All-protocol proxy
    kind: field
    where: Settings → Proxy → "All protocols" field
    uiKey: proxy:allProxy
    why: A single proxy URL used when protocol-specific proxies are not set.
    notes:
      - Optional field.
---

The "Proxy" tab configures the network route for Claude API requests. Needed
in corporate networks with a mandatory proxy or when working through a
security gateway.
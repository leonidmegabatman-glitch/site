---
title: Extensions
description: Plugins and skills — catalog, installed, marketplaces.
section: interface
order: 14
elements:
  - id: extensions-catalog
    title: Catalog
    kind: tab
    where: 'Settings → Extensions → "Catalog" tab'
    uiKey: extensions:tabs.catalog
    why: Shows all available plugins from connected marketplaces. This is where you find and install new extensions.
    how:
      - Type a query in the search bar or pick a category.
      - Click "Install" on a plugin card.
    screenshot: interface/settings/extensions/panel.png
    highlight: { x: 0.05, y: 0.07, w: 0.13, h: 0.04 }
  - id: extensions-installed
    title: Installed
    kind: tab
    where: 'Settings → Extensions → "Installed" tab'
    uiKey: extensions:tabs.installed
    why: Lists already installed plugins. Enable, disable, update, or remove them here.
    screenshot: interface/settings/extensions/panel.png
    highlight: { x: 0.19, y: 0.07, w: 0.14, h: 0.04 }
  - id: extensions-skills
    title: Skills
    kind: tab
    where: 'Settings → Extensions → "Skills" tab'
    uiKey: extensions:tabs.skills
    why: Local skills — SKILL.md files that Claude picks up automatically. Create, edit, and delete them here.
    screenshot: interface/settings/extensions/panel.png
    highlight: { x: 0.34, y: 0.07, w: 0.11, h: 0.04 }
  - id: extensions-marketplaces
    title: Marketplaces
    kind: tab
    where: 'Settings → Extensions → "Marketplaces" tab'
    uiKey: extensions:tabs.marketplaces
    why: The catalog of plugin sources. The official marketplace is connected by default. You can add your own repositories.
    screenshot: interface/settings/extensions/panel.png
    highlight: { x: 0.46, y: 0.07, w: 0.15, h: 0.04 }
  - id: extensions-recommended
    title: Recommended
    kind: panel
    where: 'Settings → Extensions → Catalog → "Recommended" shelf'
    uiKey: extensions:recommended.title
    why: A starter set of 13 plugins for a full-featured desktop agent — browser control, web search, developer workflow, extension authoring.
    screenshot: interface/settings/extensions/panel.png
    highlight: { x: 0.05, y: 0.18, w: 0.9, h: 0.3 }
---

The "Extensions" tab is the control center for plugins and skills. Plugins add
commands, agents, hooks, and MCP servers; skills are lightweight instructions
the agent applies by context.
---
title: Settings
description: Klavdiya's settings sections.
section: interface
order: 10
---

Settings open with the gear button in the top-right corner. A vertical list of
sections sits on the left, the selected section's content on the right. The tabs
follow the same order as in the application itself.

## Tabs

- [General](general/) — language, theme, chat history, environment and Claude installation.
- Permissions — the permission mode, allow and deny rules.
- Environment — environment variables, an API-key script, raw settings.
- Extensions — plugins and skills: catalog, installed, marketplaces.
- Hooks — commands on lifecycle events.
- Commands — custom slash commands.
- Storage — tables of the local database.
- Proxy — proxy for Claude API requests.
- Voice — speech recognition for dictation.

Tabs without a link are still being documented.

## Ground rules

- Almost every change applies only after clicking "Save settings".
- Settings live in `~/.claude/settings.json` — you can edit the file by hand,
  but the tabs are easier.
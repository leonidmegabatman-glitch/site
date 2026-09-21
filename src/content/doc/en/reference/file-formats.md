---
title: File formats
description: settings.json, .opcode.json, hooks and other configuration files.
section: reference
order: 3
---

## `~/.claude/settings.json`

Klavdiya's main settings file. Stores:

- `permissions.defaultMode` — permission mode (`bypassPermissions`, `acceptEdits`, `dontAsk`, `plan`, `default`).
- `permissions.allow` / `permissions.deny` — rule lists.
- `env` — environment variables for sessions.
- `hooks` — hook configuration.
- Voice settings, proxy, and more.

## `.opcode.json`

The agent file in a project folder. Contains:

- `name` — agent name.
- `description` — description.
- `systemPrompt` — system prompt.
- `model` — preferred model.

## Hooks

Hooks are stored in `settings.json` under the `hooks` key. Structure:

```
{
  "hooks": {
    "PreToolUse": [{ "matcher": "Bash", "hooks": [{"type":"command","command":"..."}] }],
    "PostToolUse": [...],
    "Stop": [...]
  }
}
```

Five events: `PreToolUse`, `PostToolUse`, `Notification`, `Stop`, `SubagentStop`.

## Hook scope

| Scope | File | Goes into git |
|---|---|---|
| Project | `.claude/settings.json` | Yes |
| Local | `.claude/settings.local.json` | No |
| User | `~/.claude/settings.json` | No |
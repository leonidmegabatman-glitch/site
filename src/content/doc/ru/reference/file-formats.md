---
title: Форматы файлов
description: settings.json, .opcode.json, хуки и другие конфигурационные файлы.
section: reference
order: 3
---

## `~/.claude/settings.json`

Главный файл настроек Клавдии. Хранит:

- `permissions.defaultMode` — режим разрешений (`bypassPermissions`, `acceptEdits`, `dontAsk`, `plan`, `default`).
- `permissions.allow` / `permissions.deny` — списки правил.
- `env` — переменные окружения для сессий.
- `hooks` — конфигурация хуков.
- Голосовые настройки, прокси и прочее.

## `.opcode.json`

Файл агента в папке проекта. Содержит:

- `name` — имя агента.
- `description` — описание.
- `systemPrompt` — системный промпт.
- `model` — предпочитаемая модель.

## Хуки

Хуки хранятся в `settings.json` в секции `hooks`. Структура:

```
{
  "hooks": {
    "PreToolUse": [{ "matcher": "Bash", "hooks": [{"type":"command","command":"..."}] }],
    "PostToolUse": [...],
    "Stop": [...]
  }
}
```

Пять событий: `PreToolUse`, `PostToolUse`, `Notification`, `Stop`, `SubagentStop`.

## Область хуков

| Область | Файл | Попадает в git |
|---|---|---|
| Проект | `.claude/settings.json` | Да |
| Локально | `.claude/settings.local.json` | Нет |
| Пользователь | `~/.claude/settings.json` | Нет |
---
title: Хуки
description: Команды на события жизненного цикла Claude Code.
section: interface
order: 15
elements:
  - id: hooks-scope
    title: Область хуков
    kind: select
    where: 'Настройки → Хуки → переключатель области'
    uiKey: hooks:scope.project
    why: Определяет, где хранятся хуки — в проекте, локально или на уровне пользователя. Проектные попадают в git, локальные — нет.
    notes:
      - «Локально» — не попадают в систему контроля версий.
    screenshot: interface/settings/hooks/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.25, h: 0.06 }
  - id: hooks-events
    title: События хуков
    kind: tab
    where: 'Настройки → Хуки → вкладки событий'
    uiKey: hooks:event.PreToolUse.label
    why: Пять точек жизненного цикла, к которым можно привязать команды до вызова инструмента, после, уведомление, остановка, остановка субагента.
    screenshot: interface/settings/hooks/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.05 }
  - id: hooks-matcher
    title: Паттерн (матчер)
    kind: field
    where: 'Настройки → Хуки → внутри события'
    uiKey: hooks:matcher.label
    why: Фильтр по имени инструмента (regex). Пустой паттерн применяет хук ко всем инструментам.
    notes:
      - Примеры «Bash», «Edit|Write», «mcp__.*».
    screenshot: interface/settings/hooks/panel.png
    highlight: { x: 0.05, y: 0.28, w: 0.9, h: 0.1 }
  - id: hooks-command
    title: Команда хука
    kind: field
    where: 'Настройки → Хуки → внутри события → команда'
    uiKey: hooks:command.placeholder
    why: Shell-команда, которая выполняется при наступлении события. Можно задать таймаут в секундах.
    screenshot: interface/settings/hooks/panel.png
    highlight: { x: 0.05, y: 0.4, w: 0.9, h: 0.12 }
  - id: hooks-templates
    title: Шаблоны хуков
    kind: button
    where: 'Настройки → Хуки → кнопка «Шаблоны»'
    uiKey: hooks:button.templates
    why: Готовые пресеты для частых задач — логирование команд, форматирование при сохранении, уведомления. Ускоряют настройку.
    screenshot: interface/settings/hooks/panel.png
    highlight: { x: 0.35, y: 0.13, w: 0.14, h: 0.045 }
  - id: hooks-save
    title: Сохранить хуки
    kind: button
    where: 'Настройки → Хуки → кнопка «Сохранить»'
    uiKey: hooks:button.save
    why: Записывает конфигурацию хуков в соответствующий файл настроек.
    screenshot: interface/settings/hooks/panel.png
    highlight: { x: 0.8, y: 0.9, w: 0.15, h: 0.06 }
---

Хуки позволяют выполнять произвольные команды в ключевые моменты работы
агента. Типичное применение — логирование, автоформатирование, уведомления
и проверка безопасности.
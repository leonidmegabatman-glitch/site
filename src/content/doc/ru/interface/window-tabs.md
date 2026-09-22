---
title: Окно и вкладки
description: Заголовок окна, навигация, вкладки и переключение между ними.
section: interface
order: 2
elements:
  - id: titlebar-menu
    title: Главное меню
    kind: menu
    where: 'Верхняя панель окна'
    uiKey: titlebar:menu.projects
    why: Навигация между основными разделами приложения — проекты, агенты, сессии, MCP, настройки, статистика.
    screenshot: interface/window.png
    highlight: { x: 0.01, y: 0.005, w: 0.35, h: 0.04 }
  - id: titlebar-scheduler
    title: Планировщик
    kind: button
    where: 'Верхняя панель → иконка часов'
    uiKey: titlebar:tooltip.scheduler
    why: Открывает вкладку планировщика задач — автоматический запуск сессий по расписанию.
  - id: titlebar-settings
    title: Настройки
    kind: button
    where: 'Верхняя панель → иконка шестерёнки'
    uiKey: titlebar:tooltip.settings
    why: Открывает настройки приложения — язык, тема, разрешения, окружение и другие вкладки.
  - id: titlebar-more
    title: Ещё
    kind: button
    where: 'Верхняя панель → иконка «…»'
    uiKey: titlebar:tooltip.more
    why: Дополнительное меню с доступом к CLAUDE.md, MCP-серверам и странице «О программе».
  - id: claude-status
    title: Статус Claude Code
    kind: panel
    where: 'Верхняя панель → правая часть'
    uiKey: titlebar:status.checking
    why: Показывает, найден ли установленный Claude Code. Если нет — предлагает установить или выбрать установку.
    notes:
      - Если статус «не найден», чат не будет работать.
    screenshot: interface/window.png
    highlight: { x: 0.62, y: 0.005, w: 0.2, h: 0.04 }
  - id: tabs-bar
    title: Панель вкладок
    kind: panel
    where: 'Под верхней панелью'
    uiKey: tabs:tooltip.newProject
    why: Показывает все открытые вкладки — проекты, сессии, агенты, настройки. Кнопка «+» открывает новый проект (Ctrl+T).
    notes:
      - Ctrl+T — новый проект.
      - Вкладки можно закрывать средней кнопкой мыши.
    screenshot: interface/window.png
    highlight: { x: 0, y: 0.05, w: 1, h: 0.045 }
  - id: tab-close
    title: Закрыть вкладку
    kind: button
    where: 'Панель вкладок → крестик на вкладке'
    uiKey: tabs:tooltip.closeTab
    why: Закрывает вкладку. Если есть несохранённые изменения, покажется предупреждение.
  - id: new-session
    title: Новая сессия
    kind: button
    where: 'Панель вкладок → кнопка «+» внутри проекта'
    uiKey: tabs:actions.newSession
    why: Создаёт новую сессию чата в текущем проекте.
  - id: back-to-projects
    title: К списку проектов
    kind: button
    where: 'Панель вкладок → стрелка назад'
    uiKey: tabs:tooltip.backToProjects
    why: Возвращает к списку проектов, если открыта конкретная сессия.
---

Окно Клавдии состоит из верхней панели с навигацией, панели вкладок и
основной рабочей области. Каждая вкладка — это отдельный контекст:
проект, сессия, агент или настройки.

Вкладки позволяют работать с несколькими проектами одновременно,
переключаясь между ними без потери контекста.
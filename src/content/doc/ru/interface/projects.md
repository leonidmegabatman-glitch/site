---
title: Проекты
description: Список проектов, открытие и настройки проекта.
section: interface
order: 4
elements:
  - id: projects-list
    screenshot: interface/projects/list.png
    highlight: { x: 0.25, y: 0.15, w: 0.5, h: 0.75 }
    title: Список проектов
    kind: panel
    where: 'Вкладка «Проекты»'
    uiKey: projects:list.title
    why: Показывает все доступные проекты — папки, в которых работает агент. Отсюда начинают работу.
  - id: projects-open
    screenshot: interface/projects/list.png
    highlight: { x: 0.42, y: 0.28, w: 0.16, h: 0.05 }
    title: Открыть проект
    kind: button
    where: 'Список проектов → кнопка «Открыть проект»'
    uiKey: projects:list.openProject
    why: Открывает диалог выбора папки. Выбранная папка становится проектом — агент будет работать в ней.
  - id: projects-recent
    screenshot: interface/projects/list.png
    highlight: { x: 0.28, y: 0.42, w: 0.44, h: 0.4 }
    title: Недавние проекты
    kind: panel
    where: 'Список проектов → секция «Недавние»'
    uiKey: projects:list.recentTitle
    why: Быстрый доступ к последним открытым проектам. Клик открывает проект сразу.
  - id: project-settings
    screenshot: interface/projects/list.png
    highlight: { x: 0.68, y: 0.44, w: 0.03, h: 0.04 }
    title: Настройки проекта
    kind: panel
    where: 'Проект → иконка настроек'
    uiKey: projects:settings.title
    why: Управляет проектными слэш-командами, хуками проекта и локальными хуками. Всё, что специфично для конкретного проекта.
    notes:
      - Проектные хуки попадают в git.
      - Локальные хуки — только на вашей машине.
---

Проекты — это папки, в которых работает агент. Каждый проект имеет свою
историю сессий, свои хуки и свои слэш-команды. Открыть проект — значит
указать Клавдии, в какой папке работать.
---
title: Агенты
description: Создание, настройка и запуск агентов для автоматизации задач.
section: interface
order: 5
elements:
  - id: agents-list
    title: Список агентов
    kind: panel
    where: 'Вкладка «Агенты»'
    uiKey: agents:list.title
    why: Показывает всех созданных агентов. Каждый агент — это набор инструкций для автоматизации конкретной задачи.
    screenshot: interface/agents/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.8 }
  - id: agents-create
    title: Создать агента
    kind: button
    where: 'Вкладка «Агенты» → кнопка «Создать агента»'
    uiKey: agents:button.createAgent
    why: Открывает форму создания нового агента — имя, описание, системный промпт и модель.
    screenshot: interface/agents/panel.png
    highlight: { x: 0.35, y: 0.13, w: 0.14, h: 0.045 }
  - id: agents-import
    title: Импорт агента
    kind: button
    where: 'Вкладка «Агенты» → кнопка «Импорт агента»'
    uiKey: agents:button.importAgent
    why: Импортирует агента из файла или другого источника.
    screenshot: interface/agents/panel.png
    highlight: { x: 0.5, y: 0.13, w: 0.14, h: 0.045 }
  - id: agent-run
    title: Запуск агента
    kind: panel
    where: 'Карточка агента → кнопка «Запустить»'
    uiKey: agents:buttonTitle.execute
    why: Запускает агента с конкретной задачей. Можно выбрать изолированный прогон в git-worktree.
    screenshot: interface/agents/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
    notes:
      - Изолированный прогон не трогает ваше рабочее дерево.
  - id: agent-worktree
    title: Изолированный прогон
    kind: checkbox
    where: 'Диалог запуска → галочка'
    uiKey: agents:run.started
    why: Запускает агента в отдельной ветке git (worktree). Результат нужно смёржить вручную. Безопасно для основного кода.
    screenshot: interface/agents/run-dialog.png
    highlight: { x: 0.28, y: 0.55, w: 0.44, h: 0.08 }
  - id: agent-status
    title: Статус агента
    kind: panel
    where: 'Карточка агента'
    uiKey: agents:list.title
    why: Показывает текущее состояние агента — ожидание, выполняется, завершён или ошибка.
    screenshot: interface/agents/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
---

Агенты — это автоматизированные помощники. Каждый агент имеет системный
промт, который определяет его поведение, и может быть запущен с конкретной
задачей. Агенты работают в изолированных ветках, не трогая основной код.
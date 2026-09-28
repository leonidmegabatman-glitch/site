---
title: Планировщик
description: Автоматический запуск задач по расписанию.
section: interface
order: 6
elements:
  - id: scheduler-list
    title: Список задач
    kind: panel
    where: 'Вкладка «Планировщик»'
    uiKey: scheduler:title
    why: Показывает все запланированные задачи. Каждая задача — это агент, который запускается по cron-расписанию.
    screenshot: interface/scheduler/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.8 }
  - id: scheduler-create
    title: Создать задачу
    kind: button
    where: 'Вкладка «Планировщик» → кнопка «Создать задачу»'
    uiKey: scheduler:button.newTask
    why: Открывает форму создания задачи — имя, расписание, агент и промпт.
    screenshot: interface/scheduler/panel.png
    highlight: { x: 0.35, y: 0.13, w: 0.14, h: 0.045 }
  - id: scheduler-cron
    title: Cron-выражение
    kind: field
    where: 'Диалог задачи → поле расписания'
    uiKey: scheduler:schedule.expr
    why: Определяет, когда запускать задачу. Формат — минута час день месяц день недели.
    screenshot: interface/scheduler/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
    notes:
      - Пример «0 9 * * *» — каждый день в 9 утра.
  - id: scheduler-toggle
    title: Включить/Выключить
    kind: switch
    where: 'Карточка задачи → переключатель'
    uiKey: scheduler:task.disabled
    why: Временно отключает задачу без удаления. Полезно для пауз.
    screenshot: interface/scheduler/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
  - id: scheduler-run-now
    title: Запустить сейчас
    kind: button
    where: 'Карточка задачи → кнопка'
    uiKey: scheduler:button.runNow
    why: Запускает задачу немедленно, не дожидаясь расписания. Для проверки.
    screenshot: interface/scheduler/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
---

Планировщик позволяет запускать агентов автоматически по расписанию.
Типичные сценарии — ежедневные отчёты, ночные проверки кода, регулярные
обновления документации.
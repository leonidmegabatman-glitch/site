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
  - id: scheduler-create
    title: Создать задачу
    kind: button
    where: 'Вкладка «Планировщик» → кнопка «Создать задачу»'
    uiKey: scheduler:button.newTask
    why: Открывает форму создания задачи — имя, расписание, агент и промпт.
  - id: scheduler-cron
    title: Cron-выражение
    kind: field
    where: 'Диалог задачи → поле расписания'
    uiKey: scheduler:schedule.expr
    why: Определяет, когда запускать задачу. Формат — минута час день месяц день недели.
    notes:
      - Пример «0 9 * * *» — каждый день в 9 утра.
  - id: scheduler-toggle
    title: Включить/Выключить
    kind: switch
    where: 'Карточка задачи → переключатель'
    uiKey: scheduler:task.disabled
    why: Временно отключает задачу без удаления. Полезно для пауз.
  - id: scheduler-run-now
    title: Запустить сейчас
    kind: button
    where: 'Карточка задачи → кнопка'
    uiKey: scheduler:button.runNow
    why: Запускает задачу немедленно, не дожидаясь расписания. Для проверки.
---

Планировщик позволяет запускать агентов автоматически по расписанию.
Типичные сценарии — ежедневные отчёты, ночные проверки кода, регулярные
обновления документации.
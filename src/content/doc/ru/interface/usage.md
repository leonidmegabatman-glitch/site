---
title: Использование
description: Статистика токенов и стоимости.
section: interface
order: 8
elements:
  - id: usage-stats
    title: Панель статистики
    kind: panel
    where: 'Вкладка «Использование»'
    uiKey: usage:header.title
    why: Показывает общее потребление токенов и стоимость за выбранный период.
    screenshot: interface/usage/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.25 }
  - id: usage-period
    title: Период
    kind: select
    where: 'Вкладка «Использование» → выпадающий список'
    uiKey: usage:range.all
    why: Фильтрует статистику — сегодня, неделя, месяц или всё время.
    screenshot: interface/usage/panel.png
    highlight: { x: 0.85, y: 0.06, w: 0.1, h: 0.045 }
  - id: usage-chart
    title: График использования
    kind: panel
    where: 'Вкладка «Использование» → график'
    uiKey: usage:tabs.timeline
    why: Визуализирует потребление токенов по дням. Помогает отслеживать расходы.
    screenshot: interface/usage/panel.png
    highlight: { x: 0.05, y: 0.4, w: 0.9, h: 0.55 }
---

Вкладка «Использование» показывает, сколько токенов потрачено и сколько
это стоило. Полезно для контроля расходов при работе с платными моделями.
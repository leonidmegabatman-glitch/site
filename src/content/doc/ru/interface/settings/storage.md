---
title: Хранилище
description: Таблицы локальной базы данных, SQL-запросы, сброс.
section: interface
order: 17
elements:
  - id: storage-tables
    title: Таблицы базы данных
    kind: panel
    where: 'Настройки → Хранилище → основная секция'
    uiKey: storage:header.title
    why: Показывает содержимое локальной базы данных Клавдии — агенты, запуски, настройки. Можно просматривать, редактировать и удалять строки.
    screenshot: interface/settings/storage/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.6 }
  - id: storage-table-select
    title: Выбор таблицы
    kind: select
    where: 'Настройки → Хранилище → выпадающий список'
    uiKey: storage:select.placeholder
    why: Переключает отображение между таблицами базы данных.
    screenshot: interface/settings/storage/panel.png
    highlight: { x: 0.05, y: 0.74, w: 0.25, h: 0.06 }
  - id: storage-sql
    title: SQL-запрос
    kind: button
    where: 'Настройки → Хранилище → кнопка «SQL-запрос»'
    uiKey: storage:header.sqlQuery
    why: Открывает редактор произвольных SQL-запросов. Для продвинутых пользователей, которым нужен прямой доступ к данным.
    notes:
      - Используйте с осторожностью — можно повредить данные.
    screenshot: interface/settings/storage/panel.png
    highlight: { x: 0.6, y: 0.06, w: 0.18, h: 0.05 }
  - id: storage-reset
    title: Сбросить БД
    kind: button
    where: 'Настройки → Хранилище → кнопка «Сбросить БД»'
    uiKey: storage:header.resetDb
    why: Возвращает базу данных к состоянию первой установки — все агенты, запуски и настройки удаляются безвозвратно.
    notes:
      - Действие нельзя отменить. Появится диалог подтверждения.
    screenshot: interface/settings/storage/panel.png
    highlight: { x: 0.8, y: 0.06, w: 0.15, h: 0.05 }
---

Вкладка «Хранилище» даёт прямой доступ к локальной базе данных Клавдии.
Обычному пользователю она не нужна — это инструмент для отладки и
восстановления после сбоев.
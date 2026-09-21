---
title: Команды
description: Создание и управление слэш-командами.
section: interface
order: 16
elements:
  - id: commands-manager
    title: Менеджер команд
    kind: panel
    where: 'Настройки → Команды'
    uiKey: slashCommands:manager.title
    why: Показывает все слэш-команды — встроенные, пользовательские и проектные. Здесь их создают, редактируют и удаляют.
  - id: commands-new
    title: Новая команда
    kind: button
    where: 'Настройки → Команды → кнопка «Новая команда»'
    uiKey: slashCommands:manager.newCommand
    why: Открывает диалог создания слэш-команды. Команда — это имя, область (пользователь/проект) и содержимое (промт или шаблон).
  - id: commands-scope
    title: Область команды
    kind: select
    where: 'Настройки → Команды → фильтр или диалог создания'
    uiKey: slashCommands:manager.scope.all
    why: Пользовательские команды доступны во всех проектах, проектные — только в текущем. Выбор области определяет, где хранится файл команды.
  - id: commands-search
    title: Поиск команд
    kind: field
    where: 'Настройки → Команды → строка поиска'
    uiKey: slashCommands:manager.searchPlaceholder
    why: Быстрый поиск по имени команды, когда их много.
---

Вкладка «Команды» управляет слэш-командами — короткими шаблонами, которые
вставляются в чат по вводу «/имя». Они ускоряют повторяющиеся запросы.
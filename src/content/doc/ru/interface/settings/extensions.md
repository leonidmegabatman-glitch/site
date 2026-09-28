---
title: Расширения
description: Плагины и скиллы — каталог, установленные, маркетплейсы.
section: interface
order: 14
elements:
  - id: extensions-catalog
    title: Каталог
    kind: tab
    where: 'Настройки → Расширения → вкладка «Каталог»'
    uiKey: extensions:tabs.catalog
    why: Показывает все доступные плагины из подключённых маркетплейсов. Здесь ищут и устанавливают новые расширения.
    how:
      - Введите запрос в строку поиска или выберите категорию.
      - Нажмите «Установить» на карточке плагина.
    screenshot: interface/settings/extensions/panel.png
    highlight: { x: 0.05, y: 0.07, w: 0.13, h: 0.04 }
  - id: extensions-installed
    title: Установленные
    kind: tab
    where: 'Настройки → Расширения → вкладка «Установленные»'
    uiKey: extensions:tabs.installed
    why: Список уже установленных плагинов. Здесь их включают, выключают, обновляют или удаляют.
    screenshot: interface/settings/extensions/panel.png
    highlight: { x: 0.19, y: 0.07, w: 0.14, h: 0.04 }
  - id: extensions-skills
    title: Скиллы
    kind: tab
    where: 'Настройки → Расширения → вкладка «Скиллы»'
    uiKey: extensions:tabs.skills
    why: Локальные скиллы — файлы SKILL.md, которые Клод подхватывает автоматически. Здесь их создают, редактируют и удаляют.
    screenshot: interface/settings/extensions/panel.png
    highlight: { x: 0.34, y: 0.07, w: 0.11, h: 0.04 }
  - id: extensions-marketplaces
    title: Маркетплейсы
    kind: tab
    where: 'Настройки → Расширения → вкладка «Маркетплейсы»'
    uiKey: extensions:tabs.marketplaces
    why: Каталог источников плагинов. По умолчанию подключён официальный маркетплейс. Можно добавить свои репозитории.
    screenshot: interface/settings/extensions/panel.png
    highlight: { x: 0.46, y: 0.07, w: 0.15, h: 0.04 }
  - id: extensions-recommended
    title: Рекомендуемые
    kind: panel
    where: 'Настройки → Расширения → Каталог → полка «Рекомендуемые»'
    uiKey: extensions:recommended.title
    why: Стартовый набор из 13 плагинов для полнофункционального десктопного агента — браузер, поиск, рабочий процесс, создание расширений.
    screenshot: interface/settings/extensions/panel.png
    highlight: { x: 0.05, y: 0.18, w: 0.9, h: 0.3 }
---

Вкладка «Расширения» — центр управления плагинами и скиллами. Плагины
добавляют команды, агентов, хуки и MCP-серверы; скиллы — лёгкие инструкции,
которые агент применяет по контексту.
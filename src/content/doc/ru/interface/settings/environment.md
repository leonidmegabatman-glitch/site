---
title: Окружение
description: Переменные окружения, скрипт API-ключа, сырые настройки JSON.
section: interface
order: 13
elements:
  - id: env-variables
    title: Переменные окружения
    kind: panel
    where: 'Настройки → Окружение → основная секция'
    uiKey: settings:environment.title
    why: Переменные, применяемые к каждой сессии Claude Code. Позволяют задать ключи, пути и флаги без правки системного окружения.
    how:
      - Нажмите «Добавить переменную».
      - Введите имя и значение.
      - Нажмите «Сохранить настройки».
    notes:
      - Переменные видны всем сессиям и агентам.
    screenshot: interface/settings/environment/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.3 }
  - id: env-add-variable
    title: Добавить переменную
    kind: button
    where: 'Настройки → Окружение → под списком переменных'
    uiKey: settings:environment.addVariable
    why: Создаёт новую строку для переменной окружения.
    screenshot: interface/settings/environment/panel.png
    highlight: { x: 0.05, y: 0.43, w: 0.16, h: 0.05 }
  - id: common-variables
    title: Частые переменные
    kind: panel
    where: 'Настройки → Окружение → блок подсказок'
    uiKey: settings:environment.commonTitle
    why: Подсказки с часто используемыми переменными — телеметрия, модель, предупреждения о стоимости. Ускоряет настройку.
    screenshot: interface/settings/environment/panel.png
    highlight: { x: 0.05, y: 0.5, w: 0.9, h: 0.15 }
  - id: api-key-helper
    title: Скрипт помощника API-ключа
    kind: field
    where: 'Настройки → Окружение → расширенная секция'
    uiKey: settings:advanced.apiKeyHelper.label
    why: Путь к скрипту, который генерирует значение авторизации для API-запросов. Нужен при использовании динамических ключей.
    notes:
      - Скрипт должен выводить значение в stdout.
    screenshot: interface/settings/environment/panel.png
    highlight: { x: 0.05, y: 0.67, w: 0.9, h: 0.1 }
  - id: raw-json
    title: Сырые настройки (JSON)
    kind: panel
    where: 'Настройки → Окружение → нижняя секция'
    uiKey: settings:advanced.rawJson.label
    why: Показывает JSON, который будет сохранён в ~/.claude/settings.json. Позволяет увидеть итоговую конфигурацию и внести правки, недоступные через вкладки.
    notes:
      - Правки в сыром JSON применяются сразу при сохранении.
    screenshot: interface/settings/environment/panel.png
    highlight: { x: 0.05, y: 0.79, w: 0.9, h: 0.16 }
---

Вкладка «Окружение» собирает всё, что влияет на среду выполнения сессий:
переменные, скрипты авторизации и итоговый конфигурационный файл.
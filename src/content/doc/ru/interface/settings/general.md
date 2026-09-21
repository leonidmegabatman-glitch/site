---
title: Общие
description: Язык, тема, история чатов, установка окружения и Claude.
section: interface
order: 11
elements:
  - id: language
    uiKey: settings:general.language.label
    title: Язык
    kind: button
    where: 'Настройки → Общие → первая секция'
    why: Переключает язык всего интерфейса приложения. Практически всё уже переведено на русский, английский остался для тех, кто привык к нему.
    how:
      - Нажмите «Русский» или «English».
      - Нажмите «Сохранить настройки» внизу страницы.
    notes:
      - Язык применяется только после сохранения настроек.
  - id: theme
    uiKey: settings:general.theme.label
    title: Тема
    kind: button
    where: 'Настройки → Общие → секция «Тема»'
    why: Меняет оформление приложения целиком — фон, текст, акцентный цвет. Тёмная тема включена по умолчанию.
    how:
      - Выберите «Тёмная», «Серая», «Светлая» или «Своя».
    notes:
      - При выборе «Своя» ниже появляются поля для каждого цвета темы.
    screenshot: interface/settings/general/panel.png
    highlight: { x: 0.06, y: 0.12, w: 0.22, h: 0.06 }
  - id: theme-custom-colors
    uiKey: settings:general.theme.customColorsTitle
    title: Цвета своей темы
    kind: field
    where: 'Настройки → Общие → «Тема» → вариант «Своя»'
    why: Позволяет задать собственные цвета интерфейса — фон, текст, карточки, акцент и цвет опасных действий.
    notes:
      - Поля принимают значения CSS-цветов (hex, rgb, oklch и т. д.).
      - Секция видна только когда выбрана тема «Своя».
  - id: co-authored-by
    uiKey: settings:general.coAuthored.label
    title: Добавлять «Co-authored by Claude»
    kind: switch
    where: 'Настройки → Общие → секция коммитов'
    why: Добавляет подпись Claude в коммиты и pull request'ы, которые делает агент. Полезно, чтобы по истории git было видно, где поработал агент.
  - id: verbose-output
    uiKey: settings:general.verbose.label
    title: Подробный вывод
    kind: switch
    where: 'Настройки → Общие'
    why: Показывает полный вывод bash-команд вместо сокращённого. Нужно, когда разбираешься, почему команда ведёт себя не так, как ожидалось.
    screenshot: interface/settings/general/panel.png
    highlight: { x: 0.06, y: 0.12, w: 0.22, h: 0.06 }
  - id: chat-history-days
    uiKey: settings:general.cleanup.label
    title: Хранение истории чатов (дни)
    kind: field
    where: 'Настройки → Общие'
    why: Сколько дней хранить историю сессий. По умолчанию 30 дней. Старое удаляется автоматически.
  - id: environment-setup
    uiKey: environmentSetup:title
    title: Установка окружения
    kind: panel
    where: 'Настройки → Общие → секция установки'
    why: Проверяет и ставит то, без чего Клавдия не работает, — Claude Code, Node.js, Git. Показывает состояние каждого инструмента и умеет доустановить недостающее.
  - id: claude-install
    uiKey: claudeVersion:installationLabel
    title: Установка Claude
    kind: select
    where: 'Настройки → Общие → секция установки'
    why: Выбирает, какую именно установку Claude Code использовать, если их на машине несколько.
    notes:
      - Изменения применяются после сохранения настроек.
  - id: remember-tabs
    uiKey: settings:general.tabPersistence.label
    title: Запоминать открытые вкладки
    kind: switch
    where: 'Настройки → Общие'
    why: При следующем запуске Клавдия откроет те же вкладки, что были открыты при закрытии. Экономит время, если работаешь с одним и тем же набором проектов.
  - id: startup-greeting
    uiKey: settings:general.startupIntro.label
    title: Показывать приветствие при запуске
    kind: switch
    where: 'Настройки → Общие'
    why: Включает вступительный экран при старте приложения. Можно выключить, если он мешает и хочется сразу попасть в работу.
    screenshot: interface/settings/general/panel.png
    highlight: { x: 0.06, y: 0.12, w: 0.22, h: 0.06 }
---

Страница «Общие» — это то, что видно первым при открытии настроек: язык, оформление
и установка окружения.
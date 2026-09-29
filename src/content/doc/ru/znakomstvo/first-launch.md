---
title: Первый запуск
description: 'Мастер настройки: проверка окружения, установка Claude Code, первый вход.'
section: znakomstvo
order: 3
elements:
  - id: wizard-welcome
    title: Приветствие мастера
    kind: panel
    where: 'Окно при первом запуске'
    uiKey: environmentSetup:wizardTitle
    why: 'Мастер проверяет, готово ли окружение, и помогает поставить то, чего не хватает. Открывается автоматически при первом запуске.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.3, y: 0.02, w: 0.4, h: 0.14 }
  - id: wizard-claude
    title: Claude Code
    kind: panel
    where: 'Мастер → список инструментов'
    uiKey: environmentSetup:tool.claude.name
    why: 'Основа Клавдии — программа, которая выполняет задачи. Единственный обязательный компонент: без него чат не работает.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.05, y: 0.29, w: 0.9, h: 0.16 }
    notes:
      - 'Скачивается напрямую, даже если основной сайт недоступен в вашем регионе.'
      - 'Запасной вариант — установка через Node.js (npm).'
  - id: wizard-node
    title: Node.js
    kind: panel
    where: 'Мастер → список инструментов'
    uiKey: environmentSetup:tool.node.name
    why: 'Нужен для расширений и MCP-серверов. Необязателен, но рекомендуется.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.05, y: 0.47, w: 0.9, h: 0.15 }
  - id: wizard-git
    title: Git
    kind: panel
    where: 'Мастер → список инструментов'
    uiKey: environmentSetup:tool.git.name
    why: 'Даёт Claude полноценный терминал Bash и работу с версиями кода. Необязателен, но рекомендуется.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.05, y: 0.63, w: 0.9, h: 0.15 }
  - id: wizard-start
    title: Начать работу
    kind: button
    where: 'Мастер → нижняя кнопка'
    uiKey: environmentSetup:wizard.start
    why: 'Закрывает мастер и открывает список проектов. Появляется, когда всё необходимое на месте.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.43, y: 0.79, w: 0.15, h: 0.06 }
  - id: wizard-login-hint
    title: Вход в аккаунт
    kind: panel
    where: 'Мастер → подсказка после установки'
    uiKey: environmentSetup:wizard.loginHintTitle
    why: 'Напоминает: при первой задаче Claude попросит войти в аккаунт через браузер. Если работаете по API-ключу или шлюзу — ключ указывается в Настройках → Окружение.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.05, y: 0.79, w: 0.9, h: 0.12 }
---

Первый запуск встречает мастером установки окружения. Он сам проверяет,
что установлено, ставит недостающее и подсказывает следующий шаг. Если
всё уже готово, мастер просто предлагает начать работу.
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
  - id: wizard-claude
    title: Claude Code
    kind: panel
    where: 'Мастер → список инструментов'
    uiKey: environmentSetup:tool.claude.name
    why: 'Основа Клавдии — программа, которая выполняет задачи. Единственный обязательный компонент: без него чат не работает.'
    notes:
      - 'Скачивается напрямую, даже если основной сайт недоступен в вашем регионе.'
      - 'Запасной вариант — установка через Node.js (npm).'
  - id: wizard-node
    title: Node.js
    kind: panel
    where: 'Мастер → список инструментов'
    uiKey: environmentSetup:tool.node.name
    why: 'Нужен для расширений и MCP-серверов. Необязателен, но рекомендуется.'
  - id: wizard-git
    title: Git
    kind: panel
    where: 'Мастер → список инструментов'
    uiKey: environmentSetup:tool.git.name
    why: 'Даёт Claude полноценный терминал Bash и работу с версиями кода. Необязателен, но рекомендуется.'
  - id: wizard-start
    title: Начать работу
    kind: button
    where: 'Мастер → нижняя кнопка'
    uiKey: environmentSetup:wizard.start
    why: 'Закрывает мастер и открывает список проектов. Появляется, когда всё необходимое на месте.'
  - id: wizard-login-hint
    title: Вход в аккаунт
    kind: panel
    where: 'Мастер → подсказка после установки'
    uiKey: environmentSetup:wizard.loginHintTitle
    why: 'Напоминает: при первой задаче Claude попросит войти в аккаунт через браузер. Если работаете по API-ключу или шлюзу — ключ указывается в Настройках → Окружение.'
---

Первый запуск встречает мастером установки окружения. Он сам проверяет,
что установлено, ставит недостающее и подсказывает следующий шаг. Если
всё уже готово, мастер просто предлагает начать работу.
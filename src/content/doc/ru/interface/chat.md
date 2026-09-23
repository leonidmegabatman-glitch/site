---
title: Чат
description: Строка ввода, лента сообщений, модель, контекст и управление сессией.
section: interface
order: 3
elements:
  - id: chat-input
    screenshot: interface/chat/session.png
    highlight: { x: 0.12, y: 0.86, w: 0.72, h: 0.07 }
    title: Строка ввода
    kind: field
    where: 'Нижняя часть окна сессии'
    uiKey: promptInput:placeholder
    why: Основное поле для общения с агентом. Поддерживает @-файлы, /-команды и вложение файлов.
    how:
      - Введите сообщение.
      - Нажмите Enter или кнопку отправки.
    notes:
      - Ctrl+Shift+E — развернуть строку ввода на весь экран.
  - id: chat-send
    screenshot: interface/chat/session.png
    highlight: { x: 0.85, y: 0.86, w: 0.06, h: 0.05 }
    title: Отправить сообщение
    kind: button
    where: 'Строка ввода → кнопка отправки'
    uiKey: promptInput:sendMessageEnter
    why: Отправляет введённое сообщение агенту. Enter также отправляет.
  - id: chat-stop
    screenshot: interface/chat/session.png
    highlight: { x: 0.85, y: 0.86, w: 0.06, h: 0.05 }
    title: Остановить генерацию
    kind: button
    where: 'Строка ввода → кнопка стоп (во время генерации)'
    uiKey: promptInput:stopGeneration
    why: Прерывает текущую генерацию ответа. Полезно, если агент пошёл не в том направлении.
  - id: chat-model
    screenshot: interface/chat/session.png
    highlight: { x: 0.12, y: 0.94, w: 0.16, h: 0.04 }
    title: Выбор модели
    kind: select
    where: 'Строка ввода → выпадающий список моделей'
    uiKey: promptInput:modelLabel
    why: Выбирает модель для текущего сообщения — от быстрой и дешёвой до мощной и дорогой.
    notes:
      - Haiku — самая дешёвая, для простых задач.
      - Sonnet — быстрее, подходит для большинства задач.
      - Opus — мощнее, для сложных задач.
      - Fable — максимальные возможности.
  - id: chat-thinking
    screenshot: interface/chat/session.png
    highlight: { x: 0.3, y: 0.94, w: 0.16, h: 0.04 }
    title: Режим мышления
    kind: select
    where: 'Строка ввода → выпадающий список мышления'
    uiKey: promptInput:thinkingLabel
    why: Управляет глубиной рассуждений агента перед ответом — от «Авто» до «Ультрамышление».
  - id: chat-attach
    screenshot: interface/chat/session.png
    highlight: { x: 0.06, y: 0.86, w: 0.04, h: 0.05 }
    title: Прикрепить файлы
    kind: button
    where: 'Строка ввода → иконка скрепки'
    uiKey: promptInput:attachFiles
    why: Позволяет прикрепить файлы или папку к сообщению. Агент увидит их содержимое.
  - id: chat-context
    screenshot: interface/chat/session.png
    highlight: { x: 0.78, y: 0.94, w: 0.17, h: 0.04 }
    title: Индикатор контекста
    kind: panel
    where: 'Строка ввода → правая часть'
    uiKey: promptInput:context.title
    why: Показывает, сколько токенов занято из контекстного окна. Помогает понять, когда пора свернуть контекст или начать новую сессию.
    notes:
      - При приближении к лимиту агент начнёт терять ранний контекст.
  - id: chat-compact
    screenshot: interface/chat/session.png
    highlight: { x: 0.66, y: 0.055, w: 0.035, h: 0.03 }
    title: Свернуть и продолжить
    kind: button
    where: 'Панель сессии → иконка ластика'
    uiKey: sessions:tooltip.compactSession
    why: Сжимает контекст сессии, сохраняя ключевую информацию. Позволяет продолжить работу без потери нити.
    notes:
      - Сводка не показывается в чате — она работает внутренне.
  - id: chat-subagents
    screenshot: interface/chat/session.png
    highlight: { x: 0.7, y: 0.055, w: 0.035, h: 0.03 }
    title: Панель субагентов
    kind: button
    where: 'Панель сессии → иконка агентов'
    uiKey: sessions:tooltip.subagentPanel
    why: Показывает активных субагентов, запущенных текущей сессией. Можно наблюдать за параллельной работой.
  - id: chat-export
    screenshot: interface/chat/session.png
    highlight: { x: 0.74, y: 0.055, w: 0.035, h: 0.03 }
    title: Выгрузить разбор
    kind: button
    where: 'Панель сессии → иконка экспорта'
    uiKey: sessions:tooltip.exportTrace
    why: Создаёт HTML-файл с полным разбором сессии — дерево сообщений, субагенты, поиск.
  - id: chat-copy
    screenshot: interface/chat/session.png
    highlight: { x: 0.78, y: 0.055, w: 0.035, h: 0.03 }
    title: Копировать разговор
    kind: button
    where: 'Панель сессии → иконка копирования'
    uiKey: sessions:tooltip.copyConversation
    why: Копирует содержимое сессии как Markdown или JSONL для вставки в другие инструменты.
---

Чат — основная рабочая область Клавдии. Здесь происходит общение с агентом:
вы пишете запросы, агент выполняет задачи, показывает результаты и спрашивает
подтверждение на опасные действия.

Строка ввода поддерживает @-упоминания файлов, /-команды и вложение файлов
через скрепку или перетаскивание.
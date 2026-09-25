---
title: Первый чат
description: От открытия проекта до выполненного задания за пять минут.
section: znakomstvo
order: 4
elements:
  - id: first-open-project
    title: Открыть проект
    kind: button
    where: 'Список проектов → «Открыть проект»'
    uiKey: projects:list.openProject
    why: 'Проект — это папка, в которой будет работать агент. Выберите любую папку с кодом или пустую, если начинаете с нуля.'
    screenshot: interface/projects/list.png
    highlight: { x: 0.42, y: 0.28, w: 0.16, h: 0.05 }
  - id: first-input
    title: Первое сообщение
    kind: field
    where: 'Строка ввода внизу окна'
    uiKey: promptInput:placeholder
    why: 'Здесь начинается разговор с агентом. Напишите задачу обычными словами, например: «Создай файл, который здоровается по имени».'
    how:
      - 'Напишите задачу.'
      - 'Нажмите Enter.'
    screenshot: interface/chat/session.png
    highlight: { x: 0.12, y: 0.86, w: 0.72, h: 0.07 }
  - id: first-send
    title: Отправка
    kind: button
    where: 'Строка ввода → кнопка отправки'
    uiKey: promptInput:sendMessageEnter
    why: 'Отправляет сообщение. Дальше агент работает сам: читает файлы, выполняет команды и показывает результат в ленте.'
    screenshot: interface/chat/session.png
    highlight: { x: 0.85, y: 0.86, w: 0.06, h: 0.05 }
  - id: first-context
    title: Индикатор контекста
    kind: panel
    where: 'Строка ввода → правая часть'
    uiKey: promptInput:context.title
    why: 'Показывает, сколько контекстного окна занято. На первом чате почти пусто, но для длинных сессий это важный ориентир.'
    screenshot: interface/chat/session.png
    highlight: { x: 0.78, y: 0.94, w: 0.17, h: 0.04 }
---

Всё, что нужно для первого чата: открыть проект, написать задачу и нажать
Enter. Агент выполнит её и покажет результат прямо в ленте. Остальные
возможности — выбор модели, вложение файлов, команды — описаны в разделе
[Чат](../interface/chat/).
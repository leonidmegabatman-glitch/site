---
title: MCP-серверы
description: Управление серверами Model Context Protocol.
section: interface
order: 7
elements:
  - id: mcp-list
    title: Список серверов
    kind: panel
    where: 'Вкладка «MCP»'
    uiKey: mcp:header.title
    why: Показывает все подключённые MCP-серверы. Каждый сервер добавляет агенту новые инструменты.
    screenshot: interface/mcp/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.8 }
  - id: mcp-add
    title: Добавить сервер
    kind: button
    where: 'Вкладка «MCP» → кнопка «Добавить сервер»'
    uiKey: mcp:tabs.addServer
    why: Открывает форму добавления сервера — имя, команда запуска, аргументы и переменные окружения.
    screenshot: interface/mcp/panel.png
    highlight: { x: 0.35, y: 0.13, w: 0.14, h: 0.045 }
  - id: mcp-status
    title: Статус сервера
    kind: panel
    where: 'Карточка сервера'
    uiKey: mcp:status.running
    why: Показывает, подключён ли сервер. Если нет — кнопка «Подключить».
    screenshot: interface/mcp/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
  - id: mcp-connect
    title: Подключить/Отключить
    kind: button
    where: 'Карточка сервера → кнопка'
    uiKey: mcp:button.startServer
    why: Запускает или останавливает процесс сервера. Отключённый сервер не предоставляет инструменты.
    screenshot: interface/mcp/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
---

MCP (Model Context Protocol) — это способ расширить возможности агента
внешними инструментами. Каждый сервер предоставляет набор функций —
доступ к файлам, базам данных, браузерам и другим ресурсам.
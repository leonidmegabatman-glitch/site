---
title: MCP-серверы
description: Управление серверами Model Context Protocol.
section: interface
order: 7
elements:
  - id: mcp-list
    title: Список серверов
    kind: panel
    where: Вкладка «MCP»
    uiKey: mcp:title
    why: Показывает все подключённые MCP-серверы. Каждый сервер добавляет агенту новые инструменты.
  - id: mcp-add
    title: Добавить сервер
    kind: button
    where: Вкладка «MCP» → кнопка «Добавить сервер»
    uiKey: mcp:addServer
    why: Открывает форму добавления сервера — имя, команда запуска, аргументы и переменные окружения.
  - id: mcp-status
    title: Статус сервера
    kind: panel
    where: Карточка сервера
    uiKey: mcp:server.status.connected
    why: Показывает, подключён ли сервер. Если нет — кнопка «Подключить».
  - id: mcp-connect
    title: Подключить/Отключить
    kind: button
    where: Карточка сервера → кнопка
    uiKey: mcp:server.actions.connect
    why: Запускает или останавливает процесс сервера. Отключённый сервер не предоставляет инструменты.
---

MCP (Model Context Protocol) — это способ расширить возможности агента
внешними инструментами. Каждый сервер предоставляет набор функций —
доступ к файлам, базам данных, браузерам и другим ресурсам.
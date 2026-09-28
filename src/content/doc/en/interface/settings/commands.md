---
title: Commands
description: Creating and managing slash commands.
section: interface
order: 16
elements:
  - id: commands-manager
    title: Command manager
    kind: panel
    where: 'Settings → Commands'
    uiKey: slashCommands:manager.title
    why: Shows all slash commands — built-in, user, and project. Create, edit, and delete them here.
    screenshot: interface/settings/commands/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.8 }
  - id: commands-new
    title: New command
    kind: button
    where: 'Settings → Commands → "New command" button'
    uiKey: slashCommands:manager.newCommand
    why: Opens the dialog for creating a slash command. A command is a name, scope (user/project), and content (prompt or template).
    screenshot: interface/settings/commands/panel.png
    highlight: { x: 0.35, y: 0.13, w: 0.14, h: 0.045 }
  - id: commands-scope
    title: Command scope
    kind: select
    where: 'Settings → Commands → filter or creation dialog'
    uiKey: slashCommands:manager.scope.all
    why: User commands are available in all projects; project commands only in the current one. The scope determines where the command file is stored.
    screenshot: interface/settings/commands/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.3, h: 0.3 }
  - id: commands-search
    title: Command search
    kind: field
    where: 'Settings → Commands → search bar'
    uiKey: slashCommands:manager.searchPlaceholder
    why: Quick search by command name when there are many.
    screenshot: interface/settings/commands/panel.png
    highlight: { x: 0.6, y: 0.13, w: 0.35, h: 0.05 }
---

The "Commands" tab manages slash commands — short templates inserted into chat
by typing "/name". They speed up repetitive queries.
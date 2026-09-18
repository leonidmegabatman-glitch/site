---
title: Commands
description: Creating and managing slash commands.
section: interface
order: 16
elements:
  - id: commands-manager
    title: Command manager
    kind: panel
    where: Settings → Commands
    uiKey: slashCommands:manager.title
    why: Shows all slash commands — built-in, user, and project. Create, edit, and delete them here.
  - id: commands-new
    title: New command
    kind: button
    where: Settings → Commands → "New command" button
    uiKey: slashCommands:manager.newCommand
    why: Opens the dialog for creating a slash command. A command is a name, scope (user/project), and content (prompt or template).
  - id: commands-scope
    title: Command scope
    kind: select
    where: Settings → Commands → filter or creation dialog
    uiKey: slashCommands:manager.scope.all
    why: User commands are available in all projects; project commands only in the current one. The scope determines where the command file is stored.
  - id: commands-search
    title: Command search
    kind: field
    where: Settings → Commands → search bar
    uiKey: slashCommands:manager.searchPlaceholder
    why: Quick search by command name when there are many.
---

The "Commands" tab manages slash commands — short templates inserted into chat
by typing "/name". They speed up repetitive queries.
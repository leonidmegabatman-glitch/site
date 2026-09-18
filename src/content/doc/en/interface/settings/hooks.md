---
title: Hooks
description: Commands on Claude Code lifecycle events.
section: interface
order: 15
elements:
  - id: hooks-scope
    title: Hook scope
    kind: select
    where: Settings → Hooks → scope selector
    uiKey: hooks:scope.project
    why: Determines where hooks are stored — in the project, locally, or at the user level. Project hooks go into git; local ones do not.
    notes:
      - '"Local" hooks are not tracked by version control.'
  - id: hooks-events
    title: Hook events
    kind: tab
    where: Settings → Hooks → event tabs
    uiKey: hooks:event.PreToolUse.label
    why: Five lifecycle points to attach commands to — before tool use, after tool use, notification, stop, subagent stop.
  - id: hooks-matcher
    title: Pattern (matcher)
    kind: field
    where: Settings → Hooks → inside an event
    uiKey: hooks:matcher.label
    why: A filter on tool name (regex). An empty pattern applies the hook to all tools.
    notes:
      - Examples "Bash", "Edit|Write", "mcp__.*".
  - id: hooks-command
    title: Hook command
    kind: field
    where: Settings → Hooks → inside an event → command
    uiKey: hooks:command.placeholder
    why: A shell command executed when the event fires. You can set a timeout in seconds.
  - id: hooks-templates
    title: Hook templates
    kind: button
    where: Settings → Hooks → "Templates" button
    uiKey: hooks:button.templates
    why: Ready-made presets for common tasks — command logging, format on save, notifications. Speed up setup.
  - id: hooks-save
    title: Save hooks
    kind: button
    where: Settings → Hooks → "Save" button
    uiKey: hooks:button.save
    why: Writes the hook configuration to the corresponding settings file.
---

Hooks let you run arbitrary commands at key moments of the agent's lifecycle.
Typical uses — logging, auto-formatting, notifications, and security checks.
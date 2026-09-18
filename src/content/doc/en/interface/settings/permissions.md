---
title: Permissions
description: Permission mode, allow and deny rules for tools.
section: interface
order: 12
elements:
  - id: permission-mode
    title: Permission mode
    kind: select
    where: Settings → Permissions → first section
    uiKey: settings:permissions.mode.title
    why: Determines how Klavdiya launches Claude Code when sending messages. The mode controls whether the agent asks for confirmation on every action or works autonomously.
    how:
      - Pick one of the five modes from the dropdown.
      - Click "Save settings".
    notes:
      - '"Bypass all checks" is the default; rules below are ignored.'
      - '"Plan mode" and "Manual confirmation" may block tools, but there is no confirmation prompt in chat — the task simply won''t perform the action.'
  - id: allow-rules
    title: Allow rules
    kind: panel
    where: Settings → Permissions → "Allow rules" section
    uiKey: settings:permissions.allowLabel
    why: A list of tools and commands the agent may run without confirmation. Lets you narrow autonomy to specific actions.
    how:
      - Click "Add rule".
      - Enter a tool name or pattern (regex supported).
      - Click "Save settings".
    notes:
      - Rules apply only in modes other than "Bypass all checks".
  - id: deny-rules
    title: Deny rules
    kind: panel
    where: Settings → Permissions → "Deny rules" section
    uiKey: settings:permissions.denyLabel
    why: A list of tools and commands the agent must never run under any circumstances. Protection against dangerous actions.
    how:
      - Click "Add rule".
      - Enter a tool name or pattern.
      - Click "Save settings".
    notes:
      - Deny takes priority over allow.
  - id: add-rule
    title: Add rule
    kind: button
    where: Settings → Permissions → below the rule list
    uiKey: settings:permissions.addRule
    why: Creates a new row in the allow or deny rule list.
---

The "Permissions" tab controls which actions the agent can perform on its own
and which require confirmation or are blocked. This is Klavdiya's primary
safety mechanism.
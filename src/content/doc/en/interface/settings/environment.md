---
title: Environment
description: Environment variables, API-key script, raw JSON settings.
section: interface
order: 13
elements:
  - id: env-variables
    title: Environment variables
    kind: panel
    where: Settings → Environment → main section
    uiKey: settings:environment.title
    why: Variables applied to every Claude Code session. Lets you set keys, paths, and flags without editing the system environment.
    how:
      - Click "Add variable".
      - Enter a name and value.
      - Click "Save settings".
    notes:
      - Variables are visible to all sessions and agents.
  - id: env-add-variable
    title: Add variable
    kind: button
    where: Settings → Environment → below the variable list
    uiKey: settings:environment.addVariable
    why: Creates a new row for an environment variable.
  - id: common-variables
    title: Common variables
    kind: panel
    where: Settings → Environment → hints block
    uiKey: settings:environment.commonTitle
    why: Hints for frequently used variables — telemetry, model, cost warnings. Speeds up setup.
  - id: api-key-helper
    title: API key helper script
    kind: field
    where: Settings → Environment → advanced section
    uiKey: settings:advanced.apiKeyHelper.label
    why: Path to a script that generates the authorization value for API requests. Needed when using dynamic keys.
    notes:
      - The script must print the value to stdout.
  - id: raw-json
    title: Raw settings (JSON)
    kind: panel
    where: Settings → Environment → bottom section
    uiKey: settings:advanced.rawJson.label
    why: Shows the JSON that will be saved to ~/.claude/settings.json. Lets you see the final configuration and make edits not available through the tabs.
    notes:
      - Edits in raw JSON apply immediately on save.
---

The "Environment" tab gathers everything that affects the session runtime:
variables, authorization scripts, and the final configuration file.
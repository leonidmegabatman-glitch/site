---
title: General
description: Language, theme, chat history, environment and Claude installation.
section: interface
order: 11
elements:
  - id: language
    uiKey: settings:general.language.label
    title: Language
    kind: button
    where: Settings → General → first section
    why: Switches the language of the whole application interface. Almost everything is translated into Russian; English remains for those used to it.
    how:
      - Click "Русский" or "English".
      - Click "Save settings" at the bottom of the page.
    notes:
      - The language applies only after saving.
  - id: theme
    uiKey: settings:general.theme.label
    title: Theme
    kind: button
    where: Settings → General → "Theme" section
    why: Changes the entire look of the application — background, text, accent colour. The dark theme is on by default.
    how:
      - Pick "Тёмная", "Серая", "Светлая" or "Своя".
    notes:
      - Choosing "Своя" reveals a field for every colour in the theme.
    screenshot: interface/settings/general/panel.png
    highlight: { x: 0.06, y: 0.12, w: 0.22, h: 0.06 }
  - id: theme-custom-colors
    uiKey: settings:general.theme.customColorsTitle
    title: Custom theme colours
    kind: field
    where: Settings → General → "Theme" → "Своя"
    why: Lets you set your own interface colours — background, text, cards, accent and the colour of dangerous actions.
    notes:
      - The fields accept CSS colour values (hex, rgb, oklch, etc.).
      - Visible only when the "Своя" theme is selected.
  - id: co-authored-by
    uiKey: settings:general.coAuthored.label
    title: Add "Co-authored by Claude"
    kind: switch
    where: Settings → General → commits section
    why: Adds a Claude signature to commits and pull requests the agent makes, so git history shows where the agent worked.
  - id: verbose-output
    uiKey: settings:general.verbose.label
    title: Verbose output
    kind: switch
    where: Settings → General
    why: Shows the full bash output instead of a shortened one. Useful when figuring out why a command behaves unexpectedly.
    screenshot: interface/settings/general/panel.png
    highlight: { x: 0.06, y: 0.12, w: 0.22, h: 0.06 }
  - id: chat-history-days
    uiKey: settings:general.cleanup.label
    title: Chat history retention (days)
    kind: field
    where: Settings → General
    why: How many days of session history to keep. 30 by default; older entries are deleted automatically.
  - id: environment-setup
    uiKey: environmentSetup:title
    title: Environment setup
    kind: panel
    where: Settings → General → setup section
    why: Checks and installs what Klavdiya needs to run — Claude Code, Node.js, Git. Shows the state of each tool and can install what is missing.
  - id: claude-install
    uiKey: claudeVersion:installationLabel
    title: Claude installation
    kind: select
    where: Settings → General → setup section
    why: Chooses which Claude Code installation to use when several are present on the machine.
    notes:
      - Changes apply after saving settings.
  - id: remember-tabs
    uiKey: settings:general.tabPersistence.label
    title: Remember open tabs
    kind: switch
    where: Settings → General
    why: On the next launch Klavdiya reopens the same tabs that were open when it closed. Saves time when working with the same set of projects.
  - id: startup-greeting
    uiKey: settings:general.startupIntro.label
    title: Show greeting on startup
    kind: switch
    where: Settings → General
    why: Enables the intro screen on launch. Turn it off if it gets in the way and you want to get straight to work.
    screenshot: interface/settings/general/panel.png
    highlight: { x: 0.06, y: 0.12, w: 0.22, h: 0.06 }
---

The "General" page is what you see first when opening settings: language, appearance
and environment installation.
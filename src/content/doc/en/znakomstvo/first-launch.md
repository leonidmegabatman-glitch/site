---
title: First launch
description: 'The setup wizard: environment check, Claude Code installation, first login.'
section: znakomstvo
order: 3
elements:
  - id: wizard-welcome
    title: Wizard welcome
    kind: panel
    where: 'Window on first launch'
    uiKey: environmentSetup:wizardTitle
    why: 'The wizard checks whether the environment is ready and helps install what is missing. Opens automatically on first launch.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.3, y: 0.02, w: 0.4, h: 0.14 }
  - id: wizard-claude
    title: Claude Code
    kind: panel
    where: 'Wizard → tool list'
    uiKey: environmentSetup:tool.claude.name
    why: 'The foundation of Klavdiya — the program that performs tasks. The only required component: chat does not work without it.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.05, y: 0.29, w: 0.9, h: 0.16 }
    notes:
      - 'Downloaded directly, even if the main site is unavailable in your region.'
      - 'Fallback — installation through Node.js (npm).'
  - id: wizard-node
    title: Node.js
    kind: panel
    where: 'Wizard → tool list'
    uiKey: environmentSetup:tool.node.name
    why: 'Needed for extensions and MCP servers. Optional, but recommended.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.05, y: 0.47, w: 0.9, h: 0.15 }
  - id: wizard-git
    title: Git
    kind: panel
    where: 'Wizard → tool list'
    uiKey: environmentSetup:tool.git.name
    why: 'Gives Claude a full Bash terminal and version control. Optional, but recommended.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.05, y: 0.63, w: 0.9, h: 0.15 }
  - id: wizard-start
    title: Start working
    kind: button
    where: 'Wizard → bottom button'
    uiKey: environmentSetup:wizard.start
    why: 'Closes the wizard and opens the project list. Appears once everything required is in place.'
    screenshot: znakomstvo/first-launch.png
    highlight: { x: 0.43, y: 0.79, w: 0.15, h: 0.06 }
  - id: wizard-login-hint
    title: Account login
    kind: panel
    where: 'Wizard → hint after installation'
    uiKey: environmentSetup:wizard.loginHintTitle
    why: 'A reminder: on the first task Claude will ask you to sign in through the browser. If you use an API key or a gateway, set it in Settings → Environment.'
---

First launch greets you with the environment setup wizard. It checks what
is installed, installs what is missing, and points to the next step. If
everything is already ready, the wizard simply offers to start working.
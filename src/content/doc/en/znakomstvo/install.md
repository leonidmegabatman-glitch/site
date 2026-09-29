---
title: Installation
description: How to download and install Klavdiya and what gets installed along with it.
section: znakomstvo
order: 2
elements:
  - id: installer-download
    title: Downloading the installer
    kind: link
    where: 'Project releases page on GitHub'
    why: 'Klavdiya is distributed free as a single Windows installer. No registration or account needed.'
    notes:
      - 'The installer is an NSIS-based .exe.'
    screenshot: znakomstvo/installer.png
    highlight: { x: 0.03, y: 0.03, w: 0.94, h: 0.94 }
  - id: installer-language
    title: Installation language
    kind: select
    where: 'First installer screen'
    why: 'The installer picks the language from Windows system settings and shows all further screens in it.'
    screenshot: znakomstvo/installer.png
    highlight: { x: 0.08, y: 0.42, w: 0.84, h: 0.14 }
  - id: app-install
    title: Installing the app
    kind: panel
    where: 'Main installer screen'
    why: 'Installs Klavdiya itself. Nothing else is required: the app offers to install missing tools at first launch.'
    screenshot: znakomstvo/installer.png
    highlight: { x: 0.03, y: 0.03, w: 0.94, h: 0.94 }
---

The installer only installs Klavdiya itself. Everything it cannot work
without (above all Claude Code) is checked and installed by the wizard at
first launch — see [First launch](first-launch/).
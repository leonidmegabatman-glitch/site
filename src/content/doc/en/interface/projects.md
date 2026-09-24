---
title: Projects
description: Project list, opening and project settings.
section: interface
order: 4
elements:
  - id: projects-list
    screenshot: interface/projects/list.png
    highlight: { x: 0.25, y: 0.15, w: 0.5, h: 0.75 }
    title: Project list
    kind: panel
    where: '"Projects" tab'
    uiKey: projects:list.title
    why: Shows all available projects — folders where the agent works. This is where you start.
  - id: projects-open
    screenshot: interface/projects/list.png
    highlight: { x: 0.42, y: 0.28, w: 0.16, h: 0.05 }
    title: Open project
    kind: button
    where: 'Project list → "Open project" button'
    uiKey: projects:list.openProject
    why: Opens a folder picker dialog. The selected folder becomes a project — the agent will work in it.
  - id: projects-recent
    screenshot: interface/projects/list.png
    highlight: { x: 0.28, y: 0.42, w: 0.44, h: 0.4 }
    title: Recent projects
    kind: panel
    where: 'Project list → "Recent" section'
    uiKey: projects:list.recentTitle
    why: Quick access to recently opened projects. Click opens the project immediately.
  - id: project-settings
    screenshot: interface/projects/list.png
    highlight: { x: 0.68, y: 0.44, w: 0.03, h: 0.04 }
    title: Project settings
    kind: panel
    where: 'Project → settings icon'
    uiKey: projects:settings.title
    why: Manages project slash commands, project hooks, and local hooks. Everything specific to a particular project.
    notes:
      - Project hooks go into git.
      - Local hooks — only on your machine.
---

Projects are folders where the agent works. Each project has its own session
history, its own hooks, and its own slash commands. Opening a project means
telling Klavdiya which folder to work in.
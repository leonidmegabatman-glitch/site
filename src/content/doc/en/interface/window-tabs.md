---
title: Window and Tabs
description: Window titlebar, navigation, tabs and switching between them.
section: interface
order: 2
elements:
  - id: titlebar-menu
    title: Main menu
    kind: menu
    where: Window top bar
    uiKey: titlebar:menu.projects
    why: Navigation between main app sections — projects, agents, sessions, MCP, settings, usage.
  - id: titlebar-scheduler
    title: Scheduler
    kind: button
    where: Top bar → clock icon
    uiKey: titlebar:tooltip.scheduler
    why: Opens the task scheduler tab — automatic session launches on a schedule.
  - id: titlebar-settings
    title: Settings
    kind: button
    where: Top bar → gear icon
    uiKey: titlebar:tooltip.settings
    why: Opens app settings — language, theme, permissions, environment and other tabs.
  - id: titlebar-more
    title: More
    kind: button
    where: Top bar → "…" icon
    uiKey: titlebar:tooltip.more
    why: Additional menu with access to CLAUDE.md, MCP servers, and the About page.
  - id: claude-status
    title: Claude Code status
    kind: panel
    where: Top bar → right side
    uiKey: titlebar:status.checking
    why: Shows whether Claude Code is installed. If not — offers to install or pick an installation.
    notes:
      - If the status is "not found", chat will not work.
  - id: tabs-bar
    title: Tab bar
    kind: panel
    where: Below the top bar
    uiKey: tabs:tooltip.newProject
    why: Shows all open tabs — projects, sessions, agents, settings. The "+" button opens a new project (Ctrl+T).
    notes:
      - Ctrl+T — new project.
      - Tabs can be closed with the middle mouse button.
  - id: tab-close
    title: Close tab
    kind: button
    where: Tab bar → X on a tab
    uiKey: tabs:tooltip.closeTab
    why: Closes the tab. If there are unsaved changes, a warning appears.
  - id: new-session
    title: New session
    kind: button
    where: Tab bar → "+" button inside a project
    uiKey: tabs:actions.newSession
    why: Creates a new chat session in the current project.
  - id: back-to-projects
    title: Back to projects
    kind: button
    where: Tab bar → back arrow
    uiKey: tabs:tooltip.backToProjects
    why: Returns to the project list if a specific session is open.
---

Klavdiya's window consists of a top navigation bar, a tab bar, and the main
working area. Each tab is a separate context: a project, session, agent, or
settings.

Tabs let you work with multiple projects simultaneously, switching between
them without losing context.
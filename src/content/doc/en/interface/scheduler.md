---
title: Scheduler
description: Automatic task launches on a schedule.
section: interface
order: 6
elements:
  - id: scheduler-list
    title: Task list
    kind: panel
    where: '"Scheduler" tab'
    uiKey: scheduler:title
    why: Shows all scheduled tasks. Each task is an agent that runs on a cron schedule.
    screenshot: interface/scheduler/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.8 }
  - id: scheduler-create
    title: Create task
    kind: button
    where: '"Scheduler" tab → "Create task" button'
    uiKey: scheduler:button.newTask
    why: Opens the task creation form — name, schedule, agent, and prompt.
    screenshot: interface/scheduler/panel.png
    highlight: { x: 0.35, y: 0.13, w: 0.14, h: 0.045 }
  - id: scheduler-cron
    title: Cron expression
    kind: field
    where: 'Task dialog → schedule field'
    uiKey: scheduler:schedule.expr
    why: Determines when to run the task. Format — minute hour day month day-of-week.
    screenshot: interface/scheduler/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
    notes:
      - Example "0 9 * * *" — every day at 9 AM.
  - id: scheduler-toggle
    title: Enable/Disable
    kind: switch
    where: 'Task card → toggle'
    uiKey: scheduler:task.disabled
    why: Temporarily disables a task without deleting it. Useful for pauses.
    screenshot: interface/scheduler/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
  - id: scheduler-run-now
    title: Run now
    kind: button
    where: 'Task card → button'
    uiKey: scheduler:button.runNow
    why: Runs the task immediately without waiting for the schedule. For testing.
    screenshot: interface/scheduler/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
---

The scheduler lets you run agents automatically on a schedule. Typical
scenarios — daily reports, nightly code checks, regular documentation
updates.
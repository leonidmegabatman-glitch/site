---
title: Scheduler
description: Automatic task launches on a schedule.
section: interface
order: 6
elements:
  - id: scheduler-list
    title: Task list
    kind: panel
    where: "Scheduler" tab
    uiKey: scheduler:title
    why: Shows all scheduled tasks. Each task is an agent that runs on a cron schedule.
  - id: scheduler-create
    title: Create task
    kind: button
    where: "Scheduler" tab → "Create task" button
    uiKey: scheduler:createTask
    why: Opens the task creation form — name, schedule, agent, and prompt.
  - id: scheduler-cron
    title: Cron expression
    kind: field
    where: Task dialog → schedule field
    uiKey: scheduler:dialog.cronLabel
    why: Determines when to run the task. Format — minute hour day month day-of-week.
    notes:
      - Example "0 9 * * *" — every day at 9 AM.
  - id: scheduler-toggle
    title: Enable/Disable
    kind: switch
    where: Task card → toggle
    uiKey: scheduler:task.enabled
    why: Temporarily disables a task without deleting it. Useful for pauses.
  - id: scheduler-run-now
    title: Run now
    kind: button
    where: Task card → button
    uiKey: scheduler:task.actions.runNow
    why: Runs the task immediately without waiting for the schedule. For testing.
---

The scheduler lets you run agents automatically on a schedule. Typical
scenarios — daily reports, nightly code checks, regular documentation
updates.
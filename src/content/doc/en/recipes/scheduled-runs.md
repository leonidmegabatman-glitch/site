---
title: Run on a schedule
description: Set up automatic task launches with cron.
section: recipes
order: 5
---

**Goal.** The agent performs a task on its own every day at 9 AM — a report, a code check, a documentation update.

**Steps.**

1. Open the [Scheduler](../../interface/scheduler/) and click "Create task".
2. Fill in the task name, pick an agent, and write the prompt.
3. Set the schedule in cron format. Example: `0 9 * * *` — every day at 9:00.
4. Save. The task appears in the list and launches on its own.

**Notes.**

- "Run now" executes the task immediately — handy for checking the setup.
- The toggle on the task card temporarily disables the task without deleting it.

**In detail:** [Scheduler](../../interface/scheduler/).
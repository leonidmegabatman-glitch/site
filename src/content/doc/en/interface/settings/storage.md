---
title: Storage
description: Local database tables, SQL queries, reset.
section: interface
order: 17
elements:
  - id: storage-tables
    title: Database tables
    kind: panel
    where: Settings → Storage → main section
    uiKey: storage:header.title
    why: Shows the contents of Klavdiya's local database — agents, runs, settings. You can view, edit, and delete rows.
  - id: storage-table-select
    title: Table selector
    kind: select
    where: Settings → Storage → dropdown
    uiKey: storage:select.placeholder
    why: Switches the view between database tables.
  - id: storage-sql
    title: SQL query
    kind: button
    where: Settings → Storage → "SQL query" button
    uiKey: storage:header.sqlQuery
    why: Opens an arbitrary SQL query editor. For advanced users who need direct data access.
    notes:
      - Use with caution — data can be damaged.
  - id: storage-reset
    title: Reset DB
    kind: button
    where: Settings → Storage → "Reset DB" button
    uiKey: storage:header.resetDb
    why: Returns the database to its first-install state — all agents, runs, and settings are permanently deleted.
    notes:
      - This cannot be undone. A confirmation dialog will appear.
---

The "Storage" tab gives direct access to Klavdiya's local database. Most users
won't need it — it's a tool for debugging and recovery after failures.
---
title: Usage
description: Token and cost statistics.
section: interface
order: 8
elements:
  - id: usage-stats
    title: Stats panel
    kind: panel
    where: "Usage" tab
    uiKey: usage:title
    why: Shows total token consumption and cost for the selected period.
  - id: usage-period
    title: Period
    kind: select
    where: "Usage" tab → dropdown
    uiKey: usage:period.today
    why: Filters statistics — today, week, month, or all time.
  - id: usage-chart
    title: Usage chart
    kind: panel
    where: "Usage" tab → chart
    uiKey: usage:chart.title
    why: Visualizes token consumption by day. Helps track expenses.
---

The "Usage" tab shows how many tokens have been spent and how much it cost.
Useful for controlling expenses when working with paid models.
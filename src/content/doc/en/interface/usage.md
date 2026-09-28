---
title: Usage
description: Token and cost statistics.
section: interface
order: 8
elements:
  - id: usage-stats
    title: Stats panel
    kind: panel
    where: '"Usage" tab'
    uiKey: usage:header.title
    why: Shows total token consumption and cost for the selected period.
    screenshot: interface/usage/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.25 }
  - id: usage-period
    title: Period
    kind: select
    where: '"Usage" tab → dropdown'
    uiKey: usage:range.all
    why: Filters statistics — today, week, month, or all time.
    screenshot: interface/usage/panel.png
    highlight: { x: 0.85, y: 0.06, w: 0.1, h: 0.045 }
  - id: usage-chart
    title: Usage chart
    kind: panel
    where: '"Usage" tab → chart'
    uiKey: usage:tabs.timeline
    why: Visualizes token consumption by day. Helps track expenses.
    screenshot: interface/usage/panel.png
    highlight: { x: 0.05, y: 0.4, w: 0.9, h: 0.55 }
---

The "Usage" tab shows how many tokens have been spent and how much it cost.
Useful for controlling expenses when working with paid models.
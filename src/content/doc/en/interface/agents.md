---
title: Agents
description: Creating, configuring and running agents for task automation.
section: interface
order: 5
elements:
  - id: agents-list
    title: Agent list
    kind: panel
    where: '"Agents" tab'
    uiKey: agents:list.title
    why: Shows all created agents. Each agent is a set of instructions for automating a specific task.
    screenshot: interface/agents/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.8 }
  - id: agents-create
    title: Create agent
    kind: button
    where: '"Agents" tab → "Create agent" button'
    uiKey: agents:button.createAgent
    why: Opens the form for creating a new agent — name, description, system prompt, and model.
    screenshot: interface/agents/panel.png
    highlight: { x: 0.35, y: 0.13, w: 0.14, h: 0.045 }
  - id: agents-import
    title: Import agent
    kind: button
    where: '"Agents" tab → "Import agent" button'
    uiKey: agents:button.importAgent
    why: Imports an agent from a file or another source.
    screenshot: interface/agents/panel.png
    highlight: { x: 0.5, y: 0.13, w: 0.14, h: 0.045 }
  - id: agent-run
    title: Run agent
    kind: panel
    where: 'Agent card → "Run" button'
    uiKey: agents:buttonTitle.execute
    why: Runs the agent with a specific task. You can choose an isolated run in a git worktree.
    screenshot: interface/agents/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
    notes:
      - An isolated run does not touch your working tree.
  - id: agent-worktree
    title: Isolated run
    kind: checkbox
    where: 'Run dialog → checkbox'
    uiKey: agents:run.started
    why: Runs the agent in a separate git branch (worktree). The result must be merged manually. Safe for the main code.
  - id: agent-status
    title: Agent status
    kind: panel
    where: 'Agent card'
    uiKey: agents:list.title
    why: Shows the agent's current state — idle, running, completed, or failed.
    screenshot: interface/agents/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
---

Agents are automated helpers. Each agent has a system prompt that defines its
behavior and can be run with a specific task. Agents work in isolated branches,
leaving the main code untouched.
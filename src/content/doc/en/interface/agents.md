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
  - id: agents-create
    title: Create agent
    kind: button
    where: '"Agents" tab → "Create agent" button'
    uiKey: agents:button.createAgent
    why: Opens the form for creating a new agent — name, description, system prompt, and model.
  - id: agents-import
    title: Import agent
    kind: button
    where: '"Agents" tab → "Import agent" button'
    uiKey: agents:button.importAgent
    why: Imports an agent from a file or another source.
  - id: agent-run
    title: Run agent
    kind: panel
    where: 'Agent card → "Run" button'
    uiKey: agents:buttonTitle.execute
    why: Runs the agent with a specific task. You can choose an isolated run in a git worktree.
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
---

Agents are automated helpers. Each agent has a system prompt that defines its
behavior and can be run with a specific task. Agents work in isolated branches,
leaving the main code untouched.
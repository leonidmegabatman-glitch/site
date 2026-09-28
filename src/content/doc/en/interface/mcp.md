---
title: MCP Servers
description: Managing Model Context Protocol servers.
section: interface
order: 7
elements:
  - id: mcp-list
    title: Server list
    kind: panel
    where: '"MCP" tab'
    uiKey: mcp:header.title
    why: Shows all connected MCP servers. Each server adds new tools to the agent.
    screenshot: interface/mcp/panel.png
    highlight: { x: 0.05, y: 0.12, w: 0.9, h: 0.8 }
  - id: mcp-add
    title: Add server
    kind: button
    where: '"MCP" tab → "Add server" button'
    uiKey: mcp:tabs.addServer
    why: Opens the server addition form — name, launch command, arguments, and environment variables.
    screenshot: interface/mcp/panel.png
    highlight: { x: 0.35, y: 0.13, w: 0.14, h: 0.045 }
  - id: mcp-status
    title: Server status
    kind: panel
    where: 'Server card'
    uiKey: mcp:status.running
    why: Shows whether the server is connected. If not — a "Connect" button.
    screenshot: interface/mcp/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
  - id: mcp-connect
    title: Connect/Disconnect
    kind: button
    where: 'Server card → button'
    uiKey: mcp:button.startServer
    why: Starts or stops the server process. A disconnected server does not provide tools.
    screenshot: interface/mcp/panel.png
    highlight: { x: 0.05, y: 0.2, w: 0.9, h: 0.3 }
---

MCP (Model Context Protocol) is a way to extend the agent's capabilities
with external tools. Each server provides a set of functions — access to
files, databases, browsers, and other resources.
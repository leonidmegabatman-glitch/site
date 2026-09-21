---
title: First chat
description: From opening a project to a finished task in five minutes.
section: znakomstvo
order: 4
elements:
  - id: first-open-project
    title: Open a project
    kind: button
    where: 'Project list → "Open project"'
    uiKey: projects:list.openProject
    why: 'A project is the folder the agent works in. Pick any folder with code, or an empty one if you are starting from scratch.'
  - id: first-input
    title: First message
    kind: field
    where: 'Input bar at the bottom of the window'
    uiKey: promptInput:placeholder
    why: 'This is where the conversation with the agent begins. Write the task in plain words, for example: "Create a file that greets by name".'
    how:
      - 'Write the task.'
      - 'Press Enter.'
  - id: first-send
    title: Send
    kind: button
    where: 'Input bar → send button'
    uiKey: promptInput:sendMessageEnter
    why: 'Sends the message. The agent then works on its own: reads files, runs commands, and shows results in the feed.'
  - id: first-context
    title: Context indicator
    kind: panel
    where: 'Input bar → right side'
    uiKey: promptInput:context.title
    why: 'Shows how much of the context window is used. Nearly empty on a first chat, but an important guide for long sessions.'
---

All you need for the first chat: open a project, write a task, and press
Enter. The agent performs it and shows the result right in the feed. The
rest — model choice, file attachments, commands — is covered in
[Chat](../interface/chat/).
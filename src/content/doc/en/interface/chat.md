---
title: Chat
description: Input bar, message feed, model, context and session management.
section: interface
order: 3
elements:
  - id: chat-input
    title: Input bar
    kind: field
    where: Bottom of the session window
    uiKey: promptInput:placeholder
    why: The main field for communicating with the agent. Supports @-files, /-commands, and file attachments.
    how:
      - Type a message.
      - Press Enter or the send button.
    notes:
      - Ctrl+Shift+E — expand the input bar to fullscreen.
  - id: chat-send
    title: Send message
    kind: button
    where: Input bar → send button
    uiKey: promptInput:sendMessageEnter
    why: Sends the typed message to the agent. Enter also sends.
  - id: chat-stop
    title: Stop generation
    kind: button
    where: Input bar → stop button (during generation)
    uiKey: promptInput:stopGeneration
    why: Interrupts the current response generation. Useful when the agent goes in the wrong direction.
  - id: chat-model
    title: Model selector
    kind: select
    where: Input bar → model dropdown
    uiKey: promptInput:modelLabel
    why: Picks the model for the current message — from fast and cheap to powerful and expensive.
    notes:
      - Haiku — cheapest, for simple tasks.
      - Sonnet — faster, suitable for most tasks.
      - Opus — more powerful, for complex tasks.
      - Fable — maximum capabilities.
  - id: chat-thinking
    title: Thinking mode
    kind: select
    where: Input bar → thinking dropdown
    uiKey: promptInput:thinkingLabel
    why: Controls the depth of the agent's reasoning before answering — from "Auto" to "Ultrathink".
  - id: chat-attach
    title: Attach files
    kind: button
    where: Input bar → paperclip icon
    uiKey: promptInput:attachFiles
    why: Lets you attach files or a folder to the message. The agent will see their contents.
  - id: chat-context
    title: Context indicator
    kind: panel
    where: Input bar → right side
    uiKey: promptInput:context.title
    why: Shows how many tokens are used of the context window. Helps understand when to compact context or start a new session.
    notes:
      - As the limit approaches, the agent will start losing earlier context.
  - id: chat-compact
    title: Compact and continue
    kind: button
    where: Session panel → eraser icon
    uiKey: sessions:tooltip.compactSession
    why: Compresses the session context, preserving key information. Lets you continue working without losing the thread.
    notes:
      - The summary is not shown in chat — it works internally.
  - id: chat-subagents
    title: Subagent panel
    kind: button
    where: Session panel → agents icon
    uiKey: sessions:tooltip.subagentPanel
    why: Shows active subagents launched by the current session. You can observe parallel work.
  - id: chat-export
    title: Export trace
    kind: button
    where: Session panel → export icon
    uiKey: sessions:tooltip.exportTrace
    why: Creates an HTML file with a full session breakdown — message tree, subagents, search.
  - id: chat-copy
    title: Copy conversation
    kind: button
    where: Session panel → copy icon
    uiKey: sessions:tooltip.copyConversation
    why: Copies the session contents as Markdown or JSONL for pasting into other tools.
---

Chat is Klavdiya's primary working area. This is where communication with the
agent happens: you write requests, the agent performs tasks, shows results,
and asks for confirmation on dangerous actions.

The input bar supports @-file mentions, /-commands, and file attachments via
the paperclip or drag-and-drop.
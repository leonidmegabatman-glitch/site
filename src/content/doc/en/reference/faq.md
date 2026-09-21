---
title: FAQ
description: Answers to frequently asked questions.
section: reference
order: 4
---

## Klavdiya can't find Claude Code

The status in the top bar shows "not found". Solution:

1. Open Settings → General → setup section.
2. Click "Install Claude Code".
3. If installation is unavailable due to region, use the Node.js fallback.

## Chat doesn't respond

Check:

- Claude Code status in the top bar — should say "found".
- Permission mode in Settings → Permissions.
- Proxy in Settings → Proxy (if you use one).

## How to switch models

The chat input bar has a model dropdown. The choice applies to the current
message. The model list depends on the provider.

## How to use voice input

1. Settings → Voice → enable the toggle.
2. Pick a provider (local Whisper works offline).
3. A microphone button appears in the chat.

## Settings don't apply

Almost all changes require clicking "Save settings". The exception is
raw JSON edits on the Environment tab.
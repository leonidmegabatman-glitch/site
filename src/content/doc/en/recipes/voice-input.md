---
title: Dictate by voice
description: Turn on voice input and dictate a prompt instead of typing.
section: recipes
order: 2
---

**Goal.** Speak a long prompt into the microphone instead of typing it.

**Steps.**

1. Open [Settings → Voice](../../interface/settings/voice/) and enable voice input.
2. Pick a recognition provider:
   - "Local Whisper" — offline, nothing leaves your machine;
   - "Yandex SpeechKit" or "OpenAI Whisper" — cloud, require a key.
3. Save the settings. A microphone button appears in the chat input bar.
4. Press it, dictate, and release — the text appears in the input bar; send it as usual.

**Notes.**

- For cloud providers fill in the key first (and the folder id for Yandex).
- No microphone button? Check that the "Enable voice input" toggle was saved.

**In detail:** [Voice tab](../../interface/settings/voice/), [Chat](../../interface/chat/).
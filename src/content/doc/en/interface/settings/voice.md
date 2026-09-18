---
title: Voice
description: Speech recognition for dictating queries by voice.
section: interface
order: 19
elements:
  - id: voice-enable
    title: Enable voice input
    kind: switch
    where: Settings → Voice → first toggle
    uiKey: voice:enable
    why: Shows a microphone button in the chat input bar. Without this toggle, voice input is unavailable.
  - id: voice-provider
    title: Recognition provider
    kind: select
    where: Settings → Voice → dropdown
    uiKey: voice:providerLabel
    why: Picks the speech recognition engine — cloud OpenAI, local Whisper (offline, free), or cloud Yandex.
    notes:
      - Local Whisper requires a downloaded model and uses the GPU when available.
  - id: voice-openai-key
    title: OpenAI API key
    kind: field
    where: Settings → Voice → when OpenAI provider is selected
    uiKey: voice:openaiApiKey
    why: Key for cloud recognition via the Whisper API. Starts with "sk-".
    notes:
      - A linked payment method is required in the OpenAI account.
  - id: voice-yandex-key
    title: Yandex API key
    kind: field
    where: Settings → Voice → when Yandex provider is selected
    uiKey: voice:yandexApiKey
    why: Service account key for Yandex SpeechKit. Created in the Yandex Cloud console.
  - id: voice-yandex-folder
    title: Yandex folder ID
    kind: field
    where: Settings → Voice → when Yandex provider is selected
    uiKey: voice:yandexFolderId
    why: The folder ID (starts with "b1g") in Yandex Cloud. Needed to authorize requests to SpeechKit.
  - id: voice-setup-help
    title: Setup help
    kind: button
    where: Settings → Voice → "How to get connection data" button
    uiKey: voice:setup.title
    why: Opens a step-by-step guide for obtaining keys for the selected provider. Can open a session where Klavdiya walks you through the steps.
---

The "Voice" tab configures speech recognition for dictating queries. Three
providers are supported: cloud OpenAI, local Whisper (works without internet),
and cloud Yandex.
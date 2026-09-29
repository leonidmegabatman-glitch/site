---
title: Голос
description: Распознавание речи для диктовки запросов голосом.
section: interface
order: 19
elements:
  - id: voice-enable
    title: Включить голосовой ввод
    kind: switch
    where: 'Настройки → Голос → первый переключатель'
    uiKey: voice:enable
    why: Показывает кнопку микрофона в строке ввода чата. Без этого переключателя голосовой ввод недоступен.
    screenshot: interface/settings/voice/panel.png
    highlight: { x: 0.3, y: 0.1, w: 0.62, h: 0.06 }
  - id: voice-provider
    title: Провайдер распознавания
    kind: select
    where: 'Настройки → Голос → выпадающий список'
    uiKey: voice:providerLabel
    why: Выбирает движок распознавания речи — облачный OpenAI, локальный Whisper (офлайн, бесплатно) или облачный Yandex.
    notes:
      - Локальный Whisper требует скачанную модель и использует GPU при наличии.
    screenshot: interface/settings/voice/panel.png
    highlight: { x: 0.3, y: 0.18, w: 0.62, h: 0.08 }
  - id: voice-openai-key
    title: API-ключ OpenAI
    kind: field
    where: 'Настройки → Голос → при выборе провайдера OpenAI'
    uiKey: voice:openaiApiKey
    why: Ключ для облачного распознавания через Whisper API. Начинается с «sk-».
    notes:
      - Требуется привязанный способ оплаты в аккаунте OpenAI.
    screenshot: interface/settings/voice/panel.png
    highlight: { x: 0.3, y: 0.28, w: 0.62, h: 0.1 }
  - id: voice-yandex-key
    title: API-ключ Yandex
    kind: field
    where: 'Настройки → Голос → при выборе провайдера Yandex'
    uiKey: voice:yandexApiKey
    why: Ключ сервисного аккаунта для Yandex SpeechKit. Создаётся в консоли Yandex Cloud.
    screenshot: interface/settings/voice/panel.png
    highlight: { x: 0.3, y: 0.4, w: 0.62, h: 0.1 }
  - id: voice-yandex-folder
    title: Идентификатор каталога Yandex
    kind: field
    where: 'Настройки → Голос → при выборе провайдера Yandex'
    uiKey: voice:yandexFolderId
    why: Идентификатор каталога (folder id, начинается с «b1g») в Yandex Cloud. Нужен для авторизации запросов к SpeechKit.
    screenshot: interface/settings/voice/panel.png
    highlight: { x: 0.3, y: 0.52, w: 0.62, h: 0.1 }
  - id: voice-setup-help
    title: Помощь с настройкой
    kind: button
    where: 'Настройки → Голос → кнопка «Как получить данные для подключения»'
    uiKey: voice:setup.title
    why: Открывает пошаговую инструкцию по получению ключей для выбранного провайдера. Может открыть сессию с Клавдией, которая проведёт по шагам.
    screenshot: interface/settings/voice/panel.png
    highlight: { x: 0.3, y: 0.66, w: 0.35, h: 0.06 }
---

Вкладка «Голос» настраивает распознавание речи для диктовки запросов.
Поддерживаются три провайдера: облачный OpenAI, локальный Whisper
(работает без интернета) и облачный Yandex.
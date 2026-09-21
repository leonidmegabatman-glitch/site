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
  - id: voice-provider
    title: Провайдер распознавания
    kind: select
    where: 'Настройки → Голос → выпадающий список'
    uiKey: voice:providerLabel
    why: Выбирает движок распознавания речи — облачный OpenAI, локальный Whisper (офлайн, бесплатно) или облачный Yandex.
    notes:
      - Локальный Whisper требует скачанную модель и использует GPU при наличии.
  - id: voice-openai-key
    title: API-ключ OpenAI
    kind: field
    where: 'Настройки → Голос → при выборе провайдера OpenAI'
    uiKey: voice:openaiApiKey
    why: Ключ для облачного распознавания через Whisper API. Начинается с «sk-».
    notes:
      - Требуется привязанный способ оплаты в аккаунте OpenAI.
  - id: voice-yandex-key
    title: API-ключ Yandex
    kind: field
    where: 'Настройки → Голос → при выборе провайдера Yandex'
    uiKey: voice:yandexApiKey
    why: Ключ сервисного аккаунта для Yandex SpeechKit. Создаётся в консоли Yandex Cloud.
  - id: voice-yandex-folder
    title: Идентификатор каталога Yandex
    kind: field
    where: 'Настройки → Голос → при выборе провайдера Yandex'
    uiKey: voice:yandexFolderId
    why: Идентификатор каталога (folder id, начинается с «b1g») в Yandex Cloud. Нужен для авторизации запросов к SpeechKit.
  - id: voice-setup-help
    title: Помощь с настройкой
    kind: button
    where: 'Настройки → Голос → кнопка «Как получить данные для подключения»'
    uiKey: voice:setup.title
    why: Открывает пошаговую инструкцию по получению ключей для выбранного провайдера. Может открыть сессию с Клавдией, которая проведёт по шагам.
---

Вкладка «Голос» настраивает распознавание речи для диктовки запросов.
Поддерживаются три провайдера: облачный OpenAI, локальный Whisper
(работает без интернета) и облачный Yandex.
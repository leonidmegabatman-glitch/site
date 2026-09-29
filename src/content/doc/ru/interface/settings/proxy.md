---
title: Прокси
description: Настройка прокси для запросов к Claude API.
section: interface
order: 18
elements:
  - id: proxy-enable
    title: Включить прокси
    kind: switch
    where: 'Настройки → Прокси → первый переключатель'
    uiKey: proxy:enable
    why: Активирует использование прокси для всех запросов к Claude API. Нужно, когда прямой доступ заблокирован или нужно логировать трафик.
    screenshot: interface/settings/proxy/panel.png
    highlight: { x: 0.3, y: 0.11, w: 0.62, h: 0.06 }
  - id: proxy-http
    title: HTTP-прокси
    kind: field
    where: 'Настройки → Прокси → поле HTTP'
    uiKey: proxy:httpProxy
    why: URL прокси для HTTP-запросов. Формат «http://host:port».
    screenshot: interface/settings/proxy/panel.png
    highlight: { x: 0.3, y: 0.2, w: 0.62, h: 0.11 }
  - id: proxy-https
    title: HTTPS-прокси
    kind: field
    where: 'Настройки → Прокси → поле HTTPS'
    uiKey: proxy:httpsProxy
    why: URL прокси для HTTPS-запросов. Формат «https://host:port».
    screenshot: interface/settings/proxy/panel.png
    highlight: { x: 0.3, y: 0.33, w: 0.62, h: 0.11 }
  - id: proxy-no-proxy
    title: Без прокси
    kind: field
    where: 'Настройки → Прокси → поле «Без прокси»'
    uiKey: proxy:noProxy
    why: Список хостов через запятую, которые должны идти в обход прокси. Например, «localhost,127.0.0.1».
    screenshot: interface/settings/proxy/panel.png
    highlight: { x: 0.3, y: 0.46, w: 0.62, h: 0.11 }
  - id: proxy-all
    title: Прокси для всех протоколов
    kind: field
    where: 'Настройки → Прокси → поле «Все протоколы»'
    uiKey: proxy:allProxy
    why: Единый URL прокси, используемый когда специфичные для протокола прокси не заданы.
    screenshot: interface/settings/proxy/panel.png
    highlight: { x: 0.3, y: 0.59, w: 0.62, h: 0.11 }
    notes:
      - Необязательное поле.
---

Вкладка «Прокси» настраивает сетевой маршрут запросов к Claude API.
Нужна в корпоративных сетях с обязательным прокси или при работе через
шлюз безопасности.
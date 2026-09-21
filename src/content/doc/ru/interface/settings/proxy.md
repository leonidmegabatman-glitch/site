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
  - id: proxy-http
    title: HTTP-прокси
    kind: field
    where: 'Настройки → Прокси → поле HTTP'
    uiKey: proxy:httpProxy
    why: URL прокси для HTTP-запросов. Формат «http://host:port».
  - id: proxy-https
    title: HTTPS-прокси
    kind: field
    where: 'Настройки → Прокси → поле HTTPS'
    uiKey: proxy:httpsProxy
    why: URL прокси для HTTPS-запросов. Формат «https://host:port».
  - id: proxy-no-proxy
    title: Без прокси
    kind: field
    where: 'Настройки → Прокси → поле «Без прокси»'
    uiKey: proxy:noProxy
    why: Список хостов через запятую, которые должны идти в обход прокси. Например, «localhost,127.0.0.1».
  - id: proxy-all
    title: Прокси для всех протоколов
    kind: field
    where: 'Настройки → Прокси → поле «Все протоколы»'
    uiKey: proxy:allProxy
    why: Единый URL прокси, используемый когда специфичные для протокола прокси не заданы.
    notes:
      - Необязательное поле.
---

Вкладка «Прокси» настраивает сетевой маршрут запросов к Claude API.
Нужна в корпоративных сетях с обязательным прокси или при работе через
шлюз безопасности.
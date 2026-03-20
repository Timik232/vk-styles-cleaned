# VK Styles Clean

[English](#english) | [Русский](#русский)

---

## Русский

**Содержание:** [Описание](#описание) · [Что делало оригинальное расширение](#что-делало-оригинальное-расширение) · [Почему это было проблемой](#почему-это-было-проблемой) · [Что было исправлено](#что-было-исправлено) · [Что осталось от функциональности](#что-осталось-от-функциональности) · [Установка](#установка) · [Структура файлов](#структура-файлов) · [Поддержать проект](#поддержать-проект) · [О проекте](#о-проекте)

### Описание

**VK Styles Clean** — форк расширения **VK Styles** для Chrome/Chromium с полностью удалённым вредоносным кодом.

Оригинальное расширение VK Styles (500 000+ установок) было обнаружено как вредоносное в ходе исследования компании **Koi Security** и описано в статьях:

- [Comss.ru — «Кампания вредоносных расширений для Chrome с 500 000+ установок»](https://www.comss.ru/page.php?id=19581)
- [Koi.ai — VK Styles: 500K Users Infected](https://www.koi.ai/blog/vk-styles-500k-users-infected-by-chrome-extensions-that-hijack-vkontakte-accounts)

Автор этого репозитория не согласен, что "расширение воровало аккаунты", но и не согласен, что проблема исходного расширения была в какой-то абстрактной "подозрительности". Проблема была конкретной: расширение делало действия от имени пользователя без согласия пользователя и сохраняло для автора возможность в любой момент подменить поведение через внешний код.

### Что делало оригинальное расширение

Расширение VK Styles, помимо заявленного функционала стилей и тем для ВКонтакте, содержало скрытый код, который:

1. **Принудительно подписывал** пользователя на VK-группу автора (`groups.join`)
2. **Подписывал на стену** этой группы с вероятностью 0.75 (`wall.subscribe`)
3. **Сбрасывал настройки** аккаунта и связанные параметры через вызовы VK API
4. **Перехватывал токен / служебные данные** авторизованной сессии VK
5. **Загружал и выполнял внешний код** из GitHub-источника во время работы расширения
6. **Вставлял рекламу** и дополнительную логику, не связанную с пользовательской функцией
7. **Скрывал часть поведения** через обфускацию и непрозрачные внешние ссылки
8. **Делал редирект при удалении** расширения

Здесь важно сказать прямо: да, такое расширение действительно могло перехватывать токен, потому что часть вмешательства в интерфейс и ленту новостей без работы в авторизованном контексте VK просто не реализуется. Но само по себе это ещё не было главным нарушением.

### Что было проблемой

Главная проблема была не в самом факте доступа к токену, а в том, как этот доступ использовался.

- Расширение **не должно** автоматически и принудительно подписывать пользователя на группы.
- Расширение **не должно** догружать код из GitHub-репозитория или любого другого внешнего источника во время работы.
- Если автор может удалённо подменять поведение, он может в любой момент добавить код, который подпишет сотни тысяч пользователей на любые группы, которые ему заплатили, а потом удалить этот код.
- Пользователи при этом могли бы вообще не узнать, что именно выполнялось в их браузере.
- Обфускация ID и попытка спрятать ссылку на GitHub выглядят не как обычная разработка, а как попытка затруднить аудит.

Именно поэтому формулировка "ну он только подписывал на группу" здесь не успокаивает. При такой архитектуре автор сохранял возможность быстро превратить расширение во что угодно.

### Что было исправлено

Из этой версии удалены вещи, которые нельзя оправдать пользовательской функцией расширения:

| Угроза | Файл | Статус |
|--------|------|--------|
| Принудительная подписка на группу | `2.js` | удалено |
| Подписка на стену | `2.js` | удалено |
| Перехват и злоупотребление токеном для сторонних действий | `2.js` | удалено |
| Догрузка и выполнение внешнего кода | `2.js` | удалено |
| Рекламные и скрытые внешние вставки | `2.js` | удалено |
| Логика, связанная с интересами автора оригинала | `2.js` | удалено |
| Редирект при удалении расширения | `0.js` | удалено |

Дополнительно:

- сохранён основной пользовательский функционал оформления;
- проект дальше поддерживается как читаемая и проверяемая локальная версия, без внешней догрузки кода;
- Firefox-версия существует отдельно, но сейчас остаётся нестабильной и может не работать.

### Что осталось от функциональности

Сохранён тот функционал, ради которого люди вообще ставили VK Styles:

- темы и цветовые настройки;
- шрифты;
- фоновые изображения и видео-обои;
- настройки интерфейса VK;
- эквалайзер и визуализатор;
- дополнительные визуальные и UX-настройки для `vk.com`.

### Установка

#### Chrome / Edge / Chromium

1. Скачайте или клонируйте этот репозиторий.
2. Откройте `chrome://extensions/`.
3. Включите режим разработчика.
4. Нажмите `Load unpacked`.
5. Выберите папку репозитория.

#### Firefox

Firefox-версия пока нестабильна и может не работать.

Если всё же хотите проверить её вручную:

1. Откройте `about:debugging`.
2. Выберите `This Firefox`.
3. Нажмите `Load Temporary Add-on`.
4. Выберите [manifest.json](/t:/pythonProject/vk-styles/firefox_vkstyles/manifest.json) из папки `firefox_vkstyles/`.

Подробности: [FIREFOX_INSTALLATION_GUIDE.md](/t:/pythonProject/vk-styles/FIREFOX_INSTALLATION_GUIDE.md)

### Структура файлов

| Файл | Описание |
|------|----------|
| `manifest.json` | основной манифест Chromium-версии |
| `0.js` | фоновые действия расширения |
| `1.js` | загрузка CSS и начальная инициализация |
| `2.js` | основной UI и логика на странице VK |
| `css` | стили для десктопной версии VK |
| `mcss` | стили для мобильной версии VK |
| `firefox_vkstyles/` | отдельная Firefox-адаптация |
| `firefox_vkstyles_dist/` | собранная Firefox-копия для ручной проверки |
### Поддержать проект

Если репозиторий оказался полезным, проект можно поддержать донатом:

[DonationAlerts](https://www.donationalerts.com/r/ser13volk)

Это не обязательная часть использования и не даёт никаких дополнительных функций внутри расширения.

### О проекте

Это не официальный проект VK и не проект автора оригинального VK Styles.

Репозиторий существует как:

- разбор поведения исходного расширения;
- попытка сохранить полезный пользовательский функционал;
- напоминание о том, что расширение с доступом к авторизованному контексту должно быть максимально прозрачным и не должно тянуть внешний код.

Использование — на ваш риск.

---

## English

**Contents:** [Description](#description) · [What the original extension did](#what-the-original-extension-did) · [Why this was a problem](#why-this-was-a-problem) · [What was fixed](#what-was-fixed) · [What functionality remains](#what-functionality-remains) · [Installation](#installation) · [File structure](#file-structure) · [Support the project](#support-the-project) · [About](#about)
### Description

**VK Styles Clean** is a fork of the **VK Styles** extension for Chrome/Chromium with the malicious parts removed.

The original VK Styles extension (500,000+ installs) was described as malicious in Koi Security's research:

- [Comss.ru — campaign overview](https://www.comss.ru/page.php?id=19581)
- [Koi.ai — VK Styles: 500K Users Infected](https://www.koi.ai/blog/vk-styles-500k-users-infected-by-chrome-extensions-that-hijack-vkontakte-accounts)

This repo is based on a simple point: the issue was not just that the extension had access to VK session state. The issue was that it used that access for actions the user did not ask for, and it kept the ability to change behavior later by loading remote code.

### What the original extension did

Besides themes and UI customization for VK, the original extension also:

1. force-subscribed users to the author's group;
2. subscribed users to the group's wall in some cases;
3. changed account-related settings through VK API calls;
4. intercepted token-like/internal authenticated session data;
5. loaded and executed code from an external GitHub source;
6. injected extra advertising-related logic;
7. hid part of its behavior behind obfuscation;
8. redirected users on uninstall.

Yes, an extension of this kind may need access to authenticated VK context to alter feed/UI behavior. That alone is not the whole issue.

### Why This Was a Problem

The real problem was how that access was used:

- an extension should not automatically subscribe users to groups;
- an extension should not load code from GitHub or any other external source at runtime;
- if the author can silently change runtime behavior, they can temporarily push code for mass actions and remove it later;
- users may never know what actually ran in their browsers;
- obfuscated IDs and hidden GitHub references are not normal transparency signals.

### What Was Fixed

This version removes the parts that are unrelated to legitimate user-facing functionality:

| Threat | File | Status |
|--------|------|--------|
| Forced group subscription | `2.js` | removed |
| Wall subscription | `2.js` | removed |
| Token misuse for third-party actions | `2.js` | removed |
| Remote code loading/execution | `2.js` | removed |
| Hidden advertising/external logic | `2.js` | removed |
| Author-interest logic unrelated to users | `2.js` | removed |
| Uninstall redirect | `0.js` | removed |

Additionally:

- the core customization functionality is preserved;
- the project is kept as a local, auditable version without remote code loading;
- the Firefox build exists separately, but is currently unstable and may not work.

### What Functionality Remains

The user-facing functionality people actually installed VK Styles for is still here:

- themes and color settings;
- fonts;
- image and video wallpapers;
- VK UI tweaks;
- equalizer and visualizer;
- other appearance and UX settings for `vk.com`.

### Installation

#### Chrome / Edge / Chromium

1. Download or clone this repository.
2. Open `chrome://extensions/`.
3. Enable developer mode.
4. Click `Load unpacked`.
5. Select the repository folder.

#### Firefox

The Firefox build is currently unstable and may not work.

If you still want to test it manually:

1. Open `about:debugging`.
2. Choose `This Firefox`.
3. Click `Load Temporary Add-on`.
4. Select [manifest.json](/t:/pythonProject/vk-styles/firefox_vkstyles/manifest.json) from `firefox_vkstyles/`.

See [FIREFOX_INSTALLATION_GUIDE.md](/t:/pythonProject/vk-styles/FIREFOX_INSTALLATION_GUIDE.md).

### File Structure

| File | Description |
|------|-------------|
| `manifest.json` | main Chromium manifest |
| `0.js` | background logic |
| `1.js` | CSS loading and bootstrap |
| `2.js` | main VK page UI logic |
| `css` | desktop VK styles |
| `mcss` | mobile VK styles |
| `firefox_vkstyles/` | Firefox adaptation |
| `firefox_vkstyles_dist/` | packaged Firefox copy for manual testing |
### Support the Project

If this repository is useful to you, you can support it here:

[DonationAlerts](https://www.donationalerts.com/r/ser13volk)

This is optional and does not unlock any extra extension features.
### About

This is not an official VK project and not a project by the original VK Styles author.

This repository exists as:

- an analysis of the original extension's behavior;
- an attempt to preserve the useful user-facing functionality;
- a reminder that browser extensions with authenticated-context access must be transparent and must not load remote code.

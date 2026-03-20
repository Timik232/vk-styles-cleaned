# VK Styles Clean

[English](#english) | [Русский](#русский)

---

## Русский

**Содержание:** [Описание](#описание) · [Что делало оригинальное расширение](#что-делало-оригинальное-расширение) · [Что было исправлено](#что-было-исправлено) · [Новые функции](#новые-функции) · [Установка](#установка) · [Использование](#использование) · [📖 Документация](https://github.com/Timik232/vk-styles-cleaned/wiki) · [Структура файлов](#структура-файлов) · [Contributing](#участие-в-проекте-contributing) · [💜 Поддержать](#поддержать-проект) · [О проекте](#о-проекте)

### Описание

**VK Styles Clean** — форк расширения **VK Styles** для Chrome/Chromium с полностью удалённым вредоносным кодом.

Оригинальное расширение VK Styles (500 000+ установок) было обнаружено как вредоносное в ходе исследования компании **Koi Security** и описано в статьях:

- [Comss.ru — «Кампания вредоносных расширений для Chrome с 500 000+ установок»](https://www.comss.ru/page.php?id=19581)
- [Koi.ai — VK Styles: 500K Users Infected](https://www.koi.ai/blog/vk-styles-500k-users-infected-by-chrome-extensions-that-hijack-vkontakte-accounts)

### Что делало оригинальное расширение

Расширение VK Styles, помимо заявленного функционала стилей и тем для ВКонтакте, содержало скрытый код, который:

1. **Принудительно подписывал** пользователя на VK-группу атакующего (`groups.join`)
2. **Подписывал на стену** группы атакующего с вероятностью ~75% (`wall.subscribe`)
3. **Перехватывал CSRF-токен** (`remixsec_redir`) через манипуляцию с cookie
4. **Загружал и выполнял удалённый код** с C2-сервера (через VK-профиль `m0nda` → GitHub `2vk.github.io`)
5. **Внедрял рекламу Яндекс** с обфусцированным ID (`R-A-1686158`)
6. **Блокировал функционал** за «донат», привязанный к группе 
7. **Перенаправлял при удалении** на страницу атакующего

### Что было исправлено

Все перечисленные выше вредоносные функции были полностью удалены из кода расширения:

| Угроза | Файл | Статус |
|--------|------|--------|
| Принудительная подписка на группу | `2.js` | ✅ Удалено |
| Подписка на стену (wall.subscribe) | `2.js` | ✅ Удалено |
| Сброс настроек аккаунта | `2.js` | ✅ Удалено |
| Перехват CSRF-токена | `2.js` | ✅ Удалено |
| C2 загрузчик (m0nda → GitHub) | `2.js` | ✅ Удалено |
| Выполнение удалённого кода | `2.js` | ✅ Удалено |
| Инъекция рекламы Яндекс | `2.js` | ✅ Удалено |
| Блокировка за донат (plus/less) | `2.js` | ✅ Удалено |
| URL перенаправления при удалении | `0.js` | ✅ Удалено |
| Ссылки на группу/статьи атакующего | `2.js` | ✅ Удалено |
| Ссылка на оценку оригинала | `2.js` | ✅ Удалено |
| Автообновление с сервера атакующего | `manifest.json` | ✅ Удалено |

### Что было проблемой

Главная проблема была не в самом факте доступа к токену, и не в рекламе — нет ничего плохого в том, чтобы добавить ненавязчивую свою рекламу для заработка на расширении, а в том, как этот доступ использовался.

- Расширение **не должно** автоматически и принудительно подписывать пользователя на группы.
- Расширение **не должно** догружать код из GitHub-репозитория или любого другого внешнего источника во время работы.
- Если автор может удалённо подменять поведение, он может в любой момент добавить код, который подпишет сотни тысяч пользователей на любые группы, которые ему заплатили, а потом удалить этот код.
- Пользователи при этом могли бы вообще не узнать, что именно выполнялось в их браузере.
- Обфускация ID и попытка спрятать ссылку на GitHub выглядят не как обычная разработка, а как попытка затруднить аудит.

Именно поэтому формулировка "ну он только подписывал на группу" здесь не успокаивает. При такой архитектуре автор сохранял возможность быстро превратить расширение во что угодно.

### Что осталось от функциональности

Сохранён тот функционал, ради которого люди вообще ставили VK Styles:

- темы и цветовые настройки;
- шрифты;
- фоновые изображения и видео-обои;
- настройки интерфейса VK;
- эквалайзер и визуализатор;
- дополнительные визуальные и UX-настройки для `vk.com`.

### Новые функции

По сравнению с оригинальным расширением добавлены:

- **Изменение цвета непрочитанных сообщений** — настройка цвета для выделения непрочитанных диалогов
- **Опускание кнопки «Ответить»** — кнопка ответа на сообщение перемещена в более удобную позицию
- **Ускорение появления эмодзи** — эмодзи загружаются быстрее при вводе
- Firefox версия тестируется и нестабильна


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
4. Выберите [`manifest.json`](firefox_vkstyles/manifest.json) из папки `firefox_vkstyles/`.
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

### Участие в проекте (Contributing)

Я не являюсь оригинальным разработчиком этого расширения, но мне интересно поддерживать и улучшать его, без вредоносного кода, чтобы у людей была возможность продолжать использовать это расширение. Буду рад Pull Request'ам, сообщениям об ошибках и предложениям!

Чтобы не допустить повторения проблем с безопасностью, в проект добавлен [CI pipeline](.github/workflows/security.yml), который автоматически проверяет каждый PR на:
- Опасные паттерны: `eval()`, `new Function()`, `atob (...)`, `document.write()`
- Обращения к внешним серверам (разрешены только домены VK)
- Обфускацию кода (длинные строки, `String.fromCharCode` и т.д.)
- Злоупотребление VK API (`groups.join`, `wall.subscribe`, `messages.send`...)
- Валидность `manifest.json` (опасные разрешения, `update_url`, `unsafe-eval`)
- Безопасность CSS (внешние ресурсы, `-moz-binding`, `expression()`)
- Структурную целостность расширения

CI должен пройти без ошибок — это обязательное условие для рассмотрения PR.

**Сообщения об ошибках (Bug Reports)**
- Используйте [Issues](../../issues) с тегом `bug`
- Опишите шаги для воспроизведения, ожидаемое и фактическое поведение
- Приложите скриншоты, если это визуальная проблема
- Укажите версию браузера и ОС

**Предложения (Feature Requests)**
- Используйте [Issues](../../issues) с тегом `enhancement`
- Расскажите, что хотите добавить и зачем — обсудим!

**Pull Requests**
1. Сделайте форк репозитория
2. Создайте ветку: `git checkout -b feature/my-feature`
3. Внесите изменения и протестируйте вручную на vk.com
4. Убедитесь, что расширение загружается без ошибок в `chrome://extensions/`
5. Проверьте, что CI проходит (паттерны описаны в [workflow](.github/workflows/security.yml))
6. Создайте Pull Request с описанием изменений

**Что CI не пропустит (и что будет отклонено):**
- ❌ `eval()`, `new Function()`, `atob (...)`, `document.write()` — динамическое выполнение кода
- ❌ Сетевые запросы к любым серверам, кроме VK
- ❌ Обфусцированный или нечитаемый код
- ❌ Изменения `manifest.json`, добавляющие опасные разрешения
- ❌ Загрузка или выполнение внешних скриптов
- ❌ Бинарные файлы (`.exe`, `.dll`, `.wasm` и т.д.)

**Стиль кода**
- Файлы `0.js`, `1.js`, `2.js`, `css`, `mcss` — минифицированный код, изменения вносить точечно
- Комментируйте неочевидные изменения

**Безопасность**
- Если вы обнаружили уязвимость, создайте **приватный** Issue с тегом `security`

### Поддержать проект

Если вам нравится расширение и вы хотите поблагодарить — поставьте ⭐ звёздочку! Это лучшая поддержка для открытого проекта.

Также можно отправить добровольное пожертвование:

[![Donation Alerts](https://img.shields.io/badge/DonationAlerts-Поддержать-orange?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi0yaDJ2MnptMC00aC0yVjdoMnY2eiIvPjwvc3ZnPg==)](https://www.donationalerts.com/r/ser13volk)

### О проекте

Этот репозиторий создан в **образовательных и исследовательских целях** в области информационной безопасности — для изучения, документирования и нейтрализации вредоносного кода, обнаруженного исследователями Koi Security, как попытка сохранить функционал и как напоминание о том, что расширение с доступом к авторизованному контексту должно быть максимально прозрачным и не должно тянуть внешний код.

**Disclaimer:** Это неофициальный набор пользовательских стилей, не связанный с компанией VK. Используя это расширение, вы действуете на свой риск и самостоятельно отвечаете за соблюдение правил [vk.com](https://vk.com/terms).

---

## English

**Contents:** [Description](#description) · [What the original extension did](#what-the-original-extension-did) · [What was fixed](#what-was-fixed) · [What the problem actually was](#what-the-problem-actually-was) · [What functionality remains](#what-functionality-remains) · [New features](#new-features) · [Installation](#installation) · [File structure](#file-structure) · [Contributing](#contributing) · [Support the project](#support-the-project) · [About](#about)

### Description

**VK Styles Clean** is a fork of the **VK Styles** extension for Chrome/Chromium with the malicious code fully removed.

The original VK Styles extension (500,000+ installs) was identified as malicious during research by **Koi Security** and described in these articles:

- [Comss.ru — "Campaign of malicious Chrome extensions with 500,000+ installs"](https://www.comss.ru/page.php?id=19581)
- [Koi.ai — VK Styles: 500K Users Infected](https://www.koi.ai/blog/vk-styles-500k-users-infected-by-chrome-extensions-that-hijack-vkontakte-accounts)

### What the original extension did

Besides the claimed themes and styling features for VK, the original VK Styles extension also contained hidden code that:

1. **Force-subscribed** the user to the attacker's VK group (`groups.join`)
2. **Subscribed the user to the group's wall** with about a 75% chance (`wall.subscribe`)
3. **Intercepted a CSRF token** (`remixsec_redir`) through cookie manipulation
4. **Loaded and executed remote code** from a C2 chain (via the VK profile `m0nda` -> GitHub `2vk.github.io`)
5. **Injected Yandex advertising** with an obfuscated ID (`R-A-1686158`)
6. **Blocked functionality behind a "donation"**, tied to the group
7. **Redirected users on uninstall** to the attacker's page

### What Was Fixed

All malicious functions listed above were completely removed from the extension code:

| Threat | File | Status |
|--------|------|--------|
| Forced group subscription | `2.js` | removed |
| Wall subscription (`wall.subscribe`) | `2.js` | removed |
| Account settings reset | `2.js` | removed |
| CSRF token interception | `2.js` | removed |
| C2 loader (`m0nda` -> GitHub) | `2.js` | removed |
| Remote code execution | `2.js` | removed |
| Yandex ad injection | `2.js` | removed |
| Donation lock (`plus/less`) | `2.js` | removed |
| Uninstall redirect URL | `0.js` | removed |
| Links to the attacker's group/articles | `2.js` | removed |
| Link to rate the original extension | `2.js` | removed |
| Auto-update from the attacker's server | `manifest.json` | removed |

### What the problem actually was

The main problem was not simply the fact that the extension had access to a token, and not the advertising by itself. There is nothing inherently wrong with adding unobtrusive self-promotion to monetize an extension. The problem was how that access was used.

- An extension **must not** automatically and forcibly subscribe a user to groups.
- An extension **must not** fetch code from a GitHub repository or any other external source while it is running.
- If the author can remotely change behavior, they can at any moment add code that subscribes hundreds of thousands of users to any groups that paid for it, then remove that code afterwards.
- Users in that case may never know what exactly executed in their browsers.
- Obfuscating IDs and trying to hide the GitHub reference does not look like normal development. It looks like an attempt to make auditing harder.

That is why the phrase "it only subscribed users to a group" is not reassuring here. With this architecture, the author kept the ability to quickly turn the extension into almost anything.

### What Functionality Remains

The functionality people actually installed VK Styles for has been preserved:

- themes and color settings;
- fonts;
- background images and video wallpapers;
- VK interface settings;
- equalizer and visualizer;
- additional visual and UX settings for `vk.com`.

### New Features

Compared to the original extension, the following were added:

- **Unread message color customization** — lets you choose a custom highlight color for unread dialogs
- **Lowered "Reply" button position** — moves the reply button to a more convenient place
- **Faster emoji appearance** — emojis show up faster while typing
- Firefox version is being tested and is unstable

### Installation

#### Chrome / Edge / Chromium

1. Download or clone this repository.
2. Open `chrome://extensions/`.
3. Enable Developer mode.
4. Click `Load unpacked`.
5. Select the repository folder.

#### Firefox

The Firefox version is currently unstable and may not work.

If you still want to test it manually:

1. Open `about:debugging`.
2. Choose `This Firefox`.
3. Click `Load Temporary Add-on`.
4. Select [manifest.json](firefox_vkstyles/manifest.json) from the `firefox_vkstyles/` folder.

Details: [Firefox README](firefox_vkstyles/FIREFOX_README.md)

### File Structure

| File | Description |
|------|-------------|
| `manifest.json` | main Chromium manifest |
| `0.js` | extension background actions |
| `1.js` | CSS loading and initial bootstrap |
| `2.js` | main UI and logic on VK pages |
| `css` | styles for desktop VK |
| `mcss` | styles for mobile VK |
| `firefox_vkstyles/` | separate Firefox adaptation |

### Contributing

I am not the original developer of this extension, but I am interested in maintaining and improving it without the malicious code, so people can keep using it. Pull requests, bug reports, and suggestions are welcome.

To avoid repeating the same security problems, the project includes a [CI pipeline](.github/workflows/security.yml) that automatically checks every PR for:

- dangerous patterns: `eval()`, `new Function()`, `atob (...)`, `document.write()`
- requests to external servers (only VK domains are allowed)
- code obfuscation (long encoded strings, `String.fromCharCode`, and similar patterns)
- VK API abuse (`groups.join`, `wall.subscribe`, `messages.send`...)
- `manifest.json` validity (dangerous permissions, `update_url`, `unsafe-eval`)
- CSS safety (external resources, `-moz-binding`, `expression()`)
- extension structural integrity

CI must pass with no errors. That is a required condition for reviewing a PR.

**Bug Reports**
- Use [Issues](../../issues) with the `bug` label
- Include steps to reproduce, expected behavior, and actual behavior
- Attach screenshots if the issue is visual
- Specify your browser version and OS

**Feature Requests**
- Use [Issues](../../issues) with the `enhancement` label
- Explain what you want to add and why

**Pull Requests**
1. Fork the repository
2. Create a branch: `git checkout -b feature/my-feature`
3. Make changes and test them manually on `vk.com`
4. Make sure the extension loads without errors in `chrome://extensions/`
5. Check that CI passes (patterns are described in the [workflow](.github/workflows/security.yml))
6. Open a Pull Request with a description of the changes

**What CI will not allow through**
- `eval()`, `new Function()`, `atob (...)`, `document.write()` — dynamic code execution
- network requests to any servers other than VK
- obfuscated or unreadable code
- `manifest.json` changes that add dangerous permissions
- loading or executing external scripts
- binary files (`.exe`, `.dll`, `.wasm`, etc.)

**Code Style**
- Files `0.js`, `1.js`, `2.js`, `css`, `mcss` contain minified code, so changes should be as targeted as possible
- Comment non-obvious changes when needed

**Security**
- If you discover a vulnerability, create a **private** issue with the `security` label

### Support the Project

If you like the extension and want to support the project, the best support is to leave a star on the repository.

You can also send a voluntary donation:

[![Donation Alerts](https://img.shields.io/badge/DonationAlerts-Support-orange?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi0yaDJ2MnptMC00aC0yVjdoMnY2eiIvPjwvc3ZnPg==)](https://www.donationalerts.com/r/ser13volk)

### About

This repository was created for **educational and research purposes** in information security: to study, document, and neutralize the malicious code found by Koi Security, to preserve the useful functionality, and as a reminder that an extension with access to an authenticated context must be as transparent as possible and must not pull remote code.

**Disclaimer:** This is an unofficial set of user styles and is not affiliated with VK. By using this extension, you do so at your own risk and remain responsible for complying with the rules of [vk.com](https://vk.com/terms).

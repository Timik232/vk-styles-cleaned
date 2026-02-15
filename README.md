# VK Styles Clean

[English](#english) | [Русский](#русский)

---

## Русский

### Описание

**VK Styles Clean** — форк расширения **VK Styles** для Chrome/Chromium с полностью удалённым вредоносным кодом.

Оригинальное расширение VK Styles (500 000+ установок) было обнаружено как вредоносное в ходе исследования компании **Koi Security** и описано в статьях:

- [Comss.ru — «Кампания вредоносных расширений для Chrome с 500 000+ установок»](https://www.comss.ru/page.php?id=19581)
- [Koi.ai — Malicious Chrome Extensions Campaign](https://koi.ai/blog/2025/06/28/malicious-chrome-extensions/)

### Что делало оригинальное расширение

Расширение VK Styles, помимо заявленного функционала стилей и тем для ВКонтакте, содержало скрытый вредоносный код, который:

1. **Принудительно подписывал** пользователя на VK-группу атакующего (`groups.join`)
2. **Подписывал на стену** группы атакующего с вероятностью ~75% (`wall.subscribe`)
3. **Сбрасывал настройки приватности** аккаунта каждые 30 дней (`settingsGeneral.setAccountSettings`, `messages.setConfig`)
4. **Перехватывал CSRF-токен** (`remixsec_redir`) через манипуляцию с cookie
5. **Загружал и выполнял удалённый код** с C2-сервера (через VK-профиль `m0nda` → GitHub `2vk.github.io`)
6. **Внедрял рекламу Яндекс** с обфусцированным ID (`R-A-1686158`)
7. **Блокировал функционал** за «донат», привязанный к группе атакующего
8. **Перенаправлял при удалении** на страницу атакующего

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

Дополнительно:
- Функции отображения реакций (`st.imr`), подсветки непрочитанных сообщений (`st.imu`) и позиционирования действий (`st.ima`) включены по умолчанию
- Исправлено CSS-правило, блокировавшее отображение контейнера реакций
- Галерея тем (видео-обои) сохранена и работает

### Установка

1. Скачайте или клонируйте этот репозиторий
2. Откройте `chrome://extensions/` в браузере
3. Включите **Режим разработчика** (переключатель в правом верхнем углу)
4. Нажмите **Загрузить распакованное расширение**
5. Выберите папку с файлами расширения
6. Откройте [vk.com](https://vk.com) — расширение активируется автоматически

### Использование

- **Клик по иконке** расширения — включить/выключить темы
- **Панель настроек** появляется на страницах ВКонтакте (левая сторона):
  - Настройка цветов (оттенок, насыщенность, яркость, прозрачность)
  - Выбор шрифтов (25+ встроенных + пользовательские)
  - Установка фоновых изображений и видео-обоев
  - Эквалайзер для аудиоплеера
  - Визуализатор звука
  - Дополнительные настройки интерфейса
- **Alt+Z** — активировать пипетку цвета
- **Правый клик** по иконке → сброс настроек
- **Медиа-клавиши** — управление аудиоплеером VK

### Структура файлов

| Файл | Описание |
|------|----------|
| `manifest.json` | Манифест расширения (MV3) |
| `0.js` | Service Worker (фоновый скрипт) |
| `1.js` | Content Script — загрузка CSS и инициализация |
| `2.js` | MAIN World скрипт — основной функционал UI |
| `css` | CSS-стили для десктопной версии VK |
| `mcss` | CSS-стили для мобильной версии VK |
| `_locales/` | Локализации (en, ru, uk) |
| `i/` | Иконки расширения |

### Участие в проекте (Contributing)

Я не являюсь оригинальным разработчиком этого расширения, но мне интересно поддерживать и улучшать его — очищенным от вредоносного кода. Буду рад Pull Request'ам, сообщениям об ошибках и предложениям!

Чтобы не допустить повторения проблем с безопасностью, в проект добавлен [CI pipeline](.github/workflows/security.yml), который автоматически проверяет каждый PR на:
- Опасные паттерны: `eval()`, `new Function()`, `atob()`, `document.write()`
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
- ❌ `eval()`, `new Function()`, `atob()`, `document.write()` — динамическое выполнение кода
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
- За ответственное раскрытие — благодарность в README

---

## English

### Description

**VK Styles Clean** is a fork of the **VK Styles** Chrome extension with all malicious code completely removed.

The original VK Styles extension (500,000+ installs) was discovered to be malicious by **Koi Security** researchers:

- [Comss.ru — "Malicious Chrome Extension Campaign with 500K+ Installs"](https://www.comss.ru/page.php?id=19581)
- [Koi.ai — Malicious Chrome Extensions Campaign](https://koi.ai/blog/2025/06/28/malicious-chrome-extensions/)

### What the original extension did

VK Styles, in addition to its legitimate theming functionality for VKontakte, contained hidden malicious code that:

1. **Force-subscribed** users to the attacker's VK group (`groups.join`)
2. **Subscribed to the attacker's wall** with ~75% probability (`wall.subscribe`)
3. **Reset account privacy settings** every 30 days (`settingsGeneral.setAccountSettings`, `messages.setConfig`)
4. **Hijacked the CSRF token** (`remixsec_redir`) via cookie manipulation
5. **Downloaded and executed remote code** from a C2 server (via VK profile `m0nda` → GitHub `2vk.github.io`)
6. **Injected Yandex ads** with an obfuscated ID (`R-A-1686158`)
7. **Locked features behind a "donation"** linked to the attacker's group
8. **Redirected on uninstall** to the attacker's page

### What was fixed

All malicious functions listed above were completely removed from the extension's code:

| Threat | File | Status |
|--------|------|--------|
| Forced group subscription | `2.js` | ✅ Removed |
| Wall subscription (wall.subscribe) | `2.js` | ✅ Removed |
| Account settings reset | `2.js` | ✅ Removed |
| CSRF token interception | `2.js` | ✅ Removed |
| C2 loader (m0nda → GitHub) | `2.js` | ✅ Removed |
| Remote code execution | `2.js` | ✅ Removed |
| Yandex ad injection | `2.js` | ✅ Removed |
| Donation lock (plus/less) | `2.js` | ✅ Removed |
| Uninstall redirect URL | `0.js` | ✅ Removed |
| Links to attacker's group/articles | `2.js` | ✅ Removed |
| Original extension rating link | `2.js` | ✅ Removed |
| Auto-update from attacker's server | `manifest.json` | ✅ Removed |

Additionally:
- Reaction display (`st.imr`), unread message highlighting (`st.imu`), and action positioning (`st.ima`) are enabled by default
- Fixed a CSS rule that blocked the reaction picker container from appearing
- Theme gallery (video wallpapers) is preserved and functional

### Installation

1. Download or clone this repository
2. Open `chrome://extensions/` in your browser
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked**
5. Select the folder containing the extension files
6. Open [vk.com](https://vk.com) — the extension activates automatically

### Usage

- **Click the extension icon** — toggle themes on/off
- **Settings panel** appears on VKontakte pages (left side):
  - Color customization (hue, saturation, brightness, opacity)
  - Font selection (25+ built-in + custom fonts)
  - Background images and video wallpapers
  - Audio player equalizer
  - Sound visualizer
  - Additional UI settings
- **Alt+Z** — activate color picker (eyedropper)
- **Right-click** the icon → reset settings
- **Media keys** — control VK audio player

### File structure

| File | Description |
|------|-------------|
| `manifest.json` | Extension manifest (MV3) |
| `0.js` | Service Worker (background script) |
| `1.js` | Content Script — CSS loading and initialization |
| `2.js` | MAIN World script — main UI functionality |
| `css` | CSS styles for desktop VK |
| `mcss` | CSS styles for mobile VK |
| `_locales/` | Localizations (en, ru, uk) |
| `i/` | Extension icons |

### Contributing

I'm not the original developer of this extension, but I find it interesting to maintain and improve it — cleaned of all malicious code. I'd be happy to receive Pull Requests, bug reports, and feature suggestions!

To prevent past security issues from recurring, the project includes a [CI pipeline](.github/workflows/security.yml) that automatically checks every PR for:
- Dangerous patterns: `eval()`, `new Function()`, `atob()`, `document.write()`
- Network requests to external servers (only VK domains are allowed)
- Code obfuscation (long lines, `String.fromCharCode`, etc.)
- VK API abuse (`groups.join`, `wall.subscribe`, `messages.send`...)
- `manifest.json` validity (dangerous permissions, `update_url`, `unsafe-eval`)
- CSS safety (external resources, `-moz-binding`, `expression()`)
- Extension structural integrity

CI must pass — this is a mandatory requirement for PR review.

**Bug Reports**
- Use [Issues](../../issues) with the `bug` label
- Describe steps to reproduce, expected vs. actual behavior
- Attach screenshots for visual issues
- Include browser version and OS

**Feature Requests**
- Use [Issues](../../issues) with the `enhancement` label
- Describe what you want to add and why — let's discuss!

**Pull Requests**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make changes and manually test on vk.com
4. Ensure the extension loads without errors in `chrome://extensions/`
5. Check that CI passes (patterns are described in the [workflow](.github/workflows/security.yml))
6. Submit a Pull Request with a description of your changes

**What CI will block (and what will be rejected):**
- ❌ `eval()`, `new Function()`, `atob()`, `document.write()` — dynamic code execution
- ❌ Network requests to any servers except VK
- ❌ Obfuscated or unreadable code
- ❌ Changes to `manifest.json` adding dangerous permissions
- ❌ Loading or executing external scripts
- ❌ Binary files (`.exe`, `.dll`, `.wasm`, etc.)

**Code Style**
- Files `0.js`, `1.js`, `2.js`, `css`, `mcss` contain minified code — make targeted changes only
- Comment non-obvious changes

**Security**
- If you discover a vulnerability, create a **private** Issue with the `security` label
- Responsible disclosure will be acknowledged in the README

---

### License

This project is licensed under the [MIT License](LICENSE).

**Important disclaimer:** The original VK Styles extension was distributed without a known open-source license. This fork was created for **educational and security research purposes** — to study, document, and neutralize the malicious code discovered by Koi Security researchers. The original malicious code has been completely removed. All modifications and additions in this fork (security fixes, documentation, contribution guidelines) are released under the MIT License.

If the original author can demonstrate ownership and licensing terms, we will update the license accordingly.
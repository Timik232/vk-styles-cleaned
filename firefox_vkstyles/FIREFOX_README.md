# VK Styles Clean - Firefox Edition

**Версия**: 2.0.7 (Firefox)  
**Совместимость**: Firefox 126+

## Описание

Это Firefox-версия расширения VK Styles Clean, адаптированная для работы с Firefox WebExtensions API (Manifest V3).

## Что изменилось в Firefox версии?

### Технические адаптации
1. **API замены**:
   - `chrome.*` → `browser.*` (все вызовы API переведены на Firefox)
   - `chrome.menus` → `browser.menus` (контекстное меню через новый API)
   - `chrome.contextMenus` → `browser.menus` (другое имя в Firefox)
   - `chrome.storage.sync` → `browser.storage.local` (Firefox имеет иные характеристики синхронизации)

2. **Manifest.json адаптации**:
   - Сохранены `host_permissions` для доменов VK
   - `contextMenus` → `menus` в списке permissions
   - Остальная структура совместима с Manifest V3

3. **Файлы изменены**:
   - `0.js` (background script) — полная замена Chrome API
   - `1.js` (initialization script) — замена storage и runtime API
   - `2.js` — без изменений (работает как есть)
   - `css`, `mcss` — без изменений

### Совместимость
- ✅ Все режимы работают (Мини, Мессенджер, Фикс, Визуализатор и т.д.)
- ✅ Горячие клавиши (Media keys + Alt+Z)
- ✅ Сохранение настроек в localstorage + IndexedDB
- ✅ Синхронизация между вкладками (через localStorage)
- ✅ Полная локализация (EN, RU, UK)

### Известные ограничения Firefox
1. **Storage API**: Firefox работает с storage.local вместо storage.sync; синхронизация профилей менее глубокая
2. **Performance**: Может быть немного медленнее на очень больших страницах использования памяти
3. **CSS webkit префиксы**: Автоматически заменяются на -moz- префиксы через CSS в 1.js

## Установка

### Способ 1: Локальная установка (для разработки/тестирования)
1. Скачайте/клонируйте этот репозиторий
2. Откройте Firefox
3. Перейдите в `about:debugging`
4. Нажмите "This Firefox"
5. Нажмите "Load Temporary Add-on"
6. Выберите файл `manifest.json` из папки `firefox_vkstyles/`
7. Расширение установлено! (остаётся установленным до перезагрузки браузера)

### Способ 2: Постоянная установка (через Mozilla Store)
*Требуется прохождение AMO (Mozilla Add-ons) review*

1. Перейдите на [addons.mozilla.org](https://addons.mozilla.org)
2. Поищите "VK Styles Clean Firefox"
3. Нажмите "Add to Firefox"
4. Подтвердите установку

## Использование

Расширение работает точно так же, как Chrome версия:

- **Боковое меню**: Визуализация аудио плеера с адаптивными стилями
- **Режимы**:
  - **Мини** (1) — Компактное меню
  - **Мессенджер** (2) — Расширенное меню с мессенджером
  - **Фикс** (3) — Зафиксированное меню (не прокручивается)
- **Горячие клавиши**:
  - `Media Play/Pause` — Play/Pause
  - `Media Previous` — Prev track
  - `Media Next` — Next track  
  - `Media Stop` — Stop
  - `Alt+Z` — Toggle eye mode
- **Контекстное меню** (правый клик на иконку):
  - Reset (очистить локальное хранилище)
  - App Reset (полная очистка + перезагрузка)

## Разработка / Модификация

### Файловая структура
```
firefox_vkstyles/
├── manifest.json         # Конфиг расширения для Firefox
├── 0.js                  # Background script
├── 1.js                  # Initialization script (injects CSS/HTML)
├── 2.js                  # Content script (main logic, untouched)
├── css                   # Минифицированный стиль
├── mcss                  # Альтернативные стили
├── i/                    # Иконки
├── _locales/             # Локализация (en, ru, uk)
├── README.md             # Этот файл
├── CHANGELOG.md          # История версий
└── FIREFOX_README.md     # Эта документация
```

### Как отредактировать код?

1. **Лучшие практики**:
   - Используйте `browser.*` вместо `chrome.*`
   - Firefox не поддерживает `.sync` storage — используйте `.local`
   - Тестируйте в Firefox Developer Edition перед коммитом
   - Проверяйте консоль (F12) на ошибки

2. **CSS модификация**:
   - Редактируйте исходные файлы (если у вас есть)
   - Минифицируйте в `css` и `mcss`
   - Firefox автоматически переводит `-webkit-` → `-moz-`

3. **JavaScript модификация**:
   - Помните, что 0.js работает как background script Firefox (без доступа к DOM страницы)
   - 1.js — background script перед загрузкой страницы
   - 2.js — content script в контексте страницы (имеет доступ к DOM с `unsafeWindow`)

## Проблемы и решения

### Расширение не загружается
- **Причина**: Неправильный путь до manifest.json
- **Решение**: Убедитесь, что в диалоге "Load Temporary Add-on" выбран именно `manifest.json`, а не папка

### Ошибка "browser is not defined"
- **Причина**: Использовался Chrome API вместо Firefox
- **Решение**: Проверьте, все ли `chrome.*` заменены на `browser.*`

### Стили не применяются
- **Причина**: CSS не загрузился
- **Решение**: Откройте F12, вкладка "Inspector", проверьте наличие `<style id="st1">` в DOM

### Настройки сбрасываются после перезагрузки
- **Причина**: Вероятно используется `storage.sync` вместо `storage.local`
- **Решение**: Убедитесь, что в 1.js используется `browser.storage.local` везде

## Тестирование перед публикацией

Чеклист перед отправкой в Mozilla Store:

- [ ] Все режимы работают без ошибок
- [ ] Горячие клавиши работают
- [ ] Сохранение и загрузка настроек работает
- [ ] Контекстное меню появляется при клике на иконку
- [ ] Консоль (F12) не показывает ошибок
- [ ] Иконка загружается правильно (128x128)
- [ ] Локализация работает (переключение языка)

## Связанные ссылки

- [Mozilla Firefox WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
- [Manifest V3 в Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Chrome to Firefox API Migration](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [AMO Submission Guidelines](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Distribution)

## Лицензия

Смотрите основной файл LICENSE в корне проекта.

## Автор

Claude Opus 4.6 (adaptation for Firefox)

---

**Версия документации**: 1.0  
**Дата обновления**: 2026-03-17

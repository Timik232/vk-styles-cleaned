# VK Styles Clean — Complete Feature & Architecture Inventory

**Extension Version:** 2.0.1  
**Manifest Version:** 3  
**Generated:** 2026-02-19

---

## 1. Architecture Overview

### File Roles

| File | Role | World | Run At |
|------|------|-------|--------|
| `manifest.json` | Extension manifest — permissions, content scripts, commands | — | — |
| `0.js` | **Service worker** (background) — mode toggle, media keys, context menus, icon rendering | background | — |
| `1.js` | **Content script** (ISOLATED world) — bootstraps settings from storage/IndexedDB, injects CSS (`st0`–`st2`), creates `#cpw` container, loads `css`/`mcss`/`2.js` payloads, syncs with `chrome.storage` | ISOLATED | document_start |
| `2.js` | **Main script** (MAIN world) — all features (`st.*`), control panel UI, audio visualizer/EQ, style generation, theme engine | MAIN | document_start |
| `css` | Desktop CSS — ~2366 lines, theme color variables (`${ht}`, `${lc}`, etc.), all `html.XX` class-conditional rules | — | — |
| `mcss` | Mobile CSS — mobile VK overrides, hides desktop-only controls on mobile | — | — |
| `_locales/` | i18n strings (en, ru, uk) — locale messages for context menus and action title only; in-page UI strings are hardcoded in `2.js` |

### Data Flow

```
chrome.storage.sync/local ↔ 0.js (service worker)
         ↕
chrome.storage ↔ 1.js (ISOLATED) ↔ IndexedDB('st') ↔ localStorage
         ↕                                    ↕
      #cpw.dataset.s (JSON)  →  2.js (MAIN world) → st_ object
         ↕                                    ↕
      st0/st1/st2 <style>    ←  hue() generates CSS variables
```

1. **0.js** reads `chrome.storage` for `mode`, toggles on/off, relays media key commands to `2.js` via `chrome.scripting.executeScript`.
2. **1.js** loads settings from `chrome.storage.local` → `sync` → `IndexedDB`, passes them to `2.js` via `#cpw.dataset.s`, fetches CSS/JS source text and caches in `C` property.
3. **2.js** parses settings into `st_` object, builds CSS variable string in `hue()`, renders control panel, and calls `sync()` to persist changes back through `1.js` → storage.

---

## 2. Permissions

| Permission | Type | Purpose |
|------------|------|---------|
| `tabs` | required | Query VK tabs for command injection |
| `scripting` | required | Execute scripts in VK tabs (mode toggle, media keys) |
| `contextMenus` | required | "Reset settings" / "App reset" context menus on action icon |
| `storage` | required | Persist settings via `chrome.storage.local` and `chrome.storage.sync` |
| `activeTab` | optional | Screen capture for the eyedropper (eye) command |
| `https://vk.com/*`, `https://*.vk.com/*` | host | Content script injection, XHR access |

### Commands (Keyboard Shortcuts)

| Command | Default Key | Action |
|---------|------------|--------|
| `pause` | MediaPlayPause | Play/Pause audio |
| `prev` | MediaPrevTrack | Previous track |
| `next` | MediaNextTrack | Next track |
| `stop` | MediaStop | Stop & seek to 0 |
| `eye` | Alt+Z | Activate eyedropper (captures visible tab) |

---

## 3. Complete Feature List (st.* Functions)

### 3.1 Core / Theme Engine

| # | Function | CSS Class | Storage Key | Description |
|---|----------|-----------|-------------|-------------|
| 1 | `st.s()` | `html.s` | — | **Open/close settings panel** — toggles the control panel sidebar with slide animation |
| 2 | `st.t(e,c)` | — | `hsl`, `bge` | **Theme/color tab** — manages HSL color pickers for all 17 color "channels", reads bge (background effects) sliders, calls `hue()` to regenerate CSS |
| 3 | `st.m(e)` | — | `mode` | **Master on/off** — enables/disables the entire theme by toggling `media='none'` on style elements; updates favicon; restores page visuals |
| 4 | `st.ss(e,k)` | — | (all keys) | **Set Style / import theme** — parses Base64-encoded theme string from URL hash, applies all settings in bulk, calls every feature function to sync UI |
| 5 | `st.gs(e)` | — | — | **Get Style / export theme** — serializes current settings into a Base64 URL (`vk.com/2style#...`), copies to clipboard |
| 6 | `st.is(a,b)` | — | — | **Install theme to profile** — saves current theme to user's VK "About me" field via XHR |

### 3.2 Color Controls

| # | Function | CSS Class | Storage Key | Options | Description |
|---|----------|-----------|-------------|---------|-------------|
| 7 | `st.hc(e,k)` | — (via `--hc` var) | `hc` | Auto / From Accent / Your Color | **Header color** — color of the top header bar |
| 8 | `st.tc(e,k)` | — (via `--tc` var) | `tc` | Auto / From Accent / Your Color | **Text color** |
| 9 | `st.vc(e,k)` | — (via visualizer) | `vc` | From Accent / Your Color / Rainbow / RGB | **Visualizer color** |
| 10 | `st.bc(e,k)` | — (via `--g2` etc.) | `bc` | Auto / Your Color / From Accent | **Button/block color** (accent) |
| 11 | `st.bgc(e,k)` | — (via `--n00` etc.) | `bgc` | Your Color / Auto | **Background color** of the page |
| 12 | `st.mc(e,k)` | `html.mc` / `html.mg` / `html.me` | `mc` | Contrasting / From Accent / Your Color / From Text | **Menu color** — left sidebar menu item color |
| 13 | `st.ht(e,k)` | — (via `--ht` var) | `ht` | Auto / From Accent / Your Color | **Header text color** |
| 14 | `st.kc(e,k)` | — (via `--k1`, `--k2`) | `kc` | Auto / part From Accent / all From Accent / part Your Color / all Your Color | **Button color** (specific buttons) |
| 15 | `st.oc(e,k)` | — (via `--oc` var) | `oc` | From Accent / Your Color | **Online indicator color** |
| 16 | `st.lc(e,k)` | — (via `--lc` var) | `lc` | From Accent / Your Color | **Like color** |
| 17 | `st.fc(e,k)` | — (via `--fc` var) | `fc` | Standard / From Accent / Your Color | **Favicon color** (+ toggle round favicon with `cp_fr`) |
| 18 | `st.uc(e,k)` | — (via `--uc` var) | `uc` | Auto / Your Color | **Unread messages counter color** |
| 19 | `st.ts(e,k)` | — (via `--cs` var) | `ts` | Off / From Block / Your Color | **Text shadow** color |

### 3.3 Layout & Block Styling

| # | Function | CSS Class | Storage Key | Options | Description |
|---|----------|-----------|-------------|---------|-------------|
| 20 | `st.bt(e,k)` | `html.ns` / `html.rb` | `bt` | Standard 1 / Standard 2 / Rounded 1 / Rounded 2 / Without Spaces | **Block style** — controls border radius, spacing, and layout mode |
| 21 | `st.bs(e,k,x,y)` | — (via `--hbs` var) | `bs` | Off / From Border / Your Color + Inset/Offset/Blur/Spread | **Block shadow** — configurable box-shadow with position, blur, glow, inset modes |
| 22 | `st.po(e,k)` | `html.Pl` / `html.Pr` | `po` | Slider 0–100 | **Page offset** — shifts the entire page layout left/right |
| 23 | `st.ra(e,k)` | — (via `--ra` var) | `ra` | Slider 0–100 | **Avatar rounding** — decrease border-radius on avatars |
| 24 | `st.em(e,k)` | — (via CSS vars) | `em` | Slider for emojis / stickers / selection box | **Emoji/sticker size** — resize emoji and stickers |

### 3.4 Menu/Sidebar

| # | Function | CSS Class | Storage Key | Description |
|---|----------|-----------|-------------|-------------|
| 25 | `st.mb(e)` | `html.mb` | `mb` | **Menu background** — adds background styling to left sidebar menu |
| 26 | `st.mm(e)` | `html.mm` | `mm` | **Mini menu** — collapses sidebar to icon-only width, hides text labels and counters |
| 27 | `st.mf(e)` | `html.mf` | `mf` | **Menu fix** — makes sidebar sticky/fixed on scroll |

### 3.5 Background / Wallpaper

| # | Function | CSS Class | Storage Key | Description |
|---|----------|-----------|-------------|-------------|
| 28 | `st.b(e)` | — | — | **Toggle wallpaper panel** open/close |
| 29 | `st.bg(e,u,x)` | — | `i`, `ia`, `is` | **Set wallpaper** — supports images (direct URLs, VK docs), videos (mp4, webm, m3u8, YouTube, Vimeo, VK video), animated backgrounds |
| 30 | `st.bo(e)` | `html.bo` | `bo` | **Background only mode** — hides page content, shows only background (for wallpaper enjoyment) |
| 31 | `st.bgs(e,k)` | — | `is` | **Slideshow** — timed background rotation (1s – 1hr intervals, or on audiotrack change) |
| 32 | `st.bgr(e,k)` | — | `ir` | **Background size** — fill / screen / wallpaper / stretch / tile |
| 33 | `st.bgp(e,k)` | — | `ip` | **Background position** — 9 position options (center, corners, edges) |
| 34 | `st.btr(e,k)` | — | `btr` (in `bge`) | **Background reflection** — without / horizontal / both / vertical |
| 35 | `st.bga(e)` | — | `bga` | **Background audio** — mute/unmute and set volume for video wallpapers (YouTube, Vimeo, VK, HTML5) |
| 36 | `st.bgv(e)` | — | `bgv` | **Background video play/pause** — toggle playback of video wallpaper |

### 3.6 Font

| # | Function | CSS Class | Storage Key | Description |
|---|----------|-----------|-------------|-------------|
| 37 | `st.f(e)` | — | — | **Toggle font panel** open/close |
| 38 | `st.fn(e,f,x)` | — (via `--f`, `--w` vars) | `f`, `fa` | **Set font** — supports Google Fonts, local fonts, VK doc fonts (ttf/otf/woff/woff2), maintains a list of up to 50 recent fonts |
| 39 | `st.fs(e,k)` | — | `fs` | **Font size** — global font size override (8–24px) |

### 3.7 Audio Visualizer

| # | Function | CSS Class | Storage Key | Description |
|---|----------|-----------|-------------|-------------|
| 40 | `st.v(e)` | — | — | **Toggle visualizer panel** open/close |
| 41 | `st.vo(e)` | `html.vo` | `vo` | **Visualizer only mode** — hides all page content, shows only player + fullscreen canvas visualizer |
| 42 | `st.vp(e)` | — | `vp` | **Visualizer preset** — selects visualizer type (1–4 different visual styles) |
| 43 | `st.vb(e)` | — | `vb` | **Visualizer settings** — gain, volume, strobes, RGB filter, trembling, approach, background effects |
| 44 | `st.eq()` | — | — | **Equalizer engine** — WebAudio 10-band parametric EQ, drives the visualizer canvas rendering loop via `requestAnimationFrame` |

### 3.8 Audio / Equalizer Controls

| # | Function | CSS Class | Storage Key | Description |
|---|----------|-----------|-------------|-------------|
| 45 | `st.e(e)` | — | `e` | **Equalizer on/off** — connects/disconnects 10-band EQ filter chain in WebAudio |
| 46 | `st.ec(e)` | — | `ec` | **Limiter on/off** — audio compressor/limiter node |
| 47 | `st.es(e,i,v,k)` | — | `ep`, `eq0`, `eq1` | **EQ presets / sliders** — 35 named presets (Party, Club, Dance, Rock, Jazz, Hip-hop, etc.) + 2 manual slots |
| 48 | `st.ar(e,k)` | — | `ar` | **Playback rate** — adjustable audio speed (0.1x–10x) |
| 49 | `st.k(e)` | — | — | **Media key handler** — play/pause/prev/next/stop/seek/volume for both old (`audio.*`) and new (`ap.*`) VK audio players |

### 3.9 Messenger / IM Features

| # | Function | CSS Class | Storage Key | Description |
|---|----------|-----------|-------------|-------------|
| 50 | `st.rm(e)` | `html.rm` | `rm` | **Chat list on right** — mirrors messenger layout so dialog list is on the right side |
| 51 | `st.imn(e)` | — | `imn` | **Open messenger from notifications** — clicking a new message notification opens full messenger instead of mini-chat |
| 52 | `st.ima(e)` | — (dynamic `<style>`) | `ima` | **Lower action icons** — repositions message action icons (reply, forward) lower for convenience |
| 53 | `st.imr(e)` | — (dynamic `<style>`) | `imr` | **Fast reactions** — removes animation delays from the reaction picker panel |
| 54 | `st.imu(e)` | — (dynamic inline styles) | `imu` | **Highlight unread outgoing** — adds background color to conversation items with unread outgoing messages via MutationObserver |
| 55 | `st.imuc(e)` | — | `imuc` | **Unread highlight color** — sets the background color used by `st.imu` |

### 3.10 UI Convenience Features

| # | Function | CSS Class | Storage Key | Description |
|---|----------|-----------|-------------|-------------|
| 56 | `st.pc(e)` | `html.pc` | `pc` | **Compact group cover** — moves group info block over the cover image with blur overlay |
| 57 | `st.ap(e)` | — | `ap` | **Auto-play music** — remembers player state to auto-resume music on tab refresh |
| 58 | `st.sl(e)` | `html.sl` (removed = active) | `sl` | **Small likes** — reduces like icon size to classic dimensions |
| 59 | `st.ol(e)` | `html.ol` | `ol` | **Classic likes style** — hides reactions, offsets counter to old style |
| 60 | `st.op(e)` | `html.op` | `op` | **Classic posts style** — moves post text above media, adds padding |
| 61 | `st.q(e)` | — | `q` | **Keyboard layout switch** — Ctrl+Q to switch RUS/ENG, Alt+Q to invert case in input fields |
| 62 | `st.aw(e)` | — | `aw` | **Disable away.php** — bypasses VK's external link redirect (away.php), opens links directly |
| 63 | `st.nl(e)` | `html.nl` | `nl` | **Hide back layer** — removes dark overlay when popups/modals open, styled buttons for close/nav |
| 64 | `st.pt(e)` | — | `pt` | **Profile page themes** — applies user's saved theme when visiting their profile page |
| 65 | `st.io(e)` | — | `io` | **Scroll optimizer** — uses `IntersectionObserver` to add/remove `.IO`/`.ION` classes, hiding off-screen post blocks to reduce CPU |
| 66 | `st.eye(s)` | `html.eye` | — | **Eyedropper** — screen pixel color picker; uses EyeDropper API (Chrome) or canvas-based manual picker with magnifier cursor |
| 67 | `st.cc(e,h)` | — | — | **URL shortener resolver** — resolves `vk.cc` short links and shows the real URL |

### 3.11 Ad Blocker / Trash Collector

| # | Function | CSS Class | Storage Key | Description |
|---|----------|-----------|-------------|-------------|
| 68 | `st.ab(e)` | — (dynamic `<style>` via `st9`) | `ab` (15-char bitfield) | **Trash collector (ad blocker)** — master ad blocker with granular sub-toggles: |

**Sub-toggles (ab bitfield positions):**

| Bit | Control | Storage | What it hides |
|-----|---------|---------|---------------|
| 0 | `cp_ab` | `ab[0]` | Master toggle — all ads, promoted posts, market items, promo banners |
| 1 | `cp_abf` | `ab[1]` | Recommended friends / "People you may know" |
| 2 | `cp_abg` | `ab[2]` | Recommended communities/groups |
| 3 | `cp_abh` | `ab[3]` | Stories block / recommended narratives |
| 4 | `cp_aba` | `ab[4]` | Recommended games / mini apps / feed blog reminders |
| 5 | `cp_abc` | `ab[5]` | Mini chat (fastchat) widget |
| 6 | `cp_abr` | `ab[6]` | Comments in posts (toggled by comment button click) |
| 7 | `cp_abp` | `ab[7]` | "Add post" block in feed (duplicated from your wall) |
| 8 | `cp_abm` | `ab[8]` | Locked/blocked menu items (sidebar nav) |
| 9 | `cp_abm1` | `ab[9]` | — sub: Profile menu link |
| 10 | `cp_abm2` | `ab[10]` | — sub: News/Feed menu link |
| 11 | `cp_abm3` | `ab[11]` | — sub: Messenger menu link |
| 12 | `cp_abm4` | `ab[12]` | — sub: Friends menu link |
| 13 | `cp_abim` | `ab[13]` | Hidden conversations (using `st_.imh` list of peer IDs) |
| 14 | `cp_abs` | `ab[14]` | Recommended/short videos |

### 3.12 Background Effects (via hue() / bge string)

These are controlled via slider inputs and stored in `st_.bge` as a pipe-delimited string:

| Slider | Control ID | Key | Description |
|--------|-----------|-----|-------------|
| Blur blocks | `cp_blb` | `bge[0]` | Backdrop blur for content blocks |
| Contrast | `cp_bfc` | `bge[1]` | Background filter contrast |
| Saturation | `cp_bfs` | `bge[2]` | Background filter saturation |
| Brightness | `cp_bfl` | `bge[3]` | Background filter brightness |
| Blur bg | `cp_bfb` | `bge[4]` | Background image blur |
| Hue rotate | `cp_bfh` | `bge[5]` | Background hue rotation (negative = auto-rotate) |
| Invert | `cp_bfi` | `bge[6]` | Background color inversion |
| Sepia | `cp_bfp` | `bge[7]` | Background sepia filter |
| Parallax | `cp_bgm` | `bge[8]` | Mouse parallax effect (negative = inverted) |
| Vignette | `cp_bgv` | `bge[9]` | Vignette overlay |
| Reflection | `btr` | `bge[10]` | Background transform reflection |
| Noise | `cp_bgn` | `bge[11]` | Noise grain overlay |

### 3.13 Clock Widget

Managed by the `c()` function (not `st.` prefixed but central feature), stored in `st_.c`:

| Control | ID | Description |
|---------|-----|-------------|
| Toggle | `cp_c` | Show/hide clock widget |
| Clock color | `cp_c0` | From Text / From Accent / Your Color |
| Size | `cp_c1` | Clock face size slider |
| Date size | `cp_c2` | Date text size slider |
| Opacity | `cp_c3` | Clock transparency slider |
| Date format | `cp_c6` | Off / Full / Short / Numeric |
| Seconds | `cp_c7` | Off / Colon / Full / Bottom / Top |
| Effect | `cp_c8` | Off / Shadow / Glow |
| Pin to bg | `cp_c9` | Pins clock to background layer |
| Font | `cp_ca` | Default / From Main / Custom |
| Custom font | `cp_cb` | Custom font name input for clock |
| Format | `cp_cc` | 24-hour / 12-hour |
| Drag | `cp_ce` | Enable drag-and-drop positioning |
| Delimiter opacity | `cp_cd` | Colon/delimiter animation speed |

### 3.14 Miscellaneous / Internal

| # | Function | Storage Key | Description |
|---|----------|-------------|-------------|
| 69 | `st.ai(i)` | — | Empty stub (no-op) |
| 70 | `st.u(e)` | — | Empty stub (update check, was removed in clean fork) |
| 71 | `st.dh(m,p,h,e)` | — | **VK API helper** — wraps `vkApi.api()` calls |
| 72 | `st.tt(e,c,...)` | — | **Tooltip renderer** — positions and animates tooltip elements |

---

## 4. CSS Class Map (html.XX toggles)

| CSS Class | Toggled By | Purpose |
|-----------|-----------|---------|
| `html.s` | `st.s()` | Settings panel is open |
| `html.mb` | `st.mb()` | Menu has background styling |
| `html.mm` | `st.mm()` | Mini sidebar mode (icon-only, no text labels) |
| `html.mf` | `st.mf()` | Fixed/sticky sidebar (targets both `#side_bar` old layout and `#layout_sidebar` new layout) |
| `html.ns` | `st.bt()` (bt=4) | "Without spaces" block style — zero margins, no border-radius |
| `html.rb` | `st.bt()` (bt=2,3) | "Rounded" block style — large border-radius |
| `html.nl` | `st.nl()` | No back layer on popups/modals |
| `html.pc` | `st.pc()` | Compact group cover |
| `html.rm` | `st.rm()` | Messenger chat list on right |
| `html.ol` | `st.ol()` | Classic "old" likes style |
| `html.op` | `st.op()` | Classic "old" posts style |
| `html.sl` | `st.sl()` (inverted) | Small likes (class removed = active) |
| `html.vo` | `st.vo()` | Visualizer-only fullscreen mode |
| `html.bo` | `st.bo()` | Background-only mode |
| `html.eye` | `st.eye()` | Eyedropper mode active |
| `html.mc` | `st.mc()` (mc=1) | Menu color: from accent |
| `html.mg` | `st.mc()` (mc=2) | Menu color: your own color |
| `html.me` | `st.mc()` (mc=3) | Menu color: from text |
| `html.Pl` | `st.po()` | Page shifted left |
| `html.Pr` | `st.po()` | Page shifted right |
| `.IO` / `.ION` | `st.io()` | IntersectionObserver optimization: visible / not-visible post blocks |

---

## 5. Complete UI Controls (cp_XX)

### 5.1 Click Handler Controls (from `case 'cp_XX'`)

| Control ID | Handler | Purpose |
|------------|---------|---------|
| `cp_hp` | `h(0,-1)` | History: previous state (undo) |
| `cp_hn` | `h(0,1)` | History: next state (redo) |
| `cp_bl` | `st.t(cp_bl)` | Color picker: select "Block" color tab (index 0) |
| `cp_ac` | `st.t(cp_ac)` | Color picker: select "Accent" color tab (index 1) |
| `cp_oc` | `st.oc()` | Online color option |
| `cp_lc` | `st.lc()` | Like color option |
| `cp_fc` | `st.fc()` | Favicon color option |
| `cp_fr` | `st.fc(2)` | Favicon round toggle |
| `cp_hc` | `st.hc()` | Header color option |
| `cp_ht` | `st.ht()` | Header text color option |
| `cp_tc` | `st.tc()` | Text color option |
| `cp_bgc` | `st.bgc()` | Background color option |
| `cp_mc` | `st.mc()` | Menu color option |
| `cp_mb` | `st.mb(1)` | Menu background toggle |
| `cp_mm` | `st.mm(1)` | Mini menu toggle |
| `cp_mf` | `st.mf(1)` | Fixed menu toggle |
| `cp_bt` | `st.bt()` | Block style option |
| `cp_bc` | `st.bc()` | Button/block color option |
| `cp_bgf` | scroll to bg section | Background section anchor |
| `cp_ts` | `st.ts()` | Text shadow option |
| `cp_bs` | `st.bs()` | Block shadow option |
| `cp_bst` | `st.bs(1,2,k)` | Block shadow inset toggle |
| `cp_kc` | `st.kc()` | Button color option |
| `cp_uc` | `st.uc()` | Unread color option |
| `cp_u` | `st.u(1)` | Update check |
| `cp_v` | `st.v()` / `st.vo(-1)` | Visualizer toggle / visualizer-only toggle |
| `cp_vp` | `st.vp(n)` | Visualizer preset selector (1–4) |
| `cp_va` | `st.vb(1)` | Visualizer invert gain |
| `cp_vc` | `st.vc()` | Visualizer color option |
| `cp_f` | `st.f()` | Font panel toggle |
| `cp_fhb` | `st.fn()` / copy | Font history list item click |
| `cp_b` | `st.b()` | Wallpaper panel toggle |
| `cp_bhb` | `st.bg()` / copy | Wallpaper history list item click |
| `cp_bfha` | `hue(1)` | Background hue auto-rotate toggle |
| `cp_bgmi` | `hue(1)` | Parallax invert direction toggle |
| `cp_bgs` | `st.bgs()` | Slideshow interval option |
| `cp_bgsr` | `st.bgs(2)` | Slideshow random toggle |
| `cp_bgr` | `st.bgr()` | Background size/repeat option |
| `cp_bgp` | `st.bgp()` | Background position option |
| `cp_btr` | `st.btr()` | Background reflection option |
| `cp_bga` | `st.bga(1)` | Background audio mute/unmute |
| `cp_c` | `c(1,0)` | Clock toggle |
| `cp_c0` | `c(s,-1,k)` | Clock color option |
| `cp_c6` | `c(s,6,k)` | Clock date format option |
| `cp_c7` | `c(s,7,k)` | Clock seconds display option |
| `cp_c8` | `c(s,8,k)` | Clock effect option |
| `cp_c9` | `c(1,9)` | Clock pin to background toggle |
| `cp_ca` | `c(s,10,k)` | Clock font option |
| `cp_cc` | `c(s,12,k)` | Clock 12/24h format option |
| `cp_ce` | `c(1,13)` | Clock drag-and-drop toggle |
| `cp_gs` | `st.gs()` | Export/share theme |
| `cp_af` | `st.t()` close | Close color picker |
| `cp_q` | `st.q(1)` | Keyboard layout switch toggle |
| `cp_ap` | `st.ap(1)` | Auto-play music toggle |
| `cp_pt` | `st.pt(1)` | Profile themes toggle |
| `cp_is` | `st.is()` | Install theme to profile |
| `cp_io` | `st.io(1)` | Scroll optimizer toggle |
| `cp_sl` | `st.sl(1)` | Small likes toggle |
| `cp_ol` | `st.ol(1)` | Classic likes toggle |
| `cp_op` | `st.op(1)` | Classic posts toggle |
| `cp_em` | `st.em(1,1)` | Emoji/sticker resize toggle |
| `cp_po` | `st.po(1,1)` | Page offset toggle |
| `cp_ra` | `st.ra(1,1)` | Avatar rounding toggle |
| `cp_pc` | `st.pc(1)` | Compact group cover toggle |
| `cp_rm` | `st.rm(1)` | Chat list right toggle |
| `cp_imn` | `st.imn(1)` | Messenger from notifications toggle |
| `cp_ima` | `st.ima(1)` | Lower action icons toggle |
| `cp_imr` | `st.imr(1)` | Fast reactions toggle |
| `cp_imub` | `st.imu(1)` | Highlight unread toggle |
| `cp_aw` | `st.aw(1)` | Disable away.php toggle |
| `cp_nl` | `st.nl(1)` | Hide back layer toggle |
| `cp_ed` | `st.eye()` | Eyedropper activate |
| `cp_ab` – `cp_abs` | `st.ab(1)` | Ad blocker sub-toggles (see §3.11) |

### 5.2 Input/Range Controls (from `input` and `change` handlers)

| Control ID | Type | Handler | Purpose |
|------------|------|---------|---------|
| `cp_hh` | range | `hue()` | Hue slider |
| `cp_hs` | range | `hue()` | Saturation slider |
| `cp_hl` | range | `hue()` | Lightness/Brightness slider |
| `cp_ha` | range | `hue()` | Alpha/Transparency slider |
| `cp_blb` | range | `hue()` | Block blur amount |
| `cp_bfc` | range | `hue()` | Background filter contrast |
| `cp_bfs` | range | `hue()` | Background filter saturation |
| `cp_bfl` | range | `hue()` | Background filter brightness |
| `cp_bfb` | range | `hue()` | Background blur |
| `cp_bfh` | range | `hue()` | Background hue rotation |
| `cp_bfi` | range | `hue()` | Background invert |
| `cp_bfp` | range | `hue()` | Background sepia |
| `cp_bgm` | range | `hue()` | Parallax intensity |
| `cp_bgv` | range | `hue()` | Vignette intensity |
| `cp_bgn` | range | `hue()` | Noise intensity |
| `cp_vg` | range | `st.vb(1)` | Visualizer gain |
| `cp_vvb` | range | `st.vb(1)` | Visualizer volume |
| `cp_vbs` | range | `st.vb(1)` | Visualizer strobes |
| `cp_vbr` | range | `st.vb(1)` | Visualizer RGB filter |
| `cp_vbR` | range | `st.vb(1)` | Visualizer trembling |
| `cp_vbt` | range | `st.vb(1)` | Visualizer trembling |
| `cp_vba` | range | `st.vb(1)` | Visualizer approach |
| `cp_vbb` | range | `st.vb(1)` | Visualizer background effect |
| `cp_bsb` | range | `st.bs(1)` | Block shadow blur |
| `cp_bss` | range | `st.bs(1)` | Block shadow spread |
| `cp_bgav` | range | `st.bga(1)` | Background audio volume |
| `cp_es` | range | `st.em(1)` | Emoji size |
| `cp_et` | range | `st.em(1)` | Sticker picker size |
| `cp_ek` | range | `st.em(1)` | Sticker size |
| `cp_ps` | range | `st.po(1)` | Page offset position |
| `cp_rav` | range | `st.ra(1)` | Avatar rounding amount |
| `cp_c1` | range | `c(1,1)` | Clock size |
| `cp_c2` | range | `c(1,1)` | Date size |
| `cp_c3` | range | `c(1,1)` | Clock opacity |
| `cp_cd` | range | `c(1,1)` | Clock delimiter speed |
| `cp_fs` | range | `st.fs()` | Font size |
| `cp_imuc` | color | `st.imuc()` | Unread highlight color picker |

### 5.3 Text Input Controls (from `keyup` handler)

| Control ID | Key | Handler | Purpose |
|------------|-----|---------|---------|
| `cp_cp` | Enter | `st.t(0, rgb2hsl(...))` | Hex color paste → apply |
| `cp_fi` | Enter | `st.fn(1, value)` | Font name/URL input |
| `cp_bi` | Enter | `st.bg(1, value)` | Wallpaper URL input |
| `cp_cb` | Enter | `st.fn(2, value)` | Clock custom font input |
| `cp_gs` | paste | `st.ss(...)` | Theme import (paste encoded string) |

### 5.4 Mouse Interaction Controls

| Control ID | Event | Purpose |
|------------|-------|---------|
| `cp_bsc` | mousedown+drag / keyboard arrows | Block shadow offset (X/Y position) |
| `cp_c4` | mousedown+drag / keyboard arrows | Clock position offset (X/Y) |

---

## 6. Style Elements

| Element ID | Role |
|-----------|------|
| `st0` | Quick-hide CSS (hides body during load if theme has background color) |
| `st1` | Main theme CSS (from `css` or `mcss` file, with variable substitution) |
| `st2` | Supplementary CSS (selectors from `css`/`mcss` that use CSS variables) |
| `st3` | Dynamic font @import rules (Google Fonts, custom font-face) |
| `st4` | Clock font @import/font-face rule |
| `st9` | Ad blocker hide rules (generated by `st.ab()`) |
| `#cpw` | Control panel wrapper `<div>`, carries `dataset.s` (settings JSON) and `dataset.c` (cached CSS) |

---

## 7. Context Menu Items (0.js)

| Menu ID | Label | Action |
|---------|-------|--------|
| `reset` | "Default theme settings" | Calls `st.ss()` (reset to defaults) or clears localStorage + reload |
| `appReset` | "App reset" | Nuclear reset: clears localStorage, sessionStorage, IndexedDB, chrome.storage, reloads extension |

---

## 8. Storage Keys Summary

All settings are stored in `st_` object, persisted via `chrome.storage.local`, `chrome.storage.sync`, `localStorage.st_`, and `IndexedDB('st')`.

| Key | Type | Feature |
|-----|------|---------|
| `mode` | 0/1 | Theme on/off |
| `hsl` | string (pipe-separated HSL channels) | All 17 color channels |
| `bge` | string (pipe-separated) | Background effects (blur, contrast, saturation, etc.) |
| `hc` | 0/1/2 | Header color mode |
| `tc` | 0/1/2 | Text color mode |
| `vc` | 0–3 | Visualizer color mode |
| `bc` | 0–2 | Button color mode |
| `bgc` | 0/1 | Background color mode |
| `mc` | 0–3 | Menu color mode |
| `ht` | 0–2 | Header text color mode |
| `kc` | 0–4 | Button color detail mode |
| `oc` | 0/1 | Online color mode |
| `lc` | 0/1 | Like color mode |
| `fc` | 0–2 (neg = round) | Favicon color mode |
| `uc` | 0/1 | Unread color mode |
| `ts` | 0–2 | Text shadow mode |
| `bt` | 0–4 | Block style |
| `bs` | string (space-separated) | Block shadow settings |
| `f` | string | Current font |
| `fa` | string (comma-separated) | Font history list |
| `fs` | number | Font size |
| `i` | string | Current wallpaper URL |
| `ia` | string (comma-separated) | Wallpaper history list |
| `is` | number (neg = random) | Slideshow interval |
| `ir` | 0–4 | Background size/repeat |
| `ip` | 0–8 | Background position |
| `bga` | number (neg = muted) | Background audio volume |
| `bgv` | 0/1 | Background video paused |
| `vp` | number (neg = off) | Visualizer preset |
| `vb` | string (pipe-separated) | Visualizer settings |
| `e` | 0/1 | Equalizer on/off |
| `ec` | 0/1 | Limiter on/off |
| `ep` | number | EQ preset index |
| `eq0`, `eq1` | string | Manual EQ values |
| `ar` | number (neg = disabled) | Playback rate |
| `mb` | 0/1 | Menu background |
| `mm` | 0/1 | Mini menu |
| `mf` | 0/1 | Fixed menu |
| `po` | number (neg = disabled) | Page offset position |
| `ra` | number (neg = disabled) | Avatar rounding |
| `em` | string (dot-separated) | Emoji/sticker sizes |
| `c` | string (quote-separated) | Clock settings (16+ fields) |
| `ab` | string (15-char bitfield) | Ad blocker toggles |
| `imh` | string (comma-separated) | Hidden conversation peer IDs |
| `pc` | 0/1 | Compact group cover |
| `pt` | 0/1 | Profile themes |
| `ap` | 0/1 | Auto-play music |
| `q` | 0/1 | Keyboard layout switch |
| `sl` | 0/1 | Small likes |
| `ol` | 0/1 | Classic likes |
| `op` | 0/1 | Classic posts |
| `io` | 0/1 | Scroll optimizer |
| `nl` | 0/1 | Hide back layer |
| `rm` | 0/1 | Chat list right |
| `imn` | 0/1 | Messenger from notifications |
| `ima` | 0/1 | Lower action icons |
| `imr` | 0/1 | Fast reactions |
| `imu` | 0/1 | Highlight unread |
| `imuc` | hex color | Unread highlight color |
| `aw` | 0/1 | Disable away.php |
| `bo` | 0/1 | Background-only mode |
| `vo` | 0/1 | Visualizer-only mode |

---

## 9. EQ Presets (35 total)

Manual, Manual 2, Party, Club, Dance, Deep, Techno, Electronic, Bass Reducer, Bass Booster, Full Bass, Treble Reducer, Treble Booster, Full Treble, Full Bass & Treble, Headphones, Laptop, Loudness, Lounge, Large Hall, Acoustic, Speech, Vocal, Piano, Classic, Live, Pop, R&B, Soft, Soft Rock, Rock, Alternative, Metal, Indie, Jazz, Ska, Reggae, Hip-hop, Latin.

---

## 10. Summary Statistics

| Metric | Count |
|--------|-------|
| **st.* functions** | 72 |
| **Unique features (user-facing)** | ~67 |
| **CSS html.XX classes** | 20 |
| **cp_XX click controls** | ~75 unique |
| **cp_XX range sliders** | ~35 |
| **cp_XX text inputs** | 5 |
| **Storage keys** | ~55 |
| **EQ presets** | 35+2 manual |
| **Localized languages** | 3 (en, ru, uk) |
| **Permissions** | 4 required + 1 optional |
| **Keyboard shortcuts** | 5 global commands + ~10 in-page hotkeys |

# МАСТЕР РИТЕЙЛ Website Specification

## Project Overview
A static one-page website for **МАСТЕР РИТЕЙЛ** (Master Retail) — a Russian company specializing in retail branding, signage, printing, and trade space design.

**Tech Stack:**
- Next.js 16
- Tailwind CSS 4
- TypeScript
- React 19

**Figma Design Sources:**
- Desktop: `node-id=1-3`
- Mobile: `node-id=1-361`

---

## Design Tokens

### Colors
| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Primary Blue | `#0070db` | `--color-primary-blue` | Headlines accent, links, highlights |
| Primary Orange | `#b45a06` | `--color-primary-orange` | CTA buttons |
| Dark Navy | `#1e1f33` | `--color-dark-navy` | Gradient backgrounds, dark sections |
| Background | `#fafaff` | `--color-background` | Page background |
| Secondary | `#f3f4ff` | `--color-secondary` | Cards, light sections, footer |
| White | `#ffffff` | `--color-white` | Content cards |
| Black | `#000000` | `--color-black` | Body text |
| Gray | `#ebebeb` | `--color-gray` | Secondary buttons, borders |
| Light Border | `#e5e8ff` | `--color-light-border` | Dividers |

### Typography
| Font | Weights | Usage |
|------|---------|-------|
| Unbounded | 500 (Medium), 700 (Bold), 800 (ExtraBold) | Headings, titles, buttons |
| Inter | 300 (Light), 400 (Regular) | Body text, descriptions |

### Border Radius
| Size | Value | Usage |
|------|-------|-------|
| Small | `20px` | Small buttons, tags |
| Medium | `30px` | Cards, inputs |
| Large | `50px` | Large cards, sections |
| Full | `73px` | Pill buttons |

### Shadows
```css
--shadow-card: 4px 4px 20px 4px rgba(0, 0, 0, 0.08);
--shadow-card-lg: 6.74px 6.74px 33.7px 6.74px rgba(0, 0, 0, 0.08);
```

---

## Page Sections

### 1. Header
- **Desktop:** Full navigation bar
  - Logo (left)
  - Nav links (all external to master-in.ru):
    - О нас → https://master-in.ru/about/
    - Направления → https://master-in.ru/directions/
    - Медиацентр → https://master-in.ru/news/
    - Контакты → https://master-in.ru/contacts/
  - Phone number: `8 (495) 255-06-07` (styled bold)
  - CTA button: "Связаться с нами" (secondary style)
- **Mobile:** Compact header
  - Logo (left)
  - Hamburger menu icon (right)
  - Mobile menu overlay when open
- **Sticky:** Yes, fixed on scroll
- **Note:** This page is a standalone landing for "Оформление торговых пространств" direction
- **All nav links:** Navigate to master-in.ru (same tab, no target="_blank")

### 2. Hero Section
- **Headline:** "МАСТЕР РИТЕЙЛ БРЕНДИРОВАНИЕ И ОФОРМЛЕНИЕ ТОРГОВЫХ ПРОСТРАНСТВ"
  - "МАСТЕР РИТЕЙЛ" in blue (#0070db)
  - Rest in black
- **Description:** Service overview text
- **CTA Button:** "Связаться с нами" (orange)
- **Side Cards:**
  - "От макета до монтажа 48 часов" card
  - "Оформляем" card with list (Точки продаж, Торговые сети, Торговые центры)
- **Decorative:** Blue blob/wave shape in corner

### 3. Services Section (НАШИ УСЛУГИ)
- **Layout:** 2x3 grid (desktop), 1 column (mobile)
- **Cards:** 6 service cards with:
  - Background image
  - Dark gradient overlay
  - Service title (white)
  - "Заказать проект" button
- **Services:**
  1. Полиграфия офсетной и цифровой печатью
  2. УФ-печать на ПВХ
  3. Сальвентная печать на самоклеящейся пленке
  4. Световые вывески и LED экраны
  5. Баннеры любого размера
  6. Монтаж альпинистами любой сложности
- **Footer:** "Больше услуг" button

### 4. Clients Carousel (НАШИ КЛИЕНТЫ)
- **Background:** Navy-to-blue gradient (#1e1f33 → #0070db)
- **Layout:** Horizontal scrolling carousel
- **Cards:** White rounded cards with:
  - Company logo/icon
  - Company name
  - Description text
- **Clients:** Магнит, Пятёрочка, Обойкин, Сбербанк, Samsung, О'кей, Lichi
- **Navigation:** Left/Right arrows

### 5. Advantages Section (ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ)
- **Layout:** 3 feature blocks
- **Features:**
  1. "От макета до монтажа за 48 часов" — with clock visualization
  2. "Работаем в 97+ городах России" — with Russia map
  3. "200+ материалов в наличии" — with materials image
- **Each has:** Title, description, CTA button

### 6. Portfolio Carousel (НАШИ РАБОТЫ)
- **Background:** Navy-to-blue gradient
- **Layout:** Horizontal scrolling carousel
- **Cards:** Project images with company name label
- **Projects:** FAMILIA, ПЯТЕРОЧКА, ВСЕ ИНСТРУМЕНТЫ, ГАЛАМАРТ, SAMSUNG, СБЕРБАНК, ОБОЙКИН, ОКЕЙ, IPORT, LEOMALL, LICHI
- **Navigation:** Left/Right arrows

### 7. Contact Form Section
- **Background:** Navy-to-blue gradient (rounded corners)
- **Content:**
  - Heading: "Оставьте заявку на консультацию и получите расчет стоимости"
  - Description text
  - Consultant card (photo, name: Анита Клименок, role)
- **Form Fields:**
  - Ваше Имя* (Name - text, required)
  - Ваш E-mail* (Email - email, required)
  - Тема обращения (Topic - dropdown select):
    - Предложение сотрудничества
    - Вопрос о размещении рекламы
    - Вопрос о расположении офиса
    - Сообщить об ошибке
    - Другое
  - Ваше сообщение (Message - textarea)
  - Privacy checkbox with link to https://master-in.ru/privacy/
  - Submit button: "Отправить заявку"

### 8. How We Work (КАК МЫ РАБОТАЕМ)
- **Layout:** 5 vertical step cards
- **Each Step:**
  - Large number (1-5) as background watermark
  - Step title (bold)
  - Step description
- **Steps:**
  1. Консультация и расчёт стоимости
  2. Первичный макет
  3. Процесс изготовления
  4. Доставка на объект и монтаж
  5. Поддержка и гарантийное обслуживание

### 9. FAQ Section (ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ)
- **Layout:** Accordion list
- **Behavior:** Click to expand/collapse
- **Items:** 7 FAQ questions with answers
- **Styling:** White cards with arrow icons

### 10. Contacts Section (КОНТАКТЫ)
- **Layout:** 2 columns (info + map)
- **Info Card:**
  - Heading: "КОНТАКТЫ"
  - Address: Санкт-Петербург, ул. Миллионная, д. 6, оф. 104
  - Phone: 8 (800) 755-50-76
  - Реквизиты link
  - Email: zakaz@o-tochka.ru
  - "Построить маршрут" button
  - "Связаться с нами" CTA button
- **Map:** Interactive map placeholder/image

### 11. Footer
- **Background:** Light (#f3f4ff)
- **Layout:** Multi-column
- **Columns:**
  - Logo
  - О нас: О компании, Партнерам (links to master-in.ru)
  - Направления: (list of services, all link to https://master-in.ru/directions/)
  - Медиацентр: Новости, Пресс-релизы (link to https://master-in.ru/news/)
  - Контакты: Phone (clickable tel: link), CTA button (links to https://master-in.ru/contacts/)
- **Bottom Bar:**
  - Copyright: © 2025 Медиа Группа Мастер Ин
  - Privacy policy link → https://master-in.ru/privacy/
- **All external links:** Navigate to master-in.ru (same tab)

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | < 768px | Single column, hamburger menu |
| Tablet | 768px - 1280px | 2 columns where applicable, hamburger menu |
| Desktop | > 1280px (xl) | Full layout with desktop navigation |
| Large Desktop | > 1440px | Max container width 1786px |

**Note:** Desktop navigation (full menu with links) only shows at xl (1280px+) to prevent cramped layouts on medium screens.

---

## Components List

### Shared Components
- [x] `Button` — Primary (orange), Secondary (light), Text variants
- [x] `Header` — With mobile menu
- [x] `Footer`
- [x] `Icons` — Phone, Location, Arrow, Menu, Close, Chevron
- [x] `ContactModal` — Popup form for "Связаться с нами" buttons
- [x] `ContactModalContext` — React context to control modal state globally

### Section Components
- [x] `Hero`
- [x] `ServiceCard` + `Services`
- [x] `ClientCard` + `Clients` (carousel)
- [x] `Advantages`
- [x] `PortfolioCard` + `Portfolio` (carousel)
- [x] `ContactForm`
- [x] `ProcessStep` + `HowWeWork`
- [x] `FAQItem` + `FAQ`
- [x] `Contacts`

---

## Assets Required

### Images (exported from Figma)
- Logo: `/images/logo.png` — MASTER IN медиагруппа with curved arc
- Map: `/images/map.png` — Static map of Saint Petersburg with "ОСОБАЯ ТОЧКА" marker
- Service images (6)
- Client logos (7+)
- Portfolio project images (11+)
- Russia map illustration
- Materials showcase image
- Consultant photo

### Decorative Assets
- `/decorative-blob.svg` — Gradient blob (dark navy to blue) for Hero section background
- `/dots-pattern.svg` — Scattered blue dots pattern for "48 hours" card decoration

### Icons
- Phone icon
- Location icon
- Arrow right (circle)
- Hamburger menu
- Close (X)
- Chevron down (FAQ)

---

## Implementation Status

| Section | Desktop | Mobile | Status |
|---------|---------|--------|--------|
| Header | ✅ | ✅ | Completed |
| Hero | ✅ | ✅ | Completed |
| Services | ✅ | ✅ | Completed |
| Clients Carousel | ✅ | ✅ | Completed |
| Advantages | ✅ | ✅ | Completed |
| Portfolio Carousel | ✅ | ✅ | Completed |
| Contact Form | ✅ | ✅ | Completed |
| How We Work | ✅ | ✅ | Completed |
| FAQ | ✅ | ✅ | Completed |
| Contacts | ✅ | ✅ | Completed |
| Footer | ✅ | ✅ | Completed |

---

## Notes & Decisions
- Using Next.js App Router
- Static export for deployment: run `bun run export` to generate static files in `out/` folder
- Placeholder images from Unsplash until assets exported from Figma
- Russian language content (UTF-8)
- Fonts: Unbounded (headings) + Inter (body) from Google Fonts
- Tailwind CSS 4 with custom CSS variables for design tokens
- Responsive breakpoints: mobile-first approach with md (768px) and lg (1024px)
- Carousels implemented with native scroll + arrow navigation
- FAQ accordion with single-open behavior
- Hero section includes decorative gradient blob (rotated 121.253deg, clipped by container) and scattered dots pattern in "48 hours" card

### Integration with master-in.ru
- **This page is a standalone landing** for the "Оформление торговых пространств" direction
- Phone number: `8 (495) 255-06-07` (Moscow area code, matching real site)
- **All navigation links** point to master-in.ru (О нас, Направления, Медиацентр, Контакты)
- Footer links point to real master-in.ru URLs
- Contact form matches real site fields (Name, Email, Topic dropdown, Message)
- Privacy policy and other legal links point to master-in.ru


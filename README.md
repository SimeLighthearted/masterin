# МАСТЕР РИТЕЙЛ — Брендирование и оформление торговых пространств

Лендинг для направления "Оформление торговых пространств" медиагруппы MASTER IN.

**Рабочий сайт:** https://branding.master-in.ru/

---

## Технологии

| Технология | Версия | Описание |
|------------|--------|----------|
| [Next.js](https://nextjs.org/) | 16 | React-фреймворк для веб-приложений. Обеспечивает маршрутизацию, оптимизацию шрифтов и статическую генерацию |
| [React](https://react.dev/) | 19 | Библиотека для создания пользовательских интерфейсов из компонентов |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | CSS-фреймворк с готовыми классами для стилизации (utility-first подход) |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Типизированный JavaScript — помогает избежать ошибок на этапе разработки |
| [Bun](https://bun.sh/) | — | Быстрый пакетный менеджер и runtime (альтернатива npm/yarn) |

---

## Структура проекта

```
masterin/
├── app/                      # Основное приложение (Next.js App Router)
│   ├── page.tsx              # Главная страница — собирает все секции
│   ├── layout.tsx            # Общий layout: шрифты, метаданные, провайдеры
│   ├── globals.css           # Глобальные стили + переменные Tailwind
│   └── favicon.ico           # Иконка сайта
│
├── components/               # React-компоненты
│   ├── layout/               # Структурные компоненты
│   │   ├── Header.tsx        # Шапка с навигацией
│   │   └── Footer.tsx        # Подвал сайта
│   ├── sections/             # Секции лендинга
│   │   ├── Hero.tsx          # Главный экран
│   │   ├── Services.tsx      # Наши услуги
│   │   ├── Clients.tsx       # Карусель клиентов
│   │   ├── Advantages.tsx    # Преимущества
│   │   ├── Portfolio.tsx     # Карусель работ
│   │   ├── ContactForm.tsx   # Форма обратной связи
│   │   ├── HowWeWork.tsx     # Как мы работаем
│   │   ├── FAQ.tsx           # Частые вопросы
│   │   └── Contacts.tsx      # Контакты и карта
│   └── ui/                   # UI-компоненты
│       ├── Button.tsx        # Кнопки (primary, secondary)
│       ├── ContactModal.tsx  # Модальное окно связи
│       └── ContactModalContext.tsx  # Контекст для управления модалкой
│
├── public/                   # Статические файлы (доступны по URL)
│   ├── images/               # Изображения
│   │   ├── logo.png          # Логотип MASTER IN
│   │   └── map.png           # Карта для секции контактов
│   ├── decorative-blob.svg   # Декоративный градиентный блоб
│   └── dots-pattern.svg      # Паттерн точек для карточки "48 часов"
│
├── out/                      # Статическая сборка (генерируется командой export)
│
├── spec.md                   # Спецификация дизайна и компонентов
├── next.config.ts            # Конфигурация Next.js
├── package.json              # Зависимости и скрипты
├── tsconfig.json             # Конфигурация TypeScript
└── bun.lock                  # Lock-файл зависимостей
```

---

## Быстрый старт

### Требования

- [Bun](https://bun.sh/) (рекомендуется) или Node.js 18+
- Git

### Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/gooditworks/masterin.git
cd masterin

# Установить зависимости
bun install

# Запустить dev-сервер
bun run dev
```

Откройте http://localhost:3000 в браузере.

> **Что такое dev-сервер?**  
> Это локальный сервер для разработки. Он автоматически перезагружает страницу при изменении кода (Hot Reload).

---

## Доступные команды

| Команда | Описание |
|---------|----------|
| `bun run dev` | Запуск dev-сервера на http://localhost:3000 |
| `bun run build` | Сборка для production (серверный режим) |
| `bun run export` | Static export — генерация статических HTML-файлов в папку `out/` |
| `bun run start` | Запуск production-сервера (после `build`) |
| `bun run lint` | Проверка кода линтером ESLint |

---

## Static Export (статическая сборка)

Проект поддерживает режим **static export** — генерацию полностью статического сайта без необходимости Node.js-сервера.

### Что это значит?

- Вместо серверного рендеринга генерируются обычные HTML/CSS/JS файлы
- Можно разместить на любом хостинге (Nginx, Apache, S3, GitHub Pages)
- Не требует Node.js на сервере

### Как сгенерировать статику

```bash
bun run export
```

Результат появится в папке `out/`:

```
out/
├── index.html          # Главная страница
├── 404.html            # Страница ошибки
├── _next/              # JS/CSS бандлы и шрифты
│   └── static/
├── images/             # Скопированные изображения
└── ...
```

### Как это работает

В файле `next.config.ts` используется условная конфигурация:

```typescript
const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "true" && { output: "export" }),
};
```

Команда `bun run export` устанавливает переменную `STATIC_EXPORT=true`, что включает режим статической генерации.

---

## Деплой и хостинг

| Параметр | Значение |
|----------|----------|
| Репозиторий | https://github.com/gooditworks/masterin |
| Продакшн URL | https://branding.master-in.ru/ |
| Хостинг | [Vercel](https://vercel.com/) |
| Ветка деплоя | `main` |
| Автодеплой | Да |

### Процесс деплоя

1. Push в ветку `main`
2. Vercel автоматически запускает сборку
3. Сайт обновляется на https://branding.master-in.ru/

> Проект подключен к Vercel через GitHub integration. Никаких ручных действий для деплоя не требуется.

### Vercel Dashboard

Проект доступен в панели Vercel под именем `masterin` в организации `Gooditworks`.

---

## Разработка

### Как устроена страница

Главная страница (`app/page.tsx`) собирает все секции в нужном порядке:

```tsx
<Header />
<main>
  <Hero />
  <Services />
  <Clients />
  <Advantages />
  <Portfolio />
  <ContactForm />
  <HowWeWork />
  <FAQ />
  <Contacts />
</main>
<Footer />
```

### Шрифты

Используются два шрифта из Google Fonts (загружаются через `next/font`):

- **Unbounded** — заголовки, кнопки (веса: 400, 500, 700, 800)
- **Inter** — основной текст (веса: 300, 400, 500)

### Стили

- Tailwind CSS 4 с кастомными CSS-переменными
- Дизайн-токены описаны в `spec.md`
- Mobile-first подход (базовые стили для мобильных, `md:` и `lg:` для больших экранов)

### Модальное окно "Связаться с нами"

Управляется через React Context (`ContactModalContext`). Любой компонент может открыть модалку:

```tsx
import { useContactModal } from "@/components/ui/ContactModalContext";

const { openModal } = useContactModal();
// ...
<Button onClick={openModal}>Связаться с нами</Button>
```

---

## Дополнительные ресурсы

- **Спецификация дизайна:** [spec.md](spec.md) — подробное описание секций, цветов, типографики
- **Figma-дизайн:** Desktop `node-id=1-3`, Mobile `node-id=1-361`

---

## Полезные ссылки

- [Документация Next.js](https://nextjs.org/docs) — официальная документация
- [Tailwind CSS](https://tailwindcss.com/docs) — справочник по классам
- [Bun](https://bun.sh/docs) — документация пакетного менеджера

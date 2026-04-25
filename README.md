![Svelte Logo](https://st.timeweb.com/cloud-static/apps-logo/svelte.svg)

# Svelte

Пример приложения [Svelte](https://svelte.dev/), которое можно развернуть в **Timeweb Cloud Apps**.

:tada: [Демо](https://timeweb-cloud-app-example-svelte-b1bc.twc1.net)

:rocket: [Создать свой Apps](https://timeweb.cloud/my/apps/create)

:books: [Документация Timeweb Cloud Apps](https://timeweb.cloud/docs/apps)

## Локальный запуск

```bash
# установка зависимостей
npm install

# запуск в dev режиме (watch + livereload)
npm run dev

# production-сборка
npm run build

# production-запуск (сборка выполняется автоматически через prestart)
npm run start
```

## Настройки деплоя в Timeweb Cloud Apps

Если в деплое отображается старый шаблон (`HELLO WORLD` / `Svelte app`), обычно проблема в том,
что запускается старый билд или не выполняется сборка перед стартом.

Рекомендуемые параметры:

- **Build command**: `npm install && npm run build`
- **Start command**: `npm run start`
- **Port**: переменная окружения `PORT` (скрипт уже поддерживает её)
- **Ветка деплоя**: убедитесь, что выбрана ветка с последним коммитом

В этом репозитории добавлен `prestart`, поэтому при `npm run start` сначала выполняется
актуальная сборка, и только потом поднимается сервер `sirv`.

<div class="min-h-screen bg-grid text-text antialiased">
  <header class="sticky top-0 z-50 border-b border-line/80 bg-surface/80 backdrop-blur-xl">
    <div class="mx-auto flex max-w-8xl items-center justify-between px-4 py-3 xs:px-5 md:px-6 lg:px-8">
      <a href="#hero" class="flex items-center gap-3">
        <span class="flex h-9 w-9 items-center justify-center rounded-full bg-violet/10 text-violet">
          <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M12 21s-6.7-4.35-8.93-9.01C1.4 8.46 3.2 4.5 7.1 4.5c2.02 0 3.45.98 4.4 2.37.95-1.39 2.38-2.37 4.4-2.37 3.9 0 5.7 3.96 4.03 7.49C18.7 16.65 12 21 12 21Z" />
          </svg>
        </span>
        <span class="text-base font-extrabold tracking-tighter2 xs:text-lg md:text-xl">Особенная мама</span>
      </a>

      <nav class="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
        <a href="#help" class="transition hover:text-text">Получить помощь</a>
        <a href="#navigator" class="transition hover:text-text">Навигатор фондов</a>
        <a href="#materials" class="transition hover:text-text">Материалы</a>
        <a href="#stories" class="transition hover:text-text">Истории</a>
        <a href="#about" class="transition hover:text-text">О проекте</a>
      </nav>

      <div class="flex items-center gap-2 xs:gap-3 md:gap-4">
        <a href="#donate" class="hidden text-sm font-semibold text-orange transition hover:opacity-80 lg:inline-block">Поддержать</a>
        <a href="#help" class="inline-flex items-center justify-center rounded-full bg-ink px-4 py-2.5 text-xs font-bold text-white shadow-soft transition hover:-translate-y-0.5 xs:text-sm md:px-5">Найти помощь</a>
      </div>
    </div>
  </header>

  <main>
    <section id="hero" class="px-4 pb-10 pt-6 xs:px-5 md:px-6 md:pb-14 md:pt-8 lg:px-8 lg:pb-20 lg:pt-10">
      <div class="mx-auto max-w-8xl">
        <div class="hero-shell overflow-hidden rounded-4xl border border-white/70 shadow-soft">
          <div class="grid gap-8 px-4 py-5 xs:px-5 xs:py-6 md:px-8 md:py-8 lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)] lg:gap-10 lg:px-10 lg:py-10">
            <div class="flex flex-col justify-center">
              <h1 class="max-w-[16ch] font-display text-[34px] font-black leading-[0.98] tracking-tighter2 text-text xs:text-[38px] sm:text-[44px] md:text-[56px] lg:text-[62px]">
                Вы не одни.
                <span class="block text-orange">Маршрут помощи</span>
                для особенных мам.
              </h1>
              <p class="mt-5 max-w-[56ch] text-sm leading-6 text-muted xs:text-[15px] md:text-base md:leading-7">
                Единая база проверенных фондов, понятные инструкции к действию и опыт тех, кто уже прошел этот путь.
              </p>
            </div>

            <div class="hero-image-mask w-full overflow-hidden rounded-[28px] bg-white shadow-soft">
              <img src="https://www.figma.com/api/mcp/asset/8bbb9320-bc8b-4dba-a97e-06d11e149688" alt="Мама с ребёнком" class="h-[280px] w-full object-cover object-[34%_center] xs:h-[320px] md:h-[420px] lg:h-[560px]" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="help" class="px-4 py-8 xs:px-5 md:px-6 md:py-10 lg:px-8 lg:py-14">
      <div class="mx-auto max-w-8xl">
        <div class="rounded-4xl border border-white/70 bg-white/72 px-4 py-5 shadow-soft backdrop-blur-sm xs:px-5 md:px-8 md:py-8">
          <h2 class="font-display text-[28px] font-black leading-[1.02] tracking-tighter2 md:text-[36px]">Выберите ваш путь</h2>
          <div class="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <article class="rounded-4xl bg-surface p-5"><h3 class="text-lg font-bold">Мне нужна помощь</h3></article>
            <article class="rounded-4xl bg-surface p-5"><h3 class="text-lg font-bold">Хочу найти фонд</h3></article>
            <article class="rounded-4xl bg-surface p-5"><h3 class="text-lg font-bold">Хочу разобраться</h3></article>
            <article class="rounded-4xl bg-surface p-5"><h3 class="text-lg font-bold">Хочу помочь</h3></article>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="px-4 py-10 xs:px-5 md:px-6 md:py-12 lg:px-8 lg:py-16">
      <div class="mx-auto max-w-8xl border-y border-line px-0 py-8 md:py-10 lg:px-8 lg:py-14">
        <h2 class="font-display text-[30px] font-black leading-[1.02] tracking-tighter2 md:text-[40px] lg:text-[52px]">Мы объединяем помощь, ради одной цели.</h2>
      </div>
    </section>

    <section id="navigator" class="px-4 py-4 xs:px-5 md:px-6 md:py-6 lg:px-8 lg:py-8">
      <div class="section-dark mx-auto max-w-8xl overflow-hidden rounded-5xl px-4 py-8 text-white shadow-soft xs:px-5 md:px-8 md:py-10 lg:px-10 lg:py-12">
        <h2 class="font-display text-[28px] font-black">Навигатор по фондам</h2>
      </div>
    </section>

    <section id="materials" class="px-4 py-10 xs:px-5 md:px-6 md:py-12 lg:px-8 lg:py-16">
      <div class="mx-auto max-w-8xl">
        <h2 class="font-display text-[28px] font-black">Полезные материалы</h2>
      </div>
    </section>

    <section id="stories" class="border-t border-line bg-card/40 px-4 py-10 xs:px-5 md:px-6 md:py-12 lg:px-8 lg:py-16">
      <div class="mx-auto max-w-8xl">
        <h2 class="text-center font-display text-[28px] font-black">Что говорят семьи и партнёры</h2>
      </div>
    </section>

    <section id="donate" class="px-4 py-10 xs:px-5 md:px-6 md:py-12 lg:px-8 lg:py-16">
      <div class="section-orange mx-auto max-w-8xl rounded-5xl px-4 py-8 text-white shadow-orange">
        <h2 class="text-center font-display text-[28px] font-black">Поддержите проект</h2>
      </div>
    </section>
  </main>

  <footer class="border-t border-line bg-surface px-4 py-10 xs:px-5 md:px-6 md:py-12 lg:px-8 lg:py-16" id="footer">
    <div class="mx-auto max-w-8xl">
      <p class="text-sm text-muted">© 2026 Проект «Особенная мама». Все права защищены.</p>
    </div>
  </footer>
</div>

<script>
  const menu = [
    { label: 'Кому помогаем', href: '#cases' },
    { label: 'Программы', href: '#programs' },
    { label: 'Отчёты', href: '#results' },
    { label: 'Партнёры', href: '#news' },
    { label: 'Контакты', href: '#footer' }
  ];

  const urgentCases = [
    {
      name: 'Ева Крылова',
      city: 'г. Самара',
      diagnosis: 'ретинопатия недоношенных, риск отслойки сетчатки',
      collected: 186000,
      target: 420000
    },
    {
      name: 'Илья Тарасов',
      city: 'г. Тула',
      diagnosis: 'частичная атрофия зрительного нерва, косоглазие',
      collected: 54000,
      target: 260000
    },
    {
      name: 'София Нечаева',
      city: 'г. Пермь',
      diagnosis: 'врождённая катаракта, нужна операция и реабилитация',
      collected: 97000,
      target: 310000
    }
  ];

  const programs = [
    {
      title: 'Смотри в будущее',
      text: 'Экстренная помощь детям с тяжёлыми заболеваниями зрения в регионах России.'
    },
    {
      title: 'Семья рядом',
      text: 'Психологическая и социальная поддержка родителей, сопровождение на каждом этапе.'
    },
    {
      title: 'Школа врачей',
      text: 'Стажировки офтальмологов и обмен опытом с ведущими федеральными центрами.'
    }
  ];

  const stats = [
    { value: '212 млн ₽', label: 'направлено на лечение и реабилитацию' },
    { value: '1 284', label: 'детям помогли сохранить зрение' },
    { value: '41', label: 'регион подключён к программам фонда' }
  ];

  const news = [
    { title: 'Открыли новый кабинет ранней диагностики в Твери', date: '18.04.2026' },
    { title: 'Запустили набор волонтёров-наставников', date: '02.04.2026' },
    { title: 'Благотворительный забег «Вижу цель» собрал 3,4 млн ₽', date: '27.03.2026' }
  ];

  const money = (amount) => `${amount.toLocaleString('ru-RU')} ₽`;
  const percent = (collected, target) => Math.min(100, Math.round((collected / target) * 100));
</script>

<div class="page">
  <header class="header">
    <div class="brand">
      <div class="logo">СВЕТ</div>
      <div>
        <p class="brand-title">Благотворительный фонд «Свет Надежды»</p>
        <p class="brand-sub">Помогаем детям сохранить зрение</p>
      </div>
    </div>
    <nav>
      {#each menu as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </nav>
    <button class="btn small">Хочу помочь</button>
  </header>

  <main>
    <section class="hero">
      <div>
        <p class="chip">Срочный сбор • Апрель 2026</p>
        <h1>Спасаем зрение детей вместе</h1>
        <p>
          Каждый 8-й недоношенный ребёнок в зоне риска потери зрения. Вовремя проведённая
          операция даёт шанс видеть мир.
        </p>
        <div class="hero-actions">
          <button class="btn">Помочь сейчас</button>
          <button class="btn ghost">Стать волонтёром</button>
        </div>
      </div>
      <aside class="donate-card">
        <h2>Сделайте пожертвование</h2>
        <p>Выберите сумму:</p>
        <div class="amounts">
          <button>500 ₽</button>
          <button>1 000 ₽</button>
          <button>3 000 ₽</button>
          <button>5 000 ₽</button>
        </div>
        <p class="muted">Тип списания: ежемесячно или разово</p>
        <button class="btn wide">Перейти к оплате</button>
      </aside>
    </section>

    <section id="cases">
      <h2>Кому нужна помощь прямо сейчас</h2>
      <div class="grid cases">
        {#each urgentCases as child}
          <article class="card">
            <p class="card-title">{child.name}</p>
            <p class="muted">{child.city}</p>
            <p>{child.diagnosis}</p>
            <div class="progress">
              <span style={`width:${percent(child.collected, child.target)}%`}></span>
            </div>
            <p class="money">{money(child.collected)} из {money(child.target)}</p>
            <button class="btn small">Помочь ребёнку</button>
          </article>
        {/each}
      </div>
    </section>

    <section id="programs">
      <h2>Программы фонда</h2>
      <div class="grid">
        {#each programs as item}
          <article class="card soft">
            <p class="card-title">{item.title}</p>
            <p>{item.text}</p>
            <a href="/">Подробнее →</a>
          </article>
        {/each}
      </div>
    </section>

    <section class="stats" id="results">
      <h2>Наши результаты благодаря вашей поддержке</h2>
      <div class="grid stats-grid">
        {#each stats as item}
          <article>
            <p class="stats-value">{item.value}</p>
            <p>{item.label}</p>
          </article>
        {/each}
      </div>
    </section>

    <section id="news">
      <h2>Новости фонда</h2>
      <div class="grid">
        {#each news as item}
          <article class="card">
            <p class="card-title">{item.title}</p>
            <p class="muted">{item.date}</p>
          </article>
        {/each}
      </div>
    </section>
  </main>

  <footer id="footer" class="muted">© 2026 Фонд «Свет Надежды». Москва.</footer>
</div>

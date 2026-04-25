<script>
  export let menu = [];
</script>

<header class="header">
  <div class="brand">
    <div class="logo" aria-hidden="true">СВЕТ</div>
    <div>
      <p class="brand-title">Благотворительный фонд «Свет Надежды»</p>
      <p class="brand-sub">Помогаем детям сохранить зрение</p>
    </div>
  </div>

  <nav aria-label="Основная навигация">
    {#each menu as item (item.href)}
      <a href={item.href}>{item.label}</a>
    {/each}
  </nav>

  <a class="btn small" href="#donate">Хочу помочь</a>
</header>

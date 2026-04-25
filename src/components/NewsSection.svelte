<script>
  export let items = [];
</script>

<section id="news" aria-labelledby="news-title">
  <h2 id="news-title">Новости фонда</h2>
  <ul class="grid clean-list">
    {#each items as item (item.id)}
      <li>
        <article class="card">
          <h3 class="card-title">{item.title}</h3>
          <p class="muted">{item.date}</p>
        </article>
      </li>
    {/each}
  </ul>
</section>

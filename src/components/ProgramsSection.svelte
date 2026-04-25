<script>
  export let items = [];
</script>

<section id="programs" aria-labelledby="programs-title">
  <h2 id="programs-title">Программы фонда</h2>
  <ul class="grid clean-list">
    {#each items as item (item.id)}
      <li>
        <article class="card soft">
          <h3 class="card-title">{item.title}</h3>
          <p>{item.text}</p>
          <a href="/#programs" aria-label={`Подробнее о программе ${item.title}`}>Подробнее →</a>
        </article>
      </li>
    {/each}
  </ul>
</section>

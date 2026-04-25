<script>
  export let items = [];
</script>

<section class="stats" id="results" aria-labelledby="results-title">
  <h2 id="results-title">Наши результаты благодаря вашей поддержке</h2>
  <ul class="grid stats-grid clean-list">
    {#each items as item (item.id)}
      <li>
        <article>
          <p class="stats-value">{item.value}</p>
          <p>{item.label}</p>
        </article>
      </li>
    {/each}
  </ul>
</section>

<script>
  import { money, progressPercent } from '../lib/format.js';

  export let items = [];
</script>

<section id="cases" aria-labelledby="cases-title">
  <h2 id="cases-title">Кому нужна помощь прямо сейчас</h2>
  <ul class="grid cases-list" aria-label="Список срочных сборов">
    {#each items as child (child.id)}
      <li>
        <article class="card">
          <h3 class="card-title">{child.name}</h3>
          <p class="muted">{child.city}</p>
          <p>{child.diagnosis}</p>

          <div class="progress-labels">
            <span>{money(child.collected)}</span>
            <span>{progressPercent(child.collected, child.target)}%</span>
          </div>
          <progress
            class="progress"
            value={child.collected}
            max={child.target}
            aria-label={`Собрано для ${child.name}: ${money(child.collected)} из ${money(child.target)}`}
          />

          <p class="money">{money(child.collected)} из {money(child.target)}</p>
          <button class="btn small" type="button">Помочь ребёнку</button>
        </article>
      </li>
    {/each}
  </ul>
</section>

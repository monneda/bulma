<template>
<article>
  <div class="is-flex is-justify-content-space-between">
    <span>Investidores semelhantes</span>
    <a>Ver todos</a>
  </div>

  <hr>

  <template v-for="i of [1, 2, 3, 4]" :key="i">
    <div class="level">
      <div class="level-left">
        <!-- Image -->
        <div class="level-item">
          <figure class="image is-32x32">
            <img class="is-rounded" src="http://placekitten.com/200/200">
          </figure>
        </div>

        <!-- Username -->
        <div class="level-item">
          <div style="line-height: 110%">
            <p>@umnickname</p>
            <p class="has-text-grey is-size-6">Rei dos ETF</p>
          </div>
        </div>
      </div>

      <!-- Button -->
      <div class="level-right">
        <div class="level-item">
          <button class="button is-primary is-light is-small">Seguir</button>
        </div>
      </div>
    </div>
  </template>
</article>
</template>

<script>
export default {
  name: 'ProfileSuggestions'
}
</script>

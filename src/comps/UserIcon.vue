<template>
<article class="media">
  <!-- User image -->
  <figure class="media-left">
    <a class="image is-64x64">
      <img class="is-rounded" src="http://placekitten.com/64/64">
    </a>
  </figure>

  <!-- Content -->
  <div class="media-content">
    <div class="level">
      <span class="level-left">
        <p>
          <strong>Guilherme Bueno</strong> <br> <small>@bueno</small>
          <br>
          Founder
        </p>
      </span>
      <span class="level-right">
        <button class="button is-small is-link">Seguir</button>
      </span>
    </div>
  </div>
</article>
</template>

<script>
export default {
  name: 'UserIcon'
}
</script>

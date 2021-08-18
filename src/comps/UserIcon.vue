<template>
<article class="media">
  <!-- User image -->
  <figure class="media-left image is-48x48">
    <img class="is-rounded" src="http://placekitten.com/64/64">
  </figure>

  <!-- Content -->
  <div class="media-content">
    <div class="level">
      <span class="level-left">
        <p>
          <strong>Guilherme Bueno</strong> <small>@bueno</small>
          <br>
          <small>Founder</small>
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

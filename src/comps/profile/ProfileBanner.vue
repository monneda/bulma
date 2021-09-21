<template>
<article>
  <div class="columns is-vcentered">
    <!-- Image -->
    <div class="column is-3">
      <div class="level">
        <div class="level-item">
          <figure class="image">
            <img class="is-rounded" src="http://placekitten.com/200/200">
          </figure>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="level">
        <!-- Name -->
        <div class="level-left">
          <div class="level-item">
            <div class="content">
              <p class="title is-4"> Roberta Heinrich </p>
              <p class="subtitle is-6"> @heinrichroberta </p>
            </div>
          </div>
        </div>

        <!-- Button -->
        <div class="level-right">
          <div class="level-item">
            <button class="button is-primary">
              <span class="icon">
                <font-awesome-icon icon="pen" />
              </span>
              <span> Editar perfil </span>
            </button>
          </div>
        </div>
      </div>

      <hr>

      <!-- Description -->
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </small>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="level">
        <div class="level-left">
          <!-- Wallets -->
          <div class="level-item">
            <p>
              <strong class="has-text-primary"> 10 </strong> carteras
            </p>
          </div>

          <!-- Followers -->
          <div class="level-item">
            <p>
              <strong class="has-text-primary"> 10 mil </strong> seguidores
            </p>
          </div>

          <!-- Following -->
          <div class="level-item">
            <p>
              <strong class="has-text-primary"> 105 </strong> seguindo
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
</template>

<script>
export default {
  name: 'ProfileBanner'
}
</script>

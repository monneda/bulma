<template>
<article>
  <div class="columns">
    <!-- Image -->
    <div class="column is-one-fifth">
      <figure class="image is-128x128 mx-auto">
        <img class="is-rounded" src="http://placekitten.com/200/200">
      </figure>
    </div>

    <div class="column">
      <div class="level">
        <!-- Name -->
        <div class="level-left">
          <div class="level-item">
            <div>
              <h4 class="title is-size-4"> Roberta Heinrich </h4>
              <p> @heinrichroberta </p>
            </div>
          </div>
        </div>

        <!-- Button -->
        <div class="level-right">
          <div class="level-item">
            <button class="button is-primary">
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon icon="pen" />
                </span>
                <span> Editar perfil </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <hr>

      <!-- Stats -->
      <div class="level is-mobile has-text-centered-touch">
        <div class="level-left">
          <!-- Wallets -->
          <div class="level-item">
            <p>
              <strong class="has-text-primary"> 10 </strong>
              <br class="is-hidden-desktop">
              carteras
            </p>
          </div>

          <div class="level-item"></div>

          <!-- Followers -->
          <div class="level-item">
            <p>
              <strong class="has-text-primary"> 10 mil </strong>
              <br class="is-hidden-desktop">
              seguidores
            </p>
          </div>

          <div class="level-item"></div>

          <!-- Following -->
          <div class="level-item">
            <p>
              <strong class="has-text-primary"> 105 </strong>
              <br class="is-hidden-desktop">
              seguindo
            </p>
          </div>
        </div>
      </div>

      <!-- Description -->
      <p class="is-size-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</article>
</template>

<script>
export default {
  name: 'ProfileBanner'
}
</script>

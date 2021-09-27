<template>
<footer class="footer">
  <div class="container">
    <div class="level">
      <!-- Logo -->
      <div class="level-left">
        <div class="level-item">
          <figure class="image is-96x96">
            <img src="@/assets/logo.png">
          </figure>
        </div>
        <div class="level-item">
          <div class="has-text-centered-mobile">
            <p class="title is-spaced">cartera</p>
            <p class="subtitle">O seu network de valor</p>
          </div>
        </div>
      </div>

      <!-- Icons -->
      <div class="level-right">
        <div class="level-item">
          <div>
            <p class="has-text-centered-mobile has-text-weight-bold">
              Siga-nos
            </p>
            <span class="icon is-large">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </span>
            <span class="icon is-large">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </span>
            <span class="icon is-large">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </span>
            <span class="icon is-large">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </span>
            <span class="icon is-large">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="container">
    <div class="level">
      <!-- Copyright -->
      <div class="level-left">
        <p class="level-item"> &copy; 2021 | Todos os direitos reservados </p>
      </div>

      <!-- Links -->
      <div class="level-right">
        <a class="level-item"> Home </a>
        <a class="level-item"> Política de privacidade </a>
        <a class="level-item"> Termos de uso </a>
        <a class="level-item"> Contato </a>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<template>
<section class="section">
  <h1 class="title is-1"> CButton </h1>

  <c-button>Simple</c-button>
  <br>
  <c-button icon="search" left>Icon left</c-button>
  <br>
  <c-button icon="search" right>Icon right</c-button>
  <br>
  <c-button icon="search" left />
  <br>
  <c-button icon="search" left right> Both sides </c-button>
</section>

<section class="section">
  <h1 class="title is-1"> CTicker </h1>

  <c-ticker ticker="petr4" /> Valid ticker
  <br>
  <c-ticker ticker="lol" /> Invalid ticker (default placeholder)
  <br>
  <c-ticker ticker="lol" icon="search" /> Invalid ticker (custom placeholder)
  <br>
  <c-ticker ticker="mglu3" size="10rem" /> Variable size (10rem)
  <br>
  <c-ticker ticker="aapl34" radius="0px" /> Variable radius (0px)
</section>

<section class="section">
  <h1 class="title is-1"> CAvatar </h1>

  <c-avatar src="https://placekitten.com/100/100" /> Valid src
  <br>
  <c-avatar src="lol" /> Invalid src (default placeholder)
  <br>
  <c-avatar src="lol" icon="search" /> Invalid src (custom placeholder)
  <br>
  <c-avatar src="https://placekitten.com/100/100" round /> Rounded
  <br>
  <c-avatar src="https://placekitten.com/100/100" size="10rem" /> Variable size (10rem)
</section>
</template>

<script>

export default {
  name: 'Ui'
}
</script>

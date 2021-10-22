<template>
<c-menu>
  <template #left>
    <c-button left icon="angle-left"> Back </c-button>
  </template>

  <h1 class="title is-3"> CMenu </h1>

  <template #right>
    <c-button right icon="angle-right"> Next </c-button>
  </template>
</c-menu>

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
  <br>
  <c-ticker ticker="vale3" nolink /> Not clickable
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

<section class="section">
  <h1 class="title is-1"> CModal </h1>

  <button class="button" @click="modal = true"> Show </button>
  <c-modal :active="modal" @close="modal = false" clipped>
    <div class="has-background-white">
      <h1 class="title is-1"> This is a modal </h1>
    </div>
  </c-modal>
</section>

<section class="section">
  <h1 class="title is-1"> CModalCard </h1>

  <button class="button" @click="modalCard = true"> Show </button>
  <c-modal-card :active="modalCard" @close="modalCard = false" clipped>
    <template #title> This is a title </template>

    <template #header>
      <button class="delete is-large" @click="modalCard = false"/>
    </template>

    Place some content here

    <template #footer>
      <button class="button" @click="modalCard = false"> Close </button>
    </template>
  </c-modal-card>
</section>

<section class="section">
  <h1 class="title is-1"> CInput </h1>

  <c-input
    v-model="text"
    type="search"
    label="Search here"
    left icon="search"
    :validator="text => text.length <= 10"
    error="Input has more than 10 chars"
    placeholder="Type here..."
  />
  <p> {{ text }} </p>

  <c-input label="Custom placeholder" placeholder="Something something" />
  <br>
  <c-input label="Custom icon" left icon="user" />
  <br>
  <c-input placeholder="no label" />
</section>

<c-view @show="show" @hide="hide" />
</template>

<script>

export default {
  name: 'Ui',

  data: () => ({
    text: '',
    modal: false,
    modalCard: false
  }),

  methods: {
    show () { console.log('you arrived at the bottom') },
    hide () { console.log('you left the bottom') }
  }
}
</script>

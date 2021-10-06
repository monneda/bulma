<template>
<article class="box">
  <div class="has-text-centered">
    <span class="icon is-60x60">
      <IconUser :src="$store.state.user.profile.picture"/>
    </span>
    <br>
    <span class="title is-size-6"> {{ $store.state.user.profile.name }} </span>
    <br>
    <span class="subtitle is-subtitle-size"> @{{ $store.state.user.profile.username }} </span>
  </div>

  <hr class="my-3">

  <div class="mb-3">
    <div class="level">
      <div class="level-left">
        <span class="level-item has-text-weight-bold is-subtitle-size has-text-gray-2">Sugestão de investidores</span>
      </div>
      <div class="level-right">
        <a class="level-item is-subtitle-size has-text-green-2 has-text-weight-bold">Ver todas</a>
      </div>
    </div>
  </div>

  <template v-for="user in items" :key="user">
    <div class="level">
      <div class="level-left">
        <!-- Image -->
        <div class="level-item">
          <span class="icon is-35x35">
            <IconUser :src="user.picture" size="sm"/>
          </span>
        </div>

        <!-- Username -->
        <div class="level-item">
          <div style="line-height: 110%">
            <span class="is-subtitle-size has-text-weight-bold">@{{user.username}}</span>
            <p class="has-text-grey is-subtitle-size2">{{user.name}}</p>
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
import IconUser from '../utils/IconUser'
import client from '../../commons/client.api'

export default {
  name: 'ProfileSuggestions',
  components: { IconUser },
  data: () => ({
    items: []
  }),

  async created () {
    this.items = await client.profile.getSuggestedFriends()
  }
}
</script>

<style scoped lang="scss">
.is-60x60 {
  height: 60px;
  width: 60px;
}
.is-35x35 {
  height: 35px;
  width: 35px;
}
.is-subtitle-size {
  font-size: 0.875rem;
}
.is-subtitle-size2 {
  font-size: 0.8125rem;
}
.has-text-gray-2 {
 color: $gray-2;
}
.has-text-green-2 {
  color: $green-2;
}
</style>

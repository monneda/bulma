<template>
<div class="follow is-flex is-justify-content-space-between p-3">
  <div class="is-flex">
    <!-- Picture -->
    <span class="icon is-large mx-2">
      <IconUser :src="user.picture" />
    </span>

    <div class="mx-2">
      <h5 class="title is-5"> @{{ user.username }} </h5>
      <p class="subtitle is-size-6"> {{ user.name }} </p>
    </div>
  </div>

  <!-- Follow button -->
  <div class="is-align-self-center">
    <button
      class="button is-primary is-small"
      :class="{'is-light': !user.following}"
    >
      {{ user.following === true ? 'Seguindo' : 'Seguir' }}
    </button>
  </div>
</div>
</template>

<script>
import IconUser from '@/comps/utils/IconUser'

export default {
  name: 'FollowTile',

  components: {
    IconUser
  },

  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.follow {
  border-width: 2px;
  border-style: solid;
  border-color: $gray-5;
  border-radius: $radius;
}

.title {
  overflow: hidden;
}
</style>

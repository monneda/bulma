<template>
<div class="level is-mobile">
  <div class="level-left">
    <!-- User image -->
    <div class="level-item">
      <figure class="image is-48x48">
        <img class="is-rounded" :src="item.owner.picture">
      </figure>
    </div>

    <div class="level-item">
      <div class="is-flex is-flex-direction-column">
        <!-- Username -->
        <strong>
          @{{ item.owner.username }}
        </strong>

        <!-- Created at -->
        <small>
          <TimeAgo :time="item.timestamp" />
        </small>
      </div>
    </div>

  </div>

  <div class="level-right">
    <div class="level-item">
      <div class="dropdown is-right" :class="{ 'is-active': active }">
        <!-- Ellipsis -->
        <div class="dropdown-trigger">
          <button class="button is-white" v-if="isSelf">
            <span class="icon is-small" @click="active = !active">
              <font-awesome-icon :icon="['fa', 'ellipsis-v']" />
            </span>
          </button>
        </div>

        <!-- Content -->
        <div class="dropdown-content">
          <div class="dropdown-menu">
            <a class="dropdown-item" @click="remove"> Delete </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import { FEED_EVENT_DELETE } from '@/store/type.actions'

import TimeAgo from '@/comps/utils/TimeAgo'

export default {
  name: 'ItemInfo',

  components: {
    TimeAgo
  },

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => ({
    active: false
  }),

  computed: {
    isSelf () {
      return this.$store.state.user.profile.username === this.item.owner.username
    }
  },

  methods: {
    remove () {
      this.$store.dispatch(FEED_EVENT_DELETE, this.item)
    }
  }
}
</script>

<template>
<div class="level is-mobile">
  <div class="level-left">
    <!-- User image -->
    <div class="level-item">
      <c-avatar :src="item.owner.picture" round />
    </div>

    <div class="level-item">
      <div class="is-flex is-flex-direction-column">
        <!-- Username -->
        <strong> @{{ item.owner.username }} </strong>

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
          <c-button
            class="is-white"
            v-if="isSelf"
            left
            :icon="['fa', 'ellipsis-v']"
            @click="active = !active"
          />
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
    async remove () {
      this.$emit('remove', this.item)
      this.active = false
    }
  }
}
</script>

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
  }
}
</script>

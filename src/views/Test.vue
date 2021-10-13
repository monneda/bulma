<template>
<Navbar />

<div class="columns is-centered">
  <div class="column is-one-third">
    <ais-instant-search :search-client="client" index-name="users">
      <ais-search-box>
        <input class="input" type="search">
      </ais-search-box>
    </ais-instant-search>
  </div>
</div>
</template>

<script>
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

import Navbar from '@/comps/navbar/Navbar.vue'

export default {
  components: {
    Navbar
  },

  data: () => ({
    client: instantMeiliSearch('http://localhost:7700', '')
  })
}
</script>

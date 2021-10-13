<template>
<ais-instant-search :search-client="client" index-name="users">
  <!-- Configuration -->
  <ais-configure :hits-per-page.camel="3" />

  <!-- Input -->
  <ais-search-box>
    <template v-slot="{ refine }">
      <div class="field">
        <div class="control has-icons-left">
          <input
            class="input"
            type="search"
            placeholder="Pesquisar usuários..."
            v-model="input"
            @input="refine($event.currentTarget.value)"
          >
          <span class="icon is-small is-left">
            <font-awesome-icon icon="search" />
          </span>
        </div>
      </div>
    </template>
  </ais-search-box>

  <!-- Hits -->
  <ais-hits>
    <template v-slot="{ items }">
      <div class="dropdown" :class="{ 'is-active': input.length && items.length > 0 }">
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <router-link
              class="dropdown-item"
              v-for="item of items"
              :key="item.objectID"
              :to="`/u/${item.username}`"
            >
              <div class="is-flex p-3">
                <!-- Picture -->
                <figure class="image is-48x48">
                  <img class="is-rounded" :src="item.picture">
                </figure>

                <!-- Name + username -->
                <div class="is-flex is-flex-direction-column pl-3">
                  <strong> @{{ item.username }} </strong>
                  <p> {{ item.name }} </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </ais-hits>
</ais-instant-search>
</template>

<script>
import meili from '@/commons/meili.api'

export default {
  name: 'MeiliSearchUsers',

  data: () => ({
    input: '',
    client: meili()
  })
}
</script>

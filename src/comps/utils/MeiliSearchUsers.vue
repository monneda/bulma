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
  <!--
    I added the position absolute in order to remove the item from the flexbox
    layout. Adapted from:
        https://stackoverflow.com/a/39930550
  -->
  <div class="dropdown" :class="{ 'is-active': input }" style="position: absolute;">
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <ais-hits>
          <template v-slot="{ items }">
            <router-link
              class="dropdown-item"
              v-for="item of items"
              :key="item.objectID"
              :to="`/u/${item.username}`"
              @click="input = ''"
            >
              <div class="is-flex is-align-items-center py-0">
                <!-- Picture -->
                <c-avatar :src="item.picture" round size="2rem" />

                <!-- Name + username -->
                <div class="is-flex is-flex-direction-column pl-3">
                  <strong> @{{ item.username }} </strong>
                  <p> {{ item.name }} </p>
                </div>
              </div>
            </router-link>
          </template>
        </ais-hits>
      </div>
    </div>
  </div>
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

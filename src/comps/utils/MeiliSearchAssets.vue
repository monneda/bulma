<template>
<ais-instant-search :search-client="client" index-name="assets">
  <!-- Configuration -->
  <ais-configure :hits-per-page.camel="5" />

  <!-- Input -->
  <ais-search-box>
    <template v-slot="{ refine }">
      <c-input
        placeholder="Pesquisar ativos"
        type="search"
        left
        icon="search"
        v-model="input"
        @input="refine($event.target.value)"
      />
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
            <template v-for="item of items" :key="item.objectID">
              <router-link class="dropdown-item" :to="`/a/${item.codneg}`">
                <div class="is-flex">
                  <c-ticker :ticker="item.codneg" />
                  <div class="pl-3 is-flex is-flex-direction-column is-justify-content-center">
                    <span> {{ item.nomres }} </span>
                    <strong> {{ item.codneg }} </strong>
                  </div>
                </div>
              </router-link>
            </template>
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

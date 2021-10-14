<template>
<Navbar class="has-shadow" />

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-half">
      <div class="box">
        <!-- Header -->
        <h3 class="title is-3 is-size-5-touch p-3 mb-0"> Notificações </h3>

        <hr class="my-0">

        <!-- Content -->
        <template v-for="n of notifications" :key="n.id">
        <Notification :notification="n" class="mt-3 p-2" />
        </template>
      </div>
    </div>
  </div>
</div>
<navbar-bottom/>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import NavbarBottom from '@/comps/navbar/NavbarBottom'

import Notification from '@/comps/notifications/Notification'

export default {
  name: 'Notifications',

  components: {
    Navbar,
    Notification,
    NavbarBottom
  },

  data: () => ({
    notifications: []
  }),

  async created () {
    this.notifications = await client.notifications.fetchPage()
  }
}
</script>

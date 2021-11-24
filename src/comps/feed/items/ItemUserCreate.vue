<template>
<article>
  <!-- Name -->
  <p>
    🎉 {{event.owner.name}} começou a participar da Cartera 🎉
  </p>

</article>
</template>

<script>

export default {
  name: 'ItemUserCreate',

  props: {
    event: {
      type: Object,
      required: true
    }
  }

}
</script>

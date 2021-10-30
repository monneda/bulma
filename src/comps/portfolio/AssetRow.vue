<template>
<tr class="px-0">
  <td>
    <div class="is-flex">
      <!-- Icon -->
      <c-ticker :ticker="asset.ticker" />

      <!-- Name -->
      <div class="is-flex is-flex-direction-column pl-3">
        <span> {{ asset.name }} </span>
        <strong> {{ asset.ticker }} </strong>
      </div>
    </div>
  </td>
  <td class="is-vcentered"> {{ asset.weight.toFixed(2) }}% </td>
  <td class="is-vcentered"> R$ {{ asset.price.toFixed(2) }} </td>
  <td class="is-vcentered"> {{ asset.gain.toFixed(2) }}% </td>
</tr>
</template>

<script>
export default {
  name: 'AssetRow',

  props: {
    asset: {
      type: Object,
      required: true
    }
  }
}
</script>

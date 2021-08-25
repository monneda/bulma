<template>
  <div class="box">
    <div class="level is-div">
      <div class="level-left">
        <div class="level-item">
          <span class="has-text-weight-bold"> Top Carteras que você segue</span>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <Icon icon="trophy"/>
        </div>
      </div>
    </div>
    <article v-for="(portfolio, index) in portfolios" :key="portfolio" class="media">
      <div class="media-left">
        <span
          class="has-text-weight-bold number-circle"
          :class="index === 0? 'has-text-white top-1': 'has-text-primary top-2'"
        >
          {{ index + 1}}
        </span>
        <figure class="image is-64x64">
          <img class="is-rounded" :src="portfolio.picture" style="position: absolute">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong> {{ portfolio.username }} </strong>
            <br>
            {{ portfolio.portfolioName }}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import Icon from './Icon'
export default {
  components: { Icon },
  data: () => ({
    portfolios: [
      {
        picture: 'http://placekitten.com/g/64/64',
        username: 'gatinhonabolsa',
        portfolioName: 'Investindo em ração',
        variation: 25.4389999987
      },
      {
        picture: 'http://placekitten.com/g/65/65',
        username: 'kitteninthepurse',
        portfolioName: 'O peixe de cada dia',
        variation: 10.4389999987
      },
      {
        picture: 'http://placekitten.com/g/63/63',
        username: 'catiorro',
        portfolioName: 'meows investimentos',
        variation: 5.4389999987
      },
      {
        picture: 'http://placekitten.com/g/67/67',
        username: 'gatinhofofinho_38',
        portfolioName: 'miauposentadoria',
        variation: 3.4389999987
      },
      {
        picture: 'http://placekitten.com/g/128/128',
        username: 'miaumiau',
        portfolioName: 'Novo par de botas',
        variation: -1.4389999987
      }
    ]
  })
}
</script>

<style scoped>
.top-1 {
  /* maybe green */
  background: #35E599;
}
.top-2 {
  /* maybe lighter green */
  background: #C0FFE4;
}
.number-circle {
  border-radius: 50%;
  width: 23px;
  height: 23px;
  text-align: center;
  position: absolute;
  z-index: 3;
}

</style>

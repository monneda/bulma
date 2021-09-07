<template>
<div>
  <div class="level">
    <div class="level-left">
      <strong class="level-item">Top carteiras que você segue</strong>
    </div>
    <div class="level-right">
      <Icon class="has-text-primary fas fa-lg" icon="trophy" />
    </div>
  </div>

  <hr>

  <TopWalletItem class="p-3" number="1" :gain="25.0" first />
  <TopWalletItem class="p-3" number="2" :gain="12.4" />
  <TopWalletItem class="p-3" number="3" :gain="0.3" />
  <TopWalletItem class="p-3" number="4" :gain="-2.0" />
  <TopWalletItem class="p-3" number="5" :gain="-5.43" />
</div>
</template>

<script>
import Icon from '@/comps/Icon'
import TopWalletItem from '@/comps/TopWalletItem'

export default {
  name: 'Top5',

  components: {
    Icon,
    TopWalletItem
  },

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
  left: 2rem;
}
.has-background-green5 {
  background: #DEFFF1;
}
.has-text-green3 {
  color: #16B570;
}

</style>

<template>
<div class="box has-background-secondary-light" style="max-width: 100%">
  <router-link to="/feed">
    <font-awesome-icon icon="arrow-left" size="lg" />
  </router-link>
  <br>
  <br>
  <div class="control has-icons-left">
    <div class="select">
      <select v-model="selectedLanguage">
        <option>PT-BR</option>
        <option>EN-US</option>
      </select>
    </div>
    <div class="icon is-small is-left has-text-primary">
      <font-awesome-icon icon="globe" size="lg"/>
    </div>
  </div>
  <!-- Tabs -->
  <div class="tabs">
    <ul v-if="selectedLanguage==='PT-BR'">
      <li class="is-active"><a @click="tab = 'PrivacyPolicyPT'">Política de Privacidade</a></li>
      <li><a @click="tab = 'TermsPT'">Termo de Uso</a></li>
    </ul>
    <ul v-if="selectedLanguage==='EN-US'">
      <li class="is-active"><a @click="tab = 'PrivacyPolicyEN'">Privacy Policy</a></li>
      <li><a @click="tab = 'TermsEN'">Terms of Use</a></li>
    </ul>
  </div>
  <component :is="tab" />
</div>
</template>

<script>
import PrivacyPolicyPT from '@/comps/legal/PT_PrivacyPolicy'
import TermsPT from '@/comps/legal/PT_Terms'
import PrivacyPolicyEN from '@/comps/legal/EN_PrivacyPolicy'
import TermsEN from '@/comps/legal/EN_Terms'

export default {
  name: 'PrivacyPolicyView',

  data: () => ({
    selectedLanguage: 'PT-BR',
    tab: 'PrivacyPolicyPT'
  }),

  components: {
    PrivacyPolicyPT,
    TermsPT,
    PrivacyPolicyEN,
    TermsEN
  },

  methods: {
    updateLanguage (language) {
      console.log(language)
      this.selectedLanguage = language
    }
  },

  watch: {
    selectedLanguage (language) {
      if (this.selectedLanguage === 'EN-US') {
        this.tab = 'PrivacyPolicyEN'
      } else {
        this.tab = 'PrivacyPolicyPT'
      }
    }
  }
}
</script>

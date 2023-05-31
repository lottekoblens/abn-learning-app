<template>
    <Header v-if="state==='question'" />
    <Logo v-if="state==='welcome' || state==='home'" />
    <BackButton v-if="state==='summary'" />
  <div class="main d-flex justify-center align-center">
    <Welcome v-if="state==='welcome'" />
    <Question v-if="state==='question'"/>
    <Scorebord v-if="state==='score'" />
    <Home v-if="state==='home'" />
    <Shop v-if="state==='shop'"/>
    <Summary v-if="state==='summary'" />
    <HouseSearch v-if="state==='house-search'" />
  </div>
  <Footer v-if="state==='question' || state==='score'" />
</template>
<script>
import Header from './header/header.vue'
import Welcome from './welcome/welcome.vue'
import Question from './question/question.vue';
import Scorebord from './scorebord/scorebord.vue';
import Footer from './footer/footer.vue';
import Home from './home/home.vue';
import Logo from './logo/logo.vue';
import Summary from './summary/summary.vue';
import { mapState } from 'pinia';
import usePersonStore from '../stores/person';
import BackButton from './back-button/back-button.vue';
import HouseSearch from './house-search/house-search.vue'

export default {
  components: {
    Header,
    Welcome,
    Question,
    Scorebord,
    Footer,
    Home,
    Logo,
    Summary,
    BackButton,
    HouseSearch
},
  computed: {
    ...mapState(usePersonStore, {
        name: 'getName',
        state: 'getState'
    })
  }
}
</script>

<style>
main {
  background-image: url('/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}

.main {
    padding: 16px;
    min-height: 80vh;
    width: 100vw;
}
</style>
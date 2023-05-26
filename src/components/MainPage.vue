<template>
    <Header v-if="state==='question'" />
  <div class="main d-flex justify-center align-center">
    <Welcome v-if="state==='welcome'" />
    <Question v-if="state==='question'"/>
    <Shop v-if="state==='shop'"/>
  </div>
</template>
<script>
import Header from './header/header.vue'
import Welcome from './welcome/welcome.vue'
import Question from './question/question.vue';
import { mapState } from 'pinia';
import usePersonStore from '../stores/person';

export default {
  components: {
    Header,
    Welcome,
    Question
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
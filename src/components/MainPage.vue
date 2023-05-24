<template>
    <Header />
  <div class="main">
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

.main {
    padding: 16px;
}
</style>
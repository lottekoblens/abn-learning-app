<template>
  <div class="header d-flex pa-4 justify-space-between">
    <button class="back-button" v-on:click="backButtonClicked"><img src="/arrow.png"></button>
      <div class="d-flex align-center">
        <img  width='35' height='35' src="/coins.png" />
        <p class="mt-auto mb-auto ml-2 font-weight-bold"> {{money}} coins</p>
      </div>
  </div>
</template>

<script>
import {mapState} from 'pinia';
import useCounterStore from '../../stores/counter';
import { mapActions } from 'pinia';

export default {
  name: 'Header',
  computed: {
    ...mapState(useCounterStore, {
      currentQuestion: 'getQuestion',
      money: 'getMoney'
    })
  },
  getters: {
    getMoney: (state) => state.money,
  },
  methods: {
    ...mapActions(useCounterStore, {diminishIndex: 'diminishment'}),
    backButtonClicked(){
      this.diminishIndex()
    },
    ...mapActions(useCounterStore, {
        setQuestion: 'setQuestion',
        setState: 'setState',
    }),
  }
}
</script>

<style>
.back-button {
  background: white;
  color: #7FCCAB;
  width: fit-content;
  border-radius: 0;
  background: linear-gradient(-135deg, transparent 10px, white 0);
}
</style>
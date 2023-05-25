<template>
  <div v-if="!!currentQuestion" class="box">
    <h1>{{ currentQuestion.title }}</h1>
    <hr>
    <h2> {{ currentQuestion.question }}</h2>
    <p v-if="currentQuestion.body"> {{ currentQuestion.body }}</p>
    <!-- <img v-if="currentQuestion.images" src="{{ currentQuestion.images }}"> -->
    <div v-if="currentQuestion.buttons">
      <div  v-for="button in currentQuestion.buttons"  :key="button.text">
        <button v-on:click="buttonClicked">
          {{  button.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from 'pinia';
import useCounterStore from '../../stores/counter';
import { mapActions } from 'pinia';

// const questions = useCounterStore();

export default {
  name: 'Question',
  computed: {
    ...mapState(useCounterStore, {
      currentQuestion: 'getQuestion'
    })
  },
  methods: {
    ...mapActions(useCounterStore, {incrementIndex: 'increment'}),
    buttonClicked(){
      this.incrementIndex()
    },
    ...mapActions(useCounterStore, {
        setQuestion: 'setQuestion',
        setState: 'setState',
    }),
  }
}
</script>

<style>

</style>
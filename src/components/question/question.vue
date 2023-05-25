<template>
  <div v-if="!!currentQuestion" class="box">
    <h1>{{ currentQuestion.title }}</h1>
    <hr>
    <h2> {{ currentQuestion.question }}</h2>
    <p v-if="currentQuestion.body"> {{ currentQuestion.body }}</p>
    <!-- <img v-if="currentQuestion.images" src="{{ currentQuestion.images }}"> -->
    <div v-if="currentQuestion.buttons">
      <button v-for="button in currentQuestion.buttons" :key="button.text" v-on:click="buttonClicked">
        {{  button.text }}
      </button>
    </div>
  </div>
</template>

<script>

import {mapState} from 'pinia';
import useCounterStore from '../../stores/counter';
import { mapActions } from 'pinia';

export default {
  name: 'Question',
  computed: {
    ...mapState(useCounterStore, {
      currentQuestion: 'getQuestion'
    })
  },
  method: {
    buttonClicked(){
      console.log('test')
      this.setQuestion(currentQuestion++);
    },
        ...mapActions(useCounterStore, {
            setQuestion: 'setQuestion',
            setState: 'setState'
        }),
  }
}
</script>

<style>

</style>
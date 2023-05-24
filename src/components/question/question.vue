<template>
  <div v-if="!!currentQuestion">
    <h1> {{ currentQuestion.question }}</h1>
    <p v-if="currentQuestion.body"> {{ currentQuestion.body }}</p>
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

export default {
  name: 'Question',
  computed: {
    ...mapState(useCounterStore, {
      currentQuestion: 'getQuestion'
    })
  },
  method: {
    buttonClicked(){
      
    }
  }
}
</script>

<style>

</style>
<template>
  <div v-if="!!currentQuestion" class="box">
    <h1>{{ currentQuestion.title }}</h1>
    <hr>
    <h2> {{ currentQuestion.question }}</h2>
    <p v-if="currentQuestion.body"> {{ currentQuestion.body }}</p>
    <div v-if="currentQuestion.images.length > 0 && currentQuestion.images.length < 2">
      <div v-for="image in currentQuestion.images">
        <img class="image-big" v-bind:src="image.src">
      </div>
    </div>
    <div v-else>
      <div v-for="image in currentQuestion.images">
        <img class="image-multiple" v-bind:src="image.src">
      </div>
    </div>
    <div v-if="currentQuestion.buttons">
      <div v-for="button in currentQuestion.buttons" :key="button.text">
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
      this.incrementIndex();
    },
    ...mapActions(useCounterStore, {
        setQuestion: 'setQuestion',
        setState: 'setState',
    }),
  }
}


</script>

<style>
.image-big {
  margin-top: 1em;
  max-width: 100%;
}

.image-multiple {
  margin-top: 1em;
  max-width: 100%;
}
</style>
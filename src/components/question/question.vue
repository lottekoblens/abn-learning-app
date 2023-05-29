<template>
  <div v-if="!!currentQuestion" class="box">
    <h1>{{ currentQuestion.title }}</h1>
    <hr>
    <h2> {{ currentQuestion.question }}</h2>
    <p v-if="currentQuestion.body"> {{ currentQuestion.body }}</p>
    <div v-if="currentQuestion.images">
      <div v-if="currentQuestion.images.length > 0 && currentQuestion.images.length < 2">
        <div v-for="image in currentQuestion.images">
          <div class="align-center">
            <img class="image-big" v-bind:src="image.src">
          </div>
        </div>
      </div>
      <div v-else>
        <div v-for="image in currentQuestion.images">
          <img class="image-multiple" v-bind:src="image.src">
        </div>
      </div>
    </div>
    <div v-show="currentQuestion.inputType === 'slider'">
      <input type="range" min="1000" max="5000" value="1000"  class="slider" id="myRange">
      <p><strong>Inkomen:</strong> <span id="value"></span></p>
    </div>
    <div class="answer-box" v-if="currentQuestion.inputType === 'checkbox'">
      <div v-for="input in currentQuestion.inputs" class="answers">
        <input type="checkbox" id="answers" name="answers">
        <img class="icon" v-bind:src="input.icon"> 
        <label for="answers">{{ input.text }}</label>
      </div>
    </div>
    <div v-if="currentQuestion.inputType === 'open'">
      <input type="text" v-bind:placeholder="currentQuestion.placeholder">
    </div>
    <div v-if="currentQuestion.answers" v-for="answer in currentQuestion.answers" class="answers">
      <img class="icon" v-bind:src="answer.icon">
      <p>{{ answer.text }}</p>
    </div>
    <div v-if="currentQuestion.buttons">
      <div v-for="button in currentQuestion.buttons" :key="button.text">
        <button v-on:click="invokeFunction(button.buttonClicked)">
          {{  button.text }}
          <img v-if="button.image" v-bind:src="button.image">
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
    invokeFunction(functionName) {
        this[functionName]();
    },
    ...mapActions(useCounterStore, {incrementIndex: 'increment'}),
    buttonClicked(){
      this.incrementIndex();
    },
    getScore(){
      this.setState('score');
    },
    ...mapActions(useCounterStore, {
        setQuestion: 'setQuestion',
        setState: 'setState',
    })
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("myRange");
  const output = document.getElementById("value");

  if (slider) {
    output.innerHTML = slider.value;
    slider.oninput = function() {
      console.log('test')
      output.innerHTML = this.value;
    }
  }
})

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

.align-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.answer-box {
  display: flex;
  flex-direction: column;
}

.answers {
  /* display: flex;
  flex-direction: row; */
}
</style>
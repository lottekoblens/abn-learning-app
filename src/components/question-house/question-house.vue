<template>
    <div class="house-search">
        <div class="box">
            <div>
                <h1> Vraag 1 </h1>
                <hr>
                <h2> Welk huis denk je dat je kunt kopen met het inkomen dat je hebt opgegeven? </h2>
                <div class="question-houses">
                    <button v-on:click="showNextQuestion" class="button-img"><img class="house" src="/huis1.png"></button>
                    <button v-on:click="showNextQuestion" class="button-img"><img class="house" src="/huis2.png"></button>
                    <button v-on:click="showNextQuestion" class="button-img"><img class="house" src="/huis3.png"></button>
                    <button v-on:click="showNextQuestion" class="button-img"><img class="house" src="/huis4.png"></button>
                    <button v-on:click="showNextQuestion" class="button-img"><img class="house" src="/huis2.png"></button>
                    <button v-on:click="showNextQuestion" class="button-img"><img class="house" src="/huis1.png"></button>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import usePersonStore from '../../stores/person';
import useCounterStore from '../../stores/counter';
import { mapActions } from 'pinia';

export default {
    name: 'QuestionHouse',
    methods: {
        ...mapActions(useCounterStore, {incrementIndex: 'increment', incrementTwo: 'incrementByTwo', addCoins: 'addMoney'}),
        showNextQuestion(){
            this.setState('question');
        },
        ...mapActions(usePersonStore, {
            setState: 'setState'
    }),
    }
}
</script>

<style>
    .button-img {
        background: none;
        padding: 0;
        border-radius: 0; 
        width: 40%;
    }

    .question-houses {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        gap: 2em;
    }
</style>
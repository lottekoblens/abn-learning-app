<template>
    <div class="house-information">
        <div class="box">
            <div>
                <h1> Huizen zoeker </h1>
                <hr>
                <img class="house" src="/huis1.png">
                <div class="house-info">
                    <img class="oppervlakte" src="/oppervlakte.png">
                    <p>92 m2</p>
                    <img src="/bed.png">
                    <p>3</p>
                    <button v-on:click="showNextQuestion" class="bod-button">Bod doen</button>
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
    name: 'HouseInformation',
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
   .bod-button {
    width: 40%;
    align-self: flex-end;
   }

   .oppervlakte {
    width: 30px;
    height: 30px;
   }

   .house-info {
    display: flex;
   }
</style>
<template>
    <div class="house-search">
        <div class="box">
            <div>
                <h1> Huizen zoeker </h1>
                <hr>
                <h2> Ga op zoek naar het huis dat past bij jouw wensen. </h2>
                <button v-on:click="showHouseInformation" class="img-button"><img class="house" src="/huis1.png"><div class="info"><div><p><strong>Hogweg 12</strong></p><p>€325.000</p></div><p class="street">Haarlem</p></div></button>
                <button v-on:click="showHouseInformation" class="img-button"><img class="house" src="/huis2.png"><div class="info"><div><p><strong>Schrijverstraat 23</strong></p><p>€325.000</p></div><p class="street">Haarlem</p></div></button>
                <button v-on:click="showHouseInformation" class="img-button"><img class="house" src="/huis3.png"><div class="info"><div><p><strong>Makerslaan 44</strong></p><p>€325.000</p></div><p class="street">Haarlem</p></div></button>
                <button v-on:click="showHouseInformation" class="img-button"><img class="house" src="/huis4.png"><div class="info"><div><p><strong>Friesselaan 56</strong></p><p>€325.000</p></div><p class="street">Haarlem</p></div></button>
            </div>
        </div>  
    </div>
</template>

<script>
import usePersonStore from '../../stores/person';
import useCounterStore from '../../stores/counter';
import { mapActions } from 'pinia';

export default {
    name: 'HouseSearch',
    methods: {
        ...mapActions(useCounterStore, {incrementIndex: 'increment', incrementTwo: 'incrementByTwo', addCoins: 'addMoney'}),
        showHouseInformation(){
            this.setState('house-information');
        },
        ...mapActions(usePersonStore, {
            setState: 'setState'
    }),
    }
}
</script>

<style>
    .img-button {
        background: none;
        padding: 0;
        border-radius: 0; 
        position: relative;
    }

    .house {
        width: 100%;
        height: 100%;
    }

    .info {
        position: absolute;
        width: 100%;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5)
    }

    .info div {
        display: flex;
        justify-content: space-between;
        padding: 0 0.5em;
    }

    .street {
        margin-top: 0;
        text-align: left;
        padding: 0 0.5em 0.5em 0.5em;
    }
</style>
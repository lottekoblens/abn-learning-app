<template>
    <div class="house-information">
        <div class="box">
            <div>
                <h1> Huizen zoeker </h1>
                <hr>
                <img class="house" src="/huis1.png">
                <div class="house-info">
                    <div>
                        <img class="oppervlakte" src="/oppervlakte.png">
                        <p>92 m2</p>
                        <img class="bed" src="/bed.png">
                        <p>3</p>
                    </div>
                    <button v-on:click="showNextQuestion" class="bod-button">Bod doen</button>
                </div>
                <p>Het rijtjeshuis is onderdeel van een rij van vergelijkbare 
                woningen, gebouwd in dezelfde stijl en grootte. Het huis 
                heeft een eenvoudige gevel met een lichte kleur en een 
                paar ramen aan de voorkant en aan de achterkant. 
                Het huis heeft een plat dak bedekt met bitumen.</p>

                <p>Als je het huis binnenkomt, stap je in een kleine hal met 
                een betegelde vloer en lichte muren. Aan de linkerzijde 
                van de hal is de woonkamer met een eenvoudige 
                inrichting en een bankstel. Aan de rechterkant is de 
                keuken, ook met een eenvoudige inrichting en alle 
                nodige apparatuur.</p>

                <p>Op de eerste verdieping zijn er twee slaapkamers en een 
                badkamer. De slaapkamers zijn klein maar functioneel en 
                bieden voldoende ruimte voor een bed en een kledingkast. 
                De badkamer is compact en heeft een douche, een toilet 
                en een wastafel.</p>

                <p>De kelder biedt extra opslagruimte en kan ook dienen 
                als wasruimte.</p>

                <p>Buiten is er een achtertuin met grasveld en een paar 
                struiken. Er is een kleine patio met een tafel en stoelen 
                waar je buiten kunt zitten en genieten van de frisse lucht. 
                Het huis heeft geen eigen garage, maar er is 
                vaak voldoende parkeergelegenheid in de buurt.</p>

                <p>Kortom, het rijtjeshuis biedt een praktische en betaalbare 
                manier van wonen, met voldoende ruimte voor een 
                klein gezin en een bescheiden buitenruimte.</p>
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
    margin-right: 0.5em;
   }

   .house-info {
    display: flex;
    justify-content: space-between;
   }

   .house-info div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
   }

   .bed {
    width: 51px;
    height: 50px;
    padding-left: 0.5em;
   }
</style>
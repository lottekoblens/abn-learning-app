<template>
    <div class="summary">
        <div class="box">
            <div>
                <h1> Samenvatting </h1>
                <hr>
                <h2> De laatste keer heb je een huis gekocht voor €330.000. Dit huis stond te koop voor €325.000 en is te vinden op Hofweg 12 in Haarlem. </h2>
                <img src="/huis1.png">
            </div>
        </div>  
    </div>
</template>

<script>
import usePersonStore from '../../stores/person';
import { mapActions } from 'pinia';

export default {
    name: 'Summary',
    methods: {
        ...mapActions(usePersonStore, {
            setState: 'setState'
        }),
        goToHome(){
            this.setState('home');
        }
    }
}
</script>

<style>

</style>
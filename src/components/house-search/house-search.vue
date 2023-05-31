<template>
    <div class="house-search">
        <div class="box">
            <div>
                <h1> Huizen zoeker </h1>
                <hr>
                <h2> Ga op zoek naar het huis dat past bij jouw wensen. </h2>
                <img src="/huis1.png">
                <img src="/huis2.png">
                <img src="/huis3.png">
                <img src="/huis4.png">
            </div>
        </div>  
    </div>
</template>

<script>
import usePersonStore from '../../stores/person';
import { mapActions } from 'pinia';

export default {
    name: 'HouseSearch',
}
</script>

<style>

</style>
<template>
  <div class="header d-flex pa-3">
    <img width='48' height='48' src="https://img.freepik.com/premium-vector/golden-coins-set-flat-gold-icon-economy-finance-money-concept-wealth-symbol-vector-illustration-isol_144920-932.jpg?w=996" />
    <p class="mt-auto mb-auto"> {{ coin }} Lotcoins</p>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data: ()=>{
        return {
            coin: 0
        }
    }
}
</script>

<style>
.header {
    background-image: linear-gradient(to right, rgb(255, 255, 255) , rgb(0, 156, 3));
}
</style>
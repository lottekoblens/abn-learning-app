<template>
  <div class="header d-flex pa-3 justify-end">
    <img  width='35' height='35' src="/coins.png" />
    <p class="mt-auto mb-auto ml-2 font-weight-bold"> {{ coin }} coins</p>
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

</style>
<template>
  
   
  <div class="w-full">
  <router-view/>
  </div>
  <Footer />
</template>

<script>

import Footer from './components/Footer.vue'

export default {
  components: { Footer },
  
}
</script>

<style>

</style>

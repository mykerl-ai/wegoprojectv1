<template>
  <main>
      <input type="text" class="w-full" v-model="videoSource">
      <div id="player-wrapper"></div>
  </main>
</template>

<script>

export default {
  name: 'Player',
  components: {
  },
  data(){
    return{
        videoSource: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
    }
  },

  created() {
    var playerElement = document.getElementById("player-wrapper");
    var player = new Clappr.Player({source: this.videoSource, parentId: "#player"});
    player.attachTo(playerElement);
}
}
</script>

<style scoped>

</style>

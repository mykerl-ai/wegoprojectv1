<template>
  <div class="max-w-100 pb-56 h-full">

     <PodcastNav />


       
    <div class=" md:px-6">
        

    <div class="shrink grid grid-cols-1 justify-start grid-flow-row md:grid-cols-2 mx-12 space-x-10 my-4 gap-4 w-full">
          
        
        <div class="hover:transform translate-x-4 mb-6 translate-y-4 w-full" >
          
            <img class="w-full md:w-96 md:h-96 object-cover" :src="image" alt="">
            <p class="text-white text-base mt-4 md:text-left text-left font-semibold ">{{text}}</p>
         
          </div>

            <div class="hover:transform translate-x-4 mb-6 translate-y-4 w-full" >
          
            <h2 class="text-xl text-white">Songs</h2>
            <div v-for="song in songs" :key="song.id">
            <p class="text-white text-base mt-4 md:text-left text-left font-bold my-2">{{song.title}}</p>
            <p class="text-xs text-white">{{song.artiste}}</p>
            </div>
          </div>
        
    </div>

  </div>
        
        
        
  </div>
</template>

<script>
import PodcastNav from '@/components/user/PodcastNav.vue'



export default {
    props: ['image', 'text'],

    data(){
      return {
       songs: [
           {id: 1, title: 'Mood Swings', artiste: 'Bieber Justin'},
           {id: 1, title: 'New Flames', artiste: 'Brown Chris'},
           {id: 1, title: 'John', artiste: 'Ross Rick'},
           {id: 1, title: 'Hello', artiste: 'Adele'},
       ]
      }
    },

    components: {PodcastNav},
    mounted () {
  document.body.classList.add('user')
},
unmounted () {
  document.body.classList.remove('user')
},


}
</script>

<style>
/* .user {
  background: linear-gradient(to right bottom, #176CE0, #0B92E7, #1C1A1A);
  background-repeat: no-repeat;
} */

nav>a, div>a {
  color: #f44336;
  font-size: 14px;
}
 .bt {
   background-color: #f44336;
   color:white;
   padding: 8px;
   border-radius: 4px;
 }

 .navbar {
  overflow: hidden;
 
}

.navbar a {
  float: left;
  font-size: 14px;
  color: white;
  text-align: center;
  
  text-decoration: none;
}

.shrink img {
transition: 1s ease;
}

.shrink img:hover{
-webkit-transform: scale(0.8);
-ms-transform: scale(0.8);
transform: scale(0.8);
transition: 1s ease;
}



</style>
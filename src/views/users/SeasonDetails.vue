<template>
  <div class="max-w-100 pb-56 h-full">

     <MovieNav />


       
    <div class=" md:px-6">
        

    <div class="shrink grid grid-cols-1 justify-start grid-flow-row md:grid-cols-2 mx-12 space-x-10 my-4 gap-4 w-full">
          
        
        <div class="hover:transform translate-x-4 mb-6 translate-y-4 w-full" >
          
            <div class="showImage md:-ml-0 md:mx-0 mx-24 -ml-4"><img class="w-full md:w-96 md:h-96 object-cover" :src="image" alt=""></div>
            <p class="text-white text-base mt-4 md:text-left text-left font-semibold ">{{title}}</p>
         
          </div>

            <div class="hover:transform translate-x-4 mb-6 translate-y-4 w-full" >
          
            <h2 class="text-xl text-white">{{text}}</h2>
            <div v-for="song in songs" :key="song.id">
            <p class="text-white text-base mt-4 md:text-left text-left font-bold my-2">{{song.title}}</p>
            <p class="text-xs text-white">{{song.artiste}}</p>
            </div>
          </div>
        
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  px-6 md:px-0">
        <div v-for="episode in episodes" :key="episode.id" class="user shrink w-full">
            <div class="shrink">
                <button class="py-8 focus:outline-none w-full h-auto flex flex-nowrap"><p class="text-white ml-2 font-bold text-sm ">Episode {{episode.id}}: </p>
                <span class="font-regular flex-grow text-white">{{episode.title}}</span>
                <button @click="showModal" class="focus:outline-none flex-end bg-red shadow-xl rounded-full h-9 w-9 px-2 py-2 mx-10 -mt-2">

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29.6 37.673">
                <path id="Icon_material-play-arrow" data-name="Icon material-play-arrow" d="M12,7.5V45.173L41.6,26.336Z" transform="translate(-12 -7.5)"/>
                </svg>
                </button>
                </button>
            </div>
        </div>

    </div>

  </div>
        
        
        
  </div>
</template>

<script>
import MovieNav from '@/components/user/MovieNav.vue'



export default {
    props: ['image', 'text', 'title'],

    data(){
      return {
       songs: [
           {id: 1, title: 'Mood Swings', artiste: 'Bieber Justin'},
           {id: 1, title: 'New Flames', artiste: 'Brown Chris'},
           {id: 1, title: 'John', artiste: 'Ross Rick'},
           {id: 1, title: 'Hello', artiste: 'Adele'},
       ],
       episodes: [
           {id: 1, title: 'portals'},
           {id: 2, title: 'Dreams and Words'},
           {id: 3, title: 'Another day'},
           {id: 4, title: 'I was there'},
           {id: 5, title: 'Knock'},
           {id: 6, title: 'Bloody Joseph'},
       ]
      }
    },

    components: {MovieNav},
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

.showImage {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.shrink button {
transition: 1s ease;
}

.shrink button:hover{
-webkit-transform: scale(0.8);
-ms-transform: scale(0.8);
transform: scale(0.8);
transition: 1s ease;
}



</style>
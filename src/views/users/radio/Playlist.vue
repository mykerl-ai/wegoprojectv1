<template>
  <div class="w-full max-w-100 pb-56 h-full">

      <PodcastNav />

       
    <div class=" md:px-6">
        <div class="flex space-x-6 w-100">
          <button class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 42.931 43">
          <g id="Layer_32" data-name="Layer 32" transform="translate(-10.554 -10.5)">
            <path id="Path_354" data-name="Path 354" d="M33.5,19.14V12a1.5,1.5,0,0,0-3,0v7.14a6.07,6.07,0,0,0,0,11.74V52a1.5,1.5,0,0,0,3,0V30.88C39.52,29.34,39.52,20.67,33.5,19.14Z" fill="#fff"/>
            <path id="Path_355" data-name="Path 355" d="M48.94,26.13V12a1.5,1.5,0,1,0-3,0V26.13a6.07,6.07,0,0,0,0,11.74V52a1.5,1.5,0,0,0,3,0V37.87A6.063,6.063,0,0,0,48.94,26.13Z" fill="#fff"/>
            <path id="Path_356" data-name="Path 356" d="M18.06,37V12a1.5,1.5,0,0,0-3,0V37a6.07,6.07,0,0,0,0,11.73V52a1.5,1.5,0,0,0,3,0V48.74a6.07,6.07,0,0,0,0-11.74Z" fill="#fff"/>
          </g>
          </svg>
          <p class="text-white font-bold text-xl md:text-2xl my-6 text-xs py-1 px-3">Filter</p>
          </button>
        </div>

    <div class="shrink grid grid-cols-1 justify-start grid-flow-row lg:grid-cols-3 md:grid-cols-2 lg:mx-6 md:mx-8 md:px-0 px-6 my-4 gap-4 w-full">
          
        
        <div class="hover:transform translate-x-4 mb-6 translate-y-4 w-full" v-for="playlist in playlists" :key="playlist.id">
          <router-link :to="{name: 'PlaylistDetails', params: { image: playlist.image, text: playlist.title }}">
            <img class="w-full md:w-72 md:h-72 object-cover" :src="playlist.image" alt="">
            <p class="text-white text-base mt-4 md:text-left text-center font-semibold">{{playlist.title}}</p>
            <p class="text-white text-xs mt-2 md:text-left text-center tracking-widest">{{playlist.provider}}</p>
          </router-link>
          </div>
        
    </div>

  </div>
        
        
        
  </div>
</template>

<script>
import PodcastNav from '@/components/user/PodcastNav.vue'
export default {

    data(){
      return {
        playlists: [
          {title: 'Star Wars', provider: 'CRAKES TV', image: 'https://i.ibb.co/PQ5nQQD/starwars.jpg', id: 1 },
          {title: 'John Wick', provider: 'CRAKES TV', image: 'https://i.ibb.co/cJjG2Sf/wick.jpg', id: 2 },
          {title: 'Wonder Woman', provider: 'CRAKES TV', image: 'https://i.ibb.co/7SshYMq/wonderwoman.jpg', id: 3},
          {title: 'Inception', provider: 'CRAKES TV', image: 'https://i.ibb.co/rGHFWnm/ince.jpg', id: 4 },
          {title: 'Lord of the Rings', provider: 'CRAKES TV', image: 'https://i.ibb.co/GFXxYZ4/rings.jpg', id: 5 },
          {title: 'Avengers', provider: 'CRAKES TV', image: 'https://i.ibb.co/rdC4F2c/avengers.jpg', id: 6 },
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
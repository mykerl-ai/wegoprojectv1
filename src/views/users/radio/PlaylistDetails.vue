<template>
  <div class="max-w-100 pb-56 h-full">

     <Navbar class="w-full">
        
    <div class="flex">
      <router-link :to="{name: 'Radio'}">
      <div class="w-24 pl-8 mr-40 pt-5">
          <img src="../../../assets/logo.png" alt="">
      </div>
      </router-link>
      <nav class="flex space-x-10 py-10 px-2 mr-2">
        <router-link :to="{name: 'Radio'}">Home</router-link>
        <router-link :to="{name: 'Schedule'}">Schedule</router-link>
        <router-link :to="{name: 'Playlist'}">Playlist</router-link>
        <router-link :to="{name: 'Playlist'}">Broadcast</router-link>
        <div class="space-x-6 pl-96">
           <router-link :to="{name: 'Signup'} " class="bt text-white text-xs">CONTACT</router-link> 
        </div>  
      </nav>
      </div>
    </Navbar>

       
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
          <p class="text-white text-xs py-1 px-3">Filter</p>
          </button>
        </div>

    <div class="shrink grid grid-cols-1 justify-start grid-flow-row md:grid-cols-2 mx-12 space-x-10 my-4 gap-4 w-full">
          
        
        <div class="hover:transform translate-x-4 mb-6 translate-y-4 w-full" >
          
            <img class="w-full md:w-96 md:h-96 object-cover" :src="image" alt="">
            <p class="text-deep-gray text-base mt-4 md:text-left text-left font-semibold ">{{text}}</p>
         
          </div>

            <div class="hover:transform translate-x-4 mb-6 translate-y-4 w-full" >
          
            <h2 class="text-xl">Songs</h2>
            <div v-for="song in songs" :key="song.id">
            <p class="text-deep-gray text-base mt-4 md:text-left text-left font-semibold my-2">{{song.title}}</p>
            <p class="text-xs text-gray">{{song.artiste}}</p>
            </div>
          </div>
        
    </div>

  </div>
        
        
        
  </div>
</template>

<script>
import Nav from '@/components/user/Nav.vue'



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

    components: {Nav},
//     mounted () {
//   document.body.classList.add('user')
// },
// unmounted () {
//   document.body.classList.remove('user')
// },


}
</script>

<style>
/* .user {
  background: linear-gradient(to right bottom, #176CE0, #0B92E7, #0072E4);
  background-repeat: no-repeat;
} */

nav>a, div>a {
  color: #0080FF;
  font-size: 14px;
}
 .bt {
   background-color: #0080FF;
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
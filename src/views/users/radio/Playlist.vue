<template>
  <div class="w-full max-w-100 pb-56 h-full">

      <Nav >
        <div class="flex flex-wrap space-x-2 w-full mx-2">

    <form method="GET">
      <div class="relative text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 35.914 35.914">
          <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3 -3)">
          <path id="Path_352" data-name="Path 352" d="M33.2,18.852A14.352,14.352,0,1,1,18.852,4.5,14.352,14.352,0,0,1,33.2,18.852Z" fill="none" stroke="#0072E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_353" data-name="Path 353" d="M32.779,32.779l-7.8-7.8" transform="translate(4.013 4.013)" fill="none" stroke="#0072E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>
          </svg>
      </button>
      </span>
      <input type="search" name="q" class="invisible md:visible order-last py-1 px-3 text-sm text-gray pr-4 rounded-md pl-10 focus:outline-none focus:border-blue rounded-full focus:text-gray-900" placeholder="Search..." autocomplete="off">
      </div>
    </form>

        <nav>
          <div class="lg:grid grid-cols-6 justify-between gap-8 hidden">
          <button class="focus focus:outline-none"><router-link :to="{name: 'Radio'}" class="text-sm text-white text-center font-medium">Podcast</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Schedule'}" class="text-sm text-white text-center font-medium">Schedule</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Playlist'}" class="text-sm text-white text-center font-medium">Playlist</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Radio'}" class="text-sm text-white text-center font-medium">Broadcast</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Movies'}" class="text-sm text-white text-center font-medium">Movies</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Shows'}" class="text-sm text-white text-center font-medium">Shows</router-link></button>
          </div>

          <div class="navbar mt-8 lg:hidden mr-16 md:mr-24">
      <div class="dropdown1 transition-all duration-300">
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg> 
    </button>
    <div v-show="menu" class="dropdown-content1 w-full">
     <button class="w-full"><router-link :to="{name: 'Home'}">Home</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Iptv'}">Iptv</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Podcast'}">Podcast</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">OTT</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'About'}">About</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">FAQ</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">Help</router-link></button> 
    </div>
  </div> 
</div>
        </nav>
      </div>

      </Nav>

       
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

    <div class="shrink grid grid-cols-1 justify-start grid-flow-row md:grid-cols-2 space-x-10 my-4 gap-4 w-full">
          
        
        <div class="hover:transform translate-x-4 mb-6 translate-y-4 w-full" v-for="category in categories" :key="category.id">
          <router-link :to="{name: 'PlaylistDetails', params: { image: category.image, text: category.title }}">
            <img class="w-full md:w-72 md:h-72 object-cover" :src="category.image" alt="">
            <p class="text-deep-gray text-base mt-4 md:text-left text-left font-semibold ">{{category.title}}</p>
            <p class="text-deep-gray text-xs mt-2 md:text-left text-left tracking-widest">{{category.provider}}</p>
          </router-link>
          </div>
        
    </div>

  </div>
        
        
        
  </div>
</template>

<script>
import Nav from '@/components/user/Nav.vue'
import image from '@/assets/images/starwars.jpg'
import firstImage from '@/assets/images/wick.jpg'
import secondImage from '@/assets/images/wonderwoman.jpg'
import thirdImage from '@/assets/images/ince.jpg'
import fourthImage from '@/assets/images/rings.jpg'
import fifthImage from '@/assets/images/avengers.jpg'
export default {

    data(){
      return {
        categories: [
          {title: 'Star Wars', provider: 'CRAKES TV', image: image, id: image },
          {title: 'Wonder Woman', provider: 'CRAKES TV', image: firstImage, id: firstImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: secondImage, id: secondImage},
          {title: 'Star Wars', provider: 'CRAKES TV', image: thirdImage, id: thirdImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: fourthImage, id: fourthImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: fifthImage, id: fifthImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: fourthImage, id: fourthImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: fifthImage, id: fifthImage }
        ]
      }
    },

    components: {Nav},
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
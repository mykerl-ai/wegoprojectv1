<template>
  <div class="max-w-100 h-100">

      <Nav >
        <div class="flex flex-nowrap space-x-2 w-full ">

    <form method="GET">
      <div class="relative text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 flex items-center">
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
          <div class="lg:grid grid-cols-6 justify-between gap-2 hidden">
          <button class="focus focus:outline-none"><router-link :to="{name: 'Movies'}" class="text-sm text-white text-center font-medium">Movies</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Shows'}" class="text-sm text-white text-center font-medium">Shows</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Watchlist'}" class="text-sm text-white text-center font-medium">Watchlist</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Categories'}" class="text-sm text-white text-center font-medium">Categories</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Radio'}" class="text-sm text-white text-center font-medium">Podcast</router-link></button>


          <div class="grid grid-cols-3 gap-2 ml-6">
            <button class="focus:outline-none"> settings </button>
            <button class="focus:outline-none"> profile </button>
            <button class="focus:outline-none"> notif </button>
          </div>
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

      <div class="flex space-x-6 w-100 ml-16 mb-4">
          <h1 class="text-white text-sm">Movies</h1>
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

       <!-- <div id="hero" ref="hit" class="bg-hero-pattern bg-contain h-96 mx-8">
        <figure :style="{ backgroundImage: 'url(' + image0 + ')' }"></figure>
        <figure :style="{ backgroundImage: 'url(' + image1 + ')' }"></figure>
        <figure :style="{ backgroundImage: 'url(' + image2 + ')' }"></figure>
        <figure :style="{ backgroundImage: 'url(' + image1 + ')' }"> </figure>
        <figure :style="{ backgroundImage: 'url(' + image2 + ')' }"></figure>

  </div> -->


       
    <div class=" md:px-6">
        

    <div class="shrink z-0 grid px-4 md:px-0 grid-flow-row lg:grid-cols-6 md:grid-cols-2 grid-cols-1 my-6 gap-4 w-full">
          
        
        <div class="hover:transform translate-x-4 translate-y-4" v-for="movie in movies" :key="movie.id">
          <router-link :to="{name: 'MovieDetails', params: { image: movie.image, title: movie.title }}">
            <img class="w-full h-auto md:w-72 md:h-72 object-cover" :src="movie.image" alt="">
            <p class="text-white text-base mt-4 text-center  font-semibold ">{{movie.title}}</p>
            <p class="text-white text-xs mt-2 text-center  tracking-widest">{{movie.provider}}</p>
          </router-link>
          </div>
        
    </div>

  </div>
        
        
        
  </div>
</template>

<script>
import Nav from '@/components/user/Nav.vue'
import image0 from '@/assets/images/radio1.jpg'
import image1 from '@/assets/images/radio.jpg'
import image2 from '@/assets/images/iptv.jpg'
import image from '@/assets/images/starwars.jpg'
import firstImage from '@/assets/images/wick.jpg'
import secondImage from '@/assets/images/wonderwoman.jpg'
import thirdImage from '@/assets/images/ince.jpg'
import fourthImage from '@/assets/images/rings.jpg'
import fifthImage from '@/assets/images/avengers.jpg'
export default {

    data(){
      return {
        image0,
          image1,
          image2,
        movies: [
          {title: 'Star Wars', provider: 'CRAKES TV', image: image, id: image },
          {title: 'Wonder Woman', provider: 'CRAKES TV', image: firstImage, id: firstImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: secondImage, id: secondImage},
          {title: 'Star Wars', provider: 'CRAKES TV', image: thirdImage, id: thirdImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: fourthImage, id: fourthImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: fifthImage, id: fifthImage },
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

#hero{
        /* background-image:linear-gradient(to right bottom, #1B3BD8, #176CE0, #0B92E7, #0BB6EB, #00E0F2), url(../assets/images/radio.jpg); */
        position: relative;
         
    } 
    .fwd {
        position: absolute;
    }
    
    #hero > figure {
  animation: imageAnimation 30s linear infinite 0s;
  border-radius: 20px;
  background-size: cover;
  background-position: center center;
  backface-visibility: hidden;
  color: transparent;
  height: 100%;
  left: 0px;
  opacity: 100;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1;
}

#hero > figure:nth-child(1) { 
    background-image: url('../../assets/images/radio.jpg');
    }

#hero > figure:nth-child(2) {
  animation-delay: 6s;
  /* background-image: url('../../../assets/images/radio1.jpg'); */
}

#hero > figure:nth-child(3) {
  animation-delay: 12s;
  /* background-image: url('../../../assets/images/iptv.jpg'); */
}

#hero > figure:nth-child(4) {
  animation-delay: 18s;
  /* background-image: url('../../../assets/images/radio.jpg'); */
}

#hero > figure:nth-child(5) {
  animation-delay: 24s;
  /* background-image: url('../../../assets/images/radio1.jpg'); */
}

@keyframes 
imageAnimation {  0% {
 animation-timing-function: ease-in;
 opacity: 1;
}
 8% {
 animation-timing-function: ease-out;
 opacity: 1;
}
 17% {
 opacity: .2;
}
 25% {
 opacity: 0
}
 100% {
 opacity: 0
}
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
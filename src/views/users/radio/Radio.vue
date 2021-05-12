<template>

<Navbar>
        

      <router-link :to="{name: 'Radio'}">
      <div class="w-24 pl-8 pt-5">
          <img src="../../../assets/logo.png" alt="">
      </div>
      </router-link>
      <nav class="flex space-x-10 py-6 px-6 mr-20">
        <router-link :to="{name: 'Radio'}">Home</router-link>
        <router-link :to="{name: 'Schedule'}">Schedule</router-link>
        <router-link :to="{name: 'Radio'}">Playlist</router-link>
        <router-link :to="{name: 'Radio'}">Broadcast</router-link>
        <div class="space-x-6 pl-96">
           <router-link :to="{name: 'Signup'} " class="bt text-white text-xs">CONTACT</router-link> 
        </div>  
      </nav>
    </Navbar>
    
  <div id="hero" ref="hit" class="bg-hero-pattern bg-contain h-96 ">
        <figure :style="{ backgroundImage: 'url(' + image0 + ')' }"></figure>
        <figure :style="{ backgroundImage: 'url(' + image1 + ')' }"></figure>
        <figure :style="{ backgroundImage: 'url(' + image2 + ')' }"></figure>
        <figure :style="{ backgroundImage: 'url(' + image1 + ')' }"> </figure>
        <figure :style="{ backgroundImage: 'url(' + image2 + ')' }"></figure>
       
    

    <div class="fwd mt-32 ml-60 w-50 max-w-xl">
      <slot></slot>
      
    </div>
  </div>

   <div class="max-w-100 h-100">

   

       
    <div class="my-6 md:px-8">
        <h1 class="text-base text-deep-gray font-semibold">Top Songs</h1>

    <div class="shrink grid grid-cols-6 md:grid-cols-6 my-4 gap-2 w-full">
          
        
        <div class="hover:transform translate-x-4 translate-y-4 col-span-1" v-for="movie in movies" :key="movie.id">
          <router-link :to="{name: 'MovieDetails', params: { image: movie.image, title: movie.title }}">
            <img class="w-16 h-16 md:w-16 md:h-16 object-cover" :src="movie.image" alt="">
            <p class="text-deep-gray text-xs mt-4 md:text-left text-left font-semibold ">{{movie.title}}</p>
            <p class="text-deep-gray text-xs mt-2 md:text-left text-left ">{{movie.provider}}</p>
          </router-link>
          </div>
        
    </div>

    <h1 class="text-base text-deep-gray mt-12 font-semibold">Top Playlist</h1>

    <div class="shrink grid grid-cols-6 md:grid-cols-6 my-4 gap-4 w-full">
          
        
        <div class="hover:transform translate-x-4 translate-y-4 col-span-1" v-for="movie in movies" :key="movie.id">
          <router-link :to="{name: 'MovieDetails', params: { image: movie.image, title: movie.title }}">
            <img class="w-20 h-20 md:w-20 md:h-20 object-cover" :src="movie.image" alt="">
            <p class="text-deep-gray text-xs mt-4 md:text-left text-left font-semibold ">{{movie.title}}</p>
            <p class="text-deep-gray text-xs mt-2 md:text-left text-left ">{{movie.provider}}</p>
          </router-link>
          </div>
        
    </div>

  </div>

  
        
        
        
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
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
    components: {Navbar},

    data(){
        return{
          image0,
          image1,
          image2,
          movies: [
          {title: 'Star Wars', provider: 'CRAKES TV', image: image, id: image },
          {title: 'Wonder Woman', provider: 'CRAKES TV', image: firstImage, id: firstImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: secondImage, id: secondImage},
          {title: 'Star Wars', provider: 'CRAKES TV', image: thirdImage, id: thirdImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: fourthImage, id: fourthImage },
          {title: 'Star Wars', provider: 'CRAKES TV', image: fifthImage, id: fifthImage }
        ]  
        }
    },

    methods: {
      handleClick(){
        this.$router.push({name: 'Contact'})
      }
    },
   

    computed: {
        
    }
}
</script>

<style scoped>
     #hero{
        /* background-image:linear-gradient(to right bottom, #1B3BD8, #176CE0, #0B92E7, #0BB6EB, #00E0F2), url(../assets/images/radio.jpg); */
        position: relative;
         
    } 
    .fwd {
        position: absolute;
        z-index: 10;
    }
    #hero > figure {
  animation: imageAnimation 30s linear infinite 0s;
  
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
    background-image: url('../../../assets/images/radio.jpg');
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
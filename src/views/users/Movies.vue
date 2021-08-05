<template>
  <div class="max-w-100 h-100">

      <MovieNav />

      <div class="flex space-x-6 w-100 md:ml-16 ml-4 mb-4 md:mt-0 mt-12">
          <h1 class="text-white font-bold text-sm">Movies</h1>
          <button class="md:flex hidden">
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
import MovieNav from '@/components/user/MovieNav.vue'
export default {
    data(){
      return {
        movies: [
          {title: 'Star Wars', provider: 'CRAKES TV', image: 'https://i.ibb.co/PQ5nQQD/starwars.jpg', id: 1 },
          {title: 'John Wick', provider: 'CRAKES TV', image: 'https://i.ibb.co/cJjG2Sf/wick.jpg', id: 2 },
          {title: 'Wonder Woman', provider: 'CRAKES TV', image: 'https://i.ibb.co/7SshYMq/wonderwoman.jpg', id: 3},
          {title: 'Inception', provider: 'CRAKES TV', image: 'https://i.ibb.co/rGHFWnm/ince.jpg', id: 4 },
          {title: 'Lord of the Rings', provider: 'CRAKES TV', image: 'https://i.ibb.co/GFXxYZ4/rings.jpg', id: 5 },
          {title: 'Avengers', provider: 'CRAKES TV', image: 'https://i.ibb.co/rdC4F2c/avengers.jpg', id: 6 },
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
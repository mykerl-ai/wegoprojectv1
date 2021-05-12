<template>
  <div class="max-w-100 h-100">

      <Nav />

       
      <div class="w-full md:px-6">
          <div class="flex space-x-6 w-100">
        <h1 class="text-white text-sm">Watchlist</h1>
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
       <div class="shrink grid grid-cols-6 md:grid-cols-6 my-4 gap-4 w-full">
        <div class="hover:transform translate-x-4 translate-y-4 col-span-1" v-for="movie in movies" :key="movie.id">
        <img class="w-32 h-32 md:w-72 md:h-72 object-cover" :src="movie.image" alt="">
        <p class="text-white text-base mt-4 md:text-center text-left font-semibold ">{{movie.title}}</p>
        <p class="text-white text-xs mt-2 md:text-center text-left tracking-widest">{{movie.provider}}</p>
        </div>
        
        </div>
         

        </div>
        
        
        
  </div>
</template>

<script>
import Nav from '@/components/user/Nav.vue'
import image from '@/assets/images/wars.jpg'
import firstImage from '@/assets/images/wick.jpg'
import secondImage from '@/assets/images/woman.jpg'
import thirdImage from '@/assets/images/inception.jpg'
import fourthImage from '@/assets/images/rings.jpg'
import fifthImage from '@/assets/images/avengers.jpg'
export default {

    data(){
      return {
        movies: [
          {title: 'Star Wars', provider: 'CRAKES TV', image: image, id: 1 },
          {title: 'Wonder Woman', provider: 'CRAKES TV', image: firstImage, id: 2 },
          {title: 'Star Wars', provider: 'CRAKES TV', image: secondImage, id: 3 },
          {title: 'Star Wars', provider: 'CRAKES TV', image: thirdImage, id: 4 },
          {title: 'Star Wars', provider: 'CRAKES TV', image: fourthImage, id: 5 },
          {title: 'Star Wars', provider: 'CRAKES TV', image: fifthImage, id: 6 }
        ]
      }
    },
    components: {Nav},
    mounted () {
  document.body.classList.add('user')
},
unmounted () {
  document.body.classList.remove('user')
}

}
</script>

<style>
.user {
  background: linear-gradient(to right bottom, #176CE0, #0B92E7, #0072E4);
  background-repeat: no-repeat;
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
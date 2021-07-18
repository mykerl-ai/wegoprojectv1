<template>
  <!-- <div :style="{ background: 'linear-gradient(to right bottom, #176CE0, #0B92E7, #0072E4)' }" class="max-w-100 pb-56 h-full"> -->

      <MovieNav />

       
    <div class=" md:px-6">
        <div class="flex space-x-6 w-100 md:ml-16 ml-4 mb-4 md:mt-0 mt-12">
          <h1 class="text-white font-bold text-sm">Categories</h1>
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

    <div class="shrink z-0 grid px-4 md:px-0 grid-flow-row lg:grid-cols-6 md:grid-cols-2 grid-cols-1 my-6 gap-4 w-full">
          
        
        <div class="hover:transform translate-x-4 mb-6 translate-y-4" v-for="category in categories" :key="category.id">
          <router-link :to="{name: 'CategoryDetails', params: { image: category.image, title: category.title }}">
            <img class="w-full md:w-72 md:h-72 object-cover" :src="category.image" alt="">
            <p class="text-white text-base mt-4 text-center  font-semibold ">{{category.title}}</p>
            <p class="text-white text-xs mt-2 text-center  tracking-widest">{{category.provider}}</p>
          </router-link>
          </div>
        
    </div>

  </div>
        
        
        
  <!-- </div> -->
</template>

<script>
import MovieNav from '@/components/user/MovieNav.vue'
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
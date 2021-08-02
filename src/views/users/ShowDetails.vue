<template>

<div :style="{ backgroundImage: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.3), rgba(117, 19, 93, 0.73)), url(' + image + ')' }" class="w-full h-screen pb-6 bg">
  <MovieNav />

  <div class="flex flex-wrap md:flex-nowrap my-16 md:mx-40">
      <div class="w-60 h-60 shadow-2xl drop-shadow-xl md:mx-0 mx-4 md:mb-0 mb-4">
          <img class="showImage h-full" :src="image" alt="">
    </div>

    <div class="w-full">
        <h1 class="text-white md:text-4xl text-3xl ml-4 md:ml-8 font-bold md:tracking-wider">{{title}}</h1>
        <p class="text-white text-base font-semibold pt-4 ml-8">2020</p>
        <p class="text-white text-xs font-medium pt-4 ml-8">1 hour 30 mins  <span class="p-1 bg-lightest-gray ml-3 opacity-2"> PG-13</span> <span class="p-1 bg-lightest-gray"> HD</span></p>
        <p class="text-white text-sm leading-7 tracking-wide font-medium pt-4 ml-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi perspiciatis enim esse neque. Quidem, similique? Veritatis vitae libero amet, explicabo fuga facere ipsum, nihil vero, corrupti nobis dignissimos aut doloremque deleniti quasi hic. Dicta quis doloremque esse minima culpa, laboriosam in iure eum autem. Itaque, ducimus laudantium! Provident, a?</p>
        <p class="text-white text-sm font-medium pt-4 ml-8">Director <span class="ml-8">Mike Bloomberg</span></p>
        <p class="text-white text-sm font-medium pt-4 ml-8">Genre <span class="ml-8">Fiction, Adventure, Fantasy</span></p>
        
        <button @click="showModal" class="bg-red shadow-xl w-18 px-3 py-2 mt-4 mx-10 ">

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29.6 37.673">
  <path id="Icon_material-play-arrow" data-name="Icon material-play-arrow" d="M12,7.5V45.173L41.6,26.336Z" transform="translate(-12 -7.5)"/>
</svg>
</button>
        </div>

  </div>

 
</div>

 <div class=" md:px-6">
        <div class="flex space-x-6 w-100">
          
          <p class="text-white font-bold text-xl md:text-2xl my-6 text-xs py-1 px-3">Seasons</p>
        </div>

    <div class="shrink grid grid-cols-1 justify-start grid-flow-row lg:grid-cols-3 md:grid-cols-2 lg:mx-6 md:mx-8 md:px-0 px-6 my-4 gap-4 w-full">
          
        
        <div class="hover:transform translate-x-4 mb-6 translate-y-4 w-full" v-for="season in seasons" :key="season.id">
          <router-link :to="{name: 'SeasonDetails', params: { image: image, text: season.title, title: title}}">
            <img class="w-full md:w-72 md:h-72 object-cover" :src="image" alt="">
            <p class="text-white text-base mt-4 md:text-left text-center font-semibold">{{season.title}}</p>
            <p class="text-white text-xs mt-2 md:text-left text-center tracking-widest">{{season.provider}}</p>
          </router-link>
          </div>
        
    </div>

  </div>


<Modal v-if="isModalVisible" @close="closeModal">
  <template v-slot:header>
    {{title}}
  </template>

  
  <template v-slot:body>
    

     <div class="embed-responsive ">
        <video controls autoplay loop>
          <source src="https://youtu.be/I_ELk0667lo" type="video/mp4">
        </video>
      </div>
  </template>
 
</Modal>
</template>


<script>
import MovieNav from '@/components/user/MovieNav.vue'
import Modal from "@/components/Modal.vue"

export default {
  props: ['image', 'title'],
  data(){
    return{
      isModalVisible: false,
      seasons: [
          {title: 'Season 1', provider: 'CRAKES TV', image: 'https://i.ibb.co/PQ5nQQD/starwars.jpg', id: 1 },
          {title: 'Season 2', provider: 'CRAKES TV', image: 'https://i.ibb.co/cJjG2Sf/wick.jpg', id: 2 },
          {title: 'Season 3', provider: 'CRAKES TV', image: 'https://i.ibb.co/7SshYMq/wonderwoman.jpg', id: 3},
          {title: 'Season 4', provider: 'CRAKES TV', image: 'https://i.ibb.co/rGHFWnm/ince.jpg', id: 4 },
          {title: 'Season 5', provider: 'CRAKES TV', image: 'https://i.ibb.co/GFXxYZ4/rings.jpg', id: 5 },
          {title: 'Season 6', provider: 'CRAKES TV', image: 'https://i.ibb.co/rdC4F2c/avengers.jpg', id: 6 },
        ]
    }
  },

    components: {MovieNav, Modal},
mounted () {
  document.body.classList.add('user')
},
unmounted () {
  document.body.classList.remove('user')
},
 methods: {
      showModal(id) {
        this.isModalVisible = true;
        this.id = id
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },

}
</script>


<style scoped>

/* .user {
  background-image: url('../../assets/images/wonderwoman.jpg');
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  
} */
.bg{
 color: transparent;
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
 
}
.glass {
background: rgba(0, 0, 0, 0.3);
background-repeat: no-repeat;
object-fit: fill;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
object-fit: fill;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
}

.showImage {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
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

@media (max-width: 640px) {
.bg{
background-attachment: fixed;
  background-size: cover;
  background-position: center center;
} 
}
</style>
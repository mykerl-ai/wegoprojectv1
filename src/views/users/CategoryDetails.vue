<template>
<div class="w-full h-screen glass">
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
          <div class="lg:grid grid-cols-5 justify-between gap-8 hidden">
          <button class="focus focus:outline-none"><router-link :to="{name: 'Movies'}" class="text-sm text-white text-center font-medium">Movies</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Shows'}" class="text-sm text-white text-center font-medium">Shows</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Watchlist'}" class="text-sm text-white text-center font-medium">Watchlist</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Categories'}" class="text-sm text-white text-center font-medium">Categories</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Radio'}" class="text-sm text-white text-center font-medium">Podcast</router-link></button>
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

  <div class="flex my-20 mx-40 gap-6">
      <h1 class="text-white text-xs">{{text}}</h1>
      <div class="w-60 h-60 shadow-2xl drop-shadow-xl">
          <img class="first h-full" :src="image" alt="">
    </div>
    <div class="w-60 h-60 shadow-2xl drop-shadow-xl">
        <img class="first h-full" :src="image" alt="">
    </div>
        

    </div>
</div>


<Modal v-if="isModalVisible" @close="closeModal">
  <template v-slot:header>
    {{text}}
  </template>

  
  <template v-slot:body>
    

     <div class="embed-responsive ">
        <video controls autoplay loop>
          <source src="@/assets/videos/trail2.mp4" type="video/mp4">
        </video>
      </div>
  </template>
 
</Modal>
</template>


<script>
import Nav from '@/components/user/Nav.vue'
import Modal from "@/components/Modal.vue"
export default {
    
  props: ['image', 'text'],
  data(){
    return{
      isModalVisible: false,
    }
  },

    components: {Nav, Modal},
//     mounted() {
//   document.body.classList.add('user')
//   document.body.style.backgroundImage(image)
// },
// unmounted() {
//   document.body.classList.remove('user')
//   document.body.style.removeProperty.backgroundImage
// },
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


<style>

/* .user {
  background-image: url('../../assets/images/wonderwoman.jpg');
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  
} */

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
z-index: 100;
}
.first {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>
<template>
<div :style="{ backgroundImage: 'url(' + image + ')' }" class="w-full h-screen glass">
  <Nav />
  <div class="flex my-20 mx-40">
      <div class="w-60 h-60 shadow-2xl drop-shadow-xl">
          <img class="first h-full" :src="image" alt="">
    </div>

    <div class="w-full">
        <h1 class="text-white text-2xl ml-8 font-semibold tracking-wider">{{title}}</h1>
        <p class="text-white text-base font-regular pt-4 ml-8">2020</p>
        <p class="text-white text-xs font-regular pt-4 ml-8">1 hour 30 mins  <span class="p-1 bg-lightest-gray ml-3 opacity-2"> PG-13</span> <span class="p-1 bg-lightest-gray"> HD</span></p>
        <p class="text-white text-sm leading-7 tracking-wide font-regular pt-4 ml-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi perspiciatis enim esse neque. Quidem, similique? Veritatis vitae libero amet, explicabo fuga facere ipsum, nihil vero, corrupti nobis dignissimos aut doloremque deleniti quasi hic. Dicta quis doloremque esse minima culpa, laboriosam in iure eum autem. Itaque, ducimus laudantium! Provident, a?</p>
        <p class="text-white text-sm font-regular pt-4 ml-8">Director <span class="ml-8">Mike Bloomberg</span></p>
        <p class="text-white text-sm font-regular pt-4 ml-8">Genre <span class="ml-8">Fiction, Adventure, Fantasy</span></p>
        
        <button @click="showModal" class="bg-yellow shadow-xl w-18 px-3 py-2 mt-4 mx-10 ">

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 29.6 37.673">
  <path id="Icon_material-play-arrow" data-name="Icon material-play-arrow" d="M12,7.5V45.173L41.6,26.336Z" transform="translate(-12 -7.5)"/>
</svg>
</button>
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
  props: ['image', 'title'],
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
}
.first {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>
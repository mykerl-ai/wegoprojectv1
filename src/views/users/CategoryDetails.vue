<template>
<div class="w-full h-screen glass">
  <Nav />
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
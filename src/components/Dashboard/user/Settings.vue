<template>
  <section class="flex  ">
  <div class="bg-white py-6 px-20 mx-auto my-auto shadow-lg">

    <h1 class="text-red text-2xl">Reset password</h1>

    <form class="w-100 md:w-80">
    <div class="focus-within:none">
    <input type="password" required v-model="email" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-6 text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray  py-3 px-6 w-full" placeholder="Your old password">
  </div>

  <div class="focus-within:none">
    <input id="myInput2" type="password" required v-model="password" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-b-2 text-sm text-gray-400 mb-6 border-light-gray  py-3 px-6 w-full" placeholder="New password">
    <input v-show="! recovery" class="focus:outline-none mb-4 w-3" type="checkbox" @click="myFunction"><span v-show="! recovery" class="text-xs text-gray font-semibold mx-2">show password</span>
  </div>

  
<div class="focus-within:none">
    <input type="email" v-model="email" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-6 text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray  py-3 px-6 w-full" placeholder="Your email address">
  </div>

    <button class="form-btn w-full mt-8  bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>
</form>

  </div>
  </section>



<Modal v-if="isModalVisible" @close="closeModal">
    <template v-slot:header>
    Connect
    </template>

    <template v-slot:body>
    <form class="w-full" action="">

       <div class="focus-within:none">
      <input type="text" required v-model="link" class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-sm mb-6  focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Insert URL">
      </div>


    <!-- <div class="focus-within:none">
    <label class="text-xs text-gray px-4 block" for="vid">(CSV)</label>
    <input type="file" name="vid" required v-show="! recovery" @change="video" class="focus:outline-none text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Password">
    </div> -->

 
  <!-- <div>{{platform}}</div> -->


    <button class="form-bt2 w-full focus:outline-none mt-4 rounded-full bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>


    </form>
  </template>

 
</Modal>
</template>

<script>
import Modal from "@/components/Modal.vue"
export default {
  components: {Modal},
    data(){
        return{
             isModalVisible: false,
            movies: [
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'm1ccdffyytllm3', time: '1 minute ago', views:'29,129', id: 1},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'm4ccdffyytllm7', time: '2 minutes ago', views:'129,192', id: 2},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'm2ccdffyytllm4', time: '1 day ago', views:'40,000', id: 3},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'm1ccdffyytllm3', time: '3 days ago', views:'250,000', id: 4},
                
            ],
            title: 'Subscription', 
            figure: 'Professional',  
            id: 'views',
            status: true,
            btnText: 'Cancel',
            channel: false,
            link: ''
           
        }
    },
    methods: {

        checkSub(){

            this.status = !this.status
            this.btnText= 'Undo'
        }, 
        deleteChannel(){
            this.channel = !this.channel
            this.movies.pop()
        },
        undoDelete(id){
            
            this.movies.push()

        },
         showModal() {
        this.isModalVisible = true;
        
      },
      closeModal() {
        this.isModalVisible = false
      }
    
    }

}
</script>

<style>
.activeClass {
   color: green;
    
}

.errorClass {
 color: #FF7285;
    
}
</style>
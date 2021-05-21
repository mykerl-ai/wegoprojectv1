<template>
  <div class="w-full shadow-lg py-2 px-2 mt-4">
      <h1 class="text-lg text-deep-gray">Statistics</h1>
      
        <div class="flex flex-wrap mt-6 gap-16">
            <button @click="checkId(icon.id)"  class="flex focus:outline-none mb-6  py-2 px-6 focus:text-blue text-sm text-deep-gray focus:border-t-2 focus:border-blue" v-for="icon in icons" :key="icon.id" data-id="icon.id">
                        {{icon.title}}
            </button>
            </div>

            <!-- <Songs  v-if="id==='songs'" /> -->

            <div v-show="id" class="mt-10 mx-12">
               <p  v-show="id==='Listening'"  class="text-deep-gray text-sm mb-4">Map</p>
               <p  v-show="id==='Audience'"  class="text-deep-gray text-sm mb-4">Chart</p>
               <div  v-show="id==='Storage'"  class="text-deep-gray text-sm mb-4">
                   Storage
                   <div class="flex gap-4">
                   <h1 class="text-2xl text-blue my-16 font-semibold used">0GB Used</h1>
                   <h1 class="text-2xl text-blue my-16 font-semibold available">60GB Total</h1>
                   </div>
                   </div>
               <p  v-show="id==='podcast'"  class="text-deep-gray text-sm mb-4">Podcast</p>
                
                
                </div>

  </div>

   <Modal v-if="isModalVisible" @close="closeModal">
  <template v-slot:header>
    Create
  </template>

  <template v-slot:body>
    <form class="w-full" action="">
      <div class="focus-within:none">
    <input type="text" required  v-model="title" class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-sm mb-6  focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Title">
  </div>

  <div class="focus-within:none">
    <label class="text-xs text-gray px-4 block" for="vid">Audio file (Mp3)</label>
    <input type="file" name="vid" required  @change="video" class="focus:outline-none text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Password">
  </div>

 
 
  <!-- <div>{{platform}}</div> -->


    <button class="form-bt2 w-full focus:outline-none mt-4 rounded-full bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>


    </form>
  </template>

 
</Modal>
  
</template>



<script>
import image from "@/assets/images/wars.jpg"
import Songs from "./Folders/Songs.vue"
import Modal from "@/components/Modal.vue"
export default {
    components: {Songs, Modal},
    data(){
        return{
             isModalVisible: false,
           icons: [
                {id: 'Listening',  title: 'Listening now'}, 

                {id: 'Audience', title: 'Audience history'}, 

                {id: 'Storage', title: 'Storage info'}, 

            

               
            ],
            movies: [
                {image: image, title: 'Star wars', time: '1 minute ago', views:'29,129', id: 1},
                {image: image, title: 'Star wars', time: '2 minutes ago', views:'129,192', id: 2},
                {image: image, title: 'Star wars', time: '1 day ago', views:'40,000', id: 3},
                {image: image, title: 'Star wars', time: '3 days ago', views:'250,000', id: 4},
                {image: image, title: 'Star wars', time: '6 days ago', views:'450,000', id: 5},
                {image: image, title: 'Star wars', time: '1 week ago', views:'500,000', id: 6},
            ],
            id: ''
            
        }
    },
    methods: {
        checkId(id){

            // var id = event.target.getAttribute('data-id')
            this.id = id
        },
        
        showModal() {
        this.isModalVisible = true;
        // this.id = id
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }

}
</script>

<style>
.used {
    color: rgb(231, 25, 25);
}
.available {
    color: green;
}
</style>
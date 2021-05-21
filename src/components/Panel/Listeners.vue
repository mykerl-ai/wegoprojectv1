<template>
  <div class="w-full shadow-lg py-2 px-2 mt-4">
      <div class="warning w-full text-sm text-white my-5 lg:py-10 py-2 px-4 lg:px-32">By adding the block, no listener originating from this IP will be able to listen to your radio.</div>
      <h1 class="text-lg text-deep-gray">Block Listener</h1>
      
        <div class="mt-6 gap-16">
            

            
            <input type="number" name="IP" id="IP" placeholder="Input IP Address" class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-sm mb-6  focus:ring-blue-600 border-2 border-light-gray py-2 px-2">

             <button class="focus:outline-none mt-4 bg-blue py-2 px-4 ml-4 text-xs text-center text-white">CONFIRM</button>
           
            </div>

            <!-- <Songs  v-if="id==='songs'" /> -->

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
        //    icons: [
        //         {id: 'Listening',  title: 'Listening now'}, 

        //         {id: 'Audience', title: 'Audience history'}, 

        //         {id: 'Storage', title: 'Storage info'}, 

        //     ],
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

<style scoped>
.warning {
    background-color: rgb(199, 108, 108);
}
.available {
    color: green;
}
</style>
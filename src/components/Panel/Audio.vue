<template>
  <div class="w-full shadow-lg py-2 px-2 mt-4">
      <h1 class="text-lg text-deep-gray">File Manager</h1>
      <div class="flex gap-4 mt-2">
          <button  @click="showModal" class="bg-blue focus:outline-none text-white rounded rounded-lg py-2 px-2">Upload File</button>
          <button class="bg-blue text-white rounded rounded-lg py-2 px-2">Create Directory</button></div>

          <div class="flex flex-wrap mt-6 gap-4">
            <button @click="checkId(icon.id)"  class="flex focus:outline-none mb-6 focus:bg-light-gray py-2 px-6 focus:text-white text-sm text-deep-gray" v-for="icon in icons" :key="icon.id" data-id="icon.id">
                <svg class=" mx-2" :id="icon.id" :xmlns="icon.url" :width="icon.width" :height="icon.height" :viewBox="icon.viewBox">
                    <path :id="icon.pathId" :data-name="icon.dataName" :d="icon.d" :transform="icon.transform" :fill="icon.fill"/>
                </svg>
                        {{icon.title}}
            </button>
            </div>

            <!-- <Songs  v-if="id==='songs'" /> -->

            <div v-show="id" class="mt-10 mx-12">
               <p  v-show="id==='songs'"  class="text-deep-gray text-sm mb-4">Songs</p>
               <p  v-show="id==='commercials'"  class="text-deep-gray text-sm mb-4">Commercials</p>
               <p  v-show="id==='jingles'"  class="text-deep-gray text-sm mb-4">Jingles</p>
               <p  v-show="id==='podcast'"  class="text-deep-gray text-sm mb-4">Podcast</p>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="54.737" height="72.983" viewBox="0 0 54.737 72.983">
            <path id="Icon_awesome-file-audio" data-name="Icon awesome-file-audio" d="M31.93,19.386V0H3.421A3.413,3.413,0,0,0,0,3.421V69.562a3.413,3.413,0,0,0,3.421,3.421H51.316a3.413,3.413,0,0,0,3.421-3.421V22.807H35.351A3.431,3.431,0,0,1,31.93,19.386Zm-9.123,38.2A1.714,1.714,0,0,1,19.885,58.8l-5.06-5.2H10.833a1.716,1.716,0,0,1-1.711-1.711V43.9a1.716,1.716,0,0,1,1.711-1.711h3.991l5.06-5.2A1.711,1.711,0,0,1,22.807,38.2ZM27.54,50.8a3.4,3.4,0,0,0,0-4.761c-3.15-3.25,1.739-8.011,4.9-4.775a10.258,10.258,0,0,1,0,14.311c-3.107,3.179-8.111-1.482-4.9-4.775ZM39.8,34.111a20.517,20.517,0,0,1,0,28.623c-3.107,3.193-8.125-1.468-4.9-4.775a13.671,13.671,0,0,0,0-19.072C31.745,35.636,36.648,30.861,39.8,34.111ZM54.737,17.376v.87H36.491V0h.87a3.419,3.419,0,0,1,2.423,1L53.739,14.967A3.41,3.41,0,0,1,54.737,17.376Z" fill="#707070"/>
                </svg>
                <p class="text-deep-gray text-sm">This directory is empty</p>
              <button class="bg-blue text-white rounded focus:outline-none rounded-lg text-sm py-2 px-2 mt-6">Upload File</button>
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
import Songs from "./Folders/Songs.vue"
import Modal from "@/components/Modal.vue"
export default {
    components: {Songs, Modal},
    data(){
        return{
             isModalVisible: false,
           icons: [
                {id: 'songs', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#f44336', title: 'Songs'}, 

                {id: 'commercials', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#EC3434', title: 'Commercials'}, 

                {id: 'jingles', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#f44336', title: 'Jingles'}, 

                {id: 'podcast', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#1C1A1A', title: 'Podcast'}, 
            ],
            movies: [
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '1 minute ago', views:'29,129', id: 1},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '2 minutes ago', views:'129,192', id: 2},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '1 day ago', views:'40,000', id: 3},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '3 days ago', views:'250,000', id: 4},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '6 days ago', views:'450,000', id: 5},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '1 week ago', views:'500,000', id: 6},
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

</style>
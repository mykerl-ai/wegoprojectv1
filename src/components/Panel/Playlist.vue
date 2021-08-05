<template>
  <div class="w-full shadow-lg py-1 px-2 mt-4">
      <h1 class="text-base text-white">Playlists</h1>
      <div class="flex gap-4 mt-2">
          <button @click="showModal" class="bg-blue text-white rounded  focus:outline-none rounded-lg py-2 px-2 mb-4 text-sm">Create Playlists</button>
        </div>

        <div class="mt-12 mx-16  lg:mx-80">

            <svg xmlns="http://www.w3.org/2000/svg" width="56.625" height="39.638" viewBox="0 0 56.625 39.638">
  <path id="Icon_material-playlist-add" data-name="Icon material-playlist-add" d="M36.975,20.325H3v5.663H36.975ZM36.975,9H3v5.663H36.975ZM48.3,31.65V20.325H42.638V31.65H31.313v5.663H42.638V48.638H48.3V37.313H59.625V31.65ZM3,37.313H25.65V31.65H3Z" transform="translate(-3 -9)" fill="#f44336"/>
</svg>
        <div class="text-base mb-4">You have no playlists</div>
        <p class="text-xs text-gray mb-4">Create your first playlist right now in your auto DJ</p>
        <button @click="showModal" class="bg-blue focus:outline-none text-white rounded rounded-lg py-2 px-2 mb-4">Create Playlists</button>
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
    <label class="text-xs text-gray px-4  block" for="desc">Description (pdf, word)</label>
    <input type="file" name="desc" required  @change="file" class="focus:outline-none mb-6  border-b-2 text-sm text-gray-400  border-light-gray  py-2 px-2 w-full " placeholder="Email address">
  </div>

  <div class="focus-within:none">
    <label class="text-xs text-gray px-4 block" for="vid">Select folder</label>
    <select type="file" name="vid" required v-model="folders" class="focus:outline-none text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full ">
        <option value="songs"> songs </option>
        <option value="songs"> jingles </option>
        <option value="songs"> commercials </option>
        <option value="songs"> podcast </option>

    </select>
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
          folders: 'songs',
             isModalVisible: false,
           icons: [
                {id: 'songs', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#f44336', title: 'Songs'}, 

                {id: 'commercials', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#EC3434', title: 'Commercials'}, 

                {id: 'jingles', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#f44336', title: 'Jingles'}, 

                {id: 'podcast', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#1C1A1A', title: 'Podcast'}, 
            ],
            movies: [
                {image: image, title: 'Star wars', time: '1 minute ago', views:'29,129', id: 1},
                {image: image, title: 'Star wars', time: '2 minutes ago', views:'129,192', id: 2},
                {image: image, title: 'Star wars', time: '1 day ago', views:'40,000', id: 3},
                {image: image, title: 'Star wars', time: '3 days ago', views:'250,000', id: 4},
                {image: image, title: 'Star wars', time: '6 days ago', views:'450,000', id: 5},
                {image: image, title: 'Star wars', time: '1 week ago', views:'500,000', id: 6},
            ],
            
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
      },
    }

}
</script>

<style>

</style>
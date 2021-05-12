<template>
  <div class="w-full shadow-lg py-2 px-2 mt-2">
      <h1 class="text-lg text-deep-gray">Settings</h1>
      
 <form class="mx-40 my-2 w-80">

<div class="focus-within:none">
    <label class="text-xs text-gray" for="">Time zone</label>
    <input type="text" value="GMT +01:00" disabled  class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-xs mb-4 focus:ring-blue-600 border-2 border-light-gray  py-2 px-6 w-full" placeholder="Full name">
  </div>
  

  <div class="focus-within:none">
       <label class="text-xs text-gray" for="">Current time</label>
    <input type="text" :value="date" disabled class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-xs mb-4 focus:ring-blue-600 border-2 border-light-gray  py-2 px-6 w-full" placeholder="Full name">
  </div>

  <div class="focus-within:none">
      <label class="text-xs text-gray" for="">Automatic disconnection of Listeners</label>
    
    <select required v-show="! recovery" v-model="disableUser" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 text-xs text-gray-400 tracking-widest inline-block mb-4 border-light-gray  py-2 px-4 w-full">
        <option class="text-center text-deep-gray text-xs" value="Disabled">Disabled</option>
        <option class="text-center text-deep-gray text-xs" value="12">After 12 Hours</option>
        <option class="text-center text-deep-gray text-xs" value="24">After 24 Hours</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 px-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
  </div>

  <div class="focus-within:none">
      <label class="text-xs text-gray" for="">Interrupt the current song when a scheduled playlist start?</label>
    
    <select required v-show="! recovery" v-model="play" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 text-xs text-gray-400 tracking-widest inline-block mb-4 border-light-gray  py-2 px-4 w-full">
        <option class="text-center text-deep-gray text-xs" value="yes">Yes, cut the song and start the scheduled playlist immediately</option>
        <option class="text-center text-deep-gray text-xs" value="No">No, wait for the song to finish the start the playlist</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 px-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
  </div>


    <div class="focus-within:none">
      <label class="text-xs text-gray" for="">Broadcast encoder type</label>
    
    <select required v-show="! recovery" v-model="encoder" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 text-xs text-gray-400 tracking-widest inline-block mb-4 border-light-gray  py-2 px-4 w-full">
        <option class="text-center text-deep-gray text-xs" value="mp3">Mp3</option>
        <option class="text-center text-deep-gray text-xs" value="aac">AAC</option>
        <option class="text-center text-deep-gray text-xs" value="aac">WAV</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 px-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
  </div>

   <div class="focus-within:none">
      <label class="text-xs text-gray" for="">Auto DJ broadcast quality</label>
    
    <select required v-show="! recovery" v-model="autoDj" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 text-xs text-gray-400 tracking-widest inline-block mb-4 border-light-gray  py-2 px-4 w-full">
        <option class="text-center text-deep-gray text-xs" value="128kbps">128kbps</option>
        <option class="text-center text-deep-gray text-xs" value="64kbps">64kbps</option>
        <option class="text-center text-deep-gray text-xs" value="32kbps">32kbps</option>
        <option class="text-center text-deep-gray text-xs" value="16kbps">16kbps</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 px-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
  </div>
  

   <div class="focus-within:none">
      <label class="text-xs text-gray" for="">Channels</label>
    
    <select required v-show="! recovery" v-model="channels" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 text-xs text-gray-400 tracking-widest inline-block mb-4 border-light-gray  py-2 px-4 w-full">
        <option class="text-center text-deep-gray text-xs" value="Mono">Mono</option>
        <option class="text-center text-deep-gray text-xs" value="stereo">Stereo</option>
        <option class="text-center text-deep-gray text-xs" value="stereo">Live stream</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 px-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
  </div>

  <!-- <div>{{platform}}</div> -->


    <button  type="button" class="form-btn w-full mt-4  bg-blue py-3 px-4 text-xs text-center text-white">SAVE</button>
</form>

  </div>

   <Modal v-if="isModalVisible" @close="closeModal">
  <template v-slot:header>
    Create
  </template>

  <template v-slot:body>
    
    
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
             date: '',
            disableUser: 'Disabled',
            play: 'yes',
            encoder: 'mp3',
            autoDj: '128kbps',
            channels: 'stereo',

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

    mounted(){
       
          var current = new Date()
        //   var timeZone = current.getTimezoneOffset()
         
         this.date = current 
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
.used {
    color: rgb(231, 25, 25);
}
.available {
    color: green;
}
</style>
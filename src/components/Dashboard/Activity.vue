<template>
  <h1 class="text-2xl text-left font-medium text-deep-gray">Activity</h1>
  <div  class="w-full my-4 cards gap-4 grid grid-cols-1 md:grid-cols-3">
      <div @click="handleActivity(icon.id)" v-for="icon in icons" :key="icon.id" class="shadow-xl bg-white py-6 px-4 cursor-pointer">
          <svg class="mx-auto my-6" :id="icon.id" :xmlns="icon.url" :width="icon.width" :height="icon.height" :viewBox="icon.viewBox">
                <path :id="icon.pathId" :data-name="icon.dataName" :d="icon.d" :transform="icon.transform" :fill="icon.fill"/>
                        </svg>
          <h2 class="text-xs mt-8 text-center font-semibold text-deep-gray "> <button type="button" class="btn focus:outline-none" @click="showModal(icon.id)"> {{icon.title}} </button> </h2>
          <p class="text-xs text-center py-2">{{icon.file}}</p>
      </div>
     </div>

     <div class="table grid grid-cols-6 gap-4">

         <div class="topV md:col-span-4 col-span-6 shadow-xl bg-white py-6 px-4">
            <p class="text-sm text-deep-gray mb-12 ">Recent videos</p>
            <div class="w-90">
              <table class="table-fixed w-full">
    <thead class="bg-white text-red  text-xs">
    <tr>
      <th class="w-1/2 py-2 px-2 text-left">VIDEOS</th>
      <th class="w-1/4 text-left">UPLOADED</th>
      <th class="w-1/4 text-left">VIEWS</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="movie in movies" :key="movie.id">
      <td class="flex">
        <div class="my-4 w-16 h-16 overflow-hidden">
            <img :src="`${movie.image}`" alt="">
            
        </div>
        <p class="text-xs my-8 ml-4">{{movie.title}}</p>
      
      </td>
      <td class="text-xs">{{movie.time}}</td>
      <td class="text-xs">{{movie.views}}</td>
    </tr>
    
  </tbody>
</table>
            </div>
         </div>

         <div class="details md:col-span-2 col-span-6 py-6 px-4 shadow-xl bg-white">
              <p class="text-sm text-deep-gray mb-12 ">Playlists</p>
              <div class="bg-red w-full py-0.5"></div>
              <div class="flex py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
  <g id="Icon" transform="translate(-1155 -1397)">
    <path id="Icon.BG" d="M19,0A19,19,0,1,1,0,19,19,19,0,0,1,19,0Z" transform="translate(1155 1397)" fill="#e8e7ff"/>
    <path id="Icon_material-playlist-play" data-name="Icon material-playlist-play" d="M19.057,11.825H3v2.162H19.057Zm0-4.325H3V9.662H19.057ZM3,18.312H15.279V16.149H3Zm14.168-2.162v6.487l4.723-3.243Z" transform="translate(1161.555 1401.932)" fill="#f44336"/>
  </g>
</svg>

                <p class="text-xs py-2 px-4">Crude screens</p>
                <p class="ml-16 py-2 text-light-gray text-xs">2 hours ago</p>

              </div>
              
              
              <div class="flex py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
  <g id="Icon" transform="translate(-1155 -1397)">
    <path id="Icon.BG" d="M19,0A19,19,0,1,1,0,19,19,19,0,0,1,19,0Z" transform="translate(1155 1397)" fill="#e8e7ff"/>
    <path id="Icon_material-playlist-play" data-name="Icon material-playlist-play" d="M19.057,11.825H3v2.162H19.057Zm0-4.325H3V9.662H19.057ZM3,18.312H15.279V16.149H3Zm14.168-2.162v6.487l4.723-3.243Z" transform="translate(1161.555 1401.932)" fill="#f44336"/>
  </g>
</svg>


                <p class="text-xs py-2 px-4">Love plays</p>
                <p class="ml-20 py-2 text-light-gray text-xs">3 hours ago</p>

              </div>

              <div class="flex py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
  <g id="Icon" transform="translate(-1155 -1397)">
    <path id="Icon.BG" d="M19,0A19,19,0,1,1,0,19,19,19,0,0,1,19,0Z" transform="translate(1155 1397)" fill="#e8e7ff"/>
    <path id="Icon_material-playlist-play" data-name="Icon material-playlist-play" d="M19.057,11.825H3v2.162H19.057Zm0-4.325H3V9.662H19.057ZM3,18.312H15.279V16.149H3Zm14.168-2.162v6.487l4.723-3.243Z" transform="translate(1161.555 1401.932)" fill="#f44336"/>
  </g>
</svg>



                <p class="text-xs py-2 px-4">Dance</p>
                <p class="ml-24 py-2 text-light-gray text-xs">1 day ago</p>

              </div>


         </div>
         
     </div>

<Modal v-if="isModalVisible && id==='upload'" @close="closeModal">
  <template v-slot:header>
    Upload
  </template>

  <template v-slot:body>
    <form class="w-full" action="">
      <div class="focus-within:none">
    <input type="text" required v-show="!recovery" v-model="title" class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-sm mb-6 focus:ring-blue-600 border--b2 border-light-gray py-2 px-2 w-full " placeholder="Movie Title">
  </div>

  <div class="focus-within:none">
    <label class="text-xs text-gray px-4  block" for="desc">Description (pdf, word)</label>
    <input type="file" name="desc" required v-show="! recovery" @change="file" class="focus:outline-none mb-6 border-b-2 text-sm text-gray-400  border-light-gray py-2 px-2 w-full " placeholder="Email address">
  </div>

  <div class="focus-within:none">
    <label class="text-xs text-gray px-4 block" for="vid">Video (Mp4, H.264)</label>
    <input type="file" name="vid" required v-show="! recovery" @change="video" class="focus:outline-none text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Password">
  </div>

 <div class="focus-within:none">
    <label class="text-xs text-gray px-4 block" for="pic">Cover Image (jpeg, PNG)</label>
    <input type="file" name="pic" required v-show="! recovery" @change="video" class="focus:outline-none text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Password">
  </div>

   <div class="focus-within:none">
    
    <select type="select" required v-show="! recovery" v-model="category" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-b-2 text-sm text-gray-400 tracking-widest inline-block mb-6 border-light-gray py-2 px-2 w-full " placeholder="Choose a platform">
        <option class="text-center text-deep-gray text-sm" value="IPTV">Movie</option>
        <option class="text-center text-deep-gray text-sm">Show</option>
        <option class="text-center text-deep-gray text-sm">Sport</option>
        <option class="text-center text-deep-gray text-sm">News</option>
        <option class="text-center text-deep-gray text-sm">Travel</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 px-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
  </div>
  <!-- <div>{{platform}}</div> -->


    <button class="form-bt2 w-full focus:outline-none mt-4 rounded-full bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>


    </form>
  </template>

 
</Modal>
     


  <Modal v-else-if="isModalVisible && id==='add'" @close="closeModal">
  <template v-slot:header>
    Create
  </template>

  <template v-slot:body>
    <form class="w-full" action="">
      <div class="focus-within:none">
    <input type="text" required v-show="!recovery" v-model="title" class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-sm mb-6  focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Title">
  </div>

  <div class="focus-within:none">
    <label class="text-xs text-gray px-4  block" for="desc">Description (pdf, word)</label>
    <input type="file" name="desc" required v-show="! recovery" @change="file" class="focus:outline-none mb-6  border-b-2 text-sm text-gray-400  border-light-gray  py-2 px-2 w-full " placeholder="Email address">
  </div>

  <div class="focus-within:none">
    <label class="text-xs text-gray px-4 block" for="vid">Cover image (jpeg, PNG)</label>
    <input type="file" name="vid" required v-show="! recovery" @change="video" class="focus:outline-none text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Password">
  </div>

 
 
  <!-- <div>{{platform}}</div> -->


    <button class="form-bt2 w-full focus:outline-none mt-4 rounded-full bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>


    </form>
  </template>

 
</Modal>

<Modal v-else-if="isModalVisible && id==='Icon_ionic-md-person-add'" @close="closeModal">
  <template v-slot:header>
    Add customer
  </template>

  <template v-slot:body>
    <form class="w-full" action="">
  <div class="focus-within:none">
    <label class="text-xs text-gray px-4 block" for="vid">(CSV)</label>
    <input type="file" name="vid" required v-show="! recovery" @change="video" class="focus:outline-none text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Password">
  </div>

 
  <!-- <div>{{platform}}</div> -->


    <button class="form-bt2 w-full focus:outline-none mt-4 rounded-full bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>


    </form>
  </template>

 
</Modal>

  <Modal v-if="uploadModal" @close="uploadModal=false">
    <template v-slot:header>
      Create
    </template>

    <template v-slot:body>
      <form class="w-full" @submit.prevent="uploadVideo()">
        <div class="focus-within:none">
          <input
            type="text"
            required
            v-model="title"
            class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-sm mb-6  focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Title">
        </div>

        <div class="focus-within:none">
          <label class="text-xs text-gray px-4 block" for="vid">Video file (Mp4)</label>
          <input
            id="file"
            ref="file"
            @change="handleFileUpload()"
            type="file"
            name="vid"
            required
            class="focus:outline-none text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full "
            >
        </div>

        <button class="form-bt2 w-full focus:outline-none mt-4 rounded-full bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>
      </form>
    </template> 
  </Modal>


</template>

<script>
import image from "@/assets/images/wars.jpg"
import Modal from "@/components/Modal.vue"
import { useToast } from "vue-toastification";

// const fs = require('fs');
import * as fs from 'fs' 
// const fs = require('fs-extra');

import axios from 'axios'
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: "AKIA3JW3XH4SDSGTZ6A7",
    secretAccessKey: "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",
    region: 'eu-west-2'
});
const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
}


const toast = useToast();
export default {
    components: {Modal},
    data(){
        return{
            icons: [
                {id: 'upload', url: 'http://www.w3.org/2000/svg', width: '38.07', height: '50.76', viewBox: '0 0 38.07 50.76', pathId: 'Icon_awesome-file-upload', dataName: 'Icon awesome-file-upload', d: 'M22.207,13.483V0H2.379A2.374,2.374,0,0,0,0,2.379v46A2.374,2.374,0,0,0,2.379,50.76H35.69A2.374,2.374,0,0,0,38.07,48.38V15.862H24.587A2.386,2.386,0,0,1,22.207,13.483ZM28.669,34.9H22.207V42.83a1.586,1.586,0,0,1-1.586,1.586H17.449a1.586,1.586,0,0,1-1.586-1.586V34.9H9.4a1.586,1.586,0,0,1-1.117-2.712L17.842,22.7a1.69,1.69,0,0,1,2.383,0l9.559,9.488A1.586,1.586,0,0,1,28.669,34.9ZM37.376,10.41,27.67.694A2.378,2.378,0,0,0,25.985,0h-.6V12.69H38.07v-.6A2.372,2.372,0,0,0,37.376,10.41Z', transform: 'translate(0 0)', fill: '#fb8c00', title: 'Upload video'}, 

                {id: 'add', url: 'http://www.w3.org/2000/svg', width: '50', height: '50.76', viewBox: '0 0 50 50.76', pathId: 'Icon_material-playlist-add', dataName: 'Icon material-playlist-add', d: 'M35.14,19.713H3V25.07H35.14ZM35.14,9H3v5.357H35.14ZM45.854,30.427V19.713H40.5V30.427H29.784v5.357H40.5V46.5h5.357V35.784H56.567V30.427ZM3,35.784H24.427V30.427H3Z', transform: 'translate(-3 -9)', fill: '#43a047', title: 'Create playlist'},

                {id: 'Icon_ionic-md-person-add', url: 'http://www.w3.org/2000/svg', width: '50', height: '50.76', viewBox: '0 0 50 50.76', pathId: 'Path_350', dataName: 'Path 350', d: 'M27.585,24.21a9.855,9.855,0,1,0-9.855-9.855A9.884,9.884,0,0,0,27.585,24.21Zm0,4.927c-6.529,0-19.71,3.326-19.71,9.855v4.927H47.294V38.992C47.294,32.463,34.113,29.137,27.585,29.137Z', transform: 'translate(0 3.105)', fill: '#00acc1', title: 'Add Existing customer(s)', file: 'CSV File'},
                
                ],
            movies: [
                {image: image, title: 'Star wars', time: '1 minute ago', views:'29,129', id: 1},
                {image: image, title: 'Star wars', time: '2 minutes ago', views:'129,192', id: 2},
                {image: image, title: 'Star wars', time: '1 day ago', views:'40,000', id: 3},
                {image: image, title: 'Star wars', time: '3 days ago', views:'250,000', id: 4},
                {image: image, title: 'Star wars', time: '6 days ago', views:'450,000', id: 5},
                {image: image, title: 'Star wars', time: '1 week ago', views:'500,000', id: 6},
            ],
            isModalVisible: false,
            category: 'IPTV',

            uploadModal: false,
            file: "",
            base64String: "",
            
        }
    },
    methods: {
      handleActivity(iconId){
        if (iconId == 'upload'){
          this.uploadModal = true;
        }
      },
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
      },

      async uploadVideo(){
        var element = document.getElementById('file');
        console.log(element.files[0].name, "element");

        let fileName = `${Date.now()}--${this.file.name}`;
        let fileType = this.file.type;

        const s3Params = {
          Bucket: 'wegonetwork',
          Key: fileName,
          ContentType: fileType,
          ACL: 'public-read'
        }
        const signedRequest = await s3.getSignedUrl('putObject', s3Params);
        console.log(signedRequest, "signedRequest")
        console.log(this.file.type, "this.file.type")

        const options = {
          headers: {
            "Content-Type": fileType
          }
        }
        await axios.put(signedRequest, this.file, options);
        toast.success(`File upload successful`)

        this.uploadModal = false;
      },

      showModal(id) {
        this.isModalVisible = true;
        this.id = id
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
    // checkId(id){

    //         // var id = event.target.getAttribute('data-id')
    //         this.id = id
    //     }

}
</script>

<style>

</style>
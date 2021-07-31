<template>
  <div class="w-full shadow-lg py-1 px-2 mt-4">
      <h1 class="text-base mx-4 text-deep-gray">Playlist schedule</h1>
      <div class="flex gap-4 mx-4 mt-2">
          <button @click="showModal" class="bg-blue text-white rounded focus:outline-none rounded-lg py-3 px-2 mb-4 text-sm">New playlist schedule</button>
        </div>

        <div class="flex flex-wrap mt-12 gap-4 md:mx-12 lg:mx-40">
            <button v-for="day in days" :key="day.id" @click="checkId(day.id)" class="focus:bg-blue focus:outline-none focus:text-white bg-none text-deep-gray hover:bg-red hover:text-white  text-sm px-2 py-2 rounded rounded-full">{{day.day}}</button>
            
        </div>

        <p v-show="id" class="text-xs my-12 mx-20 text-deep-gray">No playlist scheduled for this day, click <button @click="showModal" class="text-xs text-red focus:outline-none">here</button> to schedule a playlist</p>


    </div>

    <Modal v-if="isModalVisible" @close="closeModal">
  <template v-slot:header>
    New scheduling
  </template>

  <template v-slot:body>
    <form class="w-full" action="">


  <div class="focus-within:none mt-6">
    <label class="text-xs text-gray px-4 block" for="vid">Select playlist</label>
    <select name="vid" required v-model="folders" class="focus:outline-none text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full ">
        <option value="songs"> songs </option>
        <option value="songs"> jingles </option>
        <option value="songs"> commercials </option>
        <option value="songs"> podcast </option>

    </select>
  </div>


  <div class="focus-within:none">
    <label class="text-xs text-gray px-4  block" for="desc">Set time</label>
    <input type="time" name="desc" required class="focus:outline-none mb-6  border-b-2 text-sm text-gray-400  border-light-gray  py-2 px-2 w-full">
  </div>


  <div class="focus-within:none">

                    <input type="checkbox"   value= "Monday" name="monthly" id="monday"  class="active:text-red rounded mx-3 text-red">
                    <label for="monday" class="text-deep-gray font-semibold text-sm">Monday</label>

                    <input type="checkbox"  value="Tuesday" name="yearly" id="tuesday"  class="active:text-red rounded mx-3 text-red">
                    <label for="tuesday" class="text-deep-gray font-semibold text-sm">Tuesday</label>

                    <input type="checkbox"  value="Wednesday" name="bi-yearly" id="wednesday"  class="active:text-red rounded mx-3 text-red">
                    <label for="wednesday" class="text-deep-gray font-semibold text-sm">Wednesday</label>

                    <input type="checkbox"   value= "Thursday" name="monthly" id="thursday"  class="active:text-red rounded mx-3 text-red">
                    <label for="thursday" class="text-deep-gray font-semibold text-sm">Thursday</label>

                    <input type="checkbox"  value="Friday" name="yearly" id="friday"  class="active:text-red rounded mx-3 text-red">
                    <label for="friday" class="text-deep-gray font-semibold text-sm">Friday</label>

                    <input type="checkbox"  value="Saturday" name="bi-yearly" id="saturday"  class="active:text-red rounded mx-3 text-red">
                    <label for="saturday" class="text-deep-gray font-semibold text-sm">Saturday</label>

                    <input type="checkbox"  value="Sunday" name="bi-yearly" id="sunday"  class="active:text-red rounded mx-3 text-red">
                    <label for="sunday" class="text-deep-gray font-semibold text-sm">Sunday</label>
                    

  </div>
 
  <!-- <div>{{platform}}</div> -->


    <button class="form-bt2 focus:outline-none mt-4  bg-blue py-3 px-4 text-sm text-center text-white">SAVE</button>


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
             id: '',
             folders: '',
           icons: [
                {id: 'songs', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#f44336', title: 'Songs'}, 

                {id: 'commercials', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#EC3434', title: 'Commercials'}, 

                {id: 'jingles', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#F8E71C', title: 'Jingles'}, 

                {id: 'podcast', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#1C1A1A', title: 'Podcast'}, 
            ],
            days: [
                {day: 'Sunday', id: 1},
                {day: 'Monday', id: 2},
                {day: 'Tuesday', id: 3},
                {day: 'Wednesday', id: 4},
                {day: 'Thursday', id: 5},
                {day: 'Friday', id: 6},
                {day: 'Saturday', id: 7},
            ]
                
            
        }
    },
    methods: {
        checkId(id){

            // var id = event.target.getAttribute('data-id')
            this.id = id
        },
        showModal(id) {
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
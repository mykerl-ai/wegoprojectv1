<template>

<Nav >
        <div class="flex flex-wrap space-x-2 w-full mx-2">

    <form method="GET">
      <div class="relative text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 35.914 35.914">
          <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3 -3)">
          <path id="Path_352" data-name="Path 352" d="M33.2,18.852A14.352,14.352,0,1,1,18.852,4.5,14.352,14.352,0,0,1,33.2,18.852Z" fill="none" stroke="#0072E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_353" data-name="Path 353" d="M32.779,32.779l-7.8-7.8" transform="translate(4.013 4.013)" fill="none" stroke="#0072E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>
          </svg>
      </button>
      </span>
      <input type="search" name="q" class="invisible md:visible order-last py-1 px-3 text-sm text-gray pr-4 rounded-md pl-10 focus:outline-none focus:border-blue rounded-full focus:text-gray-900" placeholder="Search..." autocomplete="off">
      </div>
    </form>

        <nav>
          <div class="lg:grid grid-cols-6 justify-between gap-8 hidden">
          <button class="focus focus:outline-none"><router-link :to="{name: 'Radio'}" class="text-sm text-white text-center font-medium">Podcast</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Schedule'}" class="text-sm text-white text-center font-medium">Schedule</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Playlist'}" class="text-sm text-white text-center font-medium">Playlist</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Radio'}" class="text-sm text-white text-center font-medium">Broadcast</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Movies'}" class="text-sm text-white text-center font-medium">Movies</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Shows'}" class="text-sm text-white text-center font-medium">Shows</router-link></button>
          </div>

          <div class="navbar mt-8 lg:hidden mr-16 md:mr-24">
      <div class="dropdown1 transition-all duration-300">
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg> 
    </button>
    <div v-show="menu" class="dropdown-content1 w-full">
     <button class="w-full"><router-link :to="{name: 'Home'}">Home</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Iptv'}">Iptv</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Podcast'}">Podcast</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">OTT</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'About'}">About</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">FAQ</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">Help</router-link></button> 
    </div>
  </div> 
</div>
        </nav>
      </div>

      </Nav>


  <div class="w-full shadow-lg py-1 px-2 mt-4">
      <h1 class="text-base mx-4 text-deep-gray">Playlist schedule</h1>
      
      <div class="flex mt-12 gap-6 mx-40">
            <button v-for="day in days" :key="day.id" @click="checkId(day.id)" class="focus:bg-blue focus:outline-none focus:text-white bg-none text-deep-gray hover:bg-blue hover:text-white  text-sm px-2 py-2 rounded rounded-full">{{day.day}}</button>
            
        </div>

        <p v-show="id" class="text-xs my-12 mx-20 text-deep-gray">No playlist scheduled for this day, click <button @click="showModal" class="text-xs text-blue focus:outline-none">here</button> to schedule a playlist</p>


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

                    <input type="checkbox"   value= "Monday" name="monthly" id="monday"  class="active:text-blue rounded mx-3 text-yellow">
                    <label for="monday" class="text-deep-gray font-semibold text-sm">Monday</label>

                    <input type="checkbox"  value="Tuesday" name="yearly" id="tuesday"  class="active:text-blue rounded mx-3 text-yellow">
                    <label for="tuesday" class="text-deep-gray font-semibold text-sm">Tuesday</label>

                    <input type="checkbox"  value="Wednesday" name="bi-yearly" id="wednesday"  class="active:text-blue rounded mx-3 text-yellow">
                    <label for="wednesday" class="text-deep-gray font-semibold text-sm">Wednesday</label>

                    <input type="checkbox"   value= "Thursday" name="monthly" id="thursday"  class="active:text-blue rounded mx-3 text-yellow">
                    <label for="thursday" class="text-deep-gray font-semibold text-sm">Thursday</label>

                    <input type="checkbox"  value="Friday" name="yearly" id="friday"  class="active:text-blue rounded mx-3 text-yellow">
                    <label for="friday" class="text-deep-gray font-semibold text-sm">Friday</label>

                    <input type="checkbox"  value="Saturday" name="bi-yearly" id="saturday"  class="active:text-blue rounded mx-3 text-yellow">
                    <label for="saturday" class="text-deep-gray font-semibold text-sm">Saturday</label>

                    <input type="checkbox"  value="Sunday" name="bi-yearly" id="sunday"  class="active:text-blue rounded mx-3 text-yellow">
                    <label for="sunday" class="text-deep-gray font-semibold text-sm">Sunday</label>
                    

  </div>
 
  <!-- <div>{{platform}}</div> -->


    <button class="form-bt2 focus:outline-none mt-4  bg-blue py-3 px-4 text-sm text-center text-white">SAVE</button>


    </form>
  </template>

 
</Modal>
  
</template>



<script>
import Modal from "@/components/Modal.vue"
import Nav from '@/components/user/Nav.vue'
export default {
    components: {Modal, Nav},
    mounted () {
  document.body.classList.add('user')
},
unmounted () {
  document.body.classList.remove('user')
},

    data(){
        return{
             isModalVisible: false,
             id: '',
             folders: '',
           icons: [
                {id: 'songs', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#0080ff', title: 'Songs'}, 

                {id: 'commercials', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#EC3434', title: 'Commercials'}, 

                {id: 'jingles', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#F8E71C', title: 'Jingles'}, 

                {id: 'podcast', url: 'http://www.w3.org/2000/svg', width: '20', height: '20', viewBox: '0 0 33.379 25.035', pathId: 'PIcon_awesome-folder', dataName: 'Icon awesome-folder', d: 'M30.25,8.672H17.733L13.56,4.5H3.129A3.129,3.129,0,0,0,0,7.629V26.405a3.129,3.129,0,0,0,3.129,3.129H30.25a3.129,3.129,0,0,0,3.129-3.129V11.8A3.129,3.129,0,0,0,30.25,8.672Z', transform: 'translate(0 -4.5)', fill: '#0072E4', title: 'Podcast'}, 
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

.fwd {
        position: absolute;
        z-index: 10;
    }

nav>a, div>a {
  color: #0080FF;
  font-size: 14px;
}
 .bt {
   background-color: #0080FF;
   color:white;
   padding: 8px;
   border-radius: 4px;
 }

 .navbar {
  overflow: hidden;
 
}

.navbar a {
  float: left;
  font-size: 14px;
  color: white;
  text-align: center;
  
  text-decoration: none;
}


</style>
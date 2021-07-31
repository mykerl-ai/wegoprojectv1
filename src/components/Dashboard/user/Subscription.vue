<template>
  <h1 class="text-base text-left font-medium mb-6 md:mb-0 text-deep-gray">Customize your platform</h1>
  <div  class="w-full cards gap-4 my-4 grid grid-cols-2">
      <div class="shadow-lg py-6 px-6 w-full bg-white lg:col-span-1 col-span-2">
          <p class="text-sm text-deep-gray mb-8 ">{{title}}</p>
          <h2 class="text-2xl font-semibold text-red ">{{figure}}</h2>
          <p class="text-xs text-deep-gray my-4" :class="{ activeClass: status===true, errorClass: status===false }">Status: {{status ? 'active' : 'inactive'}}</p>
          <button type="button" @click="checkSub" class="bg-none text-red focus:outline-none mt-4" :class="{ activeClass: status===true, disabled : status===false }">{{status ? 'Cancel': 'undo'}}</button>
          <div class="mt-6">
             <p v-if="status" class="text-deep-gray">Your subscription expires in <span class="text-red font-bold" id="timer-days">{{countDown}}</span> days</p>
          </div>
      </div>

       <!--channel-->

   <div class="shadow-lg py-6 px-6 lg:col-span-1 bg-white col-span-3">
          <h2 class="text-2xl font-semibold text-center text-red mx-32 mt-4 md:mt-0 md:mx-24">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="46.908" height="38.379" viewBox="0 0 46.908 38.379">
            <path id="Icon_material-cast-connected" data-name="Icon material-cast-connected" d="M1.5,36.483v6.4H7.9A6.388,6.388,0,0,0,1.5,36.483Zm0-8.529v4.264A10.665,10.665,0,0,1,12.161,42.879h4.264A14.914,14.914,0,0,0,1.5,27.954ZM39.879,13.029H10.029V16.5A27.79,27.79,0,0,1,27.875,34.351h12ZM1.5,19.425V23.69a19.191,19.191,0,0,1,19.19,19.19h4.264A23.454,23.454,0,0,0,1.5,19.425ZM44.144,4.5H5.764A4.277,4.277,0,0,0,1.5,8.764v6.4H5.764v-6.4H44.144V38.615H29.218v4.264H44.144a4.277,4.277,0,0,0,4.264-4.264V8.764A4.277,4.277,0,0,0,44.144,4.5Z" transform="translate(-1.5 -4.5)" fill="#f44336"/>
          </svg>
</h2>
          
          <button type="button"  class="bg-none text-gray text-sm focus:outline-none mx-24 mt-16" @click="showModal">Connect channel</button>
      </div>
  


     <!--channel-->
     </div>

    

  <div class="table grid grid-cols-6 grid-flow-row">

 <div class="topV col-span-6 shadow-xl py-6 bg-white px-4">
      <p class="text-sm text-deep-gray mb-12 ">Top videos</p>
      <div class="w-90 bg-white">
      <table class="md:table-fixed table-auto w-full">
    <thead class="text-red text-xs">
    <tr>
      <th class="md:w-1/4 px-6 md:px-0 py-2 px-2 text-center">CHANNEL(S)</th>
      <th class="md:w-1/4 px-6 md:px-0 text-center">CREATED</th>
      <th class="md:w-1/4 px-3 md:px-0 text-left">SUBSCRIBERS</th>
      <th class="md:w-1/4 px-6 md:px-0 text-left invisible md:visible">LINK</th>
      <th class="md:w-1/4 px-6 md:px-0 text-left invisible md:visible">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="movie in movies" :key="movie.id">
      <td class="flex">
        <div class="my-3 w-6 h-6 md:w-12 md:h-12 rounded-full  overflow-hidden">
            <img :src="`${movie.image}`" alt="">
            
        </div>
        <p class="text-xs my-4 ml-2 md:my-8 md:ml-4">{{movie.title}}</p>
      
      </td>
      <td class="text-xs text-center mx-12">{{movie.time}}</td>
      <td class="text-xs px-4 md:px-0">{{movie.views}}</td>
      <td class="text-xs invisible md:visible">wego.com/<br>{{movie.title}}</td>
      <td class="text-xs invisible md:visible"><button @click="deleteChannel" class="bg-none focus:outline-none text-xs text-red text-left"><p :class="{ activeClass: channel===true, errorClass: channel===false }">Delete</p> </button></td>
    </tr>
    
  </tbody>
</table>
            </div>
         </div>

        
         
     </div>



<Modal v-if="isModalVisible" @close="closeModal">
    <template v-slot:header>
    Connect
    </template>

    <template v-slot:body>
    <form class="w-full" action="">

       <div class="focus-within:none">
      <input type="text" required v-show="!recovery" v-model="link" class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-sm mb-6  focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Insert URL">
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
import image from "@/assets/images/wars.jpg"
import Modal from "@/components/Modal.vue"
export default {
  components: {Modal},
    data(){
        return{
             isModalVisible: false,
             countDown: 0,
            movies: [
                {image: image, title: 'm1ccdffyytllm3', time: '1 minute ago', views:'29,129', id: 1},
                {image: image, title: 'm4ccdffyytllm7', time: '2 minutes ago', views:'129,192', id: 2},
                {image: image, title: 'm2ccdffyytllm4', time: '1 day ago', views:'40,000', id: 3},
                {image: image, title: 'm1ccdffyytllm3', time: '3 days ago', views:'250,000', id: 4},
                
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
      },
      countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 10000)
                }
            }
    
    },

    mounted(){
        
      
      // JavaScript program to illustrate 
    // calculation of no. of days between two date 
  
    // To set two dates to two variables
    var date1 = new Date("06/06/2021");
    var date2 = new Date("07/07/2021");
  
// To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
  
// To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    this.countDown = Difference_In_Days
//To display the final no. of days (result)
 
    this.countDownTimer()
    // let t = endDate - now;
    
    
    
    //     let days = Math.floor(t / (1000 * 60 * 60 * 24));
        
},

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
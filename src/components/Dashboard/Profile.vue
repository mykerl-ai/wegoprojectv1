<template>
  <h1 class="text-xl text-left font-medium text-deep-gray">My Profile</h1>
  <div  class="w-full cards grid gap-10 grid-cols-6">
      <div class="shadow-xl bg-white py-6 px-4 md:col-span-3 col-span-6 w-full">
          <form class="w-full" action="">
              <label for="name" class="text-gray text-sm py-4 block">Name</label>
              <input name="name" type="text" v-model="name" class="border border-gray w-full px-8 block focus:outline-none py-2">

              <label for="email"  class="text-gray text-sm py-4 block">Email</label>
              <input name="email" type="email" disabled  v-model="email"  class="border border-gray w-full px-8 focus:outline-none py-2">

              <button class="form-btn rounded-full focus:outline-none py-3 px-6 bg-blue mt-6 block  text-sm text-white">Save</button> 
          </form>
          <div class="mt-6">
             <p class="text-deep-gray">Your subscription expires in <span class="text-red font-bold" id="timer-days">{{countDown}}</span> days</p>
          </div>
      </div>

      <div class="shadow-xl bg-white py-2 px-10 md:col-span-3 col-span-6">
          <p class="text-xs text-deep-gray mb-4">Profile Image</p>
          
            <div class="border-2 border-light-gray py-6 px-6 w-72 h-72"> <svg xmlns="http://www.w3.org/2000/svg" width="253" height="253" viewBox="0 0 253 253">
  <path id="Icon_material-person" data-name="Icon material-person" d="M132.5,132.5A63.25,63.25,0,1,0,69.25,69.25,63.233,63.233,0,0,0,132.5,132.5Zm0,31.625C90.281,164.125,6,185.314,6,227.375V259H259V227.375C259,185.314,174.719,164.125,132.5,164.125Z" transform="translate(-6 -6)" fill="#4d4f5c"/>
</svg>



</div>
<div class="flex gap-4 py-6">
    <div>
        <p class="text-sm text-center text-deep-gray">Allowed files</p>
        <p class="text-xs text-center mt-2 font-semibold text-deep-gray">Image (JPG & PNG)</p>
        
    </div>

    <div>
        <p class="text-sm text-center text-deep-gray">Max file size</p>
        <p class="text-xs text-center mt-2 font-semibold text-deep-gray">10MB</p>
    </div>

    <div>
        <p class="text-sm text-center text-deep-gray">Dimension</p>
        <p class="text-xs text-center mt-2 font-semibold text-deep-gray">300 X 300</p>
    </div>

</div>
          <button @click="showModal" class="form-btn rounded-full focus:outline-none py-3 px-6 bg-blue mt-2 block  text-sm text-white">choose file</button>     
          
      </div>
     </div>

     
<Modal v-if="isModalVisible" @close="closeModal">
  <template v-slot:header>
    Upload
  </template>

  <template v-slot:body>
    <form class="w-full" action="">
      
    <div class="focus-within:none">
        <label class="text-xs text-gray px-4 block" for="vid">Image file (JPG, PNG)</label>
        <input type="file" name="vid" required  @change="video" class="focus:outline-none text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray py-2 px-2 w-full " placeholder="Password">
    </div>

    <button class="form-bt2 w-full focus:outline-none mt-4 rounded-full bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>
    </form>

    <div class="flex gap-4 py-2">
    <div>
        <p class="text-xs text-center text-deep-gray">Allowed files</p>
        <p class="text-xs text-center mt-2 font-semibold text-deep-gray">Image (JPG & PNG)</p>
        
    </div>

    <div>
        <p class="text-xs text-center text-deep-gray">Max file size</p>
        <p class="text-xs text-center mt-2 font-semibold text-deep-gray">10MB</p>
    </div>

    <div>
        <p class="text-xs text-center text-deep-gray">Dimension</p>
        <p class="text-xs text-center mt-2 font-semibold text-deep-gray">300 X 300</p>
    </div>
    </div>
  </template>

 
</Modal>
     


        
</template>

<script>
import Modal from "@/components/Modal.vue"
export default {

    components: {Modal},

    data(){
        return{
            email: 'test@gmail.com',
            name: 'Administrator',
            figure: '',
            isModalVisible: false,
            countDown: 0,
            movies: [
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '1 minute ago', views:'29,129', id: 1},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '2 minutes ago', views:'129,192', id: 2},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '1 day ago', views:'40,000', id: 3},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '3 days ago', views:'250,000', id: 4},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '6 days ago', views:'450,000', id: 5},
                {image: 'https://i.ibb.co/wcJZn7S/wars.jpg', title: 'Star wars', time: '1 week ago', views:'500,000', id: 6},
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
      countDownTimer() {
                if(this.countDown > 0) {
                    setTimeout(() => {
                        
                        this.countDown -= 1
                        this.countDownTimer()
                    }, 86400 * 1000)
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
    

    computed: {
        result(){
            
            return this.amount * this.subscribers * 12
        }
    }

    

}
</script>

<style>

</style>
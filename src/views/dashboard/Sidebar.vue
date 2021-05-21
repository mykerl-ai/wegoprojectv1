<template>
 <div  class="flex overflow-x-hidden h-screen relative">
  <aside class="flex-shrink-0 w-80 md:w-64 flex flex-col border-r border-blue h-screen transition-all duration-300 sticky top-0 bottom-0" :class="{ '-ml-80 md:-ml-64' : !sidebarOpen }">
    <div class="lg:h-64 bg-blue h-1"></div>
    <nav class="flex-1 flex flex-col bg-blue pb-12 text-white">

        <div v-show="sidebarOpen" class="flex px-0 mt-2 mb-0">
          <img  class="w-20 pb-4 pt-0" src="@/assets/logo.png" alt="">
           <p class="text-white text-sm mt-6"> WeGo Network</p>
      </div>
     

      <button @click="checkId(icon.id)"  class="flex focus:outline-none mb-2 focus:bg-gblue w-full py-4 px-6 active:bg-gblue" v-for="icon in icons" :key="icon.id" data-id="icon.id">
        <svg :id="icon.id" :xmlns="icon.url" :width="icon.width" :height="icon.height" :viewBox="icon.viewBox">
                <path :id="icon.pathId" :data-name="icon.dataName" :d="icon.d" :transform="icon.transform" :fill="icon.fill"/>
                        </svg>
                        <p class="text-xs  text-white pl-8 text-center"> {{icon.title}} </p>
        

    </button> 
    </nav>
  </aside>
  <div class="flex-1">
    <header class="flex items-center p-4 font-semibold text-blue bg-gray-900">
      <button class="p-1 mr-4 focus:outline-none" @click="sidebarOpen = !sidebarOpen">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#0080FF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div v-show="!sidebarOpen" class="w-20 pl-8 pt-0">
          <img src="@/assets/logo.png" alt="">
      </div>
      <p v-show="!sidebarOpen"> WeGo Network</p>
    </header>
    <main class="p-4 overflow-y-auto ">
      <Dashboard v-if="id==='house'"/>
      <Activity v-else-if="id==='chart-bar-32'"/>
      <Subscription v-else-if="id==='subscription'"/>
      <Customer v-else-if="id==='single-02'"/>
      <Contact v-else-if="id==='support-17'"/>
      <Settings v-else-if="id==='settings-gear-64'"/>
      <Profile v-else-if="id==='profile'"/>
      <Website v-else-if="id==='website'"/>
      <h1 v-else class=" text-blue text-center" :class="sidebarOpen ? 'text-sm' : 'text-2xl'">Welcome to your Dashboard</h1>
    </main>
  </div>
</div>

</template>

<script>
import Dashboard from '@/components/Dashboard/Dashboard.vue'
import Activity from '@/components/Dashboard/Activity.vue'
import Subscription from '@/components/Dashboard/Subscription.vue'
import Customer from '@/components/Dashboard/Customer.vue'
import Contact from '@/components/Dashboard/Contact.vue'
import Settings from '@/components/Dashboard/Settings.vue'
import Profile from '@/components/Dashboard/Profile.vue'
import Website from '@/components/Dashboard/Website.vue'

export default {
    components: { Dashboard, Activity, Subscription, Customer, Contact, Settings, Profile, Website },
     data(){
        
       return{
            id: '',
             sidebarOpen: true ,
             icons: [
                {id: 'house', url: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', pathId: 'Path_99', dataName: 'Path 99', d: 'M15.581,5.186l-7-5a1,1,0,0,0-1.162,0l-7,5A1,1,0,0,0,1.581,6.814L2,6.515V15a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V6.515A1.7,1.7,0,0,0,15,7a1,1,0,0,0,.582-1.814ZM12,14H10V11a2,2,0,0,0-4,0v3H4V5.086L8,2.229l4,2.857Z', transform: 'translate(0 0)', fill: '#ffffff', title: 'Dashboard'}, 
            
                {id: 'chart-bar-32', url: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', pathId: 'Union_8', dataName: 'Union 8', d: 'M13,16a.945.945,0,0,1-1-1V6a.945.945,0,0,1,1-1h2a.945.945,0,0,1,1,1v9a.945.945,0,0,1-1,1ZM7,16a.944.944,0,0,1-1-1V1A.945.945,0,0,1,7,0H9a.945.945,0,0,1,1,1V15a.944.944,0,0,1-1,1ZM1,16a.945.945,0,0,1-1-1V11a.945.945,0,0,1,1-1H3a.946.946,0,0,1,1,1v4a.945.945,0,0,1-1,1Z',  fill: '#ffffff', title: 'Activity'},

                {id: 'subscription', url: 'http://www.w3.org/2000/svg', width: '20.122', height: '20.122', viewBox: '0 0 20.122 20.122', pathId: 'Icon_material-subscriptions', dataName: 'Icon material-subscriptions', d: 'M21.11,9.037H5.012V7.024h16.1ZM19.1,3H7.024V5.012H19.1Zm4.024,10.061V21.11a2.018,2.018,0,0,1-2.012,2.012H5.012A2.018,2.018,0,0,1,3,21.11V13.061a2.018,2.018,0,0,1,2.012-2.012h16.1A2.018,2.018,0,0,1,23.122,13.061Zm-6.037,4.024L11.049,13.8v6.57Z', transform: 'translate(-3 -3)', fill: '#ffffff', title: 'Subscription'}, 

                {id: 'single-02', url: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', pathId: 'Union_10', dataName: 'Union 10', d: 'M0,16a6.018,6.018,0,0,1,6-6H8a6.018,6.018,0,0,1,6,6Zm2.6-2h8.9A4.033,4.033,0,0,0,8,12H6.1A4.035,4.035,0,0,0,2.6,14ZM3,5V4a4,4,0,0,1,8,0V5A4,4,0,1,1,3,5ZM5,4V5A2,2,0,1,0,9,5V4A2,2,0,0,0,5,4Z', transform: 'translate(0 -1)', fill: '#ffffff', title: 'Customers'},

                {id: 'support-17', url: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', pathId: 'Path_107', dataName: 'Path 107', d: 'M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,10a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,10ZM8,2a5.834,5.834,0,0,1,2.6.6L9.044,4.156a3.591,3.591,0,0,0-2.089,0L5.4,2.6A5.834,5.834,0,0,1,8,2ZM2,8a5.834,5.834,0,0,1,.6-2.6L4.156,6.956a3.591,3.591,0,0,0,0,2.089L2.6,10.6A5.834,5.834,0,0,1,2,8Zm6,6a5.834,5.834,0,0,1-2.6-.6l1.556-1.556a3.591,3.591,0,0,0,2.089,0L10.6,13.4A5.834,5.834,0,0,1,8,14Zm5.4-3.4L11.844,9.044a3.591,3.591,0,0,0,0-2.089L13.4,5.4a5.933,5.933,0,0,1,0,5.2Z',  fill: '#ffffff', title: 'Help Center'},

                {id: 'settings-gear-64', url: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', pathId: 'Path_108', dataName: 'Path 108', d: 'M13.3,5.2l1.1-2.1L13,1.7,10.9,2.8a3.582,3.582,0,0,0-1.1-.4L9,0H7L6.2,2.3a4.179,4.179,0,0,0-1,.4L3.1,1.6,1.6,3.1,2.7,5.2a4.179,4.179,0,0,0-.4,1L0,7V9l2.3.8c.1.4.3.7.4,1.1L1.6,13,3,14.4l2.1-1.1a3.582,3.582,0,0,0,1.1.4L7,16H9l.8-2.3c.4-.1.7-.3,1.1-.4L13,14.4,14.4,13l-1.1-2.1a3.582,3.582,0,0,0,.4-1.1L16,9V7l-2.3-.8A4.179,4.179,0,0,0,13.3,5.2ZM8,11A2.946,2.946,0,0,1,5,8,2.946,2.946,0,0,1,8,5a2.946,2.946,0,0,1,3,3A2.946,2.946,0,0,1,8,11Z',  fill: '#ffffff', title: 'Settings'},

                {id: 'profile', url: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 60 60', pathId: 'Icon_material-person', dataName: 'Icon material-person', d: 'M36,36A15,15,0,1,0,21,21,15,15,0,0,0,36,36Zm0,7.5c-10.013,0-30,5.025-30,15V66H66V58.5C66,48.525,46.013,43.5,36,43.5Z',  transform:"translate(-6 -6)",  fill: '#ffffff', title: 'Profile'},

                {id: 'website', url: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 60 60', pathId: 'Icon_ionic-ios-globe', dataName: 'Icon ionic-ios-globe', d: 'M31.267,3.375h-.094a27.892,27.892,0,0,0,.013,55.784h.094a27.892,27.892,0,1,0-.013-55.784ZM55.432,29.39H45.026a52.808,52.808,0,0,0-1.314-10.218,40.851,40.851,0,0,0,6.665-2.816A24.024,24.024,0,0,1,55.432,29.39Zm-26.042,0H21.1a47.664,47.664,0,0,1,1.18-9.266,40.8,40.8,0,0,0,7.107.952Zm0,3.755v8.3a40.97,40.97,0,0,0-7.107.952,47.658,47.658,0,0,1-1.18-9.253Zm3.755,0h8.22a47.384,47.384,0,0,1-1.18,9.239,40.027,40.027,0,0,0-7.04-.939Zm0-3.755V21.076a40.971,40.971,0,0,0,7.04-.939,47.524,47.524,0,0,1,1.18,9.253Zm14.67-15.81a37.253,37.253,0,0,1-5.1,2.079A27.688,27.688,0,0,0,39.166,8.35,24.266,24.266,0,0,1,47.815,13.58Zm-8.636,3.044a37.739,37.739,0,0,1-6.034.8V7.586C35.424,8.819,37.65,12.132,39.179,16.624ZM29.39,7.532v9.883a37.089,37.089,0,0,1-6.1-.818C24.844,12.064,27.1,8.752,29.39,7.532Zm-6.115.858a27.906,27.906,0,0,0-3.527,7.255A38.091,38.091,0,0,1,14.72,13.58,23.9,23.9,0,0,1,23.275,8.39ZM12.158,16.369a40.042,40.042,0,0,0,6.6,2.789,50.68,50.68,0,0,0-1.314,10.218H7.116A23.9,23.9,0,0,1,12.158,16.369ZM7.1,33.145H17.428a52.673,52.673,0,0,0,1.314,10.218,42.485,42.485,0,0,0-6.6,2.789A24.028,24.028,0,0,1,7.1,33.145Zm7.6,15.81a37.529,37.529,0,0,1,5.042-2.065,28.005,28.005,0,0,0,3.527,7.268A24.5,24.5,0,0,1,14.706,48.955Zm8.582-3.031a37.283,37.283,0,0,1,6.1-.818V55C27.083,53.782,24.844,50.456,23.288,45.924Zm9.856,9.025V45.093a37.739,37.739,0,0,1,6.034.8C37.65,50.4,35.424,53.715,33.145,54.949Zm6.034-.764a27.688,27.688,0,0,0,3.554-7.308,36.639,36.639,0,0,1,5.1,2.092A24.544,24.544,0,0,1,39.179,54.184Zm11.2-8.019a40.851,40.851,0,0,0-6.665-2.816,52.533,52.533,0,0,0,1.314-10.2H55.431A23.919,23.919,0,0,1,50.376,46.165Z',  transform:"translate(-3.375 -3.375)",  fill: '#ffffff', title: 'Website'},
            
            
            ]
       }
    },
    methods: {
        checkId(id){

            // var id = event.target.getAttribute('data-id')
            this.id = id
        }
    }

}
</script>

<style>

</style>
<template>
  
       <Navbar class="w-full z-100">
      <router-link :to="{name: 'Home'}">
      <div >
          <img class="w-12 md:w-24 -pl-16 md:pl-8 pt-4" src="@/assets/logo.png" alt="">
          <p class="text-center invisible md:visible text-xs font-medium text-blue ml-6 -mt-4">WeGoNetwork</p>
      </div>
</router-link>
      <nav class="lg:flex space-x-10 py-6 px-2 hidden md:hidden">
        <router-link :to="{name: 'Home'}">Home</router-link>

        
    <div class="navbar">
      <div class="dropdown1">
    <button class="dropbtn">Platforms 
    </button>
    <div class="dropdown-content1">
      <router-link :to="{name: 'Iptv'}">IPTV</router-link>
      <router-link :to="{name: 'Ott'}">OTT</router-link>
      <router-link :to="{name: 'Podcast'}">Podcast</router-link>
    </div>
  </div> 
</div>

 <div class="navbar">
      <div class="dropdown1">
    <button class="dropbtn">Resources 
    </button>
    <div class="dropdown-content1">
      <router-link :to="{name: 'Faq'}">FAQ</router-link>
      <router-link :to="{name: 'Ott'}">Help & Support</router-link>
    </div>
  </div> 
</div>

        
        <router-link :to="{name: 'About'}">About us</router-link>
        <router-link :to="{name: 'Contact'}">Contact</router-link>
        <div class="space-x-3 lg:pl-60">
           <router-link :to="{name: 'Login'}">LOGIN</router-link>
           <router-link :to="{name: 'Signup'} " class="bt">SIGN UP</router-link> 
        </div>  
      </nav>


       <div class="navbar mt-8 lg:hidden  mr-16 md:mr-24">
      <div class="dropdown1 transition-all duration-300" :class="{'-ml-32 md:-ml-56': menu===true}">
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="#0080FF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg> 
    </button>
    <div v-show="menu" class="dropdown-content1 w-full">
     <button @click="$router.push({name: 'Home'})" class="w-full">Home</button> 
     <button @click="$router.push({name: 'Iptv'})" class="w-full">Iptv</button> 
     <button @click="$router.push({name: 'Podcast'})" class="w-full">Podcast</button> 
     <button @click="$router.push({name: 'Ott'})" class="w-full">OTT</button> 
     <button @click="$router.push({name: 'About'})" class="w-full">About</button> 
     <button @click="$router.push({name: 'Faq'})" class="w-full">FAQ</button> 
     <button @click="$router.push({name: 'Contact'})" class="w-full">Help</button>
      <button @click="$router.push({name: 'Login'})" class="w-full">LOGIN</button>
     <button @click="$router.push({name: 'Signup'})" class="w-full">SIGN UP</button>
     <button @click="$router.push({name: 'Contact'})" class="w-full">CONTACT US</button> 
    </div>
  </div> 
</div>

    </Navbar>
    <div :class="{'overlay':menu===true}"></div>
    <h4 class="text-center text-gray font-bold text-lg md:text-2xl mt-8 border-b-2 shadow-xl tracking-normal py-6 border-blue -z-1">PRICING/PLAN</h4>

  
    <div class="grid grid-cols-1 lg:grid-cols-6 grid-flow-row my-20 mx-8 md:mx-10 gap-4 -z-1">

        <!--podcast -->

        <div class="col-span-4 w-full" v-if="currentRoute === '/35' ||currentRoute === '/45' || currentRoute === '/80'">
            <h1 class="text-center md:text-left text-gblue text-xl font-semibold">Your plan includes</h1>
            <div class="flex flex-wrap gap-y-8  gap-x-4 mt-10">

                <div v-show="currentRoute==='/35'" class="flex-grow grid md:grid-cols-3 grid-cols-1 gap-8">
                  <div>
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Server</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>1000 viewers</li>
                        <li>1000 Traffic</li>
                        <li>Online Radio Station Automation</li>
                    </ul>
                  </div>

                  <div>
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Features</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>Analytics</li>
                        <li>Easy Call To Action</li>
                        <li>Audio Stream</li>
                        <li>Simultaneously stream to multiple endpoints</li>
                        <li>Radio Widget</li>
                        <li>one station</li>
                    </ul>
                  </div>

                  

                <div class="">
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Add-ons</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>Server Downtime Monitoring</li>
                        <li>Twitter and Tunein , Alexa  Addons</li>
                        <li>App</li>
                    </ul>
                
                </div>
               

            </div>
                <div v-show="currentRoute==='/45'" class="flex-grow grid md:grid-cols-3 grid-cols-1 gap-8">

                  <div>
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Server</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>1500 Viewers</li>
                        <li>1500 Traffic</li>
                        <li>Online Radio Station Automation</li>
                    </ul>
                    </div>

                    <div>
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Features</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>Live Video Stream</li>
                        <li>Audio Stream</li>
                        <li>Simultaneously stream to multiple endpoints</li>
                        <li>Radio Widget</li>
                        <li>Am and Fm 2 station</li>
                    </ul>
                    </div>

                     <div class="">
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Add-ons</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>Server Downtime Monitoring</li>
                        <li>Twitter and Tunein , Alexa  Addons</li>
                        <li>App</li>
                    </ul>
                
                </div>
                
                </div>

                 <div v-show="currentRoute==='/80'" class="flex-grow grid md:grid-cols-3 grid-cols-1 gap-8">

                   <div>
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Server</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>Unlimited Traffic</li>
                        <li>Unlimited Viewers</li>
                        <li>Online Radio Station Automation</li>
                    </ul>
                    </div>

                    <div>
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Features</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>Analytics</li>
                        <li>Livestream</li>
                        <li>Audio Stream</li>
                        <li>Simultaneously stream to multiple endpoints</li>
                        <li>Radio Widget</li>
                        <li>3 stations</li>
                        <li>Advertise</li>
                    </ul>
                    </div>

                     <div class="">
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Add-ons</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>Server Downtime Monitoring</li>
                        <li>Twitter and Tunein , Alexa  Addons</li>
                        <li>App</li>
                    </ul>
                
                </div>
                

                </div>
            </div>

        </div>





<!-- IPTV -->

<div class="col-span-4 w-full" v-else-if="currentRoute === '/99' ||currentRoute === '199' || currentRoute === '499'">
            <h1 class="md:text-left text-center text-blue text-lg font-semibold">Your plan includes</h1>
            <div class="flex flex-wrap gap-y-8 gap-x-2 mt-10  grid md:grid-cols-2 grid-cols-1 gap-8">
                <div v-show="currentRoute==='/99'" class="flex-grow">

                  <div>
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">PRO</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>Full HD streaming and cloud recording</li>
                        <li>Stream to any virtual event platform</li>
                        <li>Privacy protection</li>
                        <li>Simultaneously stream to multiple endpoints</li>
                        <li>Stream directly to social media</li>
                        <li>1 Channel</li>
                        <li>Video Widget</li>
                        <li>Mulit-cross Platform link</li>
                        <li>User Management </li>
                        <li>Privacy protection </li>
                        <li>Pre-recorded and Live </li>
                        <li>WebPlayer</li>
                        <li>Dashboard</li>
                        <li>Custom RTMP settings</li>
                        <li>Calls-to-Action</li>
                    </ul>
                    </div>

                  </div>


                <div v-show="currentRoute==='199'" class="flex-grow">
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">PREMIUM</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li class="font-bold text-red">Everything in Pro +</li>
                        <li>Video creation with custom branding</li>
                        <li>Player calls-to-action</li>
                        <li>Lead generation</li>
                        <li>Showcase SEO</li>
                        <li>Google Analytics</li>
                        <li>Live stream to multiple destination</li>
                        <li>3 channels</li>
                        <li>VOD , AVOD</li>
                        <li>Manage recorded video content</li>
                        <li>Base Apps branding option</li>
                    </ul>
                </div>

                <div v-show="currentRoute==='499'" class="flex-auto">
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">BUSINESS</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                       <li class="font-bold text-red">Everything in Premium +</li>
                        <li>5 channels</li>
                        <li>Channel customization and password protection</li>
                        <li>custom branding</li>
                        <li>Podcasting live</li>
                        <li>Bases App branding</li>
                    </ul>
                </div>

                 <div class="">
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Stream To Any Platform</h2>
                    <p class="text-sm mt-4 "></p>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                       <li class="font-bold text-blue">Studio lets you send your stream to any player that supports RTMP.</li>
                       <li>Full HD streaming and cloud recording</li>
                        <li>Stream to any virtual event platform</li>
                        <li>Simultaneously stream to multiple endpoints</li>
                        <li>Custom RTMP settings</li>
                        <li>WebPlayer</li>
                    </ul> 

                </div>
               
            </div>

        </div>




    <!--OTT -->

<div class="col-span-4 w-full" v-else-if="currentRoute === '125' ||currentRoute === '250' || currentRoute === '500'">
            <h1 class="md:text-left text-center text-blue text-lg font-semibold">Your plan includes</h1>
            <div class="flex flex-wrap gap-y-8  gap-x-2 mt-10">
                <div class="flex-grow">
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Server</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>HD view</li>
                        <li>Unlimited uploads</li>
                        <li>Channel customization</li>
                    </ul>
                
            </div>
                <div class="flex-grow">
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Features</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>Online video Control Panel</li>
                        <li>Movie Stream Automation</li>
                        <li>Easy Movie Stream Connection</li>
                    </ul>
                
                </div>

                <div class="flex-auto">
                    <h2 class="text-red text-xl font-semibold mb-4 text-center md:text-left">Add-ons</h2>
                    <ul class="leading-8 list-outside list-none text-gray text-sm">
                        <li>WebPlayer Page & Radio Player</li>
                        <li>Server Downtime Monitoring</li>
                        <li>Twitter and Tunein Addons</li>
                    </ul>
                
                </div>
               
            </div>

        </div>





    <div class="border-0 border-yellow shadow-2xl col-span-6 md:col-span-2 px-4 w-full py-4">
                    <h1 class="font-bold text-left text-lg text-deep-gray mb-8">ORDER SUMMARY</h1>
                    <p class="px-2 py-2 bg-blue text-white font-semibold text-sm" v-show="currentRoute === '/35'">Radio/Podcast server - (128kbps) <span class="ml-6">$ {{id}}</span></p>
                    
                    <p class="px-2 py-4 bg-blue text-white font-semibold text-sm" v-show="currentRoute === '/45'">Radio/Podcast server
                    <input type="radio"> 128kbps 
                    <input type="radio"> 320kbps
                     <span class="ml-6">$ {{id}}</span></p>

                    <p class="px-2 py-4 bg-blue text-white font-semibold text-sm" v-show="currentRoute === '/80'">Radio/Podcast server - (320kbps) <span class="ml-6">$ {{id}}</span></p>

                    <p class="px-2 py-4 bg-blue text-white font-semibold text-sm" v-show="currentRoute === '/99' ||currentRoute === '199' || currentRoute === '499' || currentRoute === '125' ||currentRoute === '250' || currentRoute === '500'">IPTV/Livestream server - (50Mbps) <span class="ml-6">$ {{id}}</span></p>

                    

                    <h3 class="text-deep-gray text-sm font-semibold my-4 mx-2">Billing Cycle</h3>
                    <form action="">
                    <input type="radio" @change="calculateTotal"  value=1 name="monthly" id="monthly"  class="active:text-blue rounded mx-6 text-yellow" v-model="billingForm.cycle">
                    <label for="monthly" class="text-deep-gray font-semibold text-sm">Monthly</label>

                    <input type="radio" @change="calculateTotal" value="12" name="yearly" id="yearly"  class="active:text-blue rounded mx-6 text-yellow" v-model="billingForm.cycle">
                    <label for="yearly" class="text-deep-gray font-semibold text-sm">12 Months</label>

                    <p v-show="billingForm.cycle==='12'" class="text-lg font-bold text-deep-gray mt-6">Amount: <span class="ml-24">$ {{amount}}</span></p>

                    <p v-show="billingForm.cycle==='12'" class="text-lg font-bold text-red mt-6">discount: <span class="ml-24">$ {{discount}}</span></p>

                    <p class="text-lg font-bold text-gblue mt-6">Total: <span class="ml-40 font-bold">$ {{total}}</span></p>

                    <button type="button" class="bg-yellow rounded rounded-lg py-1 px-2 font-bold text-sm text-white my-6 ml-24 md:ml-16 lg:ml-60 " @click="handleForm">CONTINUE</button>
                    </form>

                    
            </div>
    </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components: {Navbar},
    props: ['id'],
    data(){
        return{
            menu: false,
            currentRoute: 0,
            price: this.$route.params.id,
            total: 0,
            discount: 0,
            amount: 0,
            billingForm: {
                cycle: ''
            }
        }
    },
    mounted(){
        var str = this.$route.path
            var res = str.slice(-3)
            
            
            this.currentRoute = res
            console.log(this.currentRoute)
    },

    methods: {
        handleForm(){
            this.$router.push({name: 'Signup'})
        },
        showMenu(){
        this.menu = !this.menu
      }
    },
    computed: {
        calculateTotal(){

          if(this.billingForm.cycle=== "12"){
              this.amount = (12 * this.price).toLocaleString('en-US')
              let cut = 12 * this.price * 0.1
              this.discount = (cut.toFixed(1)).toLocaleString('en-US')
              this.total = ((12 * this.price)  - this.discount).toLocaleString('en-US') 
          }else {           
            this.total = parseInt( this.billingForm.cycle, 10) * this.price
             }


          }
    }

}

</script>

<style scoped>
.overlay {
background: rgba(0, 0, 0, 0.3);
background-repeat: no-repeat;
object-fit: fill;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
object-fit: fill;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1;
}
nav>a, div>a {
  color: #0080FF;
  font-size: 14px;
  font-weight: 500;
}
 .bt {
   background-color: #0080FF;
   color: white;
   padding: 8px;
   border-radius: 4px;
 }

 .navbar {
  overflow: hidden;
 
}

.navbar a {
  float: left;
  font-size: 14px;
  color: #0080FF;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
}

.dropdown1, .dropdown2 {
  float: left;
  overflow: hidden;
}

.dropdown1 .dropbtn {
  font-size: 14px;  
  border: none;
  outline: none;
  color: #0080FF;
  font-weight: 500;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

/* .navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
} */

.dropdown-content1 {
  display: none;
  position: absolute;
  background-color: #0080FF;
  border-radius: 6px;
  
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
}

.dropdown-content1 a {
  float: none;
  color: white;
  font-weight: 500;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content1 button {
  float: none;
  color: white;
  padding: 12px 12px 12px 50px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 1rem;
}
.dropdown-content1 a:hover {
  background-color: #0072E4;
}

.dropdown1:hover .dropdown-content1 {
  display: block;
}
@media (max-width: 640px) { 

.dropdown-content1 button {
  padding: 12px 12px 12px 50px;
  font-size: 1rem;
    }

.dropdown1, .dropdown2 {
  position: absolute;
}
}


@media (max-width: 768px) { 
/* .dropdown-content1 {
  display: none;
  position: absolute;
  
  background-color: #0080FF;
  border-radius: 6px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
} */

.dropdown-content1 {
  display: none;
  position: relative;
  background-color: #0080FF;
  border-radius: 6px;
  z-index: 999;
  width: 100vw;

  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
}

.dropdown1, .dropdown2 {
  
  position: absolute;
}

.dropdown1 .dropbtn {
  position: relative;
 
}

.dropdown-content1 button {
  padding: 12px 12px 12px 70px;
  font-size: 1rem;
}
}
*, *:before, *:after {
	box-sizing: border-box;
}
</style>
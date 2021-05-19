<template>
  
       <Navbar>
      <router-link :to="{name: 'Home'}">
      <div class="w-24 pl-8 pt-5">
          <img src="../assets/logo.png" alt="">
      </div>
      </router-link>
      <nav class="lg:flex space-x-10 py-6 px-6 mr-20 hidden md:hidden">
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

        
        <router-link :to="{name: 'About'}">About us</router-link>
        <div class="space-x-6 pl-96">
           <router-link :to="{name: 'Login'}">LOGIN</router-link>
           <router-link :to="{name: 'Signup'} " class="bt">SIGN UP</router-link> 
        </div>  
      </nav>


<div class="navbar mt-8 lg:hidden">
    <div class="dropdown1 transition-all duration-300">
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg> 
    </button>
    <div v-show="menu" class="dropdown-content1 transition-all duration-300">
      <router-link :to="{name: 'Iptv'}">Home</router-link>
      <router-link :to="{name: 'Ott'}">Platform</router-link>
      <router-link :to="{name: 'Podcast'}">About</router-link>
    </div>
  </div> 
</div>
    </Navbar>

    <h4 class="text-center text-gray font-bold text-2xl mt-8 border-b-2 shadow-xl tracking-wider py-6 border-blue">Pricing/Plan</h4>

  
    <div class="grid grid-cols-2 md:grid-cols-6 grid-flow-row my-20 mx-5 md:mx-10 gap-4">

        <!--podcast -->

        <div class="col-span-4 w-full" v-if="currentRoute === '100' ||currentRoute === '236' || currentRoute === '439'">
            <h1 class="md:text-left text-center text-blue text-lg font-semibold">Your plan includes</h1>
            <div class="flex gap-x-2 mt-10">
                <div class="flex-grow">
                    <h2 class="text-deep-gray text-xl font-semibold mb-0.5 text-left">Server</h2>
                    <ul class="leading-8 list-inside list-disc text-gray text-sm">
                        <li>Unlimited Traffic</li>
                        <li>Unlimited Listeners</li>
                        <li>Unlimited Audio DJ Disc Space</li>
                    </ul>
                
            </div>
                <div class="flex-grow">
                    <h2 class="text-deep-gray text-xl font-semibold mb-0.5 text-left">Features</h2>
                    <ul class="leading-8 list-inside list-disc text-gray text-sm">
                        <li>Online Radio Control Panel</li>
                        <li>AutoDJ Stream Automation</li>
                        <li>Easy Live Stream Connection</li>
                    </ul>
                
                </div>

                <div class="flex-auto">
                    <h2 class="text-deep-gray text-xl font-semibold mb-0.5 text-left">Add-ons</h2>
                    <ul class="leading-8 list-inside list-disc text-gray text-sm">
                        <li>WebPlayer Page & Radio Player</li>
                        <li>Server Downtime Monitoring</li>
                        <li>Twitter and Tunein Addons</li>
                    </ul>
                
                </div>
               
            </div>

        </div>





<!-- IPTV -->

<div class="col-span-4 w-full" v-else-if="currentRoute === '225' ||currentRoute === '350' || currentRoute === '600'">
            <h1 class="text-left text-blue text-lg font-semibold">Your plan includes</h1>
            <div class="flex gap-x-2 mt-10">
                <div class="flex-grow">
                    <h2 class="text-deep-gray text-xl font-semibold mb-0.5 text-left">Server</h2>
                    <ul class="leading-8 list-inside list-disc text-gray text-sm">
                        <li>Unlimited Traffic</li>
                        <li>Unlimited Viewers</li>
                        <li>Analytics</li>
                    </ul>
                
            </div>
                <div class="flex-grow">
                    <h2 class="text-deep-gray text-xl font-semibold mb-0.5 text-left">Features</h2>
                    <ul class="leading-8 list-inside list-disc text-gray text-sm">
                        <li>Easy subscription settings</li>
                        <li>Live video Stream Automation</li>
                        <li>Easy Live Stream Connection</li>
                    </ul>
                
                </div>

                <div class="flex-auto">
                    <h2 class="text-deep-gray text-xl font-semibold mb-0.5 text-left">Add-ons</h2>
                    <ul class="leading-8 list-inside list-disc text-gray text-sm">
                        <li>WebPlayer Page & Radio Player</li>
                        <li>Server Downtime Monitoring</li>
                        <li>Twitter and Tunein Addons</li>
                    </ul>
                
                </div>
               
            </div>

        </div>




    <!--OTT -->

<div class="col-span-4 w-full" v-else-if="currentRoute === '125' ||currentRoute === '250' || currentRoute === '500'">
            <h1 class="text-left text-blue text-lg font-semibold">Your plan includes</h1>
            <div class="flex gap-x-2 mt-10">
                <div class="flex-grow">
                    <h2 class="text-deep-gray text-xl font-semibold mb-0.5 text-left">Server</h2>
                    <ul class="leading-8 list-inside list-disc text-gray text-sm">
                        <li>HD view</li>
                        <li>Unlimited uploads</li>
                        <li>Channel customization</li>
                    </ul>
                
            </div>
                <div class="flex-grow">
                    <h2 class="text-deep-gray text-xl font-semibold mb-0.5 text-left">Features</h2>
                    <ul class="leading-8 list-inside list-disc text-gray text-sm">
                        <li>Online video Control Panel</li>
                        <li>Movie Stream Automation</li>
                        <li>Easy Movie Stream Connection</li>
                    </ul>
                
                </div>

                <div class="flex-auto">
                    <h2 class="text-deep-gray text-xl font-semibold mb-0.5 text-left">Add-ons</h2>
                    <ul class="leading-8 list-inside list-disc text-gray text-sm">
                        <li>WebPlayer Page & Radio Player</li>
                        <li>Server Downtime Monitoring</li>
                        <li>Twitter and Tunein Addons</li>
                    </ul>
                
                </div>
               
            </div>

        </div>





    <div class="border-0 border-yellow shadow-2xl col-span-2 px-4 w-full py-4">
                    <h1 class="font-bold text-center text-lg text-deep-gray mb-4">ORDER SUMMARY</h1>
                    <p class="px-4 py-1 bg-blue text-white text-xs" v-show="currentRoute === '100' ||currentRoute === '236' || currentRoute === '439'">Radio/Podcast server - (128kbps) <span class="ml-12">$ {{id}}</span></p>

                    <p class="px-4 py-1 bg-blue text-white text-xs" v-show="currentRoute === '225' ||currentRoute === '350' || currentRoute === '600' || currentRoute === '125' ||currentRoute === '250' || currentRoute === '500'">IPTV/Livestream server - (128kbps) <span class="ml-12">$ {{id}}</span></p>

                    

                    <h3 class="text-deep-gray text-sm font-semibold my-4 mx-2">Billing Cycle</h3>
                    <form action="">
                    <input type="radio" @change="calculateTotal"  value=1 name="monthly" id="monthly"  class="active:text-blue rounded mx-3 text-yellow" v-model="billingForm.cycle">
                    <label for="monthly" class="text-deep-gray font-semibold text-sm">Monthly</label>

                    <input type="radio" @change="calculateTotal" value="12" name="yearly" id="yearly"  class="active:text-blue rounded mx-3 text-yellow" v-model="billingForm.cycle">
                    <label for="yearly" class="text-deep-gray font-semibold text-sm">12 Months</label>

                    <input type="radio" @change="calculateTotal" value="24" name="bi-yearly" id="bi-yearly"  class="active:text-blue rounded mx-3 text-yellow" v-model="billingForm.cycle">
                    <label for="bi-yearly" class="text-deep-gray font-semibold text-sm">24 Months</label>

                    <p class="text-lg font-bold text-gray mt-6">Total due today: <span class="ml-28">$ {{total}}</span></p>

                    <button type="button" class="bg-yellow rounded rounded-lg py-1 px-2 font-bold text-sm text-white my-6 ml-24 md:ml-60 " @click="handleForm">CONTINUE</button>
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
            this.total = parseInt( this.billingForm.cycle, 10) * this.price
            
           
            
            
        }
    }

}

</script>

<style>
nav>a, div>a {
  color: #0080FF;
  font-size: 14px;
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
  
  text-decoration: none;
}

.dropdown1 {
  float: left;
  overflow: hidden;
}

.dropdown1 .dropbtn {
  font-size: 14px;  
  border: none;
  outline: none;
  color: #0080FF;
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
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content1 a {
  float: none;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content1 a:hover {
  background-color: #0072E4;
}

.dropdown1:hover .dropdown-content1 {
  display: block;
}

</style>
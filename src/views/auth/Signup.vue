<template>
<Navbar class="w-full shadow-md mb-6">
    <router-link :to="{name: 'Home'}">
      <div class="w-24 pl-8 pt-5">
          <img src="@/assets/logo.png" alt="">
      </div>
      </router-link>

      <nav class="lg:flex space-x-10 py-6 px-6 mr-20 hidden">
        <router-link :to="{name: 'Home'}">Home</router-link> 


<div class="navbar">
    <div class="dropdown">
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
      <div class="dropdown">
    <button class="dropbtn">Resources 
    </button>
    <div class="dropdown-content1">
      <router-link :to="{name: 'Faq'}">FAQ</router-link>
      <router-link :to="{name: 'Ott'}">Help & Support</router-link>
    </div>
  </div> 
</div>

        <router-link :to="{name: 'About'}">About us</router-link>
        <div class="space-x-6 pl-96">
           <router-link :to="{name: 'Login'}">LOGIN</router-link>
           <router-link :to="{name: 'Signup'} " class="bt">SIGN UP</router-link> 
        </div>  
      </nav>

      <div class="navbar mt-8 lg:hidden mr-16 md:mr-24 z-0">
      <div class="dropdown1 transition-all duration-300">
    <button @click="showMenu" class="dropbtn focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
        <path id="Icon_material-menu" data-name="Icon material-menu" d="M4.5,25h24V22.333H4.5Zm0-6.667h24V15.667H4.5ZM4.5,9v2.667h24V9Z" transform="translate(-4.5 -9)" fill="#0080ff"/>
        </svg>

    </button>
    <div v-show="menu" class="dropdown-content1 w-full">
      <button class="w-full"><router-link :to="{name: 'Home'}">Home</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Iptv'}">Iptv</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Podcast'}">Podcast</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">OTT</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'About'}">About</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Faq'}">FAQ</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">Help</router-link></button>
     <button class="w-full"><router-link :to="{name: 'Login'}">LOGIN</router-link></button>
     <button class="w-full"><router-link :to="{name: 'Signup'}">SIGN UP</router-link></button>
    </div>
  </div> 
</div>
</Navbar>


<section class="flex  ">
  <div class="bg-white py-16 px-20 mx-auto my-auto shadow-lg">
    <h1 class="text-blue text-2xl mb-4">Sign up</h1>
    
<form class="w-100 md:w-80">

<div class="focus-within:none">
    <input type="text" required v-show="! recovery" v-model="name" class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-sm mb-4 focus:ring-blue-600 border-b-2 border-light-gray  py-2 px-6 w-full" placeholder="Full name">
  </div>

  <div class="focus-within:none">
    <input type="email" required v-show="! recovery" v-model="email" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-b-2 text-sm text-gray-400  border-light-gray  py-2 px-6 w-full" placeholder="Email address">
  </div>

  <div class="focus-within:none">
    <input type="password" required v-show="! recovery" v-model="password" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-6 text-sm mb-4 focus:ring-blue-600 border-b-2 border-light-gray  py-2 px-6 w-full" placeholder="Password">
  </div>

  <div class="focus-within:none">
    <input type="password" required v-show="! recovery" v-model="confirm" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-b-2 text-sm text-gray-400 mb-4 border-light-gray  py-2 px-6 w-full" placeholder="Confirm password">
  </div>

   <div v-show="! recovery" class="focus-within:none grid grid-cols-1 gap-y-2 md:grid-cols-3 my-4">
    <div>
      <input v-model="iptv" type="checkbox" name="IPTV" id="IPTV" value="IPTV" />
        <label class="text-base text-deep-gray mx-4 my-6 md:mx-1" for="IPTV">IPTV</label>
    </div>
    <div>
      <input v-model="ott" type="checkbox" name="OTT" id="OTT" value="OTT" />
        <label class="text-base text-deep-gray mx-4 my-6 md:mx-1" for="OTT">OTT</label>
    </div>
    <div class="">
      <input v-model="radio" type="checkbox" name="RADIO" id="RADIO" value="RADIO" />
        <label class="text-base text-deep-gray mx-4 my-6 md:mx-1" for="RADIO">Podcast</label>
    </div>
    <!-- <p>{{iptv}}</p>
    <p>{{ott}}</p>
    <p>{{radio}}</p> -->
    <!-- <select type="select" required v-show="! recovery" v-model="platform" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-b-2 text-sm text-gray-400 tracking-widest inline-block mb-4 border-light-gray  py-2 px-4 w-full">
        <option class="text-center text-deep-gray text-sm">Select</option>
        <option class="text-center text-deep-gray text-sm" value="Iptv"><input type="checkbox" name="vehicle" id="option1" value="Iptv" />
        <label for="option1">Platform</label></option>
        <option class="text-center text-deep-gray text-sm">OTT</option>
        <option class="text-center text-deep-gray text-sm">Radio & Podcast</option>
    </select> -->
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg class="w-4 h-4 px-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
  </div>
  <!-- <div>{{platform}}</div> -->


    <button class="form-btn w-full mt-4  bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>
</form>

    <button v-show="recovery" @click="handleClick" class="bg-none text-blue  text-sm pt-4 focus:outline-none">Login</button>
   <p class="text-gray text-sm text-center mt-4">Already a member? <button @click="handleLogin" class="bg-none text-blue  text-sm pt-4 focus:outline-none">Login</button></p> 
  </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  data(){
    return{
      menu: false,
      name: '',
      email: '',
      password: '',
      confirm: '',
      iptv: '',
      ott: '',
      radio: '',
      recovery: false,
      }
  },

  methods: {
      handleClick(){
          this.recovery = !this.recovery
          
      },
      handleLogin(){
          this.$router.push({name: 'Login'})
      },
      showMenu(){
        this.menu = !this.menu
      }
  },
  components: {Navbar}

}
</script>

<style scoped>
  .form-btn {
    background-image:linear-gradient(to right bottom, #1B3BD8, #176CE0, #0B92E7, #0BB6EB, #00E0F2);
  } 

  textarea:focus, input:focus {
    border: none;
    color:  #0BB6EB;
  }

  nav> a, div>a {
      color: #0080FF;
      font-size: 14px;
      font-weight: 500;
  }

  .bt{
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
  color: white;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
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
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
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

.dropdown-content1 a:hover {
  background-color: #0072E4;
}

.dropdown:hover .dropdown-content1 {
  display: block;
}


@media (min-width: 768px) { 
/* .dropdown-content1 {
  display: none;
  position: absolute;
  
  background-color: #0080FF;
  border-radius: 6px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
} */

 #hero > figure {
  animation: imageAnimation 30s linear infinite 0s;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center center;
  color: transparent;
  max-height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  max-width: 100%;
  z-index: 1;
}


 }
</style>
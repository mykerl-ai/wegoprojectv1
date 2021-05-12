<template>
<Navbar>
    <router-link :to="{name: 'Home'}">
      <div class="w-24 pl-8 pt-5">
          <img src="@/assets/logo.png" alt="">
      </div>
      </router-link>
      <nav class="flex space-x-10 py-6 px-6 mr-20">
        <router-link :to="{name: 'Home'}">Home</router-link> 


<div class="navbar">
    <div class="dropdown">
    <button class="dropbtn">Platforms 
    </button>
    <div class="dropdown-content">
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
</Navbar>
<section class="flex  ">
  <div class="bg-white py-16 px-20 mx-auto my-auto shadow-lg">
    <h1 class="text-blue text-2xl mb-4">Sign up</h1>
    
<form class="w-80">

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

   <div class="focus-within:none">
    
    <select type="select" required v-show="! recovery" v-model="platform" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-b-2 text-sm text-gray-400 tracking-widest inline-block mb-4 border-light-gray  py-2 px-4 w-full">
        <option class="text-center text-deep-gray text-sm"></option>
        <option class="text-center text-deep-gray text-sm" value="Iptv">IPTV & Live stream</option>
        <option class="text-center text-deep-gray text-sm">OTT</option>
        <option class="text-center text-deep-gray text-sm">Audio Podcast</option>
    </select>
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
      name: '',
      email: '',
      password: '',
      confirm: '',
      platform: 'Iptv',
      recovery: false,
      }
  },

  methods: {
      handleClick(){
          this.recovery = !this.recovery
          
      },
      handleLogin(){
          this.$router.push({name: 'Login'})
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
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

/* .navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
} */

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #0080FF;
  border-radius: 6px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #1B3BD8;
}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>
<template>
    
  <div id="hero" ref="hit" class="bg-hero-pattern  bg-contain h-screen bg-blue bg-blend-overlay">
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
       
    <Navbar>
      <router-link :to="{name: 'Home'}">
      <div class="w-24 pl-8 pt-5">
          <img src="../assets/logo.png" alt="">
      </div>
</router-link>
      <nav class="flex space-x-10 py-6 px-6 mr-20">
        <router-link :to="{name: 'Home'}">Home</router-link>

        
     
    <div class="navbar">
      <div class="dropdown1">
    <button class="dropbtn"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg> 
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
      <router-link :to="{name: 'Iptv'}">FAQ</router-link>
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
    </Navbar>

    <div class="fwd mt-32 ml-60 w-50 max-w-xl">
      <slot></slot>
      <p class="mt-4 tracking-widest leading-9 text-sm text-white font-regular">Build or Upgrade to a top-notch IPTV/OTT solution that is modern, and offers a High-end user experience across all major platforms..</p>
      <div class="mt-6">
          <button class="bg-yellow  py-3 px-6  text-white font-semibold text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50">Join now</button>
           <button @click="handleClick" class="border border-yellow-400 py-2 px-6 ml-6  text-white font-semibold text-sm rounded-full focus:outline-none">TALK TO US</button>
      </div>
    </div>
  </div>
  
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    components: {Navbar},
    methods: {
      handleClick(){
        this.$router.push({name: 'Contact'})
      }
    },
   

    computed: {
        
    }
}
</script>

<style scoped>
     #hero{
        /* background-image:linear-gradient(to right bottom, #1B3BD8, #176CE0, #0B92E7, #0BB6EB, #00E0F2), url(../assets/images/radio.jpg); */
        position: relative;
         
    } 
    .fwd {
        position: absolute;
        z-index: 10;
    }
    #hero > figure {
  animation: imageAnimation 30s linear infinite 0s;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center center;
  color: transparent;
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1;
}

#hero > figure:nth-child(1) { background-image: url('../assets/images/radio.jpg'); }

#hero > figure:nth-child(2) {
  animation-delay: 6s;
  background-image: url('../assets/images/radio1.jpg');
}

#hero > figure:nth-child(3) {
  animation-delay: 12s;
  background-image: url('../assets/images/iptv.jpg');
}

#hero > figure:nth-child(4) {
  animation-delay: 18s;
  background-image: url('../assets/images/radio.jpg');
}

#hero > figure:nth-child(5) {
  animation-delay: 24s;
  background-image: url('../assets/images/radio1.jpg');
}

@keyframes 
imageAnimation {  0% {
 animation-timing-function: ease-in;
 opacity: 0;
}
 8% {
 animation-timing-function: ease-out;
 opacity: .2;
}
 17% {
 opacity: .2
}
 25% {
 opacity: 0
}
 100% {
 opacity: 0
}
}

nav>a, div>a {
  color: white;
  font-size: 14px;
}
 .bt {
   background-color: white;
   color: rgba(59, 130, 246, var(--tw-bg-opacity));;
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

.dropdown1 {
  float: left;
  overflow: hidden;
}

.dropdown1 .dropbtn {
  font-size: 14px;  
  border: none;
  outline: none;
  color: white;
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
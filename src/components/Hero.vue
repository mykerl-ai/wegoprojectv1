<template>
    
  <div id="hero" ref="hit" class="bg-hero-pattern w-full mx-0 px-0 sticky md:bg-contain md:h-screen fixed h-screen user1 bg-blend-overlay">
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
       
    <Navbar class="w-full z-100">
      <router-link :to="{name: 'Home'}">
      <div >
          <img class="w-12 md:w-24 -pl-16 md:pl-2 pt-4" src="../assets/WeGo.png" alt="">
          <p class="text-center invisible md:visible text-xs font-medium text-white ml-6 -mt-1">WeGoNetwork</p>
      </div>
</router-link>
      <nav class="lg:flex space-x-10 py-6   hidden md:hidden">
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
      <div class="dropdown1 transition-all duration-300" :class="{'-ml-44 md:-ml-96': menu===true}">
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
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

    <div :class="{'hidden':menu===true}" class="fwd mt-32 lg:mt-32 2xl:mt-60 2xl:ml-96 lg:ml-80 md:ml-32 md:mt-32 px-12 w-50 2xl:w-full max-w-xl" >

      <slot name="header"></slot>

       <slot name="paragraph"></slot>
      
      
      <div class="lg:mt-3 md:mt-8 absolute mt-4">
          <button @click="$router.push({name: 'Signup'})" class="bg-red  py-3 px-6  text-white font-semibold text-xs md:text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50">Join now</button>
           <button @click="handleClick" class="border border-red-400 py-2 px-6 ml-6  text-white font-semibold text-xs md:text-sm rounded-full focus:outline-none">TALK TO US</button>
      </div>
    </div>
  </div>
  
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    data(){
      return{
        menu: false,
      }
    },
    components: {Navbar},
    methods: {
      handleClick(){
        this.$router.push({name: 'Contact'})
      },
      showMenu(){
        this.menu = !this.menu
      }
    },
   

    computed: {
        
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

     #hero{
        /* background-image:linear-gradient(to right bottom, #1B3BD8, #176CE0, #0B92E7, #0BB6EB, #00E0F2), url(../assets/images/radio.jpg); */
        position: relative;
         
    } 
    .fwd {
        position: absolute;
        z-index: 0;
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
  z-index: 0;
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
   color: #f44336;
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

.dropdown1, .dropdown2 {
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
  background-color: #f44336;
  border-radius: 6px;
  
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
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

.dropdown-content1 a {
  float: none;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content1 a:hover {
  background-color: #1C1A1A;
}

.dropdown1:hover .dropdown-content1 {
  display: block;
  margin-bottom: 1200px;
  z-index: 1;
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
  
  background-color: #f44336;
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
  
}
.dropdown-content1 {
  display: none;
  position: relative;
  background-color: #f44336;
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
</style>
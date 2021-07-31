<template>
<Navbar class="w-full z-100">
      <router-link :to="{name: 'Home'}">
      <div >
          <img class="w-12 md:w-32 -pl-16 md:pl-8 pt-4" src="../assets/WeGo1.png" alt="">
          <p class="text-center invisible md:visible text-xs font-medium text-red ml-6 -mt-1">WeGoNetwork</p>
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

        <div class="space-x-3">
        <router-link  :to="{name: 'About'}">About us</router-link>
        <router-link :to="{name: 'Contact'}">Contact</router-link>
        </div>
        <div class="space-x-3 lg:pl-60">
           <router-link :to="{name: 'Login'}">LOGIN</router-link>
           <router-link :to="{name: 'Signup'} " class="bt">SIGN UP</router-link> 
        </div>  
      </nav>


       <div class="navbar mt-8 lg:hidden  mr-16 md:mr-24">
      <div class="dropdown1 transition-all duration-300" :class="{'-ml-32 md:-ml-56': menu===true}">
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
<div class="grid lg:grid-cols-2 grid-cols-1 grid-flow-row -z-1 mt-8">
<section class="flex mx-auto">
  <div class=" py-8 px-4 md:px-20 md:mx-auto my-auto bg-white shadow-lg">
    <h1 class="text-red text-2xl">Get in touch</h1>
    <form class="">
    <div class="focus-within:none">
    <input type="text" v-model="name" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-6 text-sm mb-6 focus:ring-blue-600 border-2 border-light-gray rounded-lg py-3 px-6 w-full" placeholder="Your name">
  </div>

  <div class="focus-within:none">
    <input type="email" v-model="email" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 text-sm text-gray-400 mb-6 border-light-gray rounded-lg py-3 px-6 w-full" placeholder="Your e-mail">
  </div>

  <div class="">
      <textarea name="message" v-model="message" id="" cols="30" rows="5" placeholder="Your message" class="border-2 border-light-gray text-gray-400 text-sm mb-6 rounded-lg py-3 px-6 focus:outline-none focus:ring-2 focus:ring-opacity-50"></textarea>
  </div>
  <button class="form-btn rounded-full focus:outline-none ml-20 md:ml-0 py-3 px-6 bg-blue text-sm text-white">SUBMIT</button>
</form>
  </div>
  </section>

  <section class="details lg:h-screen md:h-100 lg:-mt-32 md:mt-6 mt-6 contact-bar">
    <div class="hidden lg:block">
        <div class="bg-no-repeat rounded-full ml-8 bg-left-top h-24 w-24 contact-bar"></div>
          <div class="bg-no-repeat rounded-full mt-32 ml-48 bg-right-top h-16 w-16 contact-bar"></div>
          <div class="bg-no-repeat rounded-full mt-16 ml-72 bg-right-top h-8 w-8 contact-bar"></div>
          <div class="bg-no-repeat rounded-full mt-4 ml-96 bg-right-top h-16 w-16 contact-bar"></div>
        </div>

        
      <div class="grid grid-rows-3 gap-12 lg:ml-24 ml-24 md:ml-48 lg:-mt-72  mt-12 py-8">
           

        <div class="flex space-x-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20">
        <g id="noun_880089_cc" transform="translate(0)">
          <path id="Shape" d="M19.91,15.946l-.1-.3a2.8,2.8,0,0,0-1.711-1.628L15.463,13.3a2.558,2.558,0,0,0-2.247.591l-.959.948a10.085,10.085,0,0,1-7.091-7.1l.947-.951A2.6,2.6,0,0,0,6.7,4.537l-.72-2.624A2.835,2.835,0,0,0,4.364.188l-.3-.1a2.359,2.359,0,0,0-2.22.525L.41,2.041A2.725,2.725,0,0,0,0,3.017,16.8,16.8,0,0,0,16.937,20a2.7,2.7,0,0,0,1.029-.415l1.419-1.422A2.37,2.37,0,0,0,19.91,15.946Z" fill="#fff"/>
        </g>
        </svg>

        <p class="text-base text-white">+31 0123 4567</p>
        </div>

        <div class="flex space-x-6">

          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14.728" viewBox="0 0 23 14.728">
            <g id="Group" transform="translate(0 -0.099)">
              <path id="Shape" d="M20.125,14.728H2.875a2.981,2.981,0,0,1-1.58-.452L8.58,8.693l1.662,1.483a1.919,1.919,0,0,0,2.516,0L14.42,8.693l7.286,5.583A2.987,2.987,0,0,1,20.125,14.728Zm2.4-1.228h0l-.026-.016L15.265,7.943l7.358-6.563A2.638,2.638,0,0,1,23,2.727V12a2.629,2.629,0,0,1-.475,1.5ZM.476,13.5h0A2.633,2.633,0,0,1,0,12V2.727A2.636,2.636,0,0,1,.377,1.381L7.736,7.943.5,13.483.477,13.5ZM11.5,9.532a.721.721,0,0,1-.467-.149L1.132.563A2.964,2.964,0,0,1,2.875,0h17.25a2.958,2.958,0,0,1,1.743.563l-9.9,8.821A.721.721,0,0,1,11.5,9.532Z" transform="translate(0 0.099)" fill="#fff"/>
            </g>
          </svg>

          <p class="text-base text-white">info@wego.io</p>

        </div>

        <div class="flex space-x-6">

          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 26 22">
            <g id="telegram" transform="translate(0 0)">
            <path id="XMLID_497_" d="M20.879,22a.712.712,0,0,1-.413-.132l-6.023-4.25a1.02,1.02,0,0,0-1.215.033L9.889,20.3a.714.714,0,0,1-1.12-.328L6.45,12.722.459,10.549A.68.68,0,0,1,.452,9.265L25.039.047a.715.715,0,0,1,.811.219.659.659,0,0,1,.135.562L21.572,21.453A.7.7,0,0,1,20.879,22ZM20.213,4.525a.211.211,0,0,0-.109.032L8.4,11.565a1.135,1.135,0,0,0-.515,1.289l1.265,4.324a.3.3,0,0,0,.591-.042l.329-2.371a1.935,1.935,0,0,1,.621-1.165L20.35,4.871A.186.186,0,0,0,20.4,4.66.208.208,0,0,0,20.213,4.525Z" fill="#fff"/>
            </g>
        </svg>


          <p class="text-base text-white">Join us on Telegram</p>
        
        </div>
        </div>
  </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {Navbar},
  data(){
    return{
       menu: false,
      name: '',
      email: '',
      message: '',

    }
    
  },
methods: {
      handleClick(){
        this.$router.push({name: 'Contact'})
      },
      showMenu(){
        this.menu = !this.menu
      }
    },
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

  .form-btn {
background-image: linear-gradient(to right bottom, #f44334, #ed382a, #e52c1f, #de1d13, #d60505);  } 

  textarea:focus, input:focus {
    border: none;
    color:  #0BB6EB;
  }
  
  .contact-bar {
background-image: linear-gradient(to right bottom, #000000, #090909, #131313, #1A1A1A, #202020);} 


  nav> a  {
      color: #f44336;
      font-size: 14px;
  }

div>a {
      color: #FFFFFF;
      font-size: 14px;
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
  color: #f44336;
  position: relative;
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

.dropdown-content1 a {
  float: none;
  color: white;
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
}

@media (max-width: 320px) { 
  
  .dropdown-content1 {
  display: none;
  position: relative;
  background-color: #f44336;
  border-radius: 6px;
  z-index: 999;
  width: 100vw;

  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
}

.dropdown-content1 button {
  padding: 12px 12px 12px 50px;
  font-size: 1rem;
}

.dropdown1, .dropdown2 {
  
  position: absolute;
}

.dropdown1 .dropbtn {
  position: relative;
 
}
}


@media (max-width: 768px) { 
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
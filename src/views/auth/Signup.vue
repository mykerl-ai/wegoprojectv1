<template>
<Navbar class="w-full z-100">
      <router-link :to="{name: 'Home'}">
      <div >
          <img class="w-12 md:w-24 -pl-16 pt-4" src="@/assets/WeGo1.png" alt="">
          <p class="text-center invisible md:visible text-xs font-medium text-red ml-6 -mt-1">WeGoNetwork</p>
      </div>
</router-link>
      <nav class="lg:flex space-x-10 py-6 hidden md:hidden">
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
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="#f44336" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
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
<section class="flex -z-1 mt-8">
  <div class="bg-white py-4 px-4 md:py-16 md:px-20 mx-auto my-auto shadow-lg">
    <h1 class="text-red md:text-left text-center text-xl md:text-2xl mb-12 md:mb-4">Sign up</h1>
    
<form class="w-100 md:w-80" @submit.prevent="">

<div class="focus-within:none">
    <input type="text" required v-show="! recovery" v-model="payload.fullname" class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-sm mb-4 focus:ring-blue-600 border-b-2 border-light-gray  py-2 px-6 w-full" placeholder="Full name">
  </div>

  <div class="focus-within:none">
    <input type="email" required v-show="! recovery" v-model="payload.email" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-b-2 text-sm text-gray-400  border-light-gray  py-2 px-6 w-full" placeholder="Email address">
  </div>

  <div class="focus-within:none">
    <input id="myInput" type="password" required v-show="! recovery" v-model="payload.password" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-6 text-sm mb-4 focus:ring-blue-600 border-b-2 border-light-gray  py-2 px-6 w-full" placeholder="Password"> 
  </div>

  <div class="focus-within:none">
    <input id="myInput1" type="password" required v-show="! recovery" v-model="payload.confirmPassword" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-b-2 text-sm text-gray-400 mb-4 border-light-gray  py-2 px-6 w-full" placeholder="Confirm password">
    <input v-show="! recovery" class="focus:outline-none mb-4 w-3" type="checkbox" @click="myFunction"><span class="text-xs text-gray font-semibold mx-2">show password</span>
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


    <button @click="registerUser()" class="form-btn w-full mt-4  bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>
</form>

    <button v-show="recovery" @click="handleClick" class="bg-none text-red  text-sm pt-4 focus:outline-none">Login</button>
   <p class="text-gray text-sm text-center mt-4">Already a member? <button @click="handleLogin" class="bg-none text-red  text-sm pt-4 focus:outline-none">Login</button></p> 
  </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
  data(){
    return{
      menu: false,
      iptv: '',
      ott: '',
      radio: '',
      recovery: false,

      payload:{
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
        // products:[]
      }
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
      },
      myFunction() {
  var x = document.getElementById("myInput");
  var y = document.getElementById("myInput1");
  if (x.type === "password" && y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
},

      async registerUser() {
        // *Todo: User should be able to select multiple platforms.
        // if(this.iptv){ this.payload.products.push("IPTV") }
        // if(this.ott){ this.payload.products.push("OTT") }
        // if(this.radio){ this.payload.products.push("RADIO") }

        let res = await this.$store.dispatch("mutate", {
          endpoint: "Register",
          data: { input: this.payload },
        });

        if (res.success) {
          toast.success("SignUp Successful");
          this.$router.push({ name: "Panel" });
        }
      }
  },
  components: {Navbar}

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

  nav> a, div>a {
      color: #f44336;
      font-size: 14px;
      font-weight: 500;
  }

  .bt{
      background-color: #f44336;
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
  background-color: #f44336;
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
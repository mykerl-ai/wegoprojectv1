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
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" :fill="{'#0080FF': menu===false, '#FFFFF': menu===true}" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">[]
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
  <div class="bg-white md:py-24 md:px-20 px-4 py-4 mx-auto my-auto shadow-lg">
    <h1 v-show="!recovery" class="text-blue text-center md:text-left text-xl md:text-2xl">Login</h1>
    <h1 v-show="recovery" class="text-blue text-center md:text-left text-lg md:text-2xl">Reset password</h1>

    <form class="w-100 md:w-80" @submit.prevent="">
    <div class="focus-within:none">
    <input type="email" required v-show="!recovery" v-model="login.email" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-6 text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray  py-3 px-6 w-full" placeholder="Your email address">
  </div>

  <div class="focus-within:none">
    <input id="myInput2" type="password" required v-show="!recovery" v-model="login.password" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-b-2 text-sm text-gray-400 mb-6 border-light-gray  py-3 px-6 w-full" placeholder="password">
    <input v-show="! recovery" class="focus:outline-none mb-4 w-3" type="checkbox" @click="myFunction"><span v-show="! recovery" class="text-xs text-gray font-semibold mx-2">show password</span>
  </div>

  
<div class="focus-within:none">
    <input type="email" v-show="recovery" v-model="reset.email" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-6 text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray  py-3 px-6 w-full" placeholder="Your email address">
  </div>

    <button v-show="!recovery" @click="userLogin()" class="form-btn w-full mt-8  bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>
    <button v-show="recovery" @click="resetPassword()" class="form-btn w-full mt-8  bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>
</form>

    <button v-show="!recovery" @click="handleClick" class="bg-none text-blue  text-sm pt-4 focus:outline-none ">Forgot password?</button>

    <p v-show="recovery" class="text-sm text-gray">Back to <button  @click="handleClick" class="bg-none text-blue  text-sm pt-4 focus:outline-none">Login</button></p>
   <p class="text-gray text-sm text-center mt-4">Not on WeGo yet? <button @click="handleSignUp" class="bg-none text-blue  text-sm pt-4 focus:outline-none">Sign Up</button></p> 
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
      recovery: false,
      login: {
        email: '',
        password: '',
      },
      reset: {
        email: ""
      }
    }
  },

  methods: {
      handleClick(){
          this.recovery = !this.recovery
          
      },
      handleSignUp(){
          this.$router.push({name: 'Signup'})
      },
      showMenu(){
        this.menu = !this.menu
      },
       myFunction() {
  var z = document.getElementById("myInput2");
  if (z.type === "password") {
    z.type = "text";
  } else {
    z.type = "password";
  }
},

      async userLogin() {
        let res = await this.$store.dispatch("mutate", {
          endpoint: "Login",
          data: { input: this.login },
        });

        if (res.success) {
          toast.success("Login Successful");
          localStorage.setItem("token", res.token);

          this.$store.state.data.userProfile = res.data; // Setting user data.
          this.$store.state.data.isLoggedIn = true; // User logged in.

          this.$router.push({name: 'Panel'});
        }
      },

      async resetPassword() {
        toast.error("Feature not ready");
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

.dropdown1, .dropdown2 {
  float: left;
  overflow: hidden;
}

.dropdown1 .dropbtn {
  font-size: 14px;  
  border: none;
  outline: none;
  color: #0080FF;
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
  background-color: #0072E4;
}

.dropdown1:hover .dropdown-content1 {
  display: block;
}

@media (max-width: 320px) { 

    .dropdown-content1 {
  display: none;
  position: relative;
  background-color: #0080FF;
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


</style>
<template>

<Navbar class="w-full py-3">
  <router-link :to="{name: 'UserHome'}">
      <div >
          <img class="w-12 md:w-16 -pl-40" src="@/assets/WeGo1.png" alt="">
          <p class="text-left invisible md:visible text-xs font-medium text-white  -mt-2">WeGoNetwork</p>
      </div>
  </router-link>

    </Navbar>


<section class="flex my-0 md:my-10">
  <div class="bg-white py-12 px-3 md:px-20 mx-auto my-auto shadow-lg formBg">
    <h1 v-show="!recovery" class="text-red md:text-left text-center text-2xl">Login</h1>
    <h1 v-show="recovery" class="text-red text-2xl">Reset password</h1>

    <form class="w-100 md:w-80">
    <div class="focus-within:none">
    <input type="email" required v-show="!recovery" v-model="email" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-6 text-sm mb-6 text-white formBg focus:ring-blue-600 border-b-2 border-blue  py-3 px-6 w-full" placeholder="Your email address">
  </div>

  <div class="focus-within:none">
    <input id="myInput2" type="password" required v-show="!recovery" v-model="password" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-b-2 text-sm formBg text-white text-gray-400 mb-6 border-blue  py-3 px-6 w-full" placeholder="password">
    <input v-show="!recovery" class="focus:outline-none mb-4 w-3" type="checkbox" @click="myFunction"><span v-show="!recovery" class="text-xs text-gray font-semibold mx-2">show password</span>
  </div>

  
<div class="focus-within:none">
    <input type="email" v-show="recovery" v-model="email" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-6 text-sm mb-6 focus:ring-blue-600 border-b-2 border-light-gray  py-3 px-6 w-full" placeholder="Your email address">
  </div>

    <button class="form-btn w-full mt-8 focus:outline-none bg-blue py-3 px-4 text-sm text-center text-white">SUBMIT</button>
</form>

    <button v-show="!recovery" @click="handleClick" class="bg-none text-red  text-sm pt-4 focus:outline-none ">Forgot password?</button>

    <p v-show="recovery" class="text-sm text-gray">Back to <button  @click="handleClick" class="bg-none text-red  text-sm pt-4 focus:outline-none">Login</button></p>
   <p class="text-gray text-sm text-center mt-4">Not on WeGo yet? <button @click="handleSignUp" class="bg-none text-red  text-sm pt-4 focus:outline-none">Sign Up</button></p> 
  </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
   components: {Navbar},
   mounted () {
  document.body.classList.add('user')
},
unmounted () {
  document.body.classList.remove('user')
},
  data(){
    return{
      menu: false,
      email: '',
      password: '',
      recovery: false,
      }
  },

  methods: {
      handleClick(){
          this.recovery = !this.recovery
          
      },
      handleSignUp(){
          this.$router.push({name: 'UserSignup'})
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
  },
 

}
</script>

<style scoped>
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

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 14px;  
  border: none;
  outline: none;
  color: #f44336;
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

.dropdown-content1 a:hover {
  background-color: #1C1A1A;
}

.dropdown:hover .dropdown-content1 {
  display: block;
}


@media (min-width: 768px) { 
/* .dropdown-content1 {
  display: none;
  position: absolute;
  
  background-color: #f44336;
  border-radius: 6px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
} */

 


 }

</style>
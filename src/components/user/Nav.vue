<template>
  <div class="md:container md:py-8 mt-6 md:mx-auto">
      <div class="flex flex-wrap space-x-2 w-full mx-20">

    <form method="GET">
      <div class="relative text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 35.914 35.914">
          <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3 -3)">
          <path id="Path_352" data-name="Path 352" d="M33.2,18.852A14.352,14.352,0,1,1,18.852,4.5,14.352,14.352,0,0,1,33.2,18.852Z" fill="none" stroke="#0072E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_353" data-name="Path 353" d="M32.779,32.779l-7.8-7.8" transform="translate(4.013 4.013)" fill="none" stroke="#0072E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>
          </svg>
      </button>
      </span>
      <input type="search" name="q" class="invisible md:visible order-last py-1 px-3 text-sm text-gray pr-4 rounded-md pl-10 focus:outline-none focus:border-blue rounded-full focus:text-gray-900" placeholder="Search..." autocomplete="off">
      </div>
    </form>

        <nav>
          <ul class="lg:grid grid-cols-4 justify-between gap-8 hidden">
          <li><router-link :to="{name: 'Movies'}" class="text-sm text-white text-center font-medium">Movies</router-link></li>
          <li><router-link :to="{name: 'Shows'}" class="text-sm text-white text-center font-medium">Shows</router-link></li>
          <li><router-link :to="{name: 'Watchlist'}" class="text-sm text-white text-center font-medium">Watchlist</router-link></li>
          <li><router-link :to="{name: 'Categories'}" class="text-sm text-white text-center font-medium">Categories</router-link></li>
          </ul>

          <div class="navbar mt-8 lg:hidden mr-16 md:mr-24">
      <div class="dropdown1 transition-all duration-300">
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg> 
    </button>
    <div v-show="menu" class="dropdown-content1 w-full">
     <button class="w-full"><router-link :to="{name: 'Home'}">Home</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Iptv'}">Iptv</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Podcast'}">Podcast</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">OTT</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'About'}">About</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">FAQ</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">Help</router-link></button> 
    </div>
  </div> 
</div>
        </nav>
      </div>


      
  </div>
</template>

<script>
export default {
  data(){
      return{
        menu: false,
      }
    },
  methods: {
    showMenu(){
        this.menu = !this.menu
      }
  },
}
</script>

<style>

nav {
  padding: 0 10px
}

 nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   border-bottom: 1px solid #F8E71C;
   padding: 0 5px;
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
  background-color: #0080FF;
  border-radius: 6px;
  
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10;
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
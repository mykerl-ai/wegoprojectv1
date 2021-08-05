<template>
  <div class="container md:py-8 lg:mx-auto z-100">
      <div class="flex flex-nowrap gap-8  md:space-x-32 lg:space-x-1 w-full ">
        <router-link :to="{name: 'UserHome'}">
      <div >
          <img class="w-12 md:w-16 lg:w-24 -mt-2 md:-pl-40 hidden md:block" src="@/assets/WeGo1.png" alt="">
      </div>
  </router-link>
    <form method="GET">
      <div class="relative mt-8 md:mt-0 text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 flex items-center">
      <button type="submit" class="p-1 -ml-10 lg:-ml-4 md:-ml-32 focus:outline-none focus:shadow-outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 35.914 35.914">
          <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3 -3)">
          <path id="Path_352" data-name="Path 352" d="M33.2,18.852A14.352,14.352,0,1,1,18.852,4.5,14.352,14.352,0,0,1,33.2,18.852Z" fill="none" stroke="#1C1A1A" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_353" data-name="Path 353" d="M32.779,32.779l-7.8-7.8" transform="translate(4.013 4.013)" fill="none" stroke="#1C1A1A" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          </g>
          </svg>
      </button>
      </span>
      <input type="search" name="q" class="order-last py-1 px-3 text-sm text-gray -ml-10 lg:-ml-4 md:-ml-32 mr-8 md:mr-32 lg:mr-0 pr-4 pl-10 focus:outline-none focus:border-blue rounded-full user2 focus:text-gray-900" placeholder="Search..." autocomplete="off">
      </div>
    </form>

        <nav>
          <div class="lg:grid grid-cols-8 justify-between gap-24 hidden">
          <button class="focus focus:outline-none"><router-link :to="{name: 'Radio'}" class="text-sm text-white text-center font-medium">Podcast</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Schedule'}" class="text-sm text-white text-center font-medium">Schedule</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Playlist'}" class="text-sm text-white text-center font-medium">Playlist</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Radio'}" class="text-sm text-white text-center font-medium">Broadcast</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Movies'}" class="text-sm text-white text-center font-medium">Movies</router-link></button>
          <button class="focus focus:outline-none"><router-link :to="{name: 'Shows'}" class="text-sm text-white text-center font-medium">Shows</router-link></button>


          <div class="lg:grid col-span-2 grid-cols-3 gap-0.5 md:ml-4 hidden">
            <button class="focus:outline-none"> <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="13.504" viewBox="0 0 13.5 13.504">
  <path id="Icon_ionic-ios-settings" data-name="Icon ionic-ios-settings" d="M16.886,11.25A1.737,1.737,0,0,1,18,9.629a6.886,6.886,0,0,0-.833-2.007,1.76,1.76,0,0,1-.707.151,1.733,1.733,0,0,1-1.586-2.44,6.865,6.865,0,0,0-2-.833,1.736,1.736,0,0,1-3.241,0,6.886,6.886,0,0,0-2.007.833,1.733,1.733,0,0,1-1.586,2.44,1.7,1.7,0,0,1-.707-.151A7.038,7.038,0,0,0,4.5,9.633a1.737,1.737,0,0,1,0,3.241,6.886,6.886,0,0,0,.833,2.007A1.734,1.734,0,0,1,7.625,17.17,6.926,6.926,0,0,0,9.633,18a1.733,1.733,0,0,1,3.234,0,6.886,6.886,0,0,0,2.007-.833,1.736,1.736,0,0,1,2.289-2.289A6.926,6.926,0,0,0,18,12.874,1.745,1.745,0,0,1,16.886,11.25Zm-5.6,2.809a2.813,2.813,0,1,1,2.813-2.812A2.812,2.812,0,0,1,11.282,14.059Z" transform="translate(-4.5 -4.5)" fill="#fff"/>
</svg>

 </button>
            <button class="focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" width="11.246" height="14.066" viewBox="0 0 11.246 14.066">
  <g id="Icon_ionic-ios-notifications" data-name="Icon ionic-ios-notifications" transform="translate(-6.761 -3.93)">
    <path id="Path_354" data-name="Path 354" d="M16.3,30.2a1.657,1.657,0,0,0,1.691-1.863H14.6A1.658,1.658,0,0,0,16.3,30.2Z" transform="translate(-3.922 -12.203)" fill="#fff"/>
    <path id="Path_355" data-name="Path 355" d="M17.865,14.347c-.541-.714-1.607-1.132-1.607-4.328,0-3.28-1.448-4.6-2.8-4.915-.127-.032-.218-.074-.218-.207V4.8a.858.858,0,1,0-1.716,0v.1c0,.13-.091.176-.218.207-1.354.32-2.8,1.635-2.8,4.915,0,3.2-1.065,3.611-1.607,4.328a.7.7,0,0,0,.559,1.118h9.847A.7.7,0,0,0,17.865,14.347Z" fill="#fff"/>
  </g>
</svg>
 </button>
            <div class="focus:outline-none"><img src="https://i.ibb.co/4JRFPvj/pexels-emmy-e-2381069.jpg" alt="" class="avatar"> </div>
          </div>
          </div>

          <div class="navbar mt-8 lg:hidden md:-mt-1 md:ml-6=80 mr-16 -ml-2 md:-ml-0  md:mr-24">
      <div class="dropdown1 transition-all duration-300" :class="{'-ml-32 md:-ml-56': menu===true}">
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg> 
    </button>
    <div v-show="menu" class="dropdown-content1 w-full">
     <button @click="$router.push({name: 'Movies'})" class="w-full">Movies</button> 
     <button  @click="$router.push({name: 'Shows'})" class="w-full">Shows</button> 
     <button  @click="$router.push({name: 'Watchlist'})" class="w-full">Watchlist</button> 
     <button  @click="$router.push({name: 'Categories'})" class="w-full">Categories</button> 
     <button  @click="$router.push({name: 'Podcast'})" class="w-full">Podcast</button> 
     <div class="flex space-x-1">
            <button class="focus:outline-none"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="13.5" height="13.504" viewBox="0 0 13.5 13.504">
            <path id="Icon_ionic-ios-settings" data-name="Icon ionic-ios-settings" d="M16.886,11.25A1.737,1.737,0,0,1,18,9.629a6.886,6.886,0,0,0-.833-2.007,1.76,1.76,0,0,1-.707.151,1.733,1.733,0,0,1-1.586-2.44,6.865,6.865,0,0,0-2-.833,1.736,1.736,0,0,1-3.241,0,6.886,6.886,0,0,0-2.007.833,1.733,1.733,0,0,1-1.586,2.44,1.7,1.7,0,0,1-.707-.151A7.038,7.038,0,0,0,4.5,9.633a1.737,1.737,0,0,1,0,3.241,6.886,6.886,0,0,0,.833,2.007A1.734,1.734,0,0,1,7.625,17.17,6.926,6.926,0,0,0,9.633,18a1.733,1.733,0,0,1,3.234,0,6.886,6.886,0,0,0,2.007-.833,1.736,1.736,0,0,1,2.289-2.289A6.926,6.926,0,0,0,18,12.874,1.745,1.745,0,0,1,16.886,11.25Zm-5.6,2.809a2.813,2.813,0,1,1,2.813-2.812A2.812,2.812,0,0,1,11.282,14.059Z" transform="translate(-4.5 -4.5)" fill="#fff"/>
        </svg>

 </button>
            <button class="focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" width="11.246" height="14.066" viewBox="0 0 11.246 14.066">
  <g id="Icon_ionic-ios-notifications" data-name="Icon ionic-ios-notifications" transform="translate(-6.761 -3.93)">
    <path id="Path_354" data-name="Path 354" d="M16.3,30.2a1.657,1.657,0,0,0,1.691-1.863H14.6A1.658,1.658,0,0,0,16.3,30.2Z" transform="translate(-3.922 -12.203)" fill="#fff"/>
    <path id="Path_355" data-name="Path 355" d="M17.865,14.347c-.541-.714-1.607-1.132-1.607-4.328,0-3.28-1.448-4.6-2.8-4.915-.127-.032-.218-.074-.218-.207V4.8a.858.858,0,1,0-1.716,0v.1c0,.13-.091.176-.218.207-1.354.32-2.8,1.635-2.8,4.915,0,3.2-1.065,3.611-1.607,4.328a.7.7,0,0,0,.559,1.118h9.847A.7.7,0,0,0,17.865,14.347Z" fill="#fff"/>
  </g>
</svg>
 </button>
            <div class="focus:outline-none"><img src="https://i.ibb.co/4JRFPvj/pexels-emmy-e-2381069.jpg" alt="" class="avatar"> </div>
          </div>
    </div>
  </div> 
</div>
        </nav>
      </div>

      

      
  </div>
   <div :class="{'overlay':menu===true}"></div>
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

  .avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

nav {
  padding: 0 2px
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

 nav button:hover,
 nav button.router-link-active,
 nav button.router-link-exact-active {
   border-bottom: 1px solid #f44336;
   
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
   background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%,  rgba(0,0,0,.05) 74%);
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
  background-color: #000000;
background-image: linear-gradient(315deg, #000000 0%,  rgba(0,0,0,.05) 74%);
}

.dropdown1:hover .dropdown-content1 {
  display: block;
}

@media (max-width: 640px) { 
 

.dropdown-content1 button {
  padding: 12px 12px 12px 20px;
  font-size: 1rem;
}

.dropdown1, .dropdown2 {
  
  position: absolute;
}

}


@media (max-width: 768px) { 
.dropdown-content1 {
  display: none;
  position: relative;
 background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%,  rgba(0,0,0,.05) 74%);
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
  z-index: 999;
 
}

.dropdown-content1 button {
  padding: 12px 12px 12px 20px;
  font-size: 1rem;
}

 }



</style>
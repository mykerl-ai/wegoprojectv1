<template>

<Navbar class="w-full z-100">
      <router-link :to="{name: 'Home'}">
      <div >
          <img class="w-12 md:w-32 -pl-16 md:pl-8 pt-4" src="@/assets/WeGo1.png" alt="">
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
  <div class="wrapper1 -z-1">
	<h1>Frequently asked questions</h1>
	
	<!-- Accordion: Only One Item Open -->
	<div class="accordion acc-single-open -z-1">

		<div v-for="faq in faqs" :key="faq.id" class="acc-container -z-1">
			<h3 class="acc-title -z-1">{{faq.question}}</h3>
			<div class="acc-content -z-1">
				<p class="leading-10 -z-1">{{faq.answer}}</p>
			</div><!-- acc-content -->
		</div><!-- acc-container -->

	
	</div><!-- accordion -->	
</div><!-- wrapper1 -->
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components: {Navbar},
    data(){
        return{
            menu: false,
            faqs: [
              {
                id: 1,
                question: 'What is included in a WeGo service plan?',
                answer: 'Our service plan includes: Streaming data transfer through WeGo Network’s cloud CDN and cloud storage, great service and software feature. We add new addons often, to improve and update your channel or station. Phone and email support are 24/7 just contact us – we’re here if you need us',
              },
               {
                id: 2,
                question: 'How do I get started?',
                answer: 'Getting started is easy! Select your plan (after checkout) – several options are available depending on your audience size or media and streaming needs.',
              },
              {
                id: 3,
                question: 'How is WeGo Network different from other streaming providers?',
                answer: 'There are a few reasons: WeGo Network middle-ware software and technology platform offers a production value for VOD and TV-style broadcast. Using the equipment you already have, we make video, and live streaming process easy from start to finish. In an all-in-one secure platform, you can capture video, produce content and broadcast it to your audience. WeGo Network technology enables more reliable streaming, which leads to less buffering wheels, which leads to more engagement and an exponentially larger audience over time. An enterprise-level solution remarkably easy to use, in a single click or automated scheduling. The system even monitors your stream and will allow you use our Api or CDN. it even detects any concerns and lets you reboot your station or channel, rather than relying on third party software, we use scalable cloud distribution methods. This means that no matter how big or how little your company may be, WeGo Network got you, we can meet your need, no worries',
              }
            ],
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

nav>a, div>a {
  color: #f44336;
  font-size: 14px;
  font-weight: 500;
}
 .bt {
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
  color: #f44336;
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
  
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
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
.dropdown-content1 a:hover {
  background-color: #1C1A1A;
}

.dropdown1:hover .dropdown-content1 {
  display: block;
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


*, *:before, *:after {
	box-sizing: border-box;
}



</style>
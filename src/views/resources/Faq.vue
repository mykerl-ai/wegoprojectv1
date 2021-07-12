<template>

 <Navbar class="w-full shadow-md mb-6">
      <router-link :to="{name: 'Home'}">
      <div class="mb-6">
          <img class="w-12 md:w-20 -pl-16 md:-pl-32 pt-4" src="@/assets/logo.png" alt="">
          <p class="text-center invisible md:visible text-xs text-blue ml-6 -mt-4">WeGo Network</p>
      </div>
</router-link>
      <nav class="lg:flex space-x-10 py-6 px-6 mr-20 hidden md:hidden">
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
        <div class="space-x-6 lg:pl-96">
           <router-link :to="{name: 'Login'}">LOGIN</router-link>
           <router-link :to="{name: 'Signup'} " class="bt">SIGN UP</router-link> 
        </div>  
      </nav>


       <div class="navbar mt-8 lg:hidden mr-16 md:mr-24">
      <div class="dropdown1 transition-all duration-300 ">
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg> 
    </button>
    <div v-show="menu" class="dropdown-content1 w-full ">
     <button class="w-full"><router-link :to="{name: 'Home'}">Home</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Iptv'}">Iptv</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Podcast'}">Podcast</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">OTT</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'About'}">About</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Faq'}">FAQ</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">Help</router-link></button>
      <button class="w-full"><router-link :to="{name: 'Login'}">LOGIN</router-link></button>
     <button class="w-full"><router-link :to="{name: 'Signup'}">SIGN UP</router-link></button> 
    </div>
  </div> 
</div>

    </Navbar>

  <div class="wrapper1 ">
	<h1>Frequently asked questions</h1>
	
	<!-- Accordion: Only One Item Open -->
	<div class="accordion acc-single-open">

		<div v-for="faq in faqs" :key="faq.id" class="acc-container">
			<h3 class="acc-title">{{faq.question}}</h3>
			<div class="acc-content">
				<p class="leading-10">{{faq.answer}}</p>
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

nav>a, div>a {
  color: #0080FF;
  font-size: 14px;
  font-weight: 500;
}
 .bt {
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
  color: #0080FF;
  text-align: center;
  font-weight: 500;
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
  color: #0080FF;
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

.dropdown-content1 a:hover {
  background-color: #0072E4;
}

.dropdown1:hover .dropdown-content1 {
  display: block;
}


@media (max-width: 768px) { 
/* .dropdown-content1 {
  display: none;
  position: absolute;
  
  background-color: #0080FF;
  border-radius: 6px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
} */

.dropdown-content1 {
  display: none;
  position: absolute;
  background-color: #0080FF;
  border-radius: 6px;
  z-index: 999;
  width: 100vw;

  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
}


 }


*, *:before, *:after {
	box-sizing: border-box;
}



</style>
<template>
    
  <div id="hero" ref="hit" class="bg-hero-pattern w-full mx-0 px-0 sticky md:bg-contain md:h-screen fixed h-screen user1 bg-blend-overlay border-b-8 border-gray">
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
       
    <Navbar class="w-full py-6">
      <router-link :to="{name: 'Home'}">
      <div >
          <img class="w-12 md:w-16 -pl-40" src="@/assets/logo.png" alt="">
          <p class="text-left invisible md:visible text-xs font-medium text-white  -mt-2">WeGoNetwork</p>
      </div>
</router-link>
      

      
     <div class="space-x-6 lg:pl-96">
           
           <router-link :to="{name: 'UserSignup'} " class="bg-red text-white bt">SIGN IN</router-link> 
        </div> 

    </Navbar>

    <div class="fwd mt-32 lg:mt-24 lg:ml-60 md:ml-32 md:mt-32 px-12 w-50 max-w-xl -z-1">

        <p class="md:text-base text-sm mb-4 -mt-20 md:-mt-10 text-white font-medium">Welcome!</p>

      <h1 class="lg:text-4xl md:8xl tracking-wide leading-10 text-2xl  text-white font-bold">Unlimited TV, movies <br> shows, podcasts & many more</h1>

       <p class="lg:mt-2 md:mt-10 mt-2 lg:tracking-wide tracking-widest lg:leading-7 leading-7 md:leading-9 md:text-sm text-xs text-white font-semibold">Watch Anywhere, Anytime.</p>

    <div class="focus-within:none mt-6">
    <input type="email" required v-show="! recovery" v-model="name" class="focus:outline-none focus:ring-2 focus:ring-opacity-50  text-sm mb-4 focus:ring-red-600 border-b-2 border-red text-black py-2 px-6 w-full" placeholder="Enter e-mail">
  </div>
      
      
      <div class="lg:mt-3 md:mt-8 absolute mt-4">
          <button class="bg-yellow  py-3 px-6  text-white font-semibold text-xs md:text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50">SIGN UP</button>
           <button @click="handleClick" class="border border-yellow-400 py-2 px-6 ml-6  text-white font-semibold text-xs md:text-sm rounded-full focus:outline-none">TALK TO US</button>
      </div>
    </div>
  </div>

  <div class="home w-full my-20">
    
    

    <section class="w-full pb-8 podcast mt-6 border-b-8 border-gray">
      
      <div class="tag grid grid-cols-1  lg:grid-cols-2 grid-flow-row lg:grid-flow-row gap-6 md:gap-4 content-center px-4 md:px-4 lg:px-0">
          <div class="grid grid-cols-1 lg:grid-cols-1 gap-2 ">
              
             
              <div class="lg:col-span-1 lg:mt-12 col-span-1 top">
                  <div class="overlay module"></div>
                <img class="bg-gblue bg-blend-overlay" src="@/assets/images/iptv.jpg" alt="">
                </div>
          </div>
          <div class="lg:ml-16 lg:mt-12 md:mt-6 ml-8">
              <h2 class="text-right text-white font-bold  text-4xl mt-18 mb-2 md:mb-4">Enjoy on your TV</h2>
            <p class="text-gray font-semibold text-xl text-right leading-10">Reach your audience everywhere with call to action on live streaming 
            on your own personal channel or radio station
            </p>

            <button class="bg-yellow mt-10 md:mt-6 text-white md:ml-48 lg:ml-64 font-semibold text-sm rounded-full md:py-3 py-1 focus:outline-none px-6">GET STARTED</button>
          </div>
      </div>
    </section>

    <section class="podcast w-full pb-8 podcast mt-2 border-b-8 border-gray">
      
    <div class="tag grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row lg:grid-flow-row gap-x-16 content-center px-4 md:px-4 lg:px-0 mt-20 md:mt-24">
          <div class="md:order-none lg:order-none order-last">
            <h2 class="text-white font-bold text-center md:text-left mt-8 md:mt-0 md:text-4xl text-lg mb-6">Download your shows <br> to watch offline</h2>
            <p class="text-white text-xl font-semibold leading-8 text-left mb-8">Save your favorites easily and always have something to watch.</p>
            
            <button class="bg-yellow md:mx-0 lg:mx-0 mx-24 rounded-full py-3 px-6 mt-6 text-white focus:outline-none font-semibold text-sm ">CONTACT US</button>
          </div>

        <div class="">
              <div class="top">
                <div class="overlay"></div>
                <img class="bg-gblue bg-blend-overlay" src="@/assets/images/screen.jpg" alt="">
                </div>
          </div> 
      </div>
    </section>

    <section class="podcast w-full pb-8 podcast mt-2 border-b-2 border-gray">
      
        <div class="wrapper1 ">
	<h1 class="text-white text-center text-4xl font-bold">Frequently asked questions</h1>
	
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
    </section>

  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    mounted () {
      document.body.classList.add('user2')
    },
    unmounted () {
      document.body.classList.remove('user2')
    },

    data(){
      return{
        menu: false,
         name: '',
        email: '',
        message: '',
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

    p {
        color: white;
    }

     #hero{
        /* background-image:linear-gradient(to right bottom, #1B3BD8, #176CE0, #0B92E7, #0BB6EB, #00E0F2), url(../assets/images/radio.jpg); */
        position: relative;
         
    } 
    .fwd {
        position: absolute;
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

#hero > figure:nth-child(1) { background-image: url('../../assets/images/radio.jpg'); }

#hero > figure:nth-child(2) {
  animation-delay: 6s;
  background-image: url('../../assets/images/radio1.jpg');
}

#hero > figure:nth-child(3) {
  animation-delay: 12s;
  background-image: url('../../assets/images/iptv.jpg');
}

#hero > figure:nth-child(4) {
  animation-delay: 18s;
  background-image: url('../../assets/images/radio.jpg');
}

#hero > figure:nth-child(5) {
  animation-delay: 24s;
  background-image: url('../../assets/images/radio1.jpg');
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

.ott > div {
  max-width: 640px;
  max-height: 405px;
  margin: 20px auto;
}
.iptv, .podcast {
  margin: 10px auto;
  max-width: 1000px;
}

.iptv > .tag {
        max-width: 100%;
         max-height: 100%;
         object-fit: fill;
}

.top {
  position: relative;
}
/* .overlay{
    width: 100%;
    height: 100%;
    
    opacity: 0.5;
    z-index: -1;
    position: absolute;
    justify-content: center;
    
} */

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  /* background-color: #bbb; */
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

 textarea:focus, input:focus {
    border: none;
    color:  #0BB6EB;
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
  position: absolute;
  background-color: #0080FF;
  border-radius: 6px;
  z-index: 999;
  width: 100vw;

  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
}


 }
</style>
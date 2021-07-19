<template>
  <Hero>
    <template v-slot:header>
    <h1 class="lg:text-2xl md:3xl tracking-wide 2xl:tracking-widest 2xl:text-5xl leading-10 text-xl -mt-12 md:-mt-20 text-white font-semibold">Revolutionary <br> End-to-End IPTV/OTT Combined Platform</h1>
    </template>

    <template v-slot:paragraph>
      <p class="lg:mt-2 md:mt-10 mt-2 lg:tracking-wide tracking-widest lg:leading-7 leading-7 md:leading-9 md:text-sm text-xs text-white font-regular">We are specialized in delivering a complete combined End-to-End IPTV/OTT platform to help you grow your audience.</p>

      <p class="lg:mt-2 md:mt-10 mt-2 lg:tracking-wide tracking-widest lg:leading-7 leading-7 md:leading-9 md:text-sm text-xs text-white font-regular md:block hidden">WeGo provides a flexible IPTV/OTT streaming platform that supplies a premium experience at a competitive cost. It gives the liberty to stream to Smart TVs, Android, and iPhone devices at speed, anywhere in the world. Our international OTT platform performs well during growth and scales effortlessly without losing the streaming quality. We also provide end-to-end multi-DRM security solutions between our platform and the end-user.

</p>

    </template>
    
  </Hero >

  <Slider />
  <div class="home w-full my-20">
    
    <section class="ott w-full">
      <!-- <h2 class="text-center text-blue font-semibold text-lg mt-24">OUR OTT PLATFORM</h2> -->

      <div class="embed-responsive px-4 mt-32 md:px-0 lg:px-0">
        <video controls autoplay muted loop>
          <source src="../assets/videos/trail2.mp4" type="video/mp4">
        </video>
      </div>

    </section>

    <section class="iptv">
      <h2 class="text-center text-blue font-semibold  text-lg mt-24 mb-2">OUR COMBINED PLATFORM</h2>
       <p class="lg:mt-4 md:mt-4 mt-2 tracking-normal mx-4 leading-7 text-justify text-sm mb-6 text-deep-gray font-regular">At WeGo, we believe in the power of a robust and extensive partnership network to build and deliver state-of-the-art technologies for media companies around the world. <span class="font-bold"> Launch your IPTV/OTT streaming service?</span>  <br> WeGo end-to-end combined SaaS (Software) which is a one-of-a-kind all-inclusive video streaming platform that lets you launch Multi-Screen OTT/IPTV, Video on Demand (VOD), Advertise (AVOD), Subscription (SVOD)  with Live Streaming content all controlled from a single Video CMS based admin panel</p>

      <div class="tag  md:mx-4 lg:px-0 lg:mx-0 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 grid-flow-row gap-2">
          <div  class="flip-card pl-8 md:pl-0">
            <div class="flip-card-inner overlay">
            <div class="flip-card-front">
            <img class="bg-gblue bg-blend-overlay" src="../assets/images/iptv.png" alt="">
            </div>
            <div class="flip-card-back">
            <p class="text-sm text-white mx-6 my-24">Centralize your organization’s live and on-demand video in a beautiful, viewing portal.                                             
            </p>
            </div>
            </div>
            </div> 
            
            <div  class="flip-card pl-8 md:pl-0">
            <div class="flip-card-inner overlay">
            <div class="flip-card-front">
            <img class="bg-gblue bg-blend-overlay" src="../assets/images/network.jpg" alt="">
            </div>
            <div class="flip-card-back">
            <p class="text-sm text-white mx-6 my-24">Scale your video to fit virtually any audience size worldwide</p>
            </div>
            </div>
            </div>
            
            <div  class="flip-card pl-8 md:pl-0">
            <div class="flip-card-inner overlay">
            <div class="flip-card-front">
            <img class="bg-gblue bg-blend-overlay" src="../assets/images/screen.jpg" alt="">
            </div>
            <div class="flip-card-back">
            <p class="text-sm text-white mx-6 my-24">Stream live, and manage recorded video content. Cloud streaming platform for video, transcoding, encoder, to multi-platform payout, while analytics what show your viewer love watching</p>
            </div>
            </div>
            </div> 
            
            <div  class="flip-card pl-8 md:pl-0">
            <div class="flip-card-inner overlay">
            <div class="flip-card-front">
            <img class="bg-gblue bg-blend-overlay" src="../assets/images/data.jpg" alt="">
            </div>
            <div class="flip-card-back">
            <p class="text-sm text-white mx-6 my-24">Analytics show what your viewers love watching</p>
            </div>
            </div>
            </div> 
            
            <div  class="flip-card pl-8 md:pl-0">
            <div class="flip-card-inner overlay">
            <div class="flip-card-front">
            <img class="bg-gblue bg-blend-overlay" src="../assets/images/cyber.jpg" alt="">
            </div>
            <div class="flip-card-back">
            <p class="text-sm text-white mx-6 my-24">Control access with SSO, password protection, domain whitelisting and embed restrictions.</p>
            </div>
            </div>
            </div>
            
            <div  class="flip-card pl-8 md:pl-0">
            <div class="flip-card-inner overlay">
            <div class="flip-card-front">
            <img class="bg-gblue bg-blend-overlay" src="../assets/images/transcode.png" alt="">
            </div>
            <div class="flip-card-back">
            <p class="text-sm text-white mx-6 my-24">Unlock your Stream Network with White Label solution. Your logos, colors & icons. Multi lingual support numbers, checkout links & more</p>
            </div>
            </div>
            </div>
      </div>
       <button @click="$router.push({name: 'Iptv'})" class="bg-yellow mt-10 md:mt-8 text-white lg:mx-96 md:mx-72  mx-20 font-semibold text-sm rounded-full md:py-3 py-1 focus:outline-none px-12">GET STARTED</button>
    </section>

    <section class="podcast">
      <h2 class="text-center text-blue font-semibold  text-lg mt-24 mb-8 md:mb-12">WeGO
NETWORK PODCAST & RADIO</h2>
      <div class="tag grid grid-cols-1  lg:grid-cols-2 grid-flow-row lg:grid-flow-row gap-6 md:gap-4 content-center px-4 md:px-4 lg:px-0">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
              <div class="top lg:grid hidden">
                <div class="overlay module"></div>
                <img class="bg-gblue bg-blend-overlay" src="../assets/images/podcast2.jpg" alt="">
                </div>
              <div class="top lg:grid hidden">
                   <div class="overlay module"></div>
                <img class="bg-gblue bg-blend-overlay" src="../assets/images/podcast1.jpg" alt="">
                </div>
              <div class="lg:col-span-2 col-span-1 top">
                  <div class="overlay module"></div>
                <img class="bg-gblue bg-blend-overlay" src="../assets/images/podcast.jpg" alt="">
                </div>
          </div>
          <div class="lg:ml-16 lg:mt-0 md:mt-2">
            <p class="text-gray text-justify leading-10">Reach your audience everywhere with call to action on live streaming 
            on your own personal channel or radio station
            </p>

            <button @click="$router.push({name: 'Podcast'})" class="bg-yellow mt-10 md:mt-6 text-white md:mx-0 lg:mx-0 mx-20 font-semibold text-sm rounded-full md:py-3 py-1 focus:outline-none px-6">GET STARTED</button>
          </div>
      </div>
    </section>

    <section class="podcast">
      
    <div class="tag grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row lg:grid-flow-row gap-x-16 content-center px-4 md:px-4 lg:px-0 mt-20 md:mt-48">
          <div class="md:order-none lg:order-none order-last">
            <h2 class="text-blue font-semibold text-center md:text-left mt-8 md:mt-0 md:text-2xl text-lg mb-6">The Benefits of a WeGo Network Combined Platform</h2>
            <p class="text-gray leading-8 text-justify mb-8">OTT tends to offer content over subscription services, examples are Netflix, Hulu, Amazon, Apple TV, Roku and YouTube. But IPTV is more like traditional television with live TV broadcast available, as well as premium VOD content over the internet and mobile devices.</p>
            
            <p class="text-gray leading-8 text-justify mb-8">Distributing and monetizing content across platforms for your social media channel to your own tv channel WeGo Network give our customer flexibility, quality, reliability and economical freedom of choice for film makers, broadcasters, gamers and live events.</p>
            
            <p class="text-gray leading-8 text-justify">Manage it all under one roof, your billing , channels
and customers. So Grow your business, enterprise or ministry. We update our apps to provide you the best UX/UI for ours customers experience with 24/7 support, so we're always by your side.</p>



            <button @click="$router.push({name: 'Contact'})" class="bg-yellow md:mx-0 lg:mx-0 mx-16 rounded-full py-1 px-12 mt-6 text-white focus:outline-none font-semibold text-sm ">CONTACT US</button>
          </div>

        <div class="">
              <div class="top">
                <div class="overlay"></div>
                <img class="bg-gblue bg-blend-overlay" src="../assets/images/help.jpg" alt="">
                </div>
          </div> 
      </div>
    </section>

    <ContactView />
  </div>
</template>

<script>
// @ is an alias to /src

import Contact from './Contact.vue'
import Hero from '../components/Hero.vue'
import Slider from '../components/Slider.vue'
import ContactView from '../components/ContactView.vue'

export default {
  name: 'Home',
  components: {
    Contact, Hero,
    Slider, ContactView
  },
  data(){
    return{
      card: [
        {id: 1, image: '', desc: ''},
      ]

    }
  },
}

</script>

<style scoped>
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


  /* @media (max-width: 768px ) {
    .contact-bar {
          display: none; 
}
  } */

/* .morph > img { */
  /* width: 100%;
  height: 100%; */
  /* border-radius: 20px;
background: #e0e0e0; */
/* box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff; */
/* } */


</style>

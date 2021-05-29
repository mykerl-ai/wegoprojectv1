<template>
  <Hero>
    <template v-slot:header>
    <h1 class="lg:text-3xl md:8xl tracking-wide leading-10 text-2xl -mt-20 md:-mt-8 text-white font-semibold">Revolutionary <br> End-to-End IPTV/OTT Combined Platform</h1>
    </template>

    <template v-slot:paragraph>
      <p class="lg:mt-4 md:mt-10 mt-6 tracking-widest leading-9 text-sm  text-white font-regular">OTT provides your viewers access to movies and Tv shows, by sending signals directly through the internet.</p>

      <p class="lg:mt-4 md:mt-10 mt-4 tracking-widest leading-9 text-sm  text-white font-regular">Build or Upgrade to a top-notch IPTV/OTT solution that is modern, and offers a High-end user experience across all major platforms..</p>

    </template>
    
  </Hero >

  <Slider />
  <div class="home w-full">
    
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
       <p class="lg:mt-4 md:mt-4 mt-2 tracking-normal mx-4 leading-7  text-sm text-center mb-6 text-deep-gray font-regular">Over- The –Top intuitive way to create your own tv channel or revenue making Streaming Network. </p>

      <div class="tag mx-4 px-4 md:mx-4 lg:px-0 lg:mx-0 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 grid-flow-row gap-2 content-center">
          <div  class="flip-card">
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
            
            <div  class="flip-card">
            <div class="flip-card-inner overlay">
            <div class="flip-card-front">
            <img class="bg-gblue bg-blend-overlay" src="../assets/images/network.jpg" alt="">
            </div>
            <div class="flip-card-back">
            <p class="text-sm text-white mx-6 my-24">Scale your video to fit virtually any audience size worldwide</p>
            </div>
            </div>
            </div>
            
            <div  class="flip-card">
            <div class="flip-card-inner overlay">
            <div class="flip-card-front">
            <img class="bg-gblue bg-blend-overlay" src="../assets/images/screen.jpg" alt="">
            </div>
            <div class="flip-card-back">
            <p class="text-sm text-white mx-6 my-24">Stream live, and manage recorded video content. Cloud streaming platform for video, transcoding, encoder, to multi-platform payout, while analytics what show your viewer love watching</p>
            </div>
            </div>
            </div> 
            
            <div  class="flip-card">
            <div class="flip-card-inner overlay">
            <div class="flip-card-front">
            <img class="bg-gblue bg-blend-overlay" src="../assets/images/data.jpg" alt="">
            </div>
            <div class="flip-card-back">
            <p class="text-sm text-white mx-6 my-24">Analytics show what your viewers love watching</p>
            </div>
            </div>
            </div> 
            
            <div  class="flip-card">
            <div class="flip-card-inner overlay">
            <div class="flip-card-front">
            <img class="bg-gblue bg-blend-overlay" src="../assets/images/cyber.jpg" alt="">
            </div>
            <div class="flip-card-back">
            <p class="text-sm text-white mx-6 my-24">Control access with SSO, password protection, domain whitelisting and embed restrictions.</p>
            </div>
            </div>
            </div>
            
            <div  class="flip-card">
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
       <button class="bg-yellow mt-10 md:mt-8 text-white lg:mx-96 md:mx-72  mx-20 font-semibold text-sm rounded-full md:py-3 py-1 focus:outline-none px-12">GET STARTED</button>
    </section>

    <section class="podcast">
      <h2 class="text-center text-blue font-semibold  text-lg mt-24 mb-8 md:mb-12">WeGO
Network Podcast and Radio</h2>
      <div class="tag grid grid-cols-1  lg:grid-cols-2 grid-flow-row lg:grid-flow-row gap-6 md:gap-4 content-center px-4 md:px-4 lg:px-0">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div class="top lg:grid hidden">
                <div class="overlay"></div>
                <img class="bg-gblue bg-blend-overlay" src="../assets/images/podcast2.jpg" alt="">
                </div>
              <div class="top lg:grid hidden">
                   <div class="overlay"></div>
                <img class="bg-gblue bg-blend-overlay" src="../assets/images/podcast1.jpg" alt="">
                </div>
              <div class="lg:col-span-2 col-span-1 top">
                  <div class="overlay"></div>
                <img class="bg-gblue bg-blend-overlay" src="../assets/images/podcast.jpg" alt="">
                </div>
          </div>
          <div class="lg:ml-16 lg:mt-0 md:mt-2 ml-8">
            <p class="text-gray leading-10">Reach your audience everywhere with call to action on live streaming 
            on your own personal channel or radio station
            </p>

            <button class="bg-yellow mt-10 md:mt-6 text-white md:mx-0 lg:mx-0 mx-20 font-semibold text-sm rounded-full md:py-3 py-1 focus:outline-none px-6">GET STARTED</button>
          </div>
      </div>
    </section>

    <section class="podcast">
      
    <div class="tag grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row lg:grid-flow-row gap-x-16 content-center px-4 md:px-4 lg:px-0 mt-20 md:mt-48">
          <div class="md:order-none lg:order-none order-last">
            <h2 class="text-blue font-semibold text-center md:text-left mt-8 md:mt-0 md:text-2xl text-lg mb-6">The Benefits of a WeGo Network Combined Platform</h2>
            <p class="text-gray leading-8 text-justify mb-8">The difference between IPTV and OTT is the content that users usually watch on each. OTT tends to offer content over subscription services. Some examples are popular names who offers OTT service are   Netflix, Hulu, Amazon, Apple TV Roku and YouTube, But IPTV is much closer to traditional television subscriptions, with live TV broadcast available, as well as premium VOD content.  It is also very useful in distributing corporate content within a network, such as on shared monitors and computers on the same office network. However, for devices outside of that network, viewers will need to watch over OTT.</p>
            
            <p class="text-gray leading-8 text-justify mb-8">Which is Why WeGo Network has combined both service to give you the best of both world, Now you do not have to make a choice your organization can have both considered, WeGo Network a platform that give you reliable, economical, flexible and quality which is far nearer to a traditional broadcast television with live stream subscription.</p>
            
            <p class="text-gray leading-8 text-justify">Managed under one roof, Our platform provides all you need to manage channels, customers, and billing. We are heavily invested in R&D, constantly updating our apps to provide you the best UX/UI for your customers. We also provide 24/7 support, so we're always by your side.</p>



            <button class="bg-yellow md:mx-0 lg:mx-0 mx-24 rounded-full py-3 px-6 mt-6 text-white focus:outline-none font-semibold text-sm ">CONTACT US</button>
          </div>

        <div class="">
              <div class="top">
                <div class="overlay"></div>
                <img class="bg-gblue bg-blend-overlay" src="../assets/images/help.jpg" alt="">
                </div>
          </div> 
      </div>
    </section>

    <section class="w-full contact ml-0 h-64  mt-24 pl-0 ">
      <div>
        <div class="w-full contact-bar flex space-x-96">
          <div class="bg-no-repeat rounded-full  bg-left-top h-24 w-24 contact-bar"></div>
          <div class="bg-no-repeat rounded-full mt-56 ml-48 bg-bottom h-16 w-16 contact-bar"></div>
          <div class="bg-no-repeat rounded-full mt-24 ml-56 bg-right-top h-8 w-8 contact-bar"></div>
          <div class="bg-no-repeat rounded-full mt-60 ml-60 bg-bottom-right h-16 w-16 contact-bar"></div>
        </div>
        </div>

         <div class="lg:grid grid-rows-3 gap-4 ml-72 hidden -mt-40">
           

        <div class="flex space-x-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20">
        <g id="noun_880089_cc" transform="translate(0)">
          <path id="Shape" d="M19.91,15.946l-.1-.3a2.8,2.8,0,0,0-1.711-1.628L15.463,13.3a2.558,2.558,0,0,0-2.247.591l-.959.948a10.085,10.085,0,0,1-7.091-7.1l.947-.951A2.6,2.6,0,0,0,6.7,4.537l-.72-2.624A2.835,2.835,0,0,0,4.364.188l-.3-.1a2.359,2.359,0,0,0-2.22.525L.41,2.041A2.725,2.725,0,0,0,0,3.017,16.8,16.8,0,0,0,16.937,20a2.7,2.7,0,0,0,1.029-.415l1.419-1.422A2.37,2.37,0,0,0,19.91,15.946Z" fill="#fff"/>
        </g>
        </svg>

        <p class="text-sm text-white">+31 0123 4567</p>
        </div>

        <div class="flex space-x-6">

          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14.728" viewBox="0 0 23 14.728">
            <g id="Group" transform="translate(0 -0.099)">
              <path id="Shape" d="M20.125,14.728H2.875a2.981,2.981,0,0,1-1.58-.452L8.58,8.693l1.662,1.483a1.919,1.919,0,0,0,2.516,0L14.42,8.693l7.286,5.583A2.987,2.987,0,0,1,20.125,14.728Zm2.4-1.228h0l-.026-.016L15.265,7.943l7.358-6.563A2.638,2.638,0,0,1,23,2.727V12a2.629,2.629,0,0,1-.475,1.5ZM.476,13.5h0A2.633,2.633,0,0,1,0,12V2.727A2.636,2.636,0,0,1,.377,1.381L7.736,7.943.5,13.483.477,13.5ZM11.5,9.532a.721.721,0,0,1-.467-.149L1.132.563A2.964,2.964,0,0,1,2.875,0h17.25a2.958,2.958,0,0,1,1.743.563l-9.9,8.821A.721.721,0,0,1,11.5,9.532Z" transform="translate(0 0.099)" fill="#fff"/>
            </g>
          </svg>

          <p class="text-sm text-white">info@wego.io</p>

        </div>

        <div class="flex space-x-6">

          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 26 22">
            <g id="telegram" transform="translate(0 0)">
            <path id="XMLID_497_" d="M20.879,22a.712.712,0,0,1-.413-.132l-6.023-4.25a1.02,1.02,0,0,0-1.215.033L9.889,20.3a.714.714,0,0,1-1.12-.328L6.45,12.722.459,10.549A.68.68,0,0,1,.452,9.265L25.039.047a.715.715,0,0,1,.811.219.659.659,0,0,1,.135.562L21.572,21.453A.7.7,0,0,1,20.879,22ZM20.213,4.525a.211.211,0,0,0-.109.032L8.4,11.565a1.135,1.135,0,0,0-.515,1.289l1.265,4.324a.3.3,0,0,0,.591-.042l.329-2.371a1.935,1.935,0,0,1,.621-1.165L20.35,4.871A.186.186,0,0,0,20.4,4.66.208.208,0,0,0,20.213,4.525Z" fill="#fff"/>
            </g>
        </svg>


          <p class="text-sm text-white">Join us on Telegram</p>

        </div>

      </div>
  </section>

  
  <!-- form -->

  <section class="flex mx-4 md:mx-0 -mt-32 md:mt-0 flex-row-reverse">

  <div class="bg-none py-8 mx-0 md:mx-auto my-auto -mt-56 rounded-lg">
  
  <section class="flex ml-48 lg:ml-48 lg:mx-0 md:mt-12 lg:mt-0 md:mx-24">
  <div class="bg-white py-8 md:px-20 md:mx-auto  px-10 my-auto shadow-lg">
    <h1 class="text-blue mt-6 md:mt-0 text-center md:text-left text-2xl">Get in touch</h1>
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
  <button class="form-btn focus:outline-none rounded-lg bg-blue py-3 px-4 text-sm text-white mx-20 md:mx-0">SUBMIT</button>
</form>
  </div>
  </section>

  </div>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src

import Contact from './Contact.vue'
import Hero from '../components/Hero.vue'
import Slider from '../components/Slider.vue'

export default {
  name: 'Home',
  components: {
    Contact, Hero,
    Slider
  },
  data(){
    return{
      name: '',
      email: '',
      message: '',

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

.contact-bar {
  background-image:linear-gradient(to right bottom, #1B3BD8, #1B3BD8, #176CE0, #0B92E7, #0BB6EB, #00E0F2, #00E0F2);
 
}

.form-btn {
    background-image:linear-gradient(to right bottom, #1B3BD8, #176CE0, #0B92E7, #0BB6EB, #00E0F2);
  } 

  textarea:focus, input:focus {
    border: none;
    color:  #0BB6EB;
  }

  @media (max-width: 640px) { 
      .contact-bar {
          display: none; 
}
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

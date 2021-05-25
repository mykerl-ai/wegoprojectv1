<template>
  <Hero>
    <template v-slot:header>
    <h1 class="md:text-3xl tracking-wide leading-10 text-3xl -mt-20 md:-mt-12 text-white font-semibold">WeGo Network</h1>
     </template>

    <template v-slot:paragraph>
      <p class="lg:mt-4 md:mt-10 mt-10 tracking-widest leading-9 text-sm  text-white font-regular">OTT provides your viewers access to movies and Tv shows, by sending signals directly through the internet.</p>

      <p class="lg:mt-4 md:mt-10 mt-4 tracking-widest leading-9 text-sm  text-white font-regular">Build or Upgrade to a top-notch IPTV/OTT solution that is modern, and offers a High-end user experience across all major platforms..</p>

    </template>
  </Hero >

 
  <div class="about">
    
    <section class="ott ">
      <div class="embed-responsive ">
        <video controls autoplay muted loop>
          <source src="../assets/videos/trail2.mp4" type="video/mp4">
        </video>
      </div>


      <h2 class="text-center text-blue font-semibold text-lg mt-24">OUR BACKGROUND</h2>

      <div class="my-6 mx-auto w-auto">
      <p class="text-base mx-4 md:mx-0 text-justify text-deep-gray leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos, minus, rem consequatur facere ex illo, minima et unde perspiciatis mollitia distinctio laudantium est tempora! Veritatis voluptates asperiores perferendis iste reiciendis, nostrum magnam alias perspiciatis corporis sint rerum sunt obcaecati accusantium placeat consequatur tempora at facilis cumque, minima iusto adipisci repellendus soluta earum eius! Quos delectus rem quaerat optio! Exercitationem iusto dolores itaque impedit blanditiis molestiae atque debitis expedita. Quas et optio amet harum natus ratione tempore nisi illo ut?</p>
      </div>
    </section>

    <section class="ott ">
      <h2 class="text-center text-blue font-semibold text-lg mt-48 md:mt-24">WHAT WE DO</h2>

      <div class="my-6 mx-auto">
      <p class="text-base mx-4 md:mx-4 text-justify text-deep-gray tracking-4 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos, minus, rem consequatur facere ex illo, minima et unde perspiciatis mollitia distinctio laudantium est tempora! Veritatis voluptates asperiores perferendis iste reiciendis, nostrum magnam alias perspiciatis corporis sint rerum sunt obcaecati accusantium placeat consequatur tempora at facilis cumque, minima iusto adipisci repellendus soluta earum eius! Quos delectus rem quaerat optio! Exercitationem iusto dolores itaque impedit blanditiis molestiae atque debitis expedita. Quas et optio amet harum natus ratione tempore nisi illo ut?</p>
      </div>
    </section>

    <section class="iptv">
      <h2 class="text-center text-blue font-semibold  text-lg mt-48 md:mt-24 mb-6">OUR TEAM</h2>
      <div  class="tag grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row lg:grid-flow-row gap-4 content-center mx-4 md:mx-0">
          <div v-for="team in teams" :key="team.id" class="top">
            <img class="bg-gblue bg-blend-overlay" :src="team.image" alt="">
            <h3 class="text-center font-semibold text-deep-gray py-3"> {{team.name}}</h3>
            <p class="text-center text-blue">{{team.role}}</p>
            </div>
           
      </div>
    </section>



    <section class="podcast">
    <div class="tag grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row lg:grid-flow-row gap-x-16 content-center mt-48 mx-4 md:mx-2 lg:mx-0">
          <div class="">
            <h2 class="text-blue font-semibold text-2xl text-center md:text-left pt-6 text-lg mb-6">WeGo Client Benefits</h2>
            <p class="text-gray leading-10">Developed to be managed under one roof, our OTT platform provides all you need to manage channels, customers, and billing. We are heavily invested in R&D, constantly updating our apps to provide you the best UX/UI for your customers. We also provide 24/7 support, so we're always by your side.</p>
            <button class="bg-yellow focus:outline-none rounded-full py-3 px-6 mt-6 text-white font-semibold text-sm ml-24">CONTACT US</button>
          </div>

        <div class="order-first">
              <div class="top">
                <div class="overlay"></div>
                <img class="bg-gblue bg-blend-overlay" src="../assets/images/help.jpg" alt="">
                </div>
          </div> 
      </div>
    </section>

    <section class="w-full contact ml-0 h-64 -mt-12 md:mt-24 pl-0 ">
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

  <section class="flex  flex-row-reverse">

     <div class="bg-none py-8  mx-auto my-auto  -mt-56 rounded-lg">
    <section class="flex ml-48 lg:ml-48 lg:mx-0 md:mt-12 lg:mt-0 md:mx-24">
  <div class="bg-white py-8 md:px-20 md:mx-auto mx-4 px-10 my-auto shadow-lg">
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


export default {
  name: 'Home',
  components: {
    Contact, Hero,
  },
  data(){
    return{
      name: '',
      email: '',
      message: '',
      teams: [
        {
          id: 1,
          image: 'https://i.ibb.co/4JRFPvj/pexels-emmy-e-2381069.jpg',
          name: 'TASHA RICH',
          role: 'CEO'
        },
        {
          id: 2,
          image: 'https://i.ibb.co/tzxfJ2Y/pexels-mentatdgt-937481.jpg',
          name: 'MIKE ROSS',
          role: 'COO'
        },
        {
          id: 3,
          image: 'https://i.ibb.co/209gJpY/etty-fidele-VNYCIb-Zju0o-unsplash.jpg',
          name: 'TYLER PERRY',
          role: 'Publicity Officer'
        },
        {
          id: 4,
          image: 'https://i.ibb.co/fqBSNGY/dragos-gontariu-GH-m-SApo-KO0-unsplash.jpg',
          name: 'DAVID RON',
          role: 'Media Director'
        },
        {
          id: 5,
          image: 'https://i.ibb.co/16xKJHZ/model-2911332-640.jpg',
          name: 'JOHN WICK',
          role: 'Creative Director'
        },
        {
          id: 6,
          image: 'https://i.ibb.co/7tMy9Cg/good-attitude-is-basis-good-business.jpg',
          name: 'LORETTA PAYNE',
          role: 'Director'
        },
       
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

.iptv > img {
  max-width: 100%;
  height: 100%;

}

.top {
  position: relative;
}

.overlay{
    width: 100%;
    height: 100%;
    background-image:linear-gradient(to right bottom, #0080FF, #0080FF);
    opacity: 0.5;
    z-index: 1;
    position: absolute;
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

<template>
  <Hero>
    <template v-slot:header>
    <h1 class="md:text-3xl tracking-wide 2xl:text-4xl leading-10 text-2xl -mt-20 md:-mt-6 text-white font-semibold z-0">WeGo Network</h1>
     </template>

    <template v-slot:paragraph>
      <p class="lg:mt-4 md:mt-10 mt-10 tracking-widest leading-9 text-sm text-white font-regular hidden md:block">OTT provides your viewers access to movies and Tv shows, by sending signals directly through the internet.</p>

      <p class="lg:mt-4 md:mt-10 mt-4 tracking-widest leading-9 text-sm  text-white font-regular">Build or Upgrade to a top-notch IPTV/OTT solution that is modern, and offers a High-end user experience across all major platforms..</p>

    </template>
  </Hero >

 
  <div class="about">
    
    <section class="ott ">
      <div class="embed-responsive relative">
         <iframe class="responsive-iframe" src="https://www.youtube.com/embed/I_ELk0667lo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>


      <h2 class="text-center text-red font-semibold text-lg mt-16 md:-mt-12 lg:-mt-32">OUR BACKGROUND</h2>

      <div class="my-6 mx-auto w-auto">
      <p class="md:text-base text-sm mx-4 md:mx-0 text-justify text-deep-gray tracking-wide md:leading-8 leading-6">In 2017, WeGo Network began its journey as a radio station broadcasting live and pre-recorded music and shows. We created a place for creative artists to have a voice and easily show off their work at 104-WeGo. WeGo network quietly started its journey by offering products and services through the internet and solving technical problems related to video streaming and solution to support HD VOD.
      We eventually started providing products and solutions for problems others were facing with videos. We have the right mix of expertise and video technology solutions to help our customers to navigate the video landscape effortlessly and cost-effectively. Our innovative middleware software Livestream, a start-to-finish video platform for creative professionals, business organizations, and individuals offers everything they need to make impactful videos.
     </p>
      </div>
    </section>

    <section class="ott ">
      <h2 class="text-center text-red font-semibold text-lg mt-48 md:mt-24">WHAT WE DO</h2>

      <div class="my-6 mx-auto w-auto">
      <p class="md:text-base text-sm mx-4 md:mx-4 text-justify text-deep-gray tracking-wide md:leading-8 leading-6">WeGo is a well-known name in IPTV/OTT in the ever-evolving streaming industry and maintained a leadership role in IPTV/OTT industry. To give our customers a competitive edge, we continue to invest heavily in R&D to evolve our products. We are moving fast in delivering best-in-class software, top-notch quality experience, constant innovations, and excellence in services and support. We move with customers as partners and work closely with them to create the best-customized IPTV/OTT solutions.</p>
      </div>
    </section>

    <section class="iptv">
      <h2 class="text-center text-red font-semibold  text-lg mt-24 md:mt-24 mb-6">OUR TEAM</h2>
      <div  class="tag grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row lg:grid-flow-row gap-4 content-center mx-4 md:mx-0">
          <div v-for="team in teams" :key="team.id" class="top">
            <img class="bg-red bg-blend-overlay" :src="team.image" alt="">
            <h3 class="text-center font-semibold text-deep-gray py-3"> {{team.name}}</h3>
            <p class="text-center text-red">{{team.role}}</p>
            </div>
           
      </div>
    </section>



    <section class="podcast">
    <div class="tag grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row lg:grid-flow-row gap-x-16 content-center mt-48 mx-4 md:mx-2 lg:mx-0">
          <div class="">
            <h2 class="text-red font-semibold text-2xl text-center md:text-left pt-6 text-lg mb-6">WeGo Client Benefits</h2>
            <p class="text-gray leading-10 text-justify">We help content owners to launch, manage and grow their video streaming service
            WeGo offers a solution for a complex video value chain with powerful technology for managing, storing,        distributing, and monetizing film, television, and sports. Our platform empowers users to monetize their content.
            With End-to-End integration and smooth workflow, WeGo helps content owners, ISP’s and IPTV/OTT companies to excel and grow in this digital era.
</p>
            <button @click="$router.push({name: 'Contact'})" class="bg-red focus:outline-none rounded-full py-3 px-6 mt-6 text-white font-semibold text-sm ml-24">CONTACT US</button>
          </div>

        <div class="order-first">
              <div class="top">
                <div class="overlay"></div>
                <img class="bg-blue bg-blend-overlay" src="../assets/images/help.jpg" alt="">
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
import ContactView from '../components/ContactView.vue'


export default {
  name: 'Home',
  components: {
    Contact, Hero,ContactView
  },
  data(){
    return{
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
    background-image:linear-gradient(to right bottom, #1C1A1A, #000000);
    opacity: 0.5;
    z-index: 1;
    position: absolute;
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

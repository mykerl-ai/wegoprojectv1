<template>
  <section class="w-full contact ml-0 h-64  mt-24 pl-0 md:block hidden">
      <div>
        <div class="w-full user1 flex space-x-96">
          <div class="bg-no-repeat rounded-full  bg-left-top h-24 w-24 user1"></div>
          <div class="bg-no-repeat rounded-full mt-56 ml-48 bg-bottom h-16 w-16 user1"></div>
          <div class="bg-no-repeat rounded-full mt-24 ml-56 bg-right-top h-8 w-8 user1"></div>
          <div class="bg-no-repeat rounded-full mt-60 ml-60 bg-bottom-right h-16 w-16 user1"></div>
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

  <section class="flex mx-4 md:mx-0 -mt-32 md:mt-0 flex-row-reverse md:block hidden">

  <div class="bg-none py-8 mx-0 md:mx-auto my-auto -mt-56 rounded-lg">
  
  <section class="flex ml-48 lg:ml-48 lg:mx-0 md:mt-12 lg:mt-0 md:mx-24">
  <div class="bg-white py-8 md:px-20 md:mx-auto  px-10 my-auto shadow-lg">
    <h1 class="text-red mt-6 md:mt-0 text-center md:text-left text-2xl">Get in touch</h1>
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
</template>

<script>
export default {
     data(){
    return{
      name: '',
      email: '',
      message: '',

    }
  },

}
</script>

<style>
.contact-bar {
background-image: linear-gradient(to right bottom, #000000, #090909, #131313, #1A1A1A, #202020);}

.form-btn {
background-image: linear-gradient(to right bottom, #f44334, #ed382a, #e52c1f, #de1d13, #d60505);  } 

  textarea:focus, input:focus {
    border: none;
    color:  #0BB6EB;
  }

  @media (max-width: 640px) { 
      .contact-bar {
          display: none; 
}
   }

</style>
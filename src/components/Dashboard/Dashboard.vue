<template>
  <h1 class="md:text-2xl text-xl my-4 md:my-6 lg:my-0 4 text-center md:text-left font-medium text-deep-gray">Overview</h1>
  <div  class="w-full cards grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      <div v-for="card in cards" :key="card.id" class="shadow-4xl rounded-lg md:my-6 my-2 card py-6 md:mx-0 mx-6 px-4 bg-white" :class="'md' ? '' :card.class">
          <p class="text-base font-medium md:text-sm text-white md:text-gray mb-12 text-center md:text-left">{{card.title}}</p>
          <h2 class="md:text-2xl text-xl font-bold md:font-semibold text-white md:text-deep-gray text-center md: text-left">{{card.figure}}</h2>
          
      </div>
      <div class="greenClass w-20 h-20 hidden md:block md:-mt-60 lg:ml-60 md:ml-32 rounded-md shadow-lg z-20">
        <div class="py-4 px-4"><svg  xmlns="http://www.w3.org/2000/svg" width="38.194" height="26.297" viewBox="0 0 38.194 26.297">
  <path id="Icon_awesome-eye" data-name="Icon awesome-eye" d="M37.963,16.648A21.216,21.216,0,0,0,19.1,4.5,21.219,21.219,0,0,0,.231,16.649a2.28,2.28,0,0,0,0,2A21.216,21.216,0,0,0,19.1,30.8,21.219,21.219,0,0,0,37.963,18.647,2.28,2.28,0,0,0,37.963,16.648ZM19.1,27.509a9.709,9.709,0,0,1-9.548-9.861A9.709,9.709,0,0,1,19.1,7.787a9.709,9.709,0,0,1,9.548,9.861A9.7,9.7,0,0,1,19.1,27.509Zm0-16.435a6.135,6.135,0,0,0-1.678.26,3.357,3.357,0,0,1-.312,4.259,3.1,3.1,0,0,1-4.124.322,6.666,6.666,0,0,0,2.591,7.165,6.189,6.189,0,0,0,7.4-.241,6.687,6.687,0,0,0,2.148-7.32A6.37,6.37,0,0,0,19.1,11.074Z" transform="translate(0 -4.5)" fill="#fff"/>
</svg></div>
</div>

      <div class="redClass w-20 h-20 hidden md:block md:-mt-60 ml-48 lg:ml-60 md:ml-32 rounded-md shadow-lg z-20"><div class="py-4 px-6"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
  <path id="Icon_material-video-library" data-name="Icon material-video-library" d="M6,9H3V30a3.009,3.009,0,0,0,3,3H27V30H6ZM30,3H12A3.009,3.009,0,0,0,9,6V24a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V6A3.009,3.009,0,0,0,30,3ZM18,21.75V8.25L27,15Z" transform="translate(-3 -3)" fill="#fff"/>
</svg>
</div></div>
      <div class="blueClass w-20 h-20 hidden md:block md:-mt-60 ml-48 lg:ml-60 md:ml-32 rounded-md shadow-lg z-20"><div class="py-4 px-8"><svg xmlns="http://www.w3.org/2000/svg" width="20.246" height="36" viewBox="0 0 20.246 36">
  <path id="Icon_awesome-dollar-sign" data-name="Icon awesome-dollar-sign" d="M14.709,16.411,7.116,14.189A2.074,2.074,0,0,1,7.7,10.125h4.662a4.292,4.292,0,0,1,2.4.738,1.1,1.1,0,0,0,1.371-.141l2.447-2.391a1.14,1.14,0,0,0-.127-1.723A9.942,9.942,0,0,0,12.375,4.5V1.125A1.128,1.128,0,0,0,11.25,0H9A1.128,1.128,0,0,0,7.875,1.125V4.5H7.7A7.7,7.7,0,0,0,.035,12.909,8.049,8.049,0,0,0,5.927,19.7l7.207,2.109a2.074,2.074,0,0,1-.584,4.064H7.889a4.292,4.292,0,0,1-2.4-.738,1.1,1.1,0,0,0-1.371.141L1.666,27.668a1.14,1.14,0,0,0,.127,1.723A9.942,9.942,0,0,0,7.875,31.5v3.375A1.128,1.128,0,0,0,9,36h2.25a1.128,1.128,0,0,0,1.125-1.125V31.486a7.942,7.942,0,0,0,7.432-5.112,7.721,7.721,0,0,0-5.1-9.963Z" transform="translate(-0.002)" fill="#fff"/>
</svg>

</div></div>
     </div>

     <div class="table grid grid-cols-6 gap-6 grid-flow-row bg-white">

         <div class="topV col-span-6 lg:col-span-4 md:col-span-6 shadow-xl py-6 px-4">
            <p class="text-sm text-white font-semibold pl-3 mb-12 redClass py-2">Top videos</p>
            <div class="w-90">
    <table class="table-fixed w-full bg-white">
    <thead class="text-blue text-xs">
    <tr>
      <th class="w-1/2 py-2 px-2 text-left">VIDEOS</th>
      <th class="w-1/4 text-left">UPLOADED</th>
      <th class="w-1/4 text-left">VIEWS</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="movie in movies" :key="movie.id">
      <td class="flex">
        <div class="my-4 w-16 h-16 overflow-hidden">
            <img :src="`${movie.image}`" alt="">
            
        </div>
        <p class="text-xs my-8 ml-4">{{movie.title}}</p>
      
      </td>
      <td class="text-xs">{{movie.time}}</td>
      <td class="text-xs">{{movie.views}}</td>
    </tr>
    
  </tbody>
</table>
            </div>
         </div>

         <div class="details col-span-6 lg:col-span-2 md:col-span-6 py-6 px-4 shadow-xl">
              <p class="text-sm text-deep-gray mb-12 ">Quick details</p>
              <div class="bg-yellow w-full py-0.5"></div>
              <div class="flex py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="38" viewBox="0 0 38 38">
  <defs>
    <linearGradient id="linear-gradient" x2="0" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#8280ff"/>
      <stop offset="1" stop-color="#7e96ff"/>
    </linearGradient>
  </defs>
  <g id="Icon" transform="translate(-1155 -1397)">
    <circle id="Icon.BG" cx="19" cy="19" r="19" transform="translate(1155 1397)" fill="#e8e7ff"/>
    <path id="New_customer_Icon" data-name="New customer Icon" d="M-6877-1838v-2h-2v-2h2v-2h2v2h2v2h-2v2Zm-12,0v-1a4.951,4.951,0,0,1,5-5h3v2h-3a2.91,2.91,0,0,0-2.8,2h5.8v2Zm3-11v-1a4.011,4.011,0,0,1,4-4,4.011,4.011,0,0,1,4,4v1a4.011,4.011,0,0,1-4,4A4.011,4.011,0,0,1-6886-1849Zm2-1v1a2.007,2.007,0,0,0,2,2,2.007,2.007,0,0,0,2-2v-1a2.006,2.006,0,0,0-2-2A2.006,2.006,0,0,0-6884-1850Z" transform="translate(8055 3262)" fill="url(#linear-gradient)"/>
  </g>
                </svg>
                <p class="text-xs py-2 px-4">290 new subscribers</p>
                <p class="ml-16 py-2 text-light-gray text-xs">2 hours ago</p>

              </div>
              
              
              <div class="flex py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
  <g id="Icon" transform="translate(-1155 -1397)">
    <circle id="Icon.BG" cx="19" cy="19" r="19" transform="translate(1155 1397)" fill="#daf7e8"/>
    <path id="Process" d="M-6851.2-1475.1a6.973,6.973,0,0,1-4.9,2,6.721,6.721,0,0,1-4.9-2,6.583,6.583,0,0,1-1.9-3.8l2-.3a5.405,5.405,0,0,0,1.4,2.7,5.012,5.012,0,0,0,7,0l-2.1-2.1,6.4-.7-.8,6.4Zm-11.9-12,2.2,2.2a7.063,7.063,0,0,1,9.9,0,6.592,6.592,0,0,1,1.9,3.8l-2,.3a5.4,5.4,0,0,0-1.4-2.7,5.012,5.012,0,0,0-7,0l2.1,2.1-6.4.7Z" transform="translate(8029.801 2896.101)" fill="#4ad991"/>
  </g>
</svg>

                <p class="text-xs py-2 px-4">490 subscriptions</p>
                <p class="ml-16 py-2 text-light-gray text-xs">Pending</p>

              </div>

              <div class="flex py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
  <g id="Icon" transform="translate(-1155 -1397)">
    <circle id="Icon.BG" cx="19" cy="19" r="19" transform="translate(1155 1397)" fill="#fff4e5"/>
    <g id="alert-circle-exc" transform="translate(1166 1408)">
      <path id="Path_257" data-name="Path 257" d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,12a.945.945,0,0,1-1-1,.945.945,0,0,1,1-1,.945.945,0,0,1,1,1A.945.945,0,0,1,8,12ZM9,9H7V4H9Z" fill="#ffca83"/>
    </g>
  </g>
                    </svg>


                <p class="text-xs py-2 px-4">280 subscriptions</p>
                <p class="ml-16 py-2 text-light-gray text-xs">cancelled</p>

              </div>


         </div>
         
     </div>
</template>

<script>
import image from "@/assets/images/wars.jpg"
export default {
    data(){
        return{
            cards: [
                {title: 'Total views', figure: '264k', id: 'views', class: 'greenClass'},
                {title: 'Total videos', figure: 2463, id: 'videos', class: 'redClass'},
                {title: 'Total earnings', figure: '$39k', id: 'earnings', class: 'blueClass'}
            ],
            movies: [
                {image: image, title: 'Star wars', time: '1 minute ago', views:'29,129', id: 1},
                {image: image, title: 'Star wars', time: '2 minutes ago', views:'129,192', id: 2},
                {image: image, title: 'Star wars', time: '1 day ago', views:'40,000', id: 3},
                {image: image, title: 'Star wars', time: '3 days ago', views:'250,000', id: 4},
                {image: image, title: 'Star wars', time: '6 days ago', views:'450,000', id: 5},
                {image: image, title: 'Star wars', time: '1 week ago', views:'500,000', id: 6},
            ],
            
        }
    }

}
</script>

<style>
.redClass{
  /* background-image: linear-gradient(to bottom right, #d06814 , #ffcdb2); */
 background: linear-gradient(60deg, #ffa726, #fb8c00);
  }

  .blueClass{
  background: linear-gradient(60deg, #66bb6a, #43a047);
}

.greenClass{
   background: linear-gradient(60deg, #26c6da, #00acc1);
}

.card {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
}
</style>
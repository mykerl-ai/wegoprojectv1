<template>
  <h1 class="text-3xl text-left font-medium text-deep-gray">Overview</h1>
  <div  class="w-full cards grid grid-cols-3">
      <div v-for="card in cards" :key="card.id" class="shadow-lg py-6 px-4">
          <p class="text-sm text-deep-gray mb-12 ">{{card.title}}</p>
          <h2 class="text-2xl font-semibold text-blue ">{{card.figure}}</h2>
      </div>
     </div>

     <div class="table grid grid-cols-6">

         <div class="topV col-span-4 shadow-xl py-6 px-4">
            <p class="text-sm text-deep-gray mb-12 ">Top videos</p>
            <div class="w-90">
              <table class="table-fixed w-full">
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

         <div class="details col-span-2 py-6 px-4 shadow-xl">
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
                {title: 'Total views', figure: '264k', id: 'views'},
                {title: 'Total videos', figure: 2463, id: 'videos'},
                {title: 'Total earnings', figure: '$39k', id: 'earnings'}
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

</style>
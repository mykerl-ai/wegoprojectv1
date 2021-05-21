<template>
  <div class="w-full shadow-lg py-2 px-2 mt-16"></div>
  <div  class="w-full cards grid grid-cols-1 lg:grid-cols-3 grid-flow-row auto-cols-auto">
      <div v-for="card in cards" :key="card.id" class="shadow-lg py-6 px-4">
          <p class="text-sm text-deep-gray mb-12 ">{{card.title}}</p>
          <h2 class="text-4xl font-semibold text-blue ">{{card.figure}}</h2>
          <h2 class="text-sm text-blue ">{{card.details}}</h2>
          <p class="text-xs text-deep-gray mb-4">{{card.Bitrate}}</p>
          <p class="text-xs text-deep-gray mb-4">{{card.listeners}}</p>
          <p class="text-xs text-deep-gray mb-4">{{card.data}}</p>
          <p class="text-sm text-deep-gray mb-4">{{card.storage}}</p>
      </div>
     </div>

     <div class="table grid grid-cols-6">

         <div class="topV col-span-6 shadow-xl py-6 px-4">
            <p class="text-base text-deep-gray mb-12 ">Auto DJ Broadcast control</p>
            <p class="text-sm text-deep-gray mb-12 ">You don't have a playlist yet, <button class="text-blue focus:outline-none text-xs"> go to "Playlists tab to create one"</button></p>
        </div>

         
     </div>
</template>

<script>
import image from "@/assets/images/wars.jpg"
export default {
    data(){
        return{
            cards: [
                {title: 'Listeners', details:'connected now', figure: '0', id: 'views'},
                {title: 'Streaming URL:', details:' https://servidor18.brlogic.com:7040/live',id: 'videos'},
                {title: 'Details', Bitrate:' Maximum Bitrate: 128kbps', listeners: 'Max simultaneous listeners: 10', data:'Monthly data transfer: 0GB/unlimited', storage: 'Storage used: 0GB/0.6GB', id: 'videos'},
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
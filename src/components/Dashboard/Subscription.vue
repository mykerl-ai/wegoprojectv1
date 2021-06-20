<template>
  <h1 class="text-3xl text-left font-medium text-deep-gray">Set subscription fee</h1>
  <div  class="w-full cards grid grid-cols-1 lg:grid-cols-2">
      <div class="shadow-lg py-6 px-4">
          <form action="">
              <label for="amount" class="text-gray pb-4">Set Amount</label>
              <input name="amount" type="number" v-model="amount"  class="border border-gray px-8 block focus:outline-none mt-3 py-2">
              <div class="flex">
                  <label class="my-6 mx-3" for="check1">Monthly</label>
                  <input name="check1" type="checkbox"  class="block my-8">

                   <label class="my-6 ml-6" for="check1">Per view</label>
                  <input name="check1" type="checkbox"  class="block my-8 mx-3">

              </div>

              <label for="subscribers"  class="text-gray pb-4">Estimated number of subscribers</label>
              <input name="amount" type="number" v-model="subscribers"  class="border border-gray px-8 focus:outline-none mt-3 py-2">

              <button class="form-btn rounded-full focus:outline-none py-3 px-12 bg-blue mt-6 block  text-sm text-white">Done</button>


              <p class="text-gray text-sm text-center mt-4">Need help? <button @click="handleClick" class="bg-none text-blue  text-sm pt-4 focus:outline-none focus:ring-2 focus:ring-opacity-0">Contact us</button></p> 
          </form>
          

      </div>

      <div class="shadow-lg py-6 px-4">
          
              <p for="amount" class="text-gray pb-4">Estimated annual gross revenue</p>
              <h2  class="border border-gray px-8 focus:outline-none mt-3 py-2">$ {{result}}</h2>
              
          
      </div>
     </div>

     

     


        
</template>

<script>
import image from "@/assets/images/wars.jpg"
export default {
    data(){
        return{
            amount: '',
            subscribers: '',
            figure: '',
            movies: [
                {image: image, title: 'Star wars', time: '1 minute ago', views:'29,129', id: 1},
                {image: image, title: 'Star wars', time: '2 minutes ago', views:'129,192', id: 2},
                {image: image, title: 'Star wars', time: '1 day ago', views:'40,000', id: 3},
                {image: image, title: 'Star wars', time: '3 days ago', views:'250,000', id: 4},
                {image: image, title: 'Star wars', time: '6 days ago', views:'450,000', id: 5},
                {image: image, title: 'Star wars', time: '1 week ago', views:'500,000', id: 6},
            ],
            
        }
    },

    methods: {handleClick(){
          this.$router.push({name: 'Contact'})
      }
      
      },

    computed: {
        result(){
            
            return this.amount * this.subscribers * 12
        }
    }

    

}
</script>

<style>

</style>
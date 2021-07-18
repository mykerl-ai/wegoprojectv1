<template>
  <div class="mx-20">
    
    <form method="GET">
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="py-2 text-sm text-gray pr-4 bg-gray-900 rounded-md pl-10 focus:outline-none focus:border-blue rounded-full focus:text-gray-900 border border-gray" placeholder="Search..." autocomplete="off">
    </div>
  </form>

    <div class="grid grid-cols-3 mt-20 gap-6">
        
            <h1 class="text-xs text-blue mb-8 font-semibold">CUSTOMERS</h1>
            <h1 class="text-xs text-blue mb-8 font-semibold">STATUS</h1>
            <h1 class="text-xs text-blue mb-8 font-semibold">BLOCK</h1>
    </div>

    <div v-for="customer in customers" :key="customer.id" class="grid grid-cols-3 gap-4">

            <p class="text-xs text-gray mb-8 font-semibold">{{customer.name}}</p>
            <div class="px-0 w-20 py-0 rounded-full "  :class="{ activeClass: customer.isActive===true, errorClass: customer.isActive===false }">
            <p  >{{customer.isActive ? status : 'inactive'}}</p></div>
            
            <button @click="customer.isActive = !customer.isActive" :key="customer.id" class="-mt-3 focus:outline-none rounded-full h-8 w-8 px-0" :class="{activeClass: customer.isActive===true, errorClass: customer.isActive===false}">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
  <path id="Icon_material-block" data-name="Icon material-block" d="M14.5,3A11.5,11.5,0,1,0,26,14.5,11.5,11.5,0,0,0,14.5,3ZM5.3,14.5a9.2,9.2,0,0,1,9.2-9.2,9.088,9.088,0,0,1,5.635,1.944L7.243,20.135A9.088,9.088,0,0,1,5.3,14.5Zm9.2,9.2a9.088,9.088,0,0,1-5.635-1.944L21.757,8.865A9.088,9.088,0,0,1,23.7,14.5,9.2,9.2,0,0,1,14.5,23.7Z" transform="translate(-3 -3)" fill="#A8A8A8"/>
</svg>
</button>
</div>

   

    <div class="grid">


    </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            customers: [
                {name: 'John Grisham',  id: 1, isActive: true,},
                {name: 'Bill Grisham', id: 2, isActive: false  },
            ],
            
            status: 'active',
          
          
        }
    },
    
    

}
</script>

<style>
.activeClass {
   color: green;
    
}

.errorClass {
 color: #FF7285;
    
}
</style>
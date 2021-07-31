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
        
            <h1 class="text-xs text-red mb-8 font-semibold">TYPE</h1>
            <h1 class="text-xs text-red mb-8 font-semibold">STATUS</h1>
            <h1 class="text-xs text-red mb-8 font-semibold md:text-center">ACTION</h1>
    </div>

    <div v-for="customer in customers" :key="customer.id" class="grid grid-cols-3 gap-4">

            <p class="text-xs text-gray mb-8 font-semibold">{{customer.name}}</p>
            <div class="px-0 w-20 py-0 rounded-full "  :class="{ activeClass: customer.isActive===true, errorClass: customer.isActive===false }">
            <p  >{{customer.isActive ? status : 'inactive'}}</p></div>
            
            <button @click="this.$router.push({name: customer.link})" :disabled="customer.isActive" :key="customer.id" class="" :class="{'cursor-not-allowed bg-gray rounded-full focus:outline-none py-3 px-4 mb-2 block  text-sm': customer.isActive===true, 'rounded-full focus:outline-none py-3 px-4 bg-blue mb-2 block  text-sm text-white': customer.isActive===false}">
           Subscribe
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
                {name: 'IPTV',  id: 1, isActive: true, link: 'Iptv'},
                {name: 'OTT', id: 2, isActive: true, link: 'Ott'  },
                {name: 'PODCAST', id: 3, isActive: false, link: 'Podcast'  },
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
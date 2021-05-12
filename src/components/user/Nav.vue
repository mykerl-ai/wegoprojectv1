<template>
  <div class="md:container md:py-8 md:mx-auto">
      <div class="flex space-x-20 w-full mx-20">
          <form method="GET">
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 35.914 35.914">
  <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3 -3)">
    <path id="Path_352" data-name="Path 352" d="M33.2,18.852A14.352,14.352,0,1,1,18.852,4.5,14.352,14.352,0,0,1,33.2,18.852Z" fill="none" stroke="#0072E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <path id="Path_353" data-name="Path 353" d="M32.779,32.779l-7.8-7.8" transform="translate(4.013 4.013)" fill="none" stroke="#0072E4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </g>
</svg>

        </button>
      </span>
      <input type="search" name="q" class="py-1 px-3 text-sm text-gray pr-4  rounded-md pl-10 focus:outline-none focus:border-blue rounded-full focus:text-gray-900" placeholder="Search..." autocomplete="off">
    </div>
          </form>

        <nav>
          <ul class="grid grid-cols-4 justify-between gap-8">
          <li><router-link :to="{name: 'Movies'}" class="text-sm text-white text-center font-medium">Movies</router-link></li>
          <li><router-link :to="{name: 'Shows'}" class="text-sm text-white text-center font-medium">Shows</router-link></li>
          <li><router-link :to="{name: 'Watchlist'}" class="text-sm text-white text-center font-medium">Watchlist</router-link></li>
          <li><router-link :to="{name: 'Categories'}" class="text-sm text-white text-center font-medium">Categories</router-link></li>
          </ul>
        </nav>
      </div>


      
  </div>
</template>

<script>
export default {

}
</script>

<style>

nav {
  padding: 0 10px
}

 nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   border-bottom: 1px solid #F8E71C;
   padding: 0 5px;
 }
</style>
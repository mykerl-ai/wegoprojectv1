<template>
  <div class="md:container md:py-8 mt-6 md:mx-auto">
      <slot></slot>

      
  </div>
</template>

<script>
export default {
  data(){
      return{
        menu: false,
      }
    },
  methods: {
    showMenu(){
        this.menu = !this.menu
      }
  },
}
</script>

<style>

nav {
  padding: 0 2px
}

 nav button:hover,
 nav button.router-link-active,
 nav button.router-link-exact-active {
   border-bottom: 1px solid #F8E71C;
   
 }


 .dropdown1, .dropdown2 {
  float: left;
  overflow: hidden;
}

.dropdown1 .dropbtn {
  font-size: 14px;  
  border: none;
  outline: none;
  color: white;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}



/* .navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
} */

.dropdown-content1 {
  display: none;
  position: absolute;
  background-color: #0080FF;
  border-radius: 6px;
  
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10;
}

.dropdown-content1 a {
  float: none;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content1 a:hover {
  background-color: #0072E4;
}

.dropdown1:hover .dropdown-content1 {
  display: block;
}


</style>
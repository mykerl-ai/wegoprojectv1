<template>
  <header class="flex justify-around">
      <slot></slot>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>

a {
  color: white;
  font-size: 14px;
}
 .bt {
   background-color: white;
   color: rgba(59, 130, 246, var(--tw-bg-opacity));;
   padding: 8px;
   border-radius: 4px;
 }
 header{
   position: relative;
        z-index: 10;
 }
</style>
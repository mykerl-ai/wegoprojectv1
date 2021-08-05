<template>
  <div class="wrapper">
      <div class="slider flex">
          <div class="slide">
              <img src="https://i.ibb.co/c3m1sQK/inception.jpg" alt="">
              <img src="https://i.ibb.co/rdC4F2c/avengers.jpg" alt="">
              <img src="https://i.ibb.co/q7dDWbd/woman.jpg" alt="">
              <img src="https://i.ibb.co/wcJZn7S/wars.jpg" alt="">
              <img src="https://i.ibb.co/cJjG2Sf/wick.jpg" alt="">
              <img src="https://i.ibb.co/GFXxYZ4/rings.jpg" alt="">
              <img src="https://i.ibb.co/c3m1sQK/inception.jpg" alt="">
              <img src="https://i.ibb.co/rdC4F2c/avengers.jpg" alt="">
              <img src="https://i.ibb.co/q7dDWbd/woman.jpg" alt="">
              <img src="https://i.ibb.co/wcJZn7S/wars.jpg" alt="">
              <img src="https://i.ibb.co/cJjG2Sf/wick.jpg" alt="">
              <img src="https://i.ibb.co/GFXxYZ4/rings.jpg" alt="">
              <img src="https://i.ibb.co/GFXxYZ4/rings.jpg" alt="">
          </div>
           

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .wrapper {
        width: 100%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .slider {
        width: 100%;
        height: 100%;
        position: relative;
        background: white;
        overflow: hidden;

    }
    .slide {
        width: 500px;
        display: flex;
        height: 100%;
        background-size: 100%;
        animation: slideshow 12s linear infinite;

    }
     .slide img {
         max-width: 100%;
         max-height: 100%;
         object-fit: fill;
         padding: 1px 2px;
         
    } 

    @keyframes slideshow{
        0% {transform: translateX(0);}
        100% {transform: translateX(-100%);}
    }

    @media (min-width: 1536px) { 

        .wrapper {
        width: 100%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slide {
        width: 100%;
        display: flex;
        height: 100%;
        background-size: 100%;
        animation: slideshow 12s linear infinite;

    }
    
    
    }
</style>
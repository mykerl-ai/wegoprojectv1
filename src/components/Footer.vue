<template>
  <div class="w-full w-24 lg:pl-8 pt-5 md:pl-2 space-x-8 mt-40">

      <div class="grid grid-cols-2  lg:gap-80">

         <div class="flex w-12 md:w-24 md:pl-8 md:pt-5">
             <img  src="../assets/logo.png" alt="">
              <p class="text-xs pt-2 text-deep-gray">All rights reserved</p>
        </div>

      <div class="md:flex md:space-x-8 space-x-2 hidden">
        
          <router-link :to="{name: 'Home'}"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 57 57">
            <g id="facebook" transform="translate(0.5 0.5)">
                <path id="Facebook-2" data-name="Facebook" d="M1.981,3.873V6.627H0V9.994H1.981V20h4.07V9.994H8.783s.256-1.615.38-3.38h-3.1v-2.3a.967.967,0,0,1,.882-.807H9.167V0H6.152C1.881,0,1.981,3.37,1.981,3.873Z" transform="translate(23 18)" fill="#005cc7"/>
                <circle id="Oval_8" data-name="Oval 8" cx="28" cy="28" r="28" fill="none" stroke="#005cc7" stroke-miterlimit="10" stroke-width="1" opacity="0.2"/>
            </g>
            </svg></router-link>

          <router-link :to="{name : 'Home'}"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 57 57">
    <g id="twitter" transform="translate(0.5 0.5)">
    <path id="XMLID_827_" d="M19.547,1.847a7.7,7.7,0,0,1-.967.344,4.155,4.155,0,0,0,.871-1.5.311.311,0,0,0-.106-.343.329.329,0,0,0-.365-.025,7.718,7.718,0,0,1-2.25.869A4.368,4.368,0,0,0,13.723,0,4.25,4.25,0,0,0,9.429,4.2a4.183,4.183,0,0,0,.035.542A11.071,11.071,0,0,1,1.92.826a.327.327,0,0,0-.529.04A4.124,4.124,0,0,0,1.832,5.7a3.68,3.68,0,0,1-.575-.251.329.329,0,0,0-.317,0,.314.314,0,0,0-.162.266c0,.019,0,.037,0,.056a4.192,4.192,0,0,0,2.1,3.608c-.109-.011-.218-.026-.327-.046a.327.327,0,0,0-.3.1.31.31,0,0,0-.066.305A4.256,4.256,0,0,0,5.33,12.548a7.728,7.728,0,0,1-4.06,1.132,7.947,7.947,0,0,1-.909-.052.324.324,0,0,0-.342.207.312.312,0,0,0,.13.372A11.777,11.777,0,0,0,6.41,16a11.247,11.247,0,0,0,8.63-3.7A11.587,11.587,0,0,0,18.03,4.645c0-.115,0-.231-.005-.347A8.237,8.237,0,0,0,19.946,2.31a.309.309,0,0,0-.021-.378A.327.327,0,0,0,19.547,1.847Z" transform="translate(18 20)" fill="#005cc7"/>
    <circle id="Oval_8_Copy" data-name="Oval 8 Copy" cx="28" cy="28" r="28" fill="none" stroke="#005cc7" stroke-miterlimit="10" stroke-width="1" opacity="0.2"/>
  </g>
            </svg></router-link>

          <router-link :to="{name: 'Home'}"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 57 57">
  <g id="telegram" transform="translate(0.5 0.5)">
    <path id="XMLID_497_" d="M16.061,16.923a.549.549,0,0,1-.318-.1L11.11,13.553a.773.773,0,0,0-.45-.142.785.785,0,0,0-.485.167L7.607,15.613a.549.549,0,0,1-.861-.252L4.962,9.786.354,8.114a.523.523,0,0,1-.005-.987L19.261.036A.55.55,0,0,1,19.885.2a.507.507,0,0,1,.1.432L16.594,16.5A.536.536,0,0,1,16.061,16.923ZM15.549,3.481a.163.163,0,0,0-.085.025L6.458,8.9a.872.872,0,0,0-.4.991l.974,3.325a.234.234,0,0,0,.455-.031l.254-1.824a1.49,1.49,0,0,1,.477-.9l7.433-6.715a.143.143,0,0,0,.042-.162A.16.16,0,0,0,15.549,3.481Z" transform="translate(17 21)" fill="#005cc7"/>
    <circle id="Oval_8_Copy_2" data-name="Oval 8 Copy 2" cx="28" cy="28" r="28" fill="none" stroke="#005cc7" stroke-miterlimit="10" stroke-width="1" opacity="0.2"/>
  </g>
            </svg></router-link>

          <router-link :to="{name: 'Home'}"><svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57">
  <g id="telegram" transform="translate(0.5 0.5)">
    <circle id="Oval_8_Copy_2" data-name="Oval 8 Copy 2" cx="28" cy="28" r="28" fill="none" stroke="#005cc7" stroke-miterlimit="10" stroke-width="1" opacity="0.2"/>
    <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M10.019,7.12a5.138,5.138,0,1,0,5.138,5.138A5.13,5.13,0,0,0,10.019,7.12Zm0,8.478a3.34,3.34,0,1,1,3.34-3.34,3.346,3.346,0,0,1-3.34,3.34ZM16.566,6.91a1.2,1.2,0,1,1-1.2-1.2A1.2,1.2,0,0,1,16.566,6.91Zm3.4,1.216a5.931,5.931,0,0,0-1.619-4.2,5.97,5.97,0,0,0-4.2-1.619c-1.655-.094-6.614-.094-8.268,0a5.961,5.961,0,0,0-4.2,1.614,5.95,5.95,0,0,0-1.619,4.2c-.094,1.655-.094,6.614,0,8.268a5.931,5.931,0,0,0,1.619,4.2,5.977,5.977,0,0,0,4.2,1.619c1.655.094,6.614.094,8.268,0a5.931,5.931,0,0,0,4.2-1.619,5.97,5.97,0,0,0,1.619-4.2c.094-1.655.094-6.609,0-8.264ZM17.831,18.165a3.382,3.382,0,0,1-1.9,1.9c-1.319.523-4.449.4-5.907.4s-4.592.116-5.907-.4a3.382,3.382,0,0,1-1.9-1.9c-.523-1.319-.4-4.449-.4-5.907s-.116-4.592.4-5.907a3.382,3.382,0,0,1,1.9-1.9c1.319-.523,4.449-.4,5.907-.4s4.592-.116,5.907.4a3.382,3.382,0,0,1,1.9,1.9c.523,1.319.4,4.449.4,5.907S18.355,16.85,17.831,18.165Z" transform="translate(17.983 15.742)" fill="#0072e4"/>
  </g>
          </svg>
          </router-link>

          <router-link :to="{name: 'Home'}">
  
  <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57">
  <g id="facebook" transform="translate(0.5 0.5)">
    <circle id="Oval_8" data-name="Oval 8" cx="28" cy="28" r="28" fill="none" stroke="#005cc7" stroke-miterlimit="10" stroke-width="1" opacity="0.2"/>
    <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" d="M4.081,18.23H.3V6.059H4.081ZM2.189,4.4A2.2,2.2,0,1,1,4.378,2.19,2.207,2.207,0,0,1,2.189,4.4ZM18.226,18.23H14.455V12.306c0-1.412-.028-3.223-1.965-3.223-1.965,0-2.266,1.534-2.266,3.121V18.23H6.448V6.059h3.625V7.72h.053A3.971,3.971,0,0,1,13.7,5.754c3.825,0,4.528,2.519,4.528,5.79V18.23Z" transform="translate(18.885 18.885)" fill="#0072e4"/>
  </g>
  </svg>

          </router-link>

      </div>

      <div class="flex md:space-x-8 space-x-2 md:hidden">
        
          <router-link :to="{name: 'Home'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
            <g id="facebook" transform="translate(0.5 0.5)">
            <path id="Facebook-2" data-name="Facebook" d="M.765,1.5V2.56H0v1.3H.765V7.726H2.338V3.861H3.393s.1-.624.147-1.306h-1.2V1.666a.374.374,0,0,1,.341-.312h.857V0H2.376C.726,0,.765,1.3.765,1.5Z" transform="translate(8.885 6.953)" fill="#005cc7"/>
            <circle id="Oval_8" data-name="Oval 8" cx="11" cy="11" r="11" fill="none" stroke="#005cc7" stroke-miterlimit="10" stroke-width="1" opacity="0.2"/>
            </g>
            </svg>

            </router-link>

          <router-link :to="{name : 'Home'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
            <g id="twitter" transform="translate(0.5 0.5)">
            <path id="XMLID_827_" d="M7.679.725A3.024,3.024,0,0,1,7.3.861,1.632,1.632,0,0,0,7.641.273.122.122,0,0,0,7.6.138a.129.129,0,0,0-.144-.01A3.032,3.032,0,0,1,6.572.47,1.716,1.716,0,0,0,5.391,0,1.67,1.67,0,0,0,3.7,1.648a1.643,1.643,0,0,0,.014.213A4.349,4.349,0,0,1,.754.325.128.128,0,0,0,.547.341a1.62,1.62,0,0,0,.173,1.9,1.446,1.446,0,0,1-.226-.1.129.129,0,0,0-.125,0,.123.123,0,0,0-.064.1c0,.007,0,.015,0,.022a1.647,1.647,0,0,0,.826,1.417c-.043,0-.086-.01-.128-.018a.128.128,0,0,0-.119.04.122.122,0,0,0-.026.12,1.672,1.672,0,0,0,1.236,1.1,3.036,3.036,0,0,1-1.6.445,3.122,3.122,0,0,1-.357-.02.127.127,0,0,0-.134.081.122.122,0,0,0,.051.146,4.627,4.627,0,0,0,2.46.7,4.418,4.418,0,0,0,3.39-1.455A4.552,4.552,0,0,0,7.083,1.825c0-.045,0-.091,0-.136A3.236,3.236,0,0,0,7.836.907.122.122,0,0,0,7.827.759.129.129,0,0,0,7.679.725Z" transform="translate(7.071 7.857)" fill="#005cc7"/>
            <circle id="Oval_8_Copy" data-name="Oval 8 Copy" cx="11" cy="11" r="11" fill="none" stroke="#005cc7" stroke-miterlimit="10" stroke-width="1" opacity="0.2"/>
            </g>
            </svg>
          </router-link>

          <router-link :to="{name: 'Home'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
            <g id="telegram" transform="translate(0.5 0.5)">
            <path id="XMLID_497_" d="M6.309,6.648a.216.216,0,0,1-.125-.04L4.364,5.324a.3.3,0,0,0-.177-.056A.308.308,0,0,0,4,5.334l-1.009.8a.216.216,0,0,1-.338-.1l-.7-2.19L.139,3.188a.205.205,0,0,1,0-.388L7.567.014A.216.216,0,0,1,7.812.08a.2.2,0,0,1,.041.17L6.519,6.483A.211.211,0,0,1,6.309,6.648Zm-.2-5.281a.064.064,0,0,0-.033.01L2.537,3.5a.343.343,0,0,0-.156.389l.383,1.306a.092.092,0,0,0,.179-.012l.1-.717A.586.586,0,0,1,3.23,4.11L6.15,1.472a.056.056,0,0,0,.017-.064A.063.063,0,0,0,6.109,1.368Z" transform="translate(6.679 8.25)" fill="#005cc7"/>
            <circle id="Oval_8_Copy_2" data-name="Oval 8 Copy 2" cx="11" cy="11" r="11" fill="none" stroke="#005cc7" stroke-miterlimit="10" stroke-width="1" opacity="0.2"/>
            </g>
            </svg>
            </router-link>

          <router-link :to="{name: 'Home'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
            <g id="telegram" transform="translate(0.5 0.5)">
            <circle id="Oval_8_Copy_2" data-name="Oval 8 Copy 2" cx="11" cy="11" r="11" fill="none" stroke="#005cc7" stroke-miterlimit="10" stroke-width="1" opacity="0.2"/>
            <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M3.98,4.179A2.043,2.043,0,1,0,6.023,6.222,2.04,2.04,0,0,0,3.98,4.179Zm0,3.371A1.328,1.328,0,1,1,5.308,6.222,1.33,1.33,0,0,1,3.98,7.55ZM6.583,4.1a.476.476,0,1,1-.476-.476A.475.475,0,0,1,6.583,4.1Zm1.353.484a2.358,2.358,0,0,0-.644-1.669,2.373,2.373,0,0,0-1.669-.644c-.658-.037-2.63-.037-3.287,0a2.37,2.37,0,0,0-1.669.642A2.366,2.366,0,0,0,.023,4.577c-.037.658-.037,2.63,0,3.287A2.358,2.358,0,0,0,.666,9.534a2.376,2.376,0,0,0,1.669.644c.658.037,2.629.037,3.287,0a2.358,2.358,0,0,0,1.669-.644,2.373,2.373,0,0,0,.644-1.669c.037-.658.037-2.628,0-3.286ZM7.086,8.57a1.345,1.345,0,0,1-.757.757,8.781,8.781,0,0,1-2.349.16,8.849,8.849,0,0,1-2.349-.16A1.345,1.345,0,0,1,.874,8.57a8.781,8.781,0,0,1-.16-2.349,8.849,8.849,0,0,1,.16-2.349,1.345,1.345,0,0,1,.757-.757,8.781,8.781,0,0,1,2.349-.16,8.849,8.849,0,0,1,2.349.16,1.345,1.345,0,0,1,.757.757,8.781,8.781,0,0,1,.16,2.349A8.776,8.776,0,0,1,7.086,8.57Z" transform="translate(7.153 4.911)" fill="#0072e4"/>
            </g>
            </svg>

            </router-link>

          <router-link :to="{name: 'Home'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
            <g id="facebook" transform="translate(0.5 0.5)">
            <circle id="Oval_8" data-name="Oval 8" cx="11" cy="11" r="11" fill="none" stroke="#005cc7" stroke-miterlimit="10" stroke-width="1" opacity="0.2"/>
            <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" d="M1.621,7.241H.12V2.407h1.5ZM.869,1.748A.873.873,0,1,1,1.739.87.877.877,0,0,1,.869,1.748ZM7.239,7.241h-1.5V4.888c0-.561-.011-1.28-.78-1.28s-.9.609-.9,1.24V7.241h-1.5V2.407H4v.659h.021a1.577,1.577,0,0,1,1.42-.781c1.519,0,1.8,1,1.8,2.3V7.241Z" transform="translate(7.5 7.5)" fill="#0072e4"/>
            </g>
            </svg>
          </router-link>
            

      </div>

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
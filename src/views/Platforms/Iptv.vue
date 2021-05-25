<template>
  <Hero>
    <template v-slot:header>
    <h1 class="md:text-3xl tracking-wide leading-10 text-2xl -mt-20 md:-mt-12 text-white font-semibold">Reach more people with our combined IPTV/OTT solution</h1>
     </template>

    <template v-slot:paragraph>
      <p class="lg:mt-4 md:mt-10 mt-10 tracking-widest leading-9 text-sm  text-white font-regular">OTT provides your viewers access to movies and Tv shows, by sending signals directly through the internet.</p>

      <p class="lg:mt-4 md:mt-10 mt-4 tracking-widest leading-9 text-sm  text-white font-regular">Build or Upgrade to a top-notch IPTV/OTT solution that is modern, and offers a High-end user experience across all major platforms..</p>

    </template>
  </Hero >

  
  <div class="">
    <section class="iptv">
      <div  class="tag grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 grid-flow-row lg:grid-flow-row gap-8 md:gap-4 lg:gap-8 content-center justify-center mt-6">
          <div v-for="price in pricing" :key="price.id" class="top group py-6 px-4 shadow-lg hover:bg-blue">
            <router-link :to="{name: 'Pricing', params: {id : price.id}}">
            <p class="text-center text-base font-semibold text-deep-gray group-hover:text-white py-3">{{price.desc}}</p>

            <h3 class="text-center text-5xl text-blue py-3 px-6 mb-3 group-hover:text-white break-all"> {{price.price}}</h3>
            <p class="text-center text-sm text-deep-gray group-hover:text-white mb-3">{{price.duration}}</p>
            <p class="text-center text-sm text-deep-gray group-hover:text-white mb-6">{{price.details}}</p>
            <button class="bg-blue rounded-lg text-white text-sm ml-18 group-hover:text-blue text-white group-hover:bg-white focus:outline-none ml-32 md:ml-12 lg:ml-20 py-2 px-2">GET STARTED</button>
             </router-link>
            </div>
           
      </div>
     
    </section>



    <section class="podcast">
    <div class="tag grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-flow-row lg:grid-flow-row gap-x-16 content-center mt-24 md:mt-48 mx-6 md:mx-0">
          <div class="">
            <h2 class="text-blue font-semibold text-2xl text-center md:text-left md:text-4xl mt-6 mb-6">Share Your Channel</h2>
            
            <div v-for="spec in specs" :key="spec.id" class="grid grid-cols-3 gap-2">
                
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="15" viewBox="0 0 51.922 34.615">
                <path id="Icon_material-screen-share" data-name="Icon material-screen-share" d="M43.269,36.288a4.321,4.321,0,0,0,4.305-4.327L47.6,10.327A4.326,4.326,0,0,0,43.269,6H8.654a4.312,4.312,0,0,0-4.327,4.327V31.961a4.326,4.326,0,0,0,4.327,4.327H0v4.327H51.922V36.288ZM28.125,28.651V23.913c-6.014,0-9.973,1.839-12.981,5.885,1.212-5.776,4.565-11.531,12.981-12.7V12.49l8.654,8.07Z" transform="translate(0 -6)" fill="#707070"/></svg>{{spec.icon}}
                <p class="text-deep-gray text-xs mb-4 mt-2">{{spec.text}}</p>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="15" viewBox="0 0 45.419 45.419">
                <path id="Icon_open-grid-three-up" data-name="Icon open-grid-three-up" d="M0,0V11.355H11.355V0ZM17.032,0V11.355H28.387V0ZM34.064,0V11.355H45.419V0ZM0,17.032V28.387H11.355V17.032Zm17.032,0V28.387H28.387V17.032Zm17.032,0V28.387H45.419V17.032ZM0,34.064V45.419H11.355V34.064Zm17.032,0V45.419H28.387V34.064Zm17.032,0V45.419H45.419V34.064Z" fill="#707070"/></svg>
                <p class="text-deep-gray text-xs mb-4 mt-2">Multi-screen<br>app</p>

                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 44.72 52.173">
                <path id="Icon_ionic-md-git-network" data-name="Icon ionic-md-git-network" d="M49.22,9.7a7.453,7.453,0,1,0-11.18,6.452V22.3l-11.18,5.59L15.68,22.3V16.155a7.453,7.453,0,1,0-7.453,0V26.916l14.907,7.453v6.149a7.453,7.453,0,1,0,7.453,0V34.369l14.907-7.453V16.155A7.468,7.468,0,0,0,49.22,9.7ZM11.953,5.045A4.658,4.658,0,1,1,7.295,9.7,4.657,4.657,0,0,1,11.953,5.045ZM26.86,51.628a4.658,4.658,0,1,1,4.658-4.658A4.657,4.657,0,0,1,26.86,51.628ZM41.766,14.362A4.658,4.658,0,1,1,46.425,9.7,4.657,4.657,0,0,1,41.766,14.362Z" transform="translate(-4.5 -2.25)" fill="#4d4f5c"/></svg>
                <p class="text-deep-gray text-xs mb-4 mt-2">Content Delivery<br>Network</p>

                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="15" viewBox="0 0 51.88 38.91">
                <path id="Icon_awesome-chart-bar" data-name="Icon awesome-chart-bar" d="M33.722,30.44h3.891a1.4,1.4,0,0,0,1.3-1.3V15.524a1.4,1.4,0,0,0-1.3-1.3H33.722a1.4,1.4,0,0,0-1.3,1.3V29.143a1.4,1.4,0,0,0,1.3,1.3Zm9.727,0H47.34a1.4,1.4,0,0,0,1.3-1.3V5.8a1.4,1.4,0,0,0-1.3-1.3H43.449a1.4,1.4,0,0,0-1.3,1.3V29.143a1.4,1.4,0,0,0,1.3,1.3Zm-29.182,0h3.891a1.4,1.4,0,0,0,1.3-1.3V22.009a1.4,1.4,0,0,0-1.3-1.3H14.267a1.4,1.4,0,0,0-1.3,1.3v7.133a1.4,1.4,0,0,0,1.3,1.3Zm9.727,0h3.891a1.4,1.4,0,0,0,1.3-1.3V9.039a1.4,1.4,0,0,0-1.3-1.3H23.994a1.4,1.4,0,0,0-1.3,1.3v20.1A1.4,1.4,0,0,0,23.994,30.44Zm26.264,6.485H6.485V6.121A1.621,1.621,0,0,0,4.864,4.5H1.621A1.621,1.621,0,0,0,0,6.121V40.167A3.243,3.243,0,0,0,3.242,43.41H50.259a1.621,1.621,0,0,0,1.621-1.621V38.546A1.621,1.621,0,0,0,50.259,36.925Z" transform="translate(0 -4.5)" fill="#707070"/></svg>

                <p class="text-deep-gray text-xs mb-4 mt-2">Content Delivery<br>Network</p>
                </div>

                <div>

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="15" viewBox="0 0 48.419 40.349">
                <path id="Icon_material-perm-media" data-name="Icon material-perm-media" d="M4.035,11.07H0V21.157H.02L0,39.314a4.047,4.047,0,0,0,4.035,4.035H40.349V39.314H4.035ZM44.384,7.035H28.244L24.209,3H12.1A4.03,4.03,0,0,0,8.09,7.035L8.07,31.244A4.047,4.047,0,0,0,12.1,35.279H44.384a4.047,4.047,0,0,0,4.035-4.035V11.07A4.047,4.047,0,0,0,44.384,7.035ZM14.122,29.227l9.079-12.1,7.061,9.1,5.044-6.073,7.061,9.079Z" transform="translate(0 -3)" fill="#707070"/></svg>
                <p class="text-deep-gray text-xs mb-4 mt-2">Content Delivery<br>Network</p>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="15" viewBox="0 0 38.36 38.36">
                <g id="Icon_ionic-md-remove-circle-outline" data-name="Icon ionic-md-remove-circle-outline" transform="translate(-3.375 -3.375)">
            <path id="Path_1" data-name="Path 1" d="M22.555,7.248a15.3,15.3,0,1,1-10.826,4.481A15.244,15.244,0,0,1,22.555,7.248m0-3.873a19.18,19.18,0,1,0,19.18,19.18,19.177,19.177,0,0,0-19.18-19.18Z" fill="#707070"/>
            <path id="Path_2" data-name="Path 2" d="M30.21,20.4H10.477V16.523H30.21Z" transform="translate(2.212 4.095)" fill="#707070"/></g></svg>
                <p class="text-deep-gray text-xs mb-4 mt-2">Content Delivery<br>Network</p>
                </div>

            </div>
            <button class="bg-yellow  rounded-full ml-24 md:mx-0 py-3 px-3 md:px-6 mt-6 text-white font-semibold text-sm ">CONTACT US</button>
          </div>

        <div class="order-first">
              <div class="top">
                <div class="overlay"></div>
                <img class="bg-gblue bg-blend-overlay" src="https://i.ibb.co/m9T6F3C/i-Stock-000038064546-Small-1260x840.jpg" alt="">
                </div>
          </div> 
          
          
          <!-- Android, Apple, Samsung and XBOX-->
  <div class="md:grid gap-72 md:hidden hidden grid-cols-4 mt-24">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 76.37 83.323">
      <g id="Icon_ionic-logo-android" data-name="Icon ionic-logo-android" transform="translate(-5.625 -4.497)">
      <g id="Group_4" data-name="Group 4" transform="translate(5.625 28.807)">
      <path id="Path_3" data-name="Path 3" d="M10.125,30.076v19.44c0,1.5.976,3.037,2.473,3.037H18.8V63.835a5.207,5.207,0,1,0,10.414,0V52.553H39.849V63.835a5.184,5.184,0,0,0,1.909,4.035,4.847,4.847,0,0,0,3.189,1.172h.108a5.2,5.2,0,0,0,5.207-5.207V52.553h5.988c1.519,0,2.473-1.54,2.473-3.016V13.5h-48.6Z" transform="translate(3.76 -10.029)" fill="#707070"/>
      <path id="Path_4" data-name="Path 4" d="M32.207,12.375A5.2,5.2,0,0,0,27,17.582V38.41a5.207,5.207,0,0,0,10.414,0V17.582A5.2,5.2,0,0,0,32.207,12.375Z" transform="translate(38.956 -12.375)" fill="#707070"/>
      <path id="Path_5" data-name="Path 5" d="M10.832,12.375a5.2,5.2,0,0,0-5.207,5.207V38.41a5.207,5.207,0,0,0,10.414,0V17.582A5.2,5.2,0,0,0,10.832,12.375Z" transform="translate(-5.625 -12.375)" fill="#707070"/>
    </g>
    <path id="Path_6" data-name="Path 6" d="M46.4,9.953,50.414,5.2c.087-.108-.043-.347-.282-.542-.239-.174-.521-.217-.586-.087L45.381,9.519A29.474,29.474,0,0,0,34.4,7.61,29.725,29.725,0,0,0,23.381,9.454l-4.122-4.86c-.087-.108-.347-.087-.586.087s-.369.391-.282.542l3.97,4.686C11.9,14.444,10.342,25.574,10.125,28.828H58.637C58.442,25.552,56.9,14.574,46.4,9.953ZM23.75,20.757a2.886,2.886,0,1,1,2.929-2.886A2.922,2.922,0,0,1,23.75,20.757Zm21.349,0a2.886,2.886,0,1,1,2.929-2.886A2.922,2.922,0,0,1,45.1,20.757Z" transform="translate(9.385)" fill="#707070"/>
    </g>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 74.494 91.486">
  <path id="Icon_metro-apple" data-name="Icon metro-apple" d="M67.653,50.538C67.538,38.952,77.1,33.4,77.529,33.12A21.365,21.365,0,0,0,60.8,24.054c-7.124-.721-13.9,4.194-17.517,4.194s-9.186-4.088-15.094-3.98A22.383,22.383,0,0,0,9.266,35.738c-8.068,14-2.066,34.74,5.8,46.094,3.842,5.557,8.424,11.8,14.44,11.577,5.793-.231,7.984-3.749,14.988-3.749s8.972,3.749,15.1,3.634c6.234-.116,10.183-5.664,14-11.239a50.428,50.428,0,0,0,6.336-13.01c-.138-.063-12.156-4.667-12.276-18.506Zm-11.519-34a20.162,20.162,0,0,0,4.76-14.609c-4.6.187-10.174,3.064-13.474,6.928-2.961,3.429-5.552,8.9-4.858,14.155C47.7,23.412,52.938,20.4,56.134,16.537Z" transform="translate(-5.435 -1.928)" fill="#707070"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="170" height="50.778" viewBox="0 0 337.287 51.543">
  <path id="Icon_simple-samsung" data-name="Icon simple-samsung" d="M278.5,16.86l.645,37.852h-.323L267.865,16.86H249.824V64.537h11.919L261.1,25.4h.323L273.18,64.537h17.235V16.86Zm-226.952,0-9.02,48.162H55.571l6.6-43.812H62.5L68.94,65.02H81.826L72.966,16.86Zm72.8,0-5.959,36.725h-.323L112.107,16.86H92.456l-.967,48.162h12.08l.323-43.33h.16l8.053,43.329h12.242L132.4,21.693h.323l.32,43.327h12.08L144,16.86ZM22.229,51.329a6.759,6.759,0,0,1,.16,3.544c-.322,1.611-1.449,3.221-4.671,3.221-3.059,0-4.832-1.771-4.832-4.35v-4.67H0v3.7C0,63.571,8.536,66.792,17.557,66.792c8.7,0,15.945-3.061,17.074-10.953a23.592,23.592,0,0,0,0-7.893C32.375,37.8,14.014,34.9,12.724,29.262a6.911,6.911,0,0,1,0-2.577c.323-1.611,1.45-3.221,4.35-3.221s4.511,1.771,4.511,4.35v2.9H33.664V27.33c0-10.47-9.5-12.08-16.268-12.08-8.536,0-15.623,2.9-16.912,10.63a14.6,14.6,0,0,0,.16,6.444C2.577,42.31,19.813,45.209,22.227,51.329m156.726,0a6.723,6.723,0,0,1,.16,3.544c-.323,1.611-1.45,3.221-4.671,3.221-3.061,0-4.832-1.771-4.832-4.35v-4.67H156.723v3.7c0,10.63,8.376,13.853,17.4,13.853,8.7,0,15.785-2.9,16.912-10.953a23.742,23.742,0,0,0,0-7.893C189.1,37.8,170.9,34.739,169.61,29.264a6.86,6.86,0,0,1,0-2.579c.322-1.611,1.449-3.221,4.348-3.221a4.188,4.188,0,0,1,4.511,4.35v2.9h11.917V27.33c0-10.47-9.341-12.08-16.105-12.08-8.538,0-15.465,2.738-16.752,10.63a17.467,17.467,0,0,0,.16,6.444c1.934,9.987,18.846,12.724,21.263,19.006m40.59,6.444a4.387,4.387,0,0,0,4.67-3.544,6.577,6.577,0,0,0,.162-1.771V16.86h12.241V51.491a18.646,18.646,0,0,1-.16,3.221c-.805,9.021-7.893,11.92-16.752,11.92s-15.945-2.9-16.752-11.92c0-.483-.16-2.254-.16-3.221V16.86h12.241v35.6a6.015,6.015,0,0,0,.162,1.771c0,1.289.967,3.544,4.35,3.544m100.509-.483c3.544,0,4.671-2.256,4.993-3.544a6.578,6.578,0,0,0,.162-1.771V45.047h-4.993V37.96h17.074V50.847a26.272,26.272,0,0,1-.162,3.221c-.805,8.858-8.376,11.919-16.912,11.919S304.106,62.926,303.3,54.068a26.281,26.281,0,0,1-.162-3.222V30.552c0-.807.162-2.417.162-3.222,1.127-9.021,8.376-11.92,16.912-11.92s15.947,2.9,16.912,11.92c.162,1.449.162,3.221.162,3.221v1.611H325.206V29.424a9.535,9.535,0,0,0-.162-1.772c-.16-1.127-1.127-3.543-4.832-3.543-3.543,0-4.511,2.254-4.832,3.543a9.875,9.875,0,0,0-.162,2.256V51.974a6.015,6.015,0,0,0,.162,1.771c0,1.289,1.289,3.544,4.67,3.544" transform="translate(0 -15.249)" fill="#707070"/>
</svg>


<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 77.404 75.92" class="ml-8">
  <path id="Icon_awesome-xbox" data-name="Icon awesome-xbox" d="M57.042,48.039c6.914,8.31,10.1,15.12,8.49,18.166C64.3,68.516,56.683,73.031,51.08,74.76a43.287,43.287,0,0,1-15.67,1.561,39.318,39.318,0,0,1-17.184-5.969c-4.354-2.785-5.338-3.933-5.338-6.213,0-4.576,5.135-12.6,13.922-21.747C31.8,37.2,38.75,31.113,39.515,31.281c1.467.321,13.157,11.493,17.527,16.758Zm-28.3-26.69c-4.635-4.117-9.068-8.249-13.485-9.7-2.372-.781-2.544-.735-4.479,1.24A37.651,37.651,0,0,0,1.37,31.618c-.843,5.234-.952,6.7-.656,9.259.874,7.728,2.7,13.07,6.321,18.5,1.483,2.234,1.888,2.648,1.451,1.515C7.832,59.211,8.44,55.156,9.97,51.1c2.232-5.969,8.412-17.278,18.776-29.751Zm48.633,9.718C74.741,18.824,66.843,11.126,65.735,11.126a14.744,14.744,0,0,0-5.619,2.127c-3.637,2.219-6.4,4.805-10.036,8.08,6.618,8.157,15.951,21.334,19.181,30.96,1.061,3.168,1.514,6.29,1.155,8-.265,1.3-.265,1.3.218.7A46.189,46.189,0,0,0,74.6,54.344a44.292,44.292,0,0,0,2.9-8.983,48.758,48.758,0,0,0-.125-14.294ZM21.363,5.923C28.808,5.54,38.485,11.2,39.2,11.34a31.378,31.378,0,0,0,3.371-1.484C52.547,5.1,57.245,5.908,59.336,6A39.313,39.313,0,0,0,22.83,4.209c-3.652,1.7-3.746,1.821-1.467,1.714Z" transform="translate(-0.566 -0.559)" fill="#707070"/>
</svg>


</div>

<div class="grid md:gap-32 gap-8 md:ml-32 lg:hidden grid-cols-4 mt-24">
      <svg id="Icon_ionic-logo-android" data-name="Icon ionic-logo-android" xmlns="http://www.w3.org/2000/svg" width="14.974" height="16.338" viewBox="0 0 14.974 16.338">
  <g id="Group_4" data-name="Group 4" transform="translate(0 4.767)">
    <path id="Path_3" data-name="Path 3" d="M10.125,16.75v3.812a.553.553,0,0,0,.485.6h1.217V23.37a1.021,1.021,0,1,0,2.042,0V21.157h2.085V23.37a1.017,1.017,0,0,0,.374.791.95.95,0,0,0,.625.23h.021A1.019,1.019,0,0,0,18,23.37V21.157h1.174a.548.548,0,0,0,.485-.591V13.5H10.125Z" transform="translate(-7.402 -12.819)" fill="#707070"/>
    <path id="Path_4" data-name="Path 4" d="M28.021,12.375A1.019,1.019,0,0,0,27,13.4V17.48a1.021,1.021,0,0,0,2.042,0V13.4A1.019,1.019,0,0,0,28.021,12.375Z" transform="translate(-14.068 -12.375)" fill="#707070"/>
    <path id="Path_5" data-name="Path 5" d="M6.646,12.375A1.019,1.019,0,0,0,5.625,13.4V17.48a1.021,1.021,0,0,0,2.042,0V13.4A1.019,1.019,0,0,0,6.646,12.375Z" transform="translate(-5.625 -12.375)" fill="#707070"/>
  </g>
  <path id="Path_6" data-name="Path 6" d="M17.238,5.566l.787-.932c.017-.021-.009-.068-.055-.106s-.1-.043-.115-.017l-.817.97a5.779,5.779,0,0,0-2.153-.374,5.828,5.828,0,0,0-2.161.362l-.808-.953c-.017-.021-.068-.017-.115.017s-.072.077-.055.106l.779.919a4.312,4.312,0,0,0-2.4,3.71h9.512A4.287,4.287,0,0,0,17.238,5.566ZM12.8,7.685a.566.566,0,1,1,.574-.566A.573.573,0,0,1,12.8,7.685Zm4.186,0a.566.566,0,1,1,.574-.566A.573.573,0,0,1,16.983,7.685Z" transform="translate(-7.402 -4.497)" fill="#707070"/>
</svg>




<svg xmlns="http://www.w3.org/2000/svg" width="14.607" height="17.938" viewBox="0 0 14.607 17.938">
  <path id="Icon_metro-apple" data-name="Icon metro-apple" d="M17.635,11.459a4.058,4.058,0,0,1,1.936-3.415,4.189,4.189,0,0,0-3.28-1.778c-1.4-.141-2.726.822-3.435.822s-1.8-.8-2.96-.78A4.389,4.389,0,0,0,6.187,8.557C4.6,11.3,5.781,15.369,7.323,17.6c.753,1.09,1.652,2.314,2.831,2.27,1.136-.045,1.565-.735,2.939-.735s1.759.735,2.961.712c1.222-.023,2-1.111,2.745-2.2a9.888,9.888,0,0,0,1.242-2.551,3.962,3.962,0,0,1-2.407-3.629ZM15.376,4.793a3.953,3.953,0,0,0,.933-2.865,4.021,4.021,0,0,0-2.642,1.359,3.761,3.761,0,0,0-.953,2.775A3.327,3.327,0,0,0,15.376,4.793Z" transform="translate(-5.436 -1.928)" fill="#707070"/>
</svg>



<svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="66.135" height="10.106" viewBox="0 0 66.135 10.106">
  <path id="Icon_simple-samsung" data-name="Icon simple-samsung" d="M54.607,15.565l.126,7.422H54.67l-2.147-7.422H48.985v9.348h2.337L51.2,17.239h.063l2.305,7.674h3.379V15.565Zm-44.5,0L8.338,25.009H10.9l1.295-8.591h.063l1.263,8.59h2.527l-1.737-9.443Zm14.275,0-1.168,7.2H23.15l-1.168-7.2H18.129l-.19,9.443h2.369l.063-8.5H20.4l1.579,8.5h2.4l1.579-8.5h.063l.063,8.5h2.369l-.221-9.443ZM4.359,22.324a1.325,1.325,0,0,1,.031.695c-.063.316-.284.632-.916.632a.841.841,0,0,1-.947-.853v-.916H0v.726c0,2.116,1.674,2.748,3.443,2.748,1.705,0,3.127-.6,3.348-2.148a4.626,4.626,0,0,0,0-1.548C6.348,19.671,2.748,19.1,2.495,18a1.355,1.355,0,0,1,0-.505.769.769,0,0,1,.853-.632.805.805,0,0,1,.885.853v.568H6.6v-.663c0-2.053-1.863-2.369-3.19-2.369-1.674,0-3.063.568-3.316,2.084A2.863,2.863,0,0,0,.126,18.6c.379,1.958,3.759,2.527,4.232,3.727m30.731,0a1.318,1.318,0,0,1,.031.695c-.063.316-.284.632-.916.632a.841.841,0,0,1-.947-.853v-.916H30.73v.726c0,2.084,1.642,2.716,3.411,2.716,1.705,0,3.1-.568,3.316-2.148a4.655,4.655,0,0,0,0-1.548c-.379-1.958-3.948-2.558-4.2-3.632a1.345,1.345,0,0,1,0-.506.769.769,0,0,1,.853-.632.821.821,0,0,1,.885.853v.568h2.337v-.663c0-2.053-1.832-2.369-3.158-2.369-1.674,0-3.032.537-3.285,2.084A3.425,3.425,0,0,0,30.92,18.6c.379,1.958,3.7,2.495,4.169,3.727m7.959,1.263a.86.86,0,0,0,.916-.695,1.29,1.29,0,0,0,.032-.347v-6.98h2.4v6.79a3.656,3.656,0,0,1-.031.632c-.158,1.769-1.548,2.337-3.285,2.337s-3.127-.568-3.285-2.337c0-.095-.031-.442-.031-.632v-6.79h2.4v6.98a1.18,1.18,0,0,0,.032.347c0,.253.19.695.853.695m19.708-.095a.913.913,0,0,0,.979-.695,1.29,1.29,0,0,0,.032-.347V21.092h-.979V19.7h3.348v2.527a5.151,5.151,0,0,1-.032.632C65.945,24.6,64.461,25.2,62.787,25.2s-3.158-.6-3.316-2.337a5.154,5.154,0,0,1-.032-.632V18.25c0-.158.032-.474.032-.632.221-1.769,1.642-2.337,3.316-2.337s3.127.568,3.316,2.337c.032.284.032.632.032.632v.316H63.766v-.537a1.87,1.87,0,0,0-.032-.347.848.848,0,0,0-.947-.695.873.873,0,0,0-.947.695,1.936,1.936,0,0,0-.032.442V22.45a1.18,1.18,0,0,0,.032.347c0,.253.253.695.916.695" transform="translate(0 -15.249)" fill="#707070"/>
</svg>




<svg class="mt-1 ml-6" xmlns="http://www.w3.org/2000/svg" width="15.177" height="14.886" viewBox="0 0 15.177 14.886">
  <path id="Icon_awesome-xbox" data-name="Icon awesome-xbox" d="M11.639,9.869C13,11.5,13.619,12.834,13.3,13.431a6.7,6.7,0,0,1-2.834,1.677,8.488,8.488,0,0,1-3.073.306,7.709,7.709,0,0,1-3.369-1.17c-.854-.546-1.047-.771-1.047-1.218,0-.9,1.007-2.47,2.73-4.264A13.651,13.651,0,0,1,8.2,6.583a23.878,23.878,0,0,1,3.437,3.286ZM6.091,4.636a8.89,8.89,0,0,0-2.644-1.9c-.465-.153-.5-.144-.878.243A7.383,7.383,0,0,0,.723,6.649,5.689,5.689,0,0,0,.595,8.465a7.583,7.583,0,0,0,1.239,3.628c.291.438.37.519.285.3a3.479,3.479,0,0,1,.291-1.92A22.846,22.846,0,0,1,6.091,4.636Zm9.536,1.905a6.44,6.44,0,0,0-2.283-3.91,2.891,2.891,0,0,0-1.1.417,13.2,13.2,0,0,0-1.968,1.584A23.865,23.865,0,0,1,14.035,10.7a3.531,3.531,0,0,1,.226,1.569c-.052.255-.052.255.043.138a9.057,9.057,0,0,0,.777-1.305,8.685,8.685,0,0,0,.569-1.761,9.56,9.56,0,0,0-.024-2.8ZM4.644,1.611a8.773,8.773,0,0,1,3.5,1.062A6.153,6.153,0,0,0,8.8,2.382a5.722,5.722,0,0,1,3.287-.756,7.708,7.708,0,0,0-7.158-.351C4.215,1.608,4.2,1.632,4.644,1.611Z" transform="translate(-0.566 -0.559)" fill="#707070"/>
</svg>




</div>
      </div>

  
    </section>

    <section class="w-full contact ml-0 h-64 -mt-20 md:mt-24 pl-0 ">
      <div>
        <div class="w-full contact-bar flex space-x-96">
          <div class="bg-no-repeat rounded-full  bg-left-top h-24 w-24 contact-bar"></div>
          <div class="bg-no-repeat rounded-full mt-56 ml-48 bg-bottom h-16 w-16 contact-bar"></div>
          <div class="bg-no-repeat rounded-full mt-24 ml-56 bg-right-top h-8 w-8 contact-bar"></div>
          <div class="bg-no-repeat rounded-full mt-60 ml-60 bg-bottom-right h-16 w-16 contact-bar"></div>
        </div>
        </div>

         <div class="lg:grid grid-rows-3 gap-4 ml-72 -mt-40 hidden">
          <div class="flex space-x-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20">
        <g id="noun_880089_cc" transform="translate(0)">
          <path id="Shape" d="M19.91,15.946l-.1-.3a2.8,2.8,0,0,0-1.711-1.628L15.463,13.3a2.558,2.558,0,0,0-2.247.591l-.959.948a10.085,10.085,0,0,1-7.091-7.1l.947-.951A2.6,2.6,0,0,0,6.7,4.537l-.72-2.624A2.835,2.835,0,0,0,4.364.188l-.3-.1a2.359,2.359,0,0,0-2.22.525L.41,2.041A2.725,2.725,0,0,0,0,3.017,16.8,16.8,0,0,0,16.937,20a2.7,2.7,0,0,0,1.029-.415l1.419-1.422A2.37,2.37,0,0,0,19.91,15.946Z" fill="#fff"/>
        </g>
        </svg>

        <p class="text-sm text-white">+31 0123 4567</p>
        </div>

        <div class="flex space-x-6">

          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14.728" viewBox="0 0 23 14.728">
            <g id="Group" transform="translate(0 -0.099)">
              <path id="Shape" d="M20.125,14.728H2.875a2.981,2.981,0,0,1-1.58-.452L8.58,8.693l1.662,1.483a1.919,1.919,0,0,0,2.516,0L14.42,8.693l7.286,5.583A2.987,2.987,0,0,1,20.125,14.728Zm2.4-1.228h0l-.026-.016L15.265,7.943l7.358-6.563A2.638,2.638,0,0,1,23,2.727V12a2.629,2.629,0,0,1-.475,1.5ZM.476,13.5h0A2.633,2.633,0,0,1,0,12V2.727A2.636,2.636,0,0,1,.377,1.381L7.736,7.943.5,13.483.477,13.5ZM11.5,9.532a.721.721,0,0,1-.467-.149L1.132.563A2.964,2.964,0,0,1,2.875,0h17.25a2.958,2.958,0,0,1,1.743.563l-9.9,8.821A.721.721,0,0,1,11.5,9.532Z" transform="translate(0 0.099)" fill="#fff"/>
            </g>
          </svg>

          <p class="text-sm text-white">info@wego.io</p>

        </div>

        <div class="flex space-x-6">

          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 26 22">
            <g id="telegram" transform="translate(0 0)">
            <path id="XMLID_497_" d="M20.879,22a.712.712,0,0,1-.413-.132l-6.023-4.25a1.02,1.02,0,0,0-1.215.033L9.889,20.3a.714.714,0,0,1-1.12-.328L6.45,12.722.459,10.549A.68.68,0,0,1,.452,9.265L25.039.047a.715.715,0,0,1,.811.219.659.659,0,0,1,.135.562L21.572,21.453A.7.7,0,0,1,20.879,22ZM20.213,4.525a.211.211,0,0,0-.109.032L8.4,11.565a1.135,1.135,0,0,0-.515,1.289l1.265,4.324a.3.3,0,0,0,.591-.042l.329-2.371a1.935,1.935,0,0,1,.621-1.165L20.35,4.871A.186.186,0,0,0,20.4,4.66.208.208,0,0,0,20.213,4.525Z" fill="#fff"/>
            </g>
        </svg>


          <p class="text-sm text-white">Join us on Telegram</p>

        </div>

      </div>
  </section>

  <section class="flex  flex-row-reverse">

     <div class="bg-none py-8  mx-auto my-auto -mt-44 md:-mt-32 lg:-mt-56 rounded-lg">
    <section class="flex ml-48 lg:ml-48 md:ml-0">
  <div class="bg-white py-8 px-12  lg:px-20 mx-auto my-auto shadow-lg">
    <h1 class="text-blue lg:text-left text-center pl-12 md:pl-0 text-2xl">Get in touch</h1>

    <form class="ml-20">
    <div class="focus-within:none">
    <input type="text" v-model="name" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 mt-6 text-sm mb-6 focus:ring-blue-600 border-2 border-light-gray rounded-lg py-3 px-6 w-full" placeholder="Your name">
  </div>

  <div class="focus-within:none">
    <input type="email" v-model="email" class="focus:outline-none focus:ring-2 focus:ring-opacity-50 border-2 text-sm text-gray-400 mb-6 border-light-gray rounded-lg py-3 px-6 w-full" placeholder="Your e-mail">
  </div>

  <div class="">
      <textarea name="message" v-model="message" id="" cols="30" rows="5" placeholder="Your message" class="border-2 border-light-gray text-gray-400 text-sm mb-6 rounded-lg py-3 px-6 focus:outline-none focus:ring-2 focus:ring-opacity-50"></textarea>
  </div>
  <button class="form-btn rounded-lg bg-blue ml-20 md:ml-0 py-3 px-4 text-sm text-white">SUBMIT</button>
</form>
  </div>
  </section>

  </div>
  </section>
</div>
</template>

<script>
// @ is an alias to /src

import Contact from '@/views/Contact.vue'
import Hero from '@/components/Hero.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  components: {
    Contact, Hero,
    Slider
  },
  data(){
    return{
      name: '',
      email: '',
      message: '',
      pricing: [
        {
          id: 99.1,
          desc: 'PRO',
          price: '$99',
          duration: 'Per Month',
          details: 'Starter features for \n your business to grow'
        },
        {
          id: 199,
          desc: 'PREMIUM',
          price: '$199',
          duration: 'Per Month',
          details: 'Professional features for your business to grow'
        },
        {
          id: 499,
          desc: 'BUSINESS',
          price: '$499',
          duration: 'Per Month',
          details: 'Advanced features for your business to grow'
        },
       
      ],

      specs: [
          {
              id: 1,
              text: 'Scalable<br>IPTV Solution'
          }
      ],

    }
  },
}
</script>

<style scoped>
.ott > div {
  max-width: 640px;
  max-height: 405px;
  margin: 20px auto;
}
.iptv, .podcast {
  margin: 10px auto;
  max-width: 1000px;
}

.iptv > .tag {
        max-width: 100%;
         max-height: 100%;
         object-fit: fill;
}

.iptv > img {
  max-width: 100%;
  height: 100%;

}

.top {
  position: relative;
}

.overlay{
    width: 100%;
    height: 100%;
    background-image:linear-gradient(to right bottom, #0080FF, #0080FF);
    opacity: 0.4;
    z-index: 1;
    position: absolute;
}

.contact-bar {
  background-image:linear-gradient(to right bottom, #1B3BD8, #1B3BD8, #176CE0, #0B92E7, #0BB6EB, #00E0F2, #00E0F2);
 
}

.form-btn {
    background-image:linear-gradient(to right bottom, #1B3BD8, #176CE0, #0B92E7, #0BB6EB, #00E0F2);
  } 

  textarea:focus, input:focus {
    border: none;
    color:  #0BB6EB;
  }


@media (max-width: 640px) { 
      .contact-bar {
          display: none; 
}
   }

  /* @media (max-width: 768px ) {
    .contact-bar {
          display: none; 
}
  } */
 

/* .morph > img { */
  /* width: 100%;
  height: 100%; */
  /* border-radius: 20px;
background: #e0e0e0; */
/* box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff; */
/* } */


</style>

<template>

 <Navbar class="w-full shadow-xl lg:-ml-40">
       <router-link :to="{name: 'Home'}">
      <div class="md:hidden">
          <img class="w-12 md:w-32 -pl-16 md:pl-8 pt-4" src="@/assets/WeGo1.png" alt="">
          <p class="text-center invisible md:visible text-xs text-white ml-6 -mt-1">WeGo Network</p>
      </div>
</router-link>
      
      <nav class="flex space-x-10 py-6 px-6 mr-10 hidden">
        <router-link class="text-xs" :to="{name: 'Home'}">Home</router-link>

        
    <div class="navbar">
      <div class="dropdown1">
    <button class="dropbtn">Platforms 
    </button>
    <div class="dropdown-content1">
      <router-link :to="{name: 'Iptv'}">IPTV</router-link>
      <router-link :to="{name: 'Ott'}">OTT</router-link>
      <router-link :to="{name: 'Podcast'}">Podcast</router-link>
    </div>
  </div> 
</div>

 <div class="navbar">
      <div class="dropdown1">
    <button class="dropbtn">Resources 
    </button>
    <div class="dropdown-content1">
      <router-link :to="{name: 'Faq'}">FAQ</router-link>
      <router-link :to="{name: 'Ott'}">Help & Support</router-link>
    </div>
  </div> 
</div>

        
        <router-link :to="{name: 'About'}">About us</router-link>
        <div class="space-x-6 w-full lg:pl-96">
           <router-link :to="{name: 'Login'}">LOGIN</router-link>
           <router-link :to="{name: 'Signup'} " class="bt">SIGN UP</router-link> 
        </div>  
      </nav>


       <div class="navbar mt-8 md:mt-0 md:ml-96 mr-16 lg:-mr-72">
      <div class="dropdown1 transition-all duration-300 ">
    <button @click="showMenu" class="dropbtn focus:outline-none"><svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg> 
    </button>
    <div v-show="menu" class="dropdown-content1 w-full ">
     <button class="w-full"><router-link :to="{name: 'Home'}">Home</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Iptv'}">Iptv</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Podcast'}">Podcast</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">OTT</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'About'}">About</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Faq'}">FAQ</router-link></button> 
     <button class="w-full"><router-link :to="{name: 'Ott'}">Help</router-link></button>
      <button class="w-full"><router-link :to="{name: 'Login'}">LOGIN</router-link></button>
     <button class="w-full"><router-link :to="{name: 'Signup'}">SIGN UP</router-link></button> 
    </div>
  </div> 
</div>

    </Navbar>

  <nav class="toc">
      <router-link :to="{name: 'Home'}">
      <div class="md:-mt-20 mb-6">
          <img class="w-12 md:w-32 -pl-16 md:pl-8 pt-4" src="@/assets/WeGo1.png" alt="">
          <p class="text-center invisible md:visible text-xs text-white ml-6 -mt-1">WeGo Network</p>
      </div>
</router-link>
	<ul v-for="header in headers" :key="header.id">
		<li><a class="text-xs" :href="'#topic' + header.id">{{header.topic}}</a></li>
	</ul>
  <svg class="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#444" stroke-width="3" fill="transparent" stroke-dasharray="0, 0, 0, 1000" stroke-linecap="round" stroke-linejoin="round" transform="translate(-0.5, -0.5)" />
  </svg>
</nav>

<article class="contents mt-12" v-for="term in terms" :key="term.id">
<div class="mx-12 md:mx-0" :id="'topic' + term.id">
          <h1 class="font-bold text-lg text-deep-gray my-6">{{term.head}}</h1>
          <p class="leading-loose text-sm">{{term.body}}
</p>
      </div>
</article>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
     components: {Navbar},
     methods: {
                showMenu(){
                this.menu = !this.menu
            }
    },

    mounted () {
        document.body.classList.add('pad')
    },
    unmounted () {
        document.body.classList.remove('pad')
    },
    data(){
        return{
            menu: false,
            
            headers: [
                {
                    id: 1,
                    topic: 'The WeGo Terms of Use'
                },
                  {
                    id: 2,
                    topic: 'Using Our Network Channel'
                },
                  {
                    id: 3,
                    topic: 'Streaming Content'
                },
                  {
                    id: 4,
                    topic: 'Content & Copyright Rule'
                },
                {
                    id: 5,
                    topic: 'Advertising and Promotional Messages'
                },
                {
                    id: 6,
                    topic: 'Subscriptions'
                },
                {
                    id: 7,
                    topic: 'WeGo Network Branded Rights & Trademark'
                },
                {
                    id: 8,
                    topic: 'Disclaimers'
                },
                {
                    id: 9,
                    topic: 'Limitation of Liability'
                },
                {
                    id: 10,
                    topic: 'Exclusions'
                },
                {
                    id: 11,
                    topic: 'Arbitration of Disputes'
                },
                {
                    id: 12,
                    topic: 'Governing Law, Jurisdiction and Venue'
                },
                {
                    id: 13,
                    topic: 'General'
                },
                {
                    id: 14,
                    topic: 'Contacting Us'
                },
            ],
        terms: [
            {
                id: 1,
                head: 'The WeGoTerms of Use',
                body: 'These terms govern your access and use of WeGo Network services, products, or channel.  WeGo is a social media and a service provider of OTT/IPTV and Live Streaming, in use through a platform for audio and video operated by WeGo and/or its subsidiaries and affiliates that provides access to content and the services made available through WeGo Network Channel application. By accessing or using WeGo Network Channel , you are accepting these terms. If you do not agree with these terms, you may not access WeGo Network Channel(platform an or use our software. In accepting these terms, you are also agreeing that: (1) any disputes between us will be settled by binding arbitration (meaning we both give up the right to go to court), and (2) your recurring subscriptions will automatically renew and your account will continued to be charged for those subscriptions until you cancel.                                             Certain features, functionality, and content made available to you through , WeGo Network Channel  may be subject to additional terms, which will be provided to you at the time those services are offered. We reserve the right (at any time) to modify, suspend, or remove certain features, functionality, or content from WeGo Network Channel or channels at any time with out notice.'
            },
            {
                id: 2,
                head: 'Using Our Network Channel',
                body: 'You may only access WeGo Network Channel through WeGo Network-compatible devices and other authorized video players . To access premium content on WeGo Network Channel(will requires a subscription), you will need to create an account. Our Privacy Policy provides information on how we collect, use and disclose information from our users and their use of WeGo Network Channel. If you violate any of these terms, we have the right to suspend or terminate your access to  WeGo Network Channel, platform, software and any other devices, engage in or facilitate any unauthorized access to or use of the network channel; or disable, bypass, circumvent, or interfere with any digital rights management mechanism, security mechanism or access control measures.Access to WeGo Network Channel requires an internet connection. Data charges may apply, depending on your data plan, which is your responsibility to pay. The display quality of streaming content on  WeGo Network Channel can vary by device and is affected by many factors, including your internet speeds, WiFi strength, and location.'
            },
            {
                id: 3,
                head: 'Streaming Content',
                body: 'WeGo Network Channel provides access to content on WeGo Network Channel that is intended for your personal, non-commercial use only. Some content and services on WeGo Network may be provided by other content providers, which may be subject to their own terms and policies, including privacy and data gathering practices. Those terms and policies will apply (and you are obligated to abide by them) when you access their content through our Channel and Network. We may update, add, or remove content, and/or content providers from time to time (possibly without notice to you). We reserve the right to restrict (or remove) access to The Network Channel (or to certain content) if we have reason to believe that your account has been hacked, stolen, or compromised, or that the content is not properly authorized or licensed in your country or violates applicable law. We may also suspend your access to WeGo Network Channel, we believe it is necessary to protect WeGo Network, it Channel, services, products or our content providers and partners from what we believe to be fraudulent, improper, or illegal activity. You are responsible for enabling the content access controls on Network Platform , or Channel so that any age-restricted content is not viewed by persons not meeting the applicable age limits, as specified by law, regulation, or the content provider. Go to support for more information on how to enable these settings and controls on Channel or your device.'
            },
            {
                id: 4,
                head: 'Content & Copyright Rule',
                body: 'If you believe in good faith that certain content appearing on our website or through our products and services infringes upon your copyright, other proprietary rights, or contains prohibited or illegal content, send us a content to remove notice to our support team.'
            },
            {
                id: 5,
                head: 'Advertising and Promotional Messages',
                body: 'WeGo Network (and/or its partners and content providers) may display advertising and promotional messages on WeGo Network Channel. We do not make (or imply) any endorsement or recommendation about the advertisers’ products or services. Any interaction you have with these advertisers is entirely at your own risk and between you and the advertiser. Roku is not responsible or liable for your interaction with those advertisers or their products and services that are being display on our network channel.'
            },
            {
                id: 6,
                head: 'Subscriptions',
                body: 'Subscriptions to content on WeGo Network Channel are managed through your account. Certain restrictions may apply to these offers (such as content may be accessible only within WeGo Network Platform or Channel, only on our devices, or only in certain geographic locations), which will be provided in the offer terms. If your subscription includes a free 24 hour free trial, you must cancel the subscription before the trial period ends to avoid being charged. You may (or may not) be notified that your free trial is about to end, however, it is ultimately your responsibility to cancel a free trial before it ends (to avoid any charges).Recurring subscriptions will automatically renew until you cancel. You must cancel your subscription before it renews to avoid the billing of the next subscription term’s fees to your account. We may set your subscriptions on your Channel, thorough WeGo Network platform so that they all have the same billing cycle and the first billing period for additional subscriptions may be prorated to the same billing date as your current subscription(s). No refunds are given for partial term cancellations. If you cancel a subscription before the subscription period ends, your subscription (and your access to its content) will continue until the subscription period ends (it will not automatically renew in this case). Go to support for information on how to manage or cancel a subscription.'
            },
            {
                id: 7,
                head: 'WeGo Network Branded Rights  &  Trademarked',
                body: 'WeGo Network  Channel and Trademark is to WeGo Network (and/or its licensors) and protected by copyright, trademark, and other laws of the United States and other countries. Any rights not expressly granted to you in these terms are reserved by WeGo (or its applicable licensors). You may not remove, alter, or obscure any copyright, trademark, products or service mark or other branding rights notices incorporated in or accompanying WeGo Network Channel or from any content provided via WeGo Network Channel.'
            },
            {
                id: 8,
                head: 'Disclaimers',
                body: 'WeGo Network Channel is provided “AS IS” and on an “AS AVAILABLE” basis and to the maximum extent permitted by applicable law, WE DISCLAIM ANY WARRANTIES OF MERCHANT ABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. We make no warranty that the services or products provided by WeGo Network  or WeGo Network Channel will meet your requirements or will be available on an uninterrupted, secure, or error-free basis. We make no warranty regarding the quality of any information or content provided through our Network or Channel or channels if more thin one not exclude our platform.'
            },
            {
                id: 9,
                head: 'Limitation of Liability',
                body: 'WHEN PERMITTED BY LAW, WE WILL NOT BE RESPONSIBLE FOR ANY INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES. TO THE EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU FROM ALL CAUSES OF ACTION AND UNDER ALL THEORIES OF LIABILITY, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE PURCHASE PRICE (THAT YOU PAID) FOR CHANNEL SUBSCRIPTION ,SERVICES OR PRODUCTS FOR UNDER $50 USD (WHICHEVER IS LESS). IN ALL CASES, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE THAT IS NOT REASONABLY FORESEEABLE'
            },
            {
                id: 10,
                head: 'Exclusions',
                body: 'Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the disclaimers and limitations above may not apply to you.'
            },
            {
                id: 11,
                head: 'Arbitration of Disputes',
                body: 'All claims arising out of or relating to your WeGo Network account or any WeGo Network products product or service will be resolved exclusively through arbitration, according to these Dispute Resolution Terms, unless you opted out or another exception applies. We both agree that all claims may only be conducted on an individual basis (and not in a class, consolidated, or representative action).'
            },
            {
                id: 12,
                head: 'Governing Law, Jurisdiction and Venue',
                body: 'These terms are governed by the laws of the State of Michigan without regard to any conflict of laws principles that may provide the application of the law of another jurisdiction. If, for any reason, a claim proceeds in court rather than in arbitration, we both agree that the exclusive jurisdiction and venue for any legal proceeding is either federal District court of Michigan.'
            },
            {
                id: 13,
                head: 'General',
                body: 'These terms are between you and  WeGoand no other person has any right to enforce these terms on your behalf. Your rights are not transferable. Each paragraph is intended to operate separately. If any court or relevant authority determines that any terms are invalid or unenforceable, those terms will be enforced to the maximum extent permissible and the remaining terms will remain in full force and effect. If we delay or chose not to enforce these terms, that will not mean that we have.'
            },
            {
                id: 14,
                head: 'Contacting Us',
                body: 'If you have any questions about these terms, you can contact us though email.'
            },
        ]
        }
    }
}
</script>

<style>

* {
	 box-sizing: border-box;
}
 .pad {
	 width: 100vw;
	 height: 100vh;
	 
}
 .pad {
	 padding: 2em 2em 2em 17em;
	 font-size: 16px;
	 line-height: 1.6;

}
 .toc {
	 position: fixed;
	 left: 3em;
	 top: 4em;
	 padding: 1em;
	 width: 14em;
	 line-height: 2;
}
 .toc ul {
	 list-style: none;
	 padding: 0;
	 margin: 0;
}
 .toc ul ul {
	 padding-left: 2em;
}
 .toc li a {
	 display: inline-block;
	 color: rgb(68, 68, 68);
	 text-decoration: none;
	 transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}
 .toc li.visible > a {
	 color: #111;
	 transform: translate(5px);
}
 .toc-marker {
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 100%;
	 z-index: -1;
}
 .toc-marker path {
	 transition: all 0.3s ease;
}
 .contents {
	 padding: 1em;
	 max-width: 800px;
	 
}
 .contents img {
	 max-width: 100%;
}
 .contents .code-block {
	 white-space: pre;
	 overflow: auto;
	 max-width: 100%;
}
 .contents .code-block code {
	 display: block;
	 background-color: #f9f9f9;
	 padding: 10px;
}
 .contents .code-inline {
	 background-color: #f9f9f9;
	 padding: 4px;
}
 .contents h2, .contents h3 {
	 padding-top: 1em;
}
 @media screen and (max-width: 1200px) {
	 body {
		 font-size: 14px;
	}
}
 


nav>a, div>a {
  color: #f44336;
  font-size: 14px;
}
 .bt {
   background-color: #f44336;
   color: white;
   padding: 8px;
   border-radius: 4px;
 }

 .navbar {
  overflow: hidden;
 
}

.navbar a {
  float: left;
  font-size: 14px;
  color: #f44336;
  text-align: center;
  
  text-decoration: none;
}

.dropdown1 {
  float: left;
  overflow: hidden;
}

.dropdown1 .dropbtn {
  font-size: 14px;  
  border: none;
  outline: none;
  color: #f44336;
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
  background-color: #f44336;
  border-radius: 6px;
  
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
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
  background-color: #1C1A1A;
}

.dropdown1:hover .dropdown-content1 {
  display: block;
}


@media (max-width: 768px) { 
/* .dropdown-content1 {
  display: none;
  position: absolute;
  
  background-color: #f44336;
  border-radius: 6px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
} */

.dropdown-content1 {
  display: none;
  position: absolute;
  background-color: #f44336;
  border-radius: 6px;
  z-index: 999;
  width: 100vw;

  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  
}


 }

 @media (max-width: 640px) { 

 .pad {
	 padding: 0;
	 font-size: 16px;
	 line-height: 1.6;

}
 .toc {
	 display: none;
}

.contents {
	 
	 max-width: 800px;
	 
}

 }
</style>
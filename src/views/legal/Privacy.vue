<template>

 <Navbar class="w-full lg:-ml-40">
       <router-link :to="{name: 'Home'}">
      <div class="md:hidden">
          <img class="w-12 md:w-24 -pl-16 md:pl-8 pt-4" src="@/assets/logo.png" alt="">
          <p class="text-center invisible md:visible text-xs text-white ml-6 -mt-4">WeGo Network</p>
      </div>
</router-link>
      
     

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
      <div class="md:-mt-24 mb-2">
          <img class="w-12 md:w-24 -pl-16 md:pl-8 pt-4" src="@/assets/logo.png" alt="">
          <p class="text-center invisible md:visible text-xs text-white ml-6 -mt-4">WeGo Network</p>
      </div>
</router-link>
	<ul v-for="header in headers" :key="header.id">
		<li><a class="text-xs" :href="'#topic' + header.id">{{header.topic}}</a></li>
	</ul>
  <svg class="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#444" stroke-width="3" fill="transparent" stroke-dasharray="0, 0, 0, 1000" stroke-linecap="round" stroke-linejoin="round" transform="translate(-0.5, -0.5)" />
  </svg>
</nav>

<article class="contents mt-12" v-for="policy in policies" :key="policy.id">
<div class="mx-12 md:mx-0" :id="'topic' + policy.id">
          <h1 class="font-bold text-lg text-deep-gray my-6">{{policy.head}}</h1>
          <p class="leading-loose text-sm">{{policy.body}}
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
                    topic: 'Wego Network LLC. Privacy Policy'
                },
                  {
                    id: 2,
                    topic: 'Privacy Policy'
                },
                  {
                    id: 3,
                    topic: 'Registration Information'
                },
                  {
                    id: 4,
                    topic: 'Information We Collect Automatically '
                },
                {
                    id: 5,
                    topic: 'Activity and Usage Information on Sites,  Mobile Apps, Channels and WeGo Network Devices'
                },
                {
                    id: 6,
                    topic: 'Personalization'
                },
                {
                    id: 7,
                    topic: ' Improve  Products and Services'
                },
                {
                    id: 8,
                    topic: 'Marketing and Promotions.'
                },
                {
                    id: 9,
                    topic: 'Corporate Affiliates'
                },
                {
                    id: 10,
                    topic: 'Required by Law and Similar Disclosures'
                },
                {
                    id: 11,
                    topic: 'Security'
                },
                {
                    id: 12,
                    topic: 'Transfers'
                },
                {
                    id: 13,
                    topic: 'Retention'
                },
                {
                    id: 14,
                    topic: 'Modifications'
                },
                {
                    id: 15,
                    topic: 'No Endorsement'
                },
                {
                    id: 16,
                    topic: 'Relationship'
                },
                {
                    id: 17,
                    topic: 'Non-Assertion'
                },
                {
                    id: 18,
                    topic: 'Indemnification'
                },
                {
                    id: 19,
                    topic: 'Warranties; Disclaimers; Limitations of Liability'
                },
                {
                    id: 20,
                    topic: 'Service Fees'
                }, 
                {
                    id: 21,
                    topic: 'Payment'
                },
                {
                    id: 22,
                    topic: 'Special Pricing Programs'
                },
                {
                    id: 23,
                    topic: 'Confidentiality'
                },
                {
                    id: 24,
                    topic: 'Excluded Information'
                },
                {
                    id: 25,
                    topic: 'Conflict with Separate Non-Disclosure Agreement'
                },
                
            ],
        policies: [
            {
                id: 1,
                head: 'Wego Network LLC. Privacy Policy',
                body: 'WeGo Network values the privacy of our users. This Privacy Policy describes terms, condition  and information that. Wego Network LLC and our affiliated companies (“WeGo,” “we,” or “us”) collect about consumers (“you” and “your household”) and how we use and share that information. BY ACCESSING WEGO NETWORK PLATFORM ,PRODUCT AND/OR SERVICES, BY CLICKING THE “ACCEPT” BUTTON FOR THIS AGREEMENT, OR BY ACCEPTING ANY MODIFICATION TO THIS AGREEMENT, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS OF THIS AGREEMENT, INCLUDING CLAUSES ON PAYMENTS, CANCELLATIONS, AND REFUNDS. IF YOU ARE ENTERING INTO THIS AGREEMENT ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU CONFIRM THAT YOU HAVE THE LEGAL AUTHORITY TO BIND THE LEGAL ENTITY TO THIS AGREEMENT, IN WHICH CASE “YOU” SHALL MEAN SUCH ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS OF THIS AGREEMENT, YOU MUST SELECT THE “DECLINE” BUTTON AND YOU MAY NOT USE THE SERVICES.'
            },
            {
                id: 2,
                head: 'Privacy Policy',
                body: 'Our Privacy Policy applies to information collected and used by Wego Network llc. through “WeGo Network Platform, Services and Products”, which includes: Wego Network websites (“WeGO Sites”), Wego Network ’s and certain other products utilizing Wego Network ’s streaming platform or operating systems (including Wego Network players, WeGo TVs, speakers and other audio-enabled products) (collectively,“Devices”), certain Wego Network co-branded channels (“Direct Publisher Channels”), (including Wego Network Mobile Apps), branded channels ,WeGo Network Media Players and\ Wego Network ’s advertising services, the emails ,newsletters, blogs and Wego Network accounts on third-party social networking sites. Using our products and services, you can stream channels provided by other companies (“Third-Party Channels”), When you stream one of these channels, you are interacting with that channel directly, and the channel provider and its analytics and advertising partners may collect information from your Wego Network  Device, including your device identifier and how you use that channel. This Privacy Policy does not cover the actions of these channel providers and their partners.'
            },
            {
                id: 3,
                head: 'Registration Information',
                body: 'When you sign up for a  Wego Network account, we ask for information such as your name, email address, postal address, telephone number, birth date, and demographic information. You can sign up using a social media account, we may also receive information from those social networking services. If you register to receive copies of Wego Network  blog posts, we will also collect your email address. When you add a credit card or payment method to your account or place an order with us, we will collect your payment information and billing address, and (if you make a product purchase), your shipping information. If you use product features with text messaging or email, we will also collect the phone number, email address, and any other contact information you provide.'
            },
            {
                id: 4,
                head: 'Information We Collect Automatically Through any of Wego Network Services',
                body: 'We may also collect the personal information of other people, for example, if you provide email addresses of friends for referrals or postal addresses of recipients for gift purchases. For more information on how we and others use cookies and related technologies on WeGo Channels, and your choices regarding the use of these technologies for tracking on WeGo Network Sites, please read these Cookies Policy. We and our business partners collect information on websites and in our emails using cookies, pixel tags, or similar technologies. such as analytic s and advertising partners, may use these technologies to collect information about your online activities over time and across different online service.'
            },
            {
                id: 5,
                head: 'Activity and Usage Information on Sites,  Mobile Apps, Channels and WeGo Network Devices',
                body: 'We receive information about your interactions with WeGo Network Services, such as your browsing history, search history, search results, audio information when you use voice-enabled features, channels you access (including usage statistics such as what channels you access, the time you access them, and how long you spend viewing them), interactions with content and ads, and settings and preferences. When you access WeGo Network Channels and WeGo Network Platform, we receive information about your activities like the videos and other content you select and view within these channels. If you use WeGo Network Media Player channel to view your video or photo files or listen to your music files, we collect data about the files viewed  such as codecs, and other metadata of the local files you play through the Media Players. If you use WeGo Network mobile apps, WeGo Network s mobile apps may need permissions to access the content and other information stored on your mobile device.'
            },
            {
                id: 6,
                head: 'Personalization',
                body: 'We use your information to personalize your experience on WeGo Network, including suggesting and offering you relevant content and recommendations; We use your information to provide and maintain the Roku Services, and to process and fulfill your requests or orders;'
            },
            {
                id: 7,
                head: 'Improve  Products and Services',
                body: 'We use your information to understand and analyze our user base and how you use the Services, and to improve and enhance WeGo Network Services (including building correlations in advertising services in order to better serve our Advertisers), and to develop new products, services, features and functionality;'
            },
            {
                id: 8,
                head: 'Marketing and Promotions.',
                body: 'We use your information for marketing purposes, including sending you emails and text messages about products, events, promotions and offers from WeGo Network or its partners or advertisers, and understanding the effectiveness of our marketing; including sending you service information such as confirmations, invoices, notices, updates, security alerts, user surveys, and support and administrative messages; and to respond to your comments and questions and provide customer service; Enforce our terms and conditions or protect our business, partners We use your information to protect, investigate, and deter against fraudulent, unauthorized, infringing or illegal activity, including click fraud.'
            },
            {
                id: 9,
                head: 'Corporate Affiliates',
                body: 'We may share your information with our current or future “affiliates” (which means a parent company, any subsidiaries, joint ventures, or other companies under common control), in which case we will require our affiliates to honor this Privacy Policy. We also may share personally identifying information with your consent, when you agree to our sharing of your personally identifying information with other third parties for their own marketing purposes, subject to their separate privacy policies.'
            },
            {
                id: 10,
                head: 'Required by Law and Similar Disclosures',
                body: 'We may also share your information (1) to comply with laws or to respond to lawful requests and legal process, (2) to protect the rights and property of WeGo Network LLc, our employees, agents, customers, and others, including to enforce our agreements, policies, and terms of use, (3) in an emergency to protect  to investigate, prevent, or take action regarding illegal or suspected illegal activities.'
            },
            {
                id: 11,
                head: 'Security',
                body: 'We use industry-standard methods of securing electronic databases of personal information. However, you should know that no company, including WeGo Network llc, can fully eliminate security risks associated with personal information. To help protect yourself, please use a strong password, do not use the same password to access your account that you use with other accounts or services, and protect your usernames and passwords to help prevent others from accessing your accounts and services.'
            },
            {
                id: 12,
                head: 'Transfers',
                body: 'WeGo Network Llc is a global company with affiliates, varied business processes, management structures and technical systems that cross borders. Information collected by WeGo Network llc. or on our behalf may be stored on your Devices, on your mobile device if you use our mobile apps, or on our servers, and may be transferred to, accessed from, or stored and processed globally in any other country where WeGo Network or its service providers maintain facilities or call centers, including jurisdictions that may not have data privacy laws that provide protections equivalent to those provided in your home country. While such information is outside of your country of residence, it is subject to the laws of the country in which it is held, and may be subject to disclosure to the governments, courts or law enforcement or regulatory agencies of such other country, pursuant to the laws of such country. We will protect all personal information we obtain in accordance with this Privacy Policy and take reasonable steps to ensure that it is treated lawfully.'
            },
            {
                id: 13,
                head: 'Retention',
                body: 'Personal information we collect may be retained for as long as needed to fulfill legitimate business purposes, including the purposes outlined in “Information Usage” for a time period specifically required or allowed by applicable regulations or laws'
            },
             {
                id: 14,
                head: 'Modifications',
                body: 'We may amend this Privacy Policy at any time by posting the amended version on the applicable WeGo Network Site or by providing such notice about or obtaining consent to changes as may be required by applicable law.'
            },
            {
                id: 15,
                head: 'No Endorsement',
                body: 'You understand and acknowledge that we are not certifying nor endorsing, and have no obligation to certify or endorse, any of your Applications or Your Content.'
            },
            {
                id: 16,
                head: 'Relationship',
                body: 'Nothing in this Agreement is intended to or does create any type of joint venture, creditor-debtor, escrow, partnership or any employer/employee or fiduciary or franchise relationship between you and us (or any of our affiliates).'
            },
            {
                id: 17,
                head: 'Non-Assertion',
                body: 'During and after the term of the Agreement, with respect to any of the Services that you elect to use, you will not assert, nor will you authorize, assist, or encourage any third party to assert, against us or any of our customers, end-users, vendors business partners (including third-party sellers on websites operated by or on behalf of us), licensors, sub-licensees or transferees, any patent infringement or other intellectual property infringement claim with respect to such Services.'
            },
             {
                id: 18,
                head: 'Indemnification',
                body: 'General: You agree to indemnify, defend and hold us, the owners of WeGo Ntetwork Llc.our affiliates and licensors, each of our and their business partners (including third party sellers on websites operated by or on behalf of us) and each of our and their respective employees, officers, directors and representatives, harmless from and against any and all claims, losses, damages, liabilities, judgments, penalties, fines, costs and expenses (including reasonable attorney’s fees), arising out of or in connection with any claim arising out of (i) your use of the Services . Product , Platform, Channel and/or WeGo Network Properties in a manner not authorized by this Agreement, and/or in violation of the applicable restrictions, Additional Policies, and/or applicable law, (ii) Your Content, or the combination of either with other applications, content or processes, including but not limited to any claim involving infringement or misappropriation of third-party rights and/or the use, development, design, manufacture, production, advertising, promotion and/or marketing of Your Content, (iii) your violation of any term or condition of this Agreement or any applicable Additional Policies, including without limitation, your representations and warranties, or (iv) you or your employees’ or personnel’s negligence or willful misconduct.'
            },
             {
                id: 19,
                head: 'Warranties; Disclaimers; Limitations of Liability',
                body: ' Use of the Services: You represent and warrant that you will not use the Services, WeGo Network Properties and/or your Application and Your Content: (i) in a manner that infringes, violates or misappropriates any rights of us or any third party; (ii) to engage in spamming or other impermissible advertising, marketing or other activities, including, without limitation, any activities that violate anti-spamming laws and regulations, including, without limitation, the CAN-SPAM Act of 2003; (iii) in any manner that constitutes or facilitates the illegal export of any controlled or otherwise restricted items, including, without limitation, software, algorithms or other data that is subject to export WeGo Network; and/or (iv) in a way that is otherwise illegal or promotes illegal activities, including without limitation, in a manner that might be libelous or defamatory or otherwise malicious or harmful to any person or entity, or discriminatory based on race, sex, religion, nationality, disability, sexual orientation, or age.'
            },
            {
                id: 20,
                head: 'Service Fees',
                body: 'In consideration of your use of any of the Paid Services, you agree to pay applicable fees for Paid Services in the amounts set forth on the respective Service detail pages on our Website. You are responsible for any fees assessed by WeGo Network Payments for transactions that you submit to the Payment Service or Product using  including fees charged by third parties used in processing payouts to you of account monetary balances. Fees for any new Service or new Service feature will be effective upon posting by us on the wego network Website for the applicable Service. We may increase or add new fees for any existing Product ,Service or Service feature, or implement a fee for any previously Free Service or Free Service feature, by giving  10 days advance notice. Such notice will be posted on WeGo Network Website on the Service detail page for the affected Service or Products. You agree that you are responsible for checking Website each month to confirm whether there are any new fees and their effective date(s). All fees payable by you are exclusive of applicable taxes and duties, including, without limitation, VAT and applicable sales tax. You will provide such information to us as reasonably required to determine whether we are obligated to collect VAT from you, including without limitation your VAT identification number.'
            },
            {
                id: 21,
                head: 'Payment',
                body: 'We may specify the manner in which you will pay any fees, and any such payment shall be subject to our general accounts receivable policies from time to time in effect. All amounts payable by you under this Agreement will be made without set off or counterclaim and without deduction or withholding. If any deduction or withholding is required by applicable law, you shall notify us and shall pay such additional amounts to us as necessary to ensure that the net amount that we receive, after such deduction and withholding, equals the amount we would have received if no such deduction or withholding had been required. Additionally, you shall provide us with documentation that the withholding and deducted amounts have been paid to the relevant taxing authority.'
            },
            {
                id: 22,
                head: 'Special Pricing Programs',
                body: 'From time to time, we may offer free or discounted pricing for compute capacity, data transfer, data storage, and another usage of certain Services (each a “Special Pricing Program”). After a Special Pricing Program ends, normal charges will apply. You must comply with any additional terms, restrictions, or limitations (e.g., limitations on the total amount of usage) we impose in connection with the Special Pricing Program as described on the Service-specific detail pages on the Dacast Website. You may not sign-up for multiple WeGo Network accounts in order to receive additional benefits under a Special Pricing Program. We may immediately terminate any account that we determine, in our sole discretion, is established or used to avoid the terms, restrictions, or limitations applicable to a Special Pricing Program. Any data stored as part of a Special Pricing Program must be actively used.'
            },
            {
                id: 23,
                head: 'Confidentiality',
                body: 'Use and Disclosure: You shall not disclose WeGo Network LLc Confidential Information during the Term or at any time during the three (7) year period following the end of the Term. As used in this Agreement, “WeGo Network llc Confidential Information” means all non-public information disclosed by us, our business partners or our or their respective agents or contractors that is designated as confidential or that, given the nature of the information or circumstances surrounding its disclosure, reasonably should be understood to be confidential. While working with WeGo Network Llc, or on, in use of services Confidential Information includes, without limitation, (i) non-public information relating to our or our business our network , our partners’ technology, customers, business plans, promotional and marketing activities, finances and other business affairs (including, but not limited to, any information about or involving one of our so-called beta tests or a beta test product that you obtain as a result of your participation in such beta test), (ii) third-party information that we are obligated to keep confidential, and (iii) the nature, content and existence of any discussions or negotiations between you and us. Confidential Information does not include any information described in this agreement or any information that you are required to disclose by law.'
            },
            {
                id: 24,
                head: 'Excluded Information',
                body: 'Notwithstanding any other provision in this Agreement, you shall not have any confidentiality obligation above, with respect to any information provided or made available by us hereunder, and we shall not have any confidentiality or non-use obligation to you hereunder with respect to any information, software application, data or content provided or made available by you hereunder that: (i) is or becomes publicly available without breach of this Agreement; (ii) can be shown by documentation to have been known to the receiving party at the time of its receipt from the disclosing party; (iii) is received from a third party who did not acquire or disclose the same by a wrongful or tortuous act; or (iv) can be shown by documentation to have been independently developed by the receiving party.'
            },{
                id: 25,
                head: 'Conflict with Separate Non-Disclosure Agreement',
                body: 'If you and we are parties to a separate non-disclosure agreement (“Stand-Alone NDA”) and there is a conflict between the terms of the Stand-Alone NDA and the terms of this Section 9, the terms of the Stand-Alone NDA shall control.'
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
  color: #0080FF;
  font-size: 14px;
}
 .bt {
   background-color: #0080FF;
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
  color: #0080FF;
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
  color: #0080FF;
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


@media (max-width: 768px) { 
/* .dropdown-content1 {
  display: none;
  position: absolute;
  
  background-color: #0080FF;
  border-radius: 6px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
} */

.dropdown-content1 {
  display: none;
  position: absolute;
  background-color: #0080FF;
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
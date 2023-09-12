"use client"
import { inter } from "../../../../components/fonts";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";
import Image from "next/image";

const PrivacyText = () => {
    const {width } = useWindowDimensions();
    return (
        <div
            className="
                relative
                h-full
                flex 
                flex-col 
                xxs:gap-6 
                xs:gap-12 
                sm:gap-14 
                md:gap-8
                justify-center
                px-7 
                xl:px-[17rem]
                lg:p-[7rem]
                p-14
                z-50
            "
        >
           
            <div
                className={`
                        ${inter.className}
                        font-normal
                        sm:text-lg
                        word-wrap
                        break-words
                        md:text-xl
                        lg:text-2xl
                        text-white
                `}
            >
               <p>PERSONAL INFORMATION WE COLLECT</p>

<p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>

<p>Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."</p>
<br />

<p>We collect Device Information using the following technologies:</p>
<ul>
  <li>"Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org">http://www.allaboutcookies.org</a>.</li>
  <li>"Log files" track actions occurring on the Site and collect data, including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
  <li>"Web beacons," "tags," and "pixels" are electronic files used to record information about how you browse the Site.</li>
</ul>
<br />

<p>Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, PayPal & Coinbase information), email address, and phone number. We refer to this information as "Order Information."</p>
<br />

<p>When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Order Information.</p>
<br />

<p>HOW DO WE USE YOUR PERSONAL INFORMATION?</p>
<p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>

<p>Additionally, we use this Order Information to:</p>
<ul className="list-disc ml-10 mt-2">
  <li>Communicate with you</li>
  <li>Screen our orders for potential risk or fraud</li>
  <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services</li>
</ul>
<br />

<p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address) and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
<br />

<p>SHARING YOUR PERSONAL INFORMATION</p>

<p>We share your Personal Information with third parties to help us use your Personal Information, as described above. We use Google Analytics to help us understand how our customers use the Site—you can read more about how Google uses your Personal Information <a href="https://www.google.com/intl/en/policies/privacy/">here</a>. You can also opt-out of Google Analytics <a href="https://tools.google.com/dlpage/gaoptout">here</a>.</p>
<br />

<p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
<br />

<p>BEHAVIOURAL ADVERTISING</p>

<p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative's ("NAI") educational page at <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work">http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a>.</p>
<br />

<p>DO NOT TRACK</p>

<p>Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser.</p>
<br />

<p>YOUR RIGHTS</p>

<p>If you are a European resident, you have the right to access personal information we hold about you and to ask
that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please
contact us through the contact information below. Additionally, if you are a European resident we note that we
are processing your information in order to fulfill contracts we might have with you (for example if you make an
order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally,
please note that your information will be transferred outside of Europe, including to Canada and the United
States.</p>
<br />

<p>DATA RETENTION</p>

<p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
<br />

<p>CHANGES.</p>

<p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
<br />

<p>CONTACT US</p>

<p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:contact@rekonmedia.com">contact@rekonmedia.com</a>.</p>

            </div>
            {width && width >= 640 &&
          <>
            <Image className="absolute sm:scale-50 sm:top-[7rem] sm:right-[1rem] md:scale-50 md:top-[76rem] md:left-[640px] lg:scale-75 lg:top-[87rem] lg:left-[900px] xl:scale-100 xl:top-[100rem] xl:left-[1130px] 1/2xl:left-[1310px] 1/2xl:top-[105rem] 2xl:left-[1390px] 3xl:top-[110rem] 3xl:left-[1770px] " src="/Cone.png" alt="RekonMedia Logo" height={20} width={210} quality={100} />
            <Image className="absolute sm:scale-75 sm:top-[1.5rem] sm:left-[3rem] md:scale-75 md:top-[40rem] md:left-[700px] lg:scale-100 lg:top-[60rem] lg:left-[950px] xl:top-[70rem] xl:left-[1200px] 1/2xl:top-[75rem] 1/2xl:left-[1360px] 2xl:top-[75rem] 2xl:left-[1470px] 3xl:top-[85rem] 3xl:left-[1850px] rotate-180 " src="/Torus Half.png" alt="RekonMedia Logo" height={20} width={145} quality={100} />
            <Image className="absolute  sm:scale-0 lg:scale-100 xl:top-[35rem] lg:right-[400px] backdrop-blur-3xl xl:right-[600px] 2xl:right-[800px]  3xl:right-[1200px] z-[-30]" src="/shape2.png" alt="RekonMedia Logo" height={20} width={1500} quality={100} />
            <Image className="absolute  sm:scale-0 md:scale-100 xl:top-[90rem]  md:left-0 z-[-30]" src="/circulorsa.png" alt="RekonMedia Logo" height={20} width={300} quality={100} />
            <Image className="absolute  sm:scale-0 md:scale-100 md:top-[18rem] lg:top-[26rem] xl:top-[46rem] 2xl:top-[63rem] 3xl:top-[70rem]  md:right-0 z-[-30]" src="/circuloizq.png" alt="RekonMedia Logo" height={20} width={800} quality={100} />
            <Image className="absolute sm:scale-0 md:scale-100 sm:top-[23rem] md:top-[15rem] left-0 z-[-20] opacity-50 " src="/rmfinal.png" alt="RekonMedia Logo" height={20} width={1950} quality={100} />
          </>}
        </div>
    )
}

export default PrivacyText
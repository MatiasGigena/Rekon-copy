import Head from 'next/head'
import Footer from './components/footer/Footer'
import './globals.css'
import Navbar from './components/navigation/Navbar'
import { UIProvider } from './context/ui'
import ToasterProvider from './providers/ToasterProvider'


export const metadata = {
  title: 'RekonMedia | On page SEO, Web Design & Advertising services',
  description: 'We are a team of talented developers, designers, SEO experts and advertising specialists. Our goal is to enhance our clients performance by expanding their reach and driving better outcomes every month. We achieve this through the use of advanced tools and techniques to maximize their potential.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '64x64',
      url: '/app/icon.png',
    },
    
  ],
  
}

/* interface IMainEntity {
  "@type": string; 
  name: string;
  acceptedAnswer: {
    "@type": string;
    text: string;
  }
}

const generateMetadata = () =>{
  let mainEntity:IMainEntity[] = [];

  FAQ_ITEM.map(el => {
      mainEntity.push({
        "@type": "Question",
        name: el.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: el.description
        }
      });
    
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity
  };

  console.log(structuredData)

  return structuredData

} */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  /* generateMetadata() */
  
  return (
    
    <html lang="en">
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta content="We provide professional on and off page SEO and Web Design services. We also help companies with their advertising campaigns ensuring their money is not wasted." name="description"/>
        <meta name="robots" content="index,follow"/>
        <link rel="canonical" href='https://www.rekonmedia.com/'/>
       {/*  <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateMetadata()) }}
        /> */}

      </Head>
      <body>
          <ToasterProvider/>
          <UIProvider>
            {children}
          </UIProvider>
        
      </body>
    </html>
  )
}

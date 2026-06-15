import type { Metadata } from "next";
import Script from "next/script";
import type { NextConfig } from 'next'
import "../globals.css";
import "./styles/style.scss";
import "./styles/responsive.scss";
import "../../public/css/new_style.scss";

import { Inter } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Preloader from '@/components/Preloader';
import ScriptReinitializer from '@/components/ScriptReinitializer';
import GlobalLayout from '@/components/GlobalLayout';
import { NotificationProvider } from '@/context/NotificationContext';
import DeferredCSS from '@/components/DeferredCSS';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
}

import dbConnect from '@/lib/db';
import Settings from '@/models/Settings';

export async function generateMetadata() {
  let settings;
  try {
    await dbConnect();
    settings = await Settings.findOne();
  } catch (error) {
    console.warn("Failed to fetch settings for metadata, using defaults:", error);
    settings = {};
  }

  const seo = settings?.seo || {};
  const siteName = settings?.general?.siteName || "Bharathi Institute";

  const title = seo.title || "Bharathi Institutes Of Hotel Management & Paramedical";
  const description = seo.description || "Discover excellence in Hotel Management and Paramedical Science at Bharathi Institute, Chennai. Build a rewarding career in hospitality and healthcare.";
  const keywords = seo.keywords || "Institute of hotel management and paramedical in chennai , Hotel Management Courses in Chennai , Hospitality Management Chennai , Hospital Management Courses in Chennai ";
  const ogTitle = seo.ogTitle || "Top Institute for Hotel Management & Paramedical in Chennai";
  const ogDescription = seo.ogDescription || description;

  return {
    metadataBase: new URL('https://bharathiinstitutes.com'),
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description: description,
    keywords: keywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      url: "https://bharathiinstitutes.com/",
      siteName: siteName,
      images: [
        {
          url: "https://bharathiinstitutes.com/images/fav-icon/apple-touch-icon.png",
          width: 1200,
          height: 630,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: ["https://bharathiinstitutes.com/images/fav-icon/apple-touch-icon.png"],
    },
    icons: {
      icon: [
        { url: "/images/favicons/16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/images/favicons/32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/images/favicons/48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/images/favicons/192x192.png", sizes: "192x192", type: "image/png" },
      ],
      shortcut: "/images/favicons/48x48.png",
      apple: [
        { url: "/images/favicons/192x192.png", sizes: "192x192", type: "image/png" },
      ],
    },
    other: {
      "google-site-verification": "bP2auhYiMuDJqzDVAyONCxyYZ1uGjC-tBuXOr1hoV1A"
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/images/favicons/48x48.png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/images/favicons/192x192.png" />

        {/* Next.js Metadata handles icons, but keeping manual links for specific legacy support if needed, 
            ensuring one of them is 48/96/144/192 for Google */}
        {/* <link rel="icon" href="/images/logo/logo12.png" sizes="192x192" /> */}

        <DeferredCSS href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <DeferredCSS href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" />
        <link href="/css/owl.carousel.css" rel="stylesheet" />
        <link href="/css/settings.css" rel="stylesheet" />
        <link href="/css/layers.css" rel="stylesheet" />
        <link href="/css/navigation.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              "name": "Bharathi Institute Of Hotel Management & Paramedical",
              "url": "https://bharathiinstitutes.com/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bharathiinstitutes.com/images/favicons/192x192.png",
                "width": 192,
                "height": 192
              },
              "description": "Discover excellence in Hotel Management and Paramedical Science at Bharathi Institute, Chennai. Build a rewarding career in hospitality and healthcare.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 93452 40003",
                "contactType": "Customer Service"
              }
            })
          }}
        />

        <style>{`
          .card-body {
            display: none;
          }
          .card-body.show {
            display: block;
          }
          .term_p{
            padding:0 20px;
            color:#fff;
          }
          .term_p_fl{
            align-items: baseline;
            display:flex;
            color:#fff;
          }
          .term_p_fl input{
              
              width:auto !important;
              padding:0 10px !important;
          }
          .term_p_fl span{
              padding: 0 7px 15px ;
          }
           .swal2-popup {
              font-size: 1.5rem;
          }
          .new_popup_form input{
              width:100%;
              padding:10px 10px;
              border:1px solid lightgrey;
              border-radius:5px;
              margin-bottom:15px;
          }
              .new_popup_form label{
              width:100%;
          }
          .new_popup_form .modal-content{
              border-radius:20px;
              padding:20px;
          }
          .navigation li.active a{
              color:#b4d903;
          }
          .youtube-facade {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            background-color: #000;
            background-size: cover;
            background-position: center;
            cursor: pointer;
            border-radius: 12px;
            overflow: hidden;
          }
          .youtube-facade .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 68px;
            height: 48px;
            transform: translate(-50%, -50%);
            background: url('https://i.imgur.com/TxzC70f.png') no-repeat;
            background-size: contain;
          }
        `}</style>

        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "rq1n3874sc");`}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W9TE3VPFG7" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W9TE3VPFG7');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P7BFZGV9');`}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <div className="boxed_wrapper">
          <ScriptReinitializer />
          <Preloader />

          <NotificationProvider>
            <GlobalLayout>
              {children}
            </GlobalLayout>
          </NotificationProvider>
        </div>


        {/* External Libs */}
        <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js" strategy="lazyOnload" />

        {/* Scripts - Loaded after interactivity to avoid blocking */}
        <Script src="/js/jquery.js" strategy="afterInteractive" />
        {/* <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" strategy="afterInteractive" /> */}
        <Script src="/js/menu.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        {/* <Script src="/js/jquery.mixitup.min.js" strategy="afterInteractive" /> */}
        {/* <Script src="/js/jquery.fancybox.pack.js" strategy="afterInteractive" /> */}
        {/* <Script src="/js/imagezoom.js" strategy="afterInteractive" /> */}
        {/* <Script src="/js/jquery.polyglot.language.switcher.js" strategy="afterInteractive" /> */}
        {/* <Script src="/js/SmoothScroll.js" strategy="afterInteractive" /> */}
        {/* <Script src="/js/jquery.appear.js" strategy="afterInteractive" />
        <Script src="/js/jquery.countTo.js" strategy="afterInteractive" />
        <Script src="/js/validation.js" strategy="afterInteractive" />
        <Script src="/js/wow.js" strategy="afterInteractive" />
        <Script src="/js/jquery.fitvids.js" strategy="afterInteractive" />
        <Script src="/js/nouislider.js" strategy="afterInteractive" /> */}

        {/* Revolution Slider */}
        {/* <Script src="/js/rev-slider/jquery.themepunch.tools.min.js" strategy="afterInteractive" />
        <Script src="/js/rev-slider/jquery.themepunch.revolution.min.js" strategy="afterInteractive" />
        <Script src="/js/rev-slider/revolution.extension.actions.min.js" strategy="afterInteractive" />
        <Script src="/js/rev-slider/revolution.extension.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/rev-slider/revolution.extension.kenburn.min.js" strategy="afterInteractive" />
        <Script src="/js/rev-slider/revolution.extension.layeranimation.min.js" strategy="afterInteractive" />
        <Script src="/js/rev-slider/revolution.extension.migration.min.js" strategy="afterInteractive" />
        <Script src="/js/rev-slider/revolution.extension.navigation.min.js" strategy="afterInteractive" />
        <Script src="/js/rev-slider/revolution.extension.parallax.min.js" strategy="afterInteractive" />
        <Script src="/js/rev-slider/revolution.extension.slideanims.min.js" strategy="afterInteractive" />
        <Script src="/js/rev-slider/revolution.extension.video.min.js" strategy="afterInteractive" />
        <Script src="/js/custom.js" strategy="afterInteractive" /> */}

        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="lazyOnload" />
        <Script id="google-translate-init" strategy="lazyOnload">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ta'}, 'google_translate_element');
            }
          `}
        </Script>

        {/* Accordion Logic */}
        <Script id="accordion-logic" strategy="lazyOnload">
          {`
             $(document).ready(function(){
                $('#accordion .collapse').on('show.bs.collapse', function () {
                    $('#accordion .collapse.show').collapse('hide');
                    $(this).find('.card-body').addClass('show');
                });

                $('#accordion .collapse').on('hide.bs.collapse', function () {
                    $(this).find('.card-body').removeClass('show');
                });
            });
        `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq) return;
              n = f.fbq = function(){
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
              };
              if(!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = '2.0';
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '978896703619197');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=978896703619197&ev=PageView&noscript=1" />',
          }}
        />
        {/* End Meta Pixel Code */}
      </body>
    </html>
  );
}

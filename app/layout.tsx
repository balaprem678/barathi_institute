import type { Metadata } from "next";
import Script from "next/script";
import type { NextConfig } from 'next'
import "./globals.css";
import "../public/css/new_style.scss";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
}

export const metadata: Metadata = {
  title: "Bharathi Institutes Of Hotel Management & Paramedical",
  description: "Discover excellence in Hotel Management and Paramedical Science at Bharathi Institute, Chennai. Build a rewarding career in hospitality and healthcare.",
  keywords: "Institute of hotel management and paramedical in chennai , Hotel Management Courses in Chennai , Hospitality Management Chennai , Hospital Management Courses in Chennai ",
  openGraph: {
    title: "Top Institute for Hotel Management & Paramedical in Chennai",
    description: "Discover excellence in Hotel Management and Paramedical Science at Bharathi Institute, Chennai. Build a rewarding career in hospitality and healthcare.",
    type: "website",
    url: "https://bharathiinstitutes.com/",
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
    title: "Top Institute for Hotel Management & Paramedical in Chennai",
    description: "Discover excellence in Hotel Management and Paramedical Science at Bharathi Institute, Chennai. Build a rewarding career in hospitality and healthcare.",
    images: ["https://bharathiinstitutes.com/images/fav-icon/apple-touch-icon.png"],
  },
  other: {
    "google-site-verification": "bP2auhYiMuDJqzDVAyONCxyYZ1uGjC-tBuXOr1hoV1A"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" href="/images/logo/logo12.png" type="image/png" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/v4-shims.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossOrigin="anonymous"></link>
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link href="/css/owl.carousel.css" rel="stylesheet" />
        <link href="/css/settings.css" rel="stylesheet" />
        <link href="/css/layers.css" rel="stylesheet" />
        <link href="/css/navigation.css" rel="stylesheet" />

        <link href="/images/fav-icon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/images/fav-icon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/images/fav-icon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossOrigin="anonymous"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              "name": "Bharathi Institute Of Hotel Management & Paramedical",
              "url": "https://bharathiinstitutes.com/index.php",
              "logo": "https://bharathiinstitutes.com/images/logo/logo-large.png",
              "description": "Discover excellence in Hotel Management and Paramedical Science at Bharathi Institute, Chennai. Build a rewarding career in hospitality and healthcare.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-94441 20052",
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
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "rq1n3874sc");`}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W9TE3VPFG7" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W9TE3VPFG7');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P7BFZGV9');`}
        </Script>
      </head>
      <body>
        <div className="boxed_wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        <WhatsAppButton />

        {/* External Libs */}
        <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.all.min.js" strategy="afterInteractive" />
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" strategy="beforeInteractive" />

        {/* Scripts - Loaded lazily to avoid blocking */}
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
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

        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <Script id="google-translate-init" strategy="afterInteractive">
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
      </body>
    </html>
  );
}

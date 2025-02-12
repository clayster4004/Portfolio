// layout.js
import '../styles/globals.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
        <Script id="emailjs-init" strategy="beforeInteractive">
          {`
            (function(){
              emailjs.init({
                publicKey: "50zgx4f3SllmU6LKT"
              });
            })();
          `}
        </Script>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oxygen:wght@300;400;700&family=Roboto+Slab:wght@100..900&family=Stint+Ultra+Expanded&display=swap');
        </style>      
      </head>
      <body>{children}</body>
    </html>
  );
}
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
      </head>
      <body>{children}</body>
    </html>
  );
}
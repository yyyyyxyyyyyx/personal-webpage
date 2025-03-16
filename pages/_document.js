import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* 优先加载Raleway字体 */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* 备用字体加载方式 */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* 备用字体加载 */
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
          }
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
          }
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
          }
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
          }
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/raleway/v28/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
          }
        ` }} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
        {/* Microsoft Clarity tracking code */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "q0gd5eh3j6");
            `
          }}
        />
        {/* Google Analytics tracking code */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HGD0HK4XSC" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HGD0HK4XSC');
            `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

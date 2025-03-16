import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* 直接内联字体样式，避免外部请求 */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* 内联Raleway字体定义 */
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: local('Raleway Light'), local('Raleway-Light'), url('/fonts/raleway/raleway-300.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: local('Raleway'), local('Raleway-Regular'), url('/fonts/raleway/raleway-400.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: local('Raleway Medium'), local('Raleway-Medium'), url('/fonts/raleway/raleway-500.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: local('Raleway SemiBold'), local('Raleway-SemiBold'), url('/fonts/raleway/raleway-600.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: local('Raleway Bold'), local('Raleway-Bold'), url('/fonts/raleway/raleway-700.woff2') format('woff2');
          }
        `}} />
        
        {/* 自定义图标字体，避免使用CDN */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* 简化的图标字体样式，只包含必要的图标 */
          .fa {
            display: inline-block;
            font: normal normal normal 14px/1 sans-serif;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* 使用Unicode字符作为图标替代 */
          .fa-github:before { content: "\\2605"; } /* 星形 */
          .fa-linkedin:before { content: "\\2661"; } /* 心形 */
          .fa-twitter:before { content: "\\2709"; } /* 信封 */
          .fa-instagram:before { content: "\\2315"; } /* 相机 */
        `}} />
        
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

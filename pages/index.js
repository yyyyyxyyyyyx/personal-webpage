import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen p-16 flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #171717 0%, #000000 100%)',
      }}
    >
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)'
        }}
      ></div>
      <div 
        className="relative bg-black p-16 rounded-sm my-24 z-10"
        style={{
          width: '700px',
        }}
      >
        <Head>
          <title>Yip Yan Yeung</title>
          <meta name="description" content="Amateur designer but professional Innovator & Product Manager." />
          <link rel="icon" href="/images/miniheadshot.png" />
          <link rel="apple-touch-icon" href="/images/miniheadshot.png" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>

        {/* Text Content */}
        <div className="flex flex-col items-start text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
          <h1 className="text-7xl font-light tracking-wider mb-6">
            LISA <span className="font-bold">YEUNG</span>
          </h1>
          <p className="text-xl font-light tracking-wide text-gray-300 mb-8">
            <span className="text-sm">aka. YIP YAN</span> <span className="text-sm font-bold">YEUNG</span> <br />
            <br />
            Always an Innovator. <br />
            An amateur Designer & former Engineer.
          </p>
          <div className="mt-4">
            <a 
              href="/past-work" 
              className="text-sm uppercase tracking-widest relative group"
              style={{
                background: 'linear-gradient(90deg, #4F46E5, #9333EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}
            >
              What's up ▸
              <span 
                className="absolute bottom-0 left-0 w-full h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, #4F46E5, #9333EA)'
                }}
              ></span>
            </a>
            <span className="mx-4">·</span>
            <a 
              href="/idea-pool" 
              className="text-sm uppercase tracking-widest relative group"
              style={{
                background: 'linear-gradient(90deg, #4F46E5, #9333EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}
            >
              Idea Pool ▸
              <span 
                className="absolute bottom-0 left-0 w-full h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, #4F46E5, #9333EA)'
                }}
              ></span>
            </a>
            <span className="mx-4">·</span>
            <a 
              href="/Yip_Yan_Yeung_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest relative group"
              style={{
                background: 'linear-gradient(90deg, #4F46E5, #9333EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}
            >
              CV ▸
              <span 
                className="absolute bottom-0 left-0 w-full h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, #4F46E5, #9333EA)'
                }}
              ></span>
            </a>
          </div>
          <div className="flex space-x-6 mt-8">
            <a 
              href="mailto:yyx_yyx@live.cn"
              className="opacity-70 hover:opacity-100 transition-all duration-300"
              aria-label="Email"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512" 
                className="w-5 h-5 text-white fill-current"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/yipyanyeung/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                className="w-5 h-5 text-white fill-current"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Photo as small icon */}
        <div className="absolute -right-4 -bottom-12 group">
          <div className="relative">
            <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] overflow-hidden rounded-full">
              <img
                src="/images/headshot.png"
                alt="Lisa Yeung"
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute -left-20 top-1/3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(90deg, #4F46E5, #9333EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Raleway, sans-serif',
                fontSize: '1.5rem',
                fontWeight: '800'
              }}
            >
              NiHao!
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)'
        }}
      ></div>
    </div>
  );
}

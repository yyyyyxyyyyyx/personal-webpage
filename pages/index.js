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
          <title>Lisa Yeung</title>
          <meta name="description" content="Amateur designer but professional Innovator & Product Manager." />
          <link rel="icon" href="/images/miniheadshot.png" />
          <link rel="apple-touch-icon" href="/images/miniheadshot.png" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        </Head>

        {/* Text Content */}
        <div className="flex flex-col items-start text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
          <h1 className="text-7xl font-light tracking-wider mb-6">
            LISA <span className="font-bold">YEUNG</span>
          </h1>
          <p className="text-xl font-light tracking-wide text-gray-300 mb-8">
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
              href="/cv.pdf" 
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
              className="text-white"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/yipyanyeung/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)'
        }}
      ></div>

      {/* Photo as small icon */}
      <div className="fixed right-8 bottom-8 group">
        <div className="relative">
          <div className="w-[80px] h-[80px] overflow-hidden">
            <img
              src="/images/headshot.png"
              alt="Lisa Yeung"
              className="w-full h-full object-cover"
            />
          </div>
          <div 
            className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
  );
}

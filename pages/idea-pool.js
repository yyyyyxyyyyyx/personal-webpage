import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// 示例数据
const ideas = [
  {
    year: "PERHAPS IN THE FUTURE",
    items: [
      {
        title: "Vague Search",
        description: `The intersection among ChatGPT/Claude, Perplexity and Google. <br/><br/>
        Have you met a situation that you know how to describe it, but do not know the keyword? Then you have to search for it endlessly until you find it. But what if some tool understands what we're looking for from the most begnning?`,
        tags: ["AI", "Search", "Perplexity", "Google", "ChatGPT", "Claude"]
      },
      {
        title: "Grammarly for Speech",
        description: `Say it and see what's wrong right away.`,
        tags: ["AI", "STT", "Content Creation"]
      },
            {
        title: "Global Audience & Reader Simulator",
        description: `Simulate audience and reader behavior to understand how readers interact with content (novel, drama, text, etc.), especially audience from a foreign and unfamiliar setting.`,
        tags: ["AI", "Agent", "Content Creation"]
      },
      {
        title: "Actor Sandbox",
        description: `Break down task with an Actor and assign the subtask to other Actor. Can be applied to audience simulator, report generation and various scenarios.<br/><br/>
        Actor = Agent + Mailbox + State. <br/><br/>
        Thank you my dear mentor for exploring this idea together with me. `,
        tags: ["AI", "Agent", "Content Creation"]
      },
      {
        title: "Adhoc Chatroom",
        description: `I don't want to add someone as friend for a temporary relationship, but what if I have to share something with them? Perhaps an adhoc chatroom would be helpful.`,
        tags: ["File Share", "Social Media"]
      },
      {
        title: "User Behavior Analysis based on RAG",
        description: `I've got a user manual designed for my new product, but the users clearly don't know how to use it so they wander around. Could I capture the behavior and compare it with the existing doc, or even simulate the behavior beforehand?`,
        tags: ["AI", "RAG","User Behavior Analysis"]
      }
    ]
  }
];

export default function IdeaPool() {
  const [activeSection, setActiveSection] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px'
      }
    );

    // 观察所有项目卡片
    document.querySelectorAll('[data-section]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 640) { // sm breakpoint in Tailwind
        const isAtBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 100;
        setShowFooter(isAtBottom);
      } else {
        setShowFooter(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-16 relative"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #171717 0%, #000000 100%)',
        fontFamily: 'Raleway, sans-serif'
      }}
    >
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-30">
        <div className="absolute inset-0 h-full bg-gradient-to-b from-black from-70% via-black to-black/60" />
        <div className="container max-w-6xl mx-auto px-6 py-6">
          {/* Navigation */}
          <div className="flex items-center justify-between relative">
            {/* Left side navigation */}
            <nav className="flex items-center gap-6">
              <Link 
                href="/" 
                className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Home
              </Link>
              <Link 
                href="/past-work" 
                className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300 group relative"
              >
                WHAT'S UP
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/Yip_Yan_Yeung_CV.pdf" 
                className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300 group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <Head>
        <title>Idea Pool - Yip Yan Yeung</title>
        
        <meta name="description" content="Ideas and future projects" />
        <link rel="icon" href="/miniheadshot.png" />
        <link rel="apple-touch-icon" href="/miniheadshot.png" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      {/* Main content with right navigation */}
      <div className="flex pt-24 px-4 lg:px-8">
        {/* Right navigation */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20">
          <div className="flex flex-col items-center gap-4">
            {ideas.map((yearGroup, index) => (
              <div key={index}>
                {yearGroup.items.map((idea, ideaIndex) => (
                  <a
                    key={ideaIndex}
                    href={`#${idea.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className={`block w-2 h-2 rounded-full my-3 transition-all duration-300 ${
                      activeSection === idea.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                        ? 'bg-[#9333EA]'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Left content - Scrollable main content */}
        <div className="flex-1 max-w-3xl mx-auto pb-24 relative z-10 overflow-y-auto h-[calc(100vh-6rem)]">
          <h1 className="text-4xl font-light tracking-wider mb-12 text-white text-center">LISA'S <span className="font-bold">IDEA POOL</span></h1>

          {/* Project sections */}
          {ideas.map((yearGroup, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-gray-400 text-sm tracking-wider mb-8">{yearGroup.year}</h2>
              <div className="space-y-8">
                {yearGroup.items.map((idea, ideaIndex) => (
                  <div
                    key={ideaIndex}
                    id={idea.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                    data-section
                    className="group relative rounded-sm p-[1px] bg-gradient-to-r from-[#4F46E5] to-[#9333EA] scroll-mt-40"
                  >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-sm" />
                    <div className="relative flex flex-col p-8 bg-black rounded-lg backdrop-blur-sm">
                      <div className="relative">
                        <h3 className="text-3xl font-light tracking-wide text-white group-hover:text-transparent transition-colors duration-300"
                          style={{
                            background: 'linear-gradient(90deg, #4F46E5, #9333EA)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight:'800'
                          }}>
                          {idea.title}
                        </h3>
                        <div 
                          className="text-gray-300 text-base leading-relaxed mb-6 mt-4"
                          dangerouslySetInnerHTML={{ __html: idea.description }}
                        />
                        <div className="flex flex-wrap gap-2">
                          {idea.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-4 py-1.5 rounded-full text-sm text-gray-300 font-light tracking-wider relative group/tag overflow-hidden"
                              style={{
                                background: 'linear-gradient(90deg, rgba(79, 70, 229, 0.1), rgba(147, 51, 234, 0.1))',
                              }}
                            >
                              <span className="relative z-10">{tag}</span>
                              <div 
                                className="absolute inset-0 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300"
                                style={{
                                  background: 'linear-gradient(90deg, rgba(79, 70, 229, 0.2), rgba(147, 51, 234, 0.2))',
                                }}
                              />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Back to top button */}
          <div className="flex justify-center mt-16">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-6 py-3 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full transition-all duration-300"
            >
              <svg 
                className="w-4 h-4 text-gray-400 group-hover:text-gray-200 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span className="text-gray-400 group-hover:text-gray-200 text-sm transition-colors">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`fixed bottom-0 left-0 right-0 z-30 transition-opacity duration-300 ${showFooter ? 'opacity-100' : 'opacity-0 sm:opacity-100'}`}>
        <div className="absolute inset-0 h-full bg-gradient-to-t from-black from-70% via-black to-black/60" />
        <div className="relative p-4 sm:p-8">
          <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="flex items-center gap-4">
              <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] overflow-hidden">
                <img
                  src="images/miniheadshot.png"
                  alt="YYX"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-gray-400 font-light text-sm sm:text-base">
                LISA <span className="font-bold">YEUNG</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6">
              <a 
                href="mailto:yyx_yyx@live.cn"
                className="opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <i className="fas fa-envelope text-xl text-white"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/yipyanyeung/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <i className="fab fa-linkedin text-xl text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

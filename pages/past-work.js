import Head from 'next/head';
import Image from 'next/image';
import { useState, Fragment, useEffect } from 'react';
import Link from 'next/link';

const projects = [
  {
    year: 'NOW',
    items: [
      {
        title: "Runaway",
        description: `English learning platform with TOEFL real exam question practice 
        and AI-generated learning materials.<br /><br />
        <strong style="font-weight: 700;">Visit us on <a href="https://runaway.online/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors duration-300">https://runaway.online/</a></strong>.<br /><br />
                Thank you my dear mentor for the development efforts.
`,
        image: "/images/runaway.png",
        tags: ["Product Design", "Language Learning", "AI"]
      },
      {
        title: "Exam Question Parser with LLM",
        description: "Adapt OpenAI's API to parse and organize TOEFL exam questions, making the process far more efficient.",
        image: "/images/parser.png",
        tags: ["Indie Hacker w/Windsurf", "Productivity", "AI"]
      },
      {
        title: "English Learning Blogger",
        description: `Posting English Learning content and videos on RedNote @Sr. <br /><br />
        Subscriber: 1.3k. Highest record for a single post: 70k views+ 1k likes. <br /><br />
        <strong style="font-weight: 700;">Follow me on <a href='https://www.xiaohongshu.com/user/profile/65c8a2f3000000000b036b41?xsec_token=YBwiETkzbhN3F6NHJukfpzDBUh-ysArhLs8qIlfZOE13k=&xsec_source=app_share&xhsshare=CopyLink&appuid=65c8a2f3000000000b036b41&apptime=1737894427&share_id=c9152acbc33a4ff1bbad4b842af73b13' target='_blank' rel='noopener noreferrer' class="hover:text-blue-400 transition-colors duration-300">RedNote 小红书 @Sr</a>.</strong>`,
        image: "/images/sr.png",
        tags: ["Language Learning", "Social Media", "Teaching"]
      },
      {
        title: "TED Language Supervisor & Translator",
        description: `English to Simplified Chinese translation and review for over 500 TED Talks videos.<br /><br />
        <strong style="font-weight: 700;">Visit me on <a href="https://www.ted.com/profiles/33353256/translator" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors duration-300">https://www.ted.com/profiles/33353256/translator</a>.</strong><br /><br />`,
        image: "/images/TED.png",
        tags: ["Volunteering", "Translation", "Culture"]
      }
    ]
  },
  {
    year: 'RECENT',
    items: [
      {
        title: "Tryout (2024)",
        description: `Experimental project of a fully-functional platform for recruiting new product beta testers. <br /><br />
        Also an experient for Building in Public on X! <br /><br />
        <strong style='font-weight: 700;'>Visit Tryout on <a href='http://tryout-six.vercel.app' target='_blank' rel='noopener noreferrer' class="hover:text-blue-400 transition-colors duration-300">http://tryout-six.vercel.app</a>.</strong>`,
        image: "/images/tryout.png",
        tags: ["Indie Hacker w/Cursor", "Product Launch", "Experiment"]
      },
      {
        title: "TV Blogger & Site Owner (2024)",
        description: `Blogger + Site Owner of popular TV reality shows.  <br /><br />
        Subscriber: 0.5k. Highest record: 87k views. <br /><br />
        <strong style='font-weight: 700;'>Visit <a href='http://run-away.online' target='_blank' rel='noopener noreferrer' class="hover:text-blue-400 transition-colors duration-300">http://run-away.online</a></strong> (sadly no longer maintained).`,
        image: "/images/bb.png",
        tags: ["Indie Hacker w/Claude & Supabase", "TV & Reality Shows", "Social Media", "Experiment"]
      },
      {
        title: "Adaptive User Experience (2024)",
        description: `New type of user experience for user to directly interact with UI component chosen by LLM based on user's intent.  <br /><br />
        Now a company project so I'll keep quiet here. <br /><br />`,
        image: "/images/adapt.png",
        tags: ["User Experience", "AI", "Product Design"]
      },
      {
        title: "Blog Series - Everyday Startup (2024)",
        description: `Blog series about interesting startup stories in Silicon Valley. <br /><br />
        30 posts in total, receiving over 45k views. <br /><br />`,
        image: "/images/startup.png",
        tags: ["Startup", "Ventures", "Social Media"]
      }
    ]
  },
  {
    year: "EVEN EARLIER",
    items: [
      {
        title: "Book - Spooky Technology (2021)",
        description: `Spooky Technology:A reflection on the invisible and otherworldly qualities in everyday technologies.<br /><br />
        <strong style="font-weight: 700;">Visit <a href="https://spookyte.ch/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors duration-300">https://spookyte.ch/</a></strong><br /><br />
        ISBN: 9780956542151.`,
        image: "/images/spooky.png",
        tags: ["Tech", "Book"]
      },
      {
        title: "START - Truck Trip Planner (2021)",
        description: `Project at Volvo Group Connected Solutions Innovation Lab with Mack Truck.`,
        image: "/images/volvo.png",
        tags: ["Product Design", "Innovation", "Transportation"]
      },
      {
        title: "Bluetooth Mesh (2019)",
        description: `Research at the University of Hong Kong.`,
        image: "/images/hku.png",
        tags: ["Telecommunications", "Bluetooth", "Engineering"]
      },
      {
        title: "Intelligent Garage (2018)",
        description: `Submission to Schneider Electric Go Green in the City Innovation Contest 2018 and winner the second prize.`,
        image: "/images/gogreen.png",
        tags: ["Innovation", "Engineering"]
      },
      {
        title: "Microwave Antenna Design (2017)",
        description: `Research at Shanghai Jiaotong University.`,
        image: "/images/sjtu.png",
        tags: ["Telecommunications", "Antenna", "Engineering"]
      },
    ]
  }
];

// 备用占位图片
const fallbackImage = "https://via.placeholder.com/800x600/1a1a1a/808080?text=Project+Image";

export default function PastWork() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const handleImageClick = (imageSrc, e) => {
    e.stopPropagation(); // 防止事件冒泡
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

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
      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
          onClick={handleCloseModal}
        >
          <div className="relative w-[800px] max-w-[90vw]">
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="w-full h-auto object-contain rounded-lg"
              style={{ maxHeight: '80vh' }}
            />
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

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
                href="/idea-pool" 
                className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300 group relative"
              >
                Idea Pool
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/cv.pdf" 
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

      {/* Main content with right navigation */}
      <div className="flex pt-24 px-4 lg:px-8">
        {/* Left content - Scrollable main content */}
        <div className="flex-1 max-w-3xl mx-auto pb-24 relative z-10 overflow-y-auto h-[calc(100vh-6rem)]">
          <Head>
            <title>What's up - Lisa Yeung</title>
            <meta name="description" content="Past work and projects" />
            <link rel="icon" href="/images/miniheadshot.png" />
            <link rel="apple-touch-icon" href="/images/miniheadshot.png" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
          </Head>

          <h1 className="text-4xl font-light tracking-wider mb-12 text-white text-center">WHAT'S <span className="font-bold">UP</span></h1>

          {/* Project sections */}
          {projects.map((yearGroup, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-gray-400 text-sm tracking-wider mb-8">{yearGroup.year}</h2>
              <div className="space-y-8">
                {yearGroup.items.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    id={project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                    data-section
                    className="group relative rounded-sm p-[1px] bg-gradient-to-r from-[#4F46E5] to-[#9333EA] scroll-mt-40"
                  >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-sm" />
                    <div className="relative flex flex-col p-8 bg-black rounded-lg backdrop-blur-sm">
                      {/* Image container */}
                      <div 
                        className="relative w-full h-[380px] bg-black rounded-lg group overflow-hidden cursor-pointer"
                        onClick={(e) => handleImageClick(project.image, e)}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="rounded-lg transition-all duration-300 group-hover:opacity-50"
                          quality={150}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }}
                        />
                        {/* Zoom hint */}
                        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                          <div className="bg-black/80 px-4 py-2 rounded-full flex items-center gap-2 text-white transform transition-all duration-300 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                            </svg>
                            <span className="text-sm font-medium whitespace-nowrap">Click to zoom</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-6 px-4 py-8">
                        <div className="space-y-4">
                          <h3 className="text-3xl font-light tracking-wide text-white group-hover:text-transparent transition-colors duration-300"
                            style={{
                              background: 'linear-gradient(90deg, #4F46E5, #9333EA)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              fontWeight:'800'
                            }}>
                            {project.title}
                          </h3>
                          <div 
                            className="text-gray-300 text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ 
                              __html: project.description.replace(
                                /<a\s+href="([^"]+)"([^>]*)>/g,
                                '<a href="$1"$2 class="break-words hover:text-blue-400 transition-colors duration-300" style="word-wrap: break-word; max-width: 100%; display: inline-block;">'
                              )
                            }}
                          />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
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
          <div className="flex justify-center mt-16 mb-24">
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
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
              <span className="text-gray-400 group-hover:text-gray-200 text-sm transition-colors">
                Back to Top
              </span>
            </button>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="hidden lg:block fixed right-12 xl:right-16 top-24 bottom-24">
          <nav>
            <div className="bg-black/70 backdrop-blur-sm rounded-lg py-4 px-4">
              {projects.map((yearGroup, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="text-gray-500 text-xs tracking-wider mb-3">
                    {yearGroup.year}
                  </div>
                  <div className="space-y-2 pl-0.5">
                    {yearGroup.items.map((item, itemIndex) => {
                      const itemId = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      const isActive = activeSection === itemId;
                      return (
                        <a
                          key={itemIndex}
                          href={`#${itemId}`}
                          className="block"
                        >
                          <div 
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              isActive
                                ? 'bg-[#9333EA] ring-1 ring-purple-400/20'
                                : 'bg-gray-600 hover:bg-gray-400'
                            }`} 
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-30">
        <div className="absolute inset-0 h-full bg-gradient-to-t from-black from-70% via-black to-black/60" />
        <div className="relative p-4 sm:p-8">
          <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="flex items-center gap-4">
              <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] overflow-hidden">
                <img
                  src="/images/miniheadshot.png"
                  alt="Lisa Yeung"
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
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <i className="fas fa-envelope text-xl text-white"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/yipyanyeung/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <i className="fab fa-linkedin text-xl text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}

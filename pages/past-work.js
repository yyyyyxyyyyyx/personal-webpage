import Head from 'next/head';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import Link from 'next/link';

const projects = [
  {
    year: 'NOW',
    items: [
      {
        title: "Runaway",
        description: `English learning platform with TOEFL real exam question practice 
        and AI-generated learning materials.<br /><br />
        <strong style="font-weight: 700;">Visit us on <a href="https://runaway.online/" target="_blank" rel="noopener noreferrer">https://runaway.online/</a></strong>.<br /><br />
                Thank you my dear mentor for the development efforts.
`,
        image: "/images/runaway.png",
        tags: ["Product Design", "Language Learning", "AI"]
      },
      {
        title: "Exam Question Parser with LLM",
        description: "Adapt OpenAI's API to parse and organize TOEFL exam questions, making the process far more efficient.",
        image: "/images/parser.png",
        tags: ["Indie Hacker", "Productivity", "AI"]
      },
      {
        title: "English Learning Blogger",
        description: `Posting English Learning content and streaming videos on RedNote @Sr. Highest record for a single post: 70k views+ 1k likes. <br /><br />
        <strong style="font-weight: 700;">Follow me on <a href='https://www.xiaohongshu.com/user/profile/65c8a2f3000000000b036b41?xsec_token=YBwiETkzbhN3F6NHJukfpzDBUh-ysArhLs8qIlfZOE13k=&xsec_source=app_share&xhsshare=CopyLink&appuid=65c8a2f3000000000b036b41&apptime=1737894427&share_id=c9152acbc33a4ff1bbad4b842af73b13' target='_blank' rel='noopener noreferrer'>RedNote 小红书 @Sr</a>.</strong>`,
        image: "/images/Sr.png",
        tags: ["Language Learning", "Social Media", "Teaching"]
      },
      {
        title: "TED Language Supervisor & Translator",
        description: `English to Simplified Chinese translation and review for over 500 TED Talks videos.<br /><br />
        <strong style="font-weight: 700;">Visit me on <a href="https://www.ted.com/profiles/33353256/translator" target="_blank" rel="noopener noreferrer">https://www.ted.com/profiles/33353256/translator.</a></strong><br /><br />`,
        image: "/images/TED.png",
        tags: ["Volunteering", "Translation", "Culture"]
      }
    ]
  },
  {
    year: 'RECENT',
    items: [
      {
        title: "Tryout",
        description: `Experiment project with Cursor of Tryout, a fully-functional platform for recruiting new product beta testers. <br /><br />
        Also an experient for Build in Public on X! <br /><br />
        <strong style='font-weight: 700;'>Visit Tryout on <a href='http://tryout-six.vercel.app' target='_blank' rel='noopener noreferrer'>http://tryout-six.vercel.app.</a></strong>`,
        image: "/images/tryout.png",
        tags: ["Indie Hacker", "Product Launch", "Experiment"]
      },
      {
        title: "TV Blogger & Site Owner",
        description: `Blogger of popular TV reality shows. Highest record: 87k views. <br /><br />
        Experiment project with Claude and Supabase. Owned and managed the entire structure of the site, storing show resources on the site. <br /><br />
        <strong style='font-weight: 700;'>Visit <a href='http://run-away.online' target='_blank' rel='noopener noreferrer'>http://run-away.online</a></strong> (though no longer maintained).`,
        image: "/images/bb.png",
        tags: ["Indie Hacker", "TV & Reality Shows", "Social Media", "Experiment"]
      }
    ]
  },
  {
    year: "EVEN EARLIER",
    items: [
      {
        title: "AI Integration Platform",
        description: "Developed an innovative AI platform that enhances user experience through smart automation.",
        image: "/images/placeholder.png",
        tags: ["AI", "Innovation", "Development"]
      }
    ]
  },
  {
    year: "Earlier",
    items: [
      {
        title: "Mobile App Redesign",
        description: "Complete overhaul of a mobile banking app serving 1M+ users.",
        image: "/images/placeholder.png",
        tags: ["Mobile", "Design", "Banking"]
      }
    ]
  }
];

// 备用占位图片
const fallbackImage = "https://via.placeholder.com/800x600/1a1a1a/808080?text=Project+Image";

export default function PastWork() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [imageError, setImageError] = useState({});

  const handleImageError = (projectTitle) => {
    setImageError(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-16 relative"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #171717 0%, #000000 100%)',
        fontFamily: 'Raleway, sans-serif'
      }}
    >
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)'
        }}
      />

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-black from-50% via-black/90 to-transparent" />
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
              <a 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300 group relative"
              >
                CV
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Project Navigation - Only visible on large screens */}
      <nav className="fixed right-6 top-24 z-20 hidden lg:block">
        <div className="bg-black/20 backdrop-blur-lg rounded-2xl">
          <div className="p-6 w-56">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">What's up</div>
            <div className="space-y-3">
              {projects.map((yearGroup) => (
                <div key={yearGroup.year}>
                  <div className="text-sm text-gray-500 mb-2">{yearGroup.year}</div>
                  {yearGroup.items.map((project) => (
                    <a
                      key={project.title}
                      href={`#${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block py-1 px-4 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {project.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container max-w-3xl mx-auto px-4 pt-16 pb-24 relative z-10">
        <Head>
          <title>Past Work - Lisa Yeung</title>
          <meta name="description" content="Past work and projects by Lisa Yeung" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        </Head>

        <h1 className="text-4xl font-light tracking-wider mb-12 text-white text-center">
            <span className="font-bold">WHAT'S</span> UP
        </h1>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#4F46E5] via-[#9333EA] to-transparent" />

          {/* Projects */}
          <div className="space-y-16 pb-12">
            {projects.map((yearGroup, index) => (
              <div key={yearGroup.year} className="relative">
                {/* Year marker */}
                <div className="flex items-center mb-8">
                  <div className="absolute left-[22px] w-[14px] h-[14px] rounded-full bg-gradient-to-r from-[#4F46E5] to-[#9333EA] relative z-20" />
                  <span className="text-white text-2xl ml-16 font-light tracking-wider">{yearGroup.year}</span>
                </div>

                {/* Project cards */}
                <div className="space-y-8 ml-16">
                  {yearGroup.items.map((project, projectIndex) => (
                    <div 
                      key={projectIndex}
                      id={project.title.toLowerCase().replace(/\s+/g, '-')}
                      className="group relative rounded-sm p-[1px] bg-gradient-to-r from-[#4F46E5] to-[#9333EA] scroll-mt-40"
                    >
                      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-sm" />
                      <div className="relative flex flex-col p-8 bg-black rounded-lg backdrop-blur-sm">
                        {/* Image */}
                        <div style={{ width: '100%', height: '380px', position: 'relative', background: 'black' }} className="rounded-lg">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="rounded-lg"
                            quality={120}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain'
                            }}
                          />
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
                            <p className="text-gray-300 font-light leading-relaxed text-lg"
                              dangerouslySetInnerHTML={{ __html: project.description }}
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 sm:p-8 flex flex-col sm:flex-row justify-between items-center bg-gradient-to-t from-black to-transparent gap-4 sm:gap-0">
        <div className="flex items-center gap-2">
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
            className="text-white/50 hover:text-transparent transition-colors duration-300 social-icon"
            style={{
              background: 'linear-gradient(90deg, #4F46E5, #9333EA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/yipyanyeung/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-transparent transition-colors duration-300 social-icon"
            style={{
              background: 'linear-gradient(90deg, #4F46E5, #9333EA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

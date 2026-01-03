import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "True Crime Channel — Strategic Growth & Monetization",
      description: "Despite strong production quality and consistent publishing, this true crime channel was effectively invisible to the algorithm, averaging just 90–100 views per video with 200 subscribers and no realistic path to monetization.",
      longDescription: "Despite strong production quality and consistent publishing, this true crime channel was effectively invisible to the algorithm, averaging just 90–100 views per video with 200 subscribers and no realistic path to monetization. A strategic audit revealed that the issue was not content quality, but structural inefficiencies: topic selection was not informed by demand or competition, video packaging failed to convert impressions into clicks, and there was no SEO or discovery infrastructure to surface content through search or recommendations. We rebuilt the channel around algorithm-aligned fundamentals, implementing data-driven topic validation, curiosity-optimized titles and thumbnails tailored to true crime audience behavior, and a comprehensive SEO framework designed to drive long-term organic traffic. A repeatable execution system was introduced to ensure consistency and sustainability. As a result, two videos surpassed 30,000 organic views, subscriber count increased from 200 to 800 within months, average views per video increased by 300×, and the channel transitioned from guesswork-driven publishing to a predictable, scalable growth system.",
      image: "/crime .jpeg",
      tags: ["YouTube Automation", "True Crime Niche", "Topic Research & Validation", "CTR Optimization", "Thumbnail Strategy", "SEO & Discovery", "Algorithmic Growth", "Organic Traffic Scaling", "Monetization Strategy", "System-Based Growth"],
      demoUrl: "http://tutorinc.co/",
      githubUrl: "#"
    },
    {
      title: "Psychology Channel — Viral Breakthrough & Revenue Acceleration",
      description: "With 10,000 subscribers already in place, this psychology channel appeared established but had reached a performance plateau where impressions failed to convert into meaningful view velocity or revenue growth.",
      longDescription: "With 10,000 subscribers already in place, this psychology channel appeared established but had reached a performance plateau where impressions failed to convert into meaningful view velocity or revenue growth. Inconsistent publishing weakened algorithmic trust, while underperforming titles and thumbnails limited click-through rates despite clear audience interest in the subject matter. We approached the channel as a behavioral and algorithmic system, identifying evergreen psychology topics with proven viral potential and mapping them to curiosity-driven audience triggers. A consistent production workflow was implemented to restore momentum, supported by content frameworks that balanced educational value with recommendation-favorability. Titles, thumbnails, and metadata were re-engineered using performance data rather than intuition, and a discovery infrastructure was built to support both search and suggested traffic. This system-driven approach resulted in a single video reaching 285,600 organic views, subscriber growth from 10,000 to 14,000 in an accelerated timeframe, a significant revenue increase driven by improved watch time, and a sustainable growth trajectory beyond the project timeline.",
      image: "/psych.jpeg",
      tags: ["Educational Content", "Viral Topic Strategy", "Audience Psychology", "Click-Through Optimization", "Retention Engineering", "Consistent Publishing Systems", "SEO Optimization", "Algorithm-Aligned Content", "Revenue Growth", "Scalable Content Frameworks"],
      demoUrl: "https://myardmanager.com/",
      githubUrl: "#"
    },
    {
      title: "Travel Channel — Brand Development & Monetization Infrastructure",
      description: "This travel channel operated in a competitive niche with existing content but lacked the operational discipline and brand positioning required to convert views into meaningful business opportunities.",
      longDescription: "This travel channel operated in a competitive niche with existing content but lacked the operational discipline and brand positioning required to convert views into meaningful business opportunities. Inconsistent publishing, uneven content quality, and minimal SEO implementation limited organic discoverability, while the absence of professional brand infrastructure prevented the channel from attracting sponsorships or partnerships. We implemented a comprehensive management and optimization framework that addressed both growth and monetization, establishing consistent publishing workflows, quality control benchmarks, and SEO-driven discovery across all content. The channel’s visual identity and packaging were standardized to build brand recognition and authority, while its positioning was refined to meet sponsor and tourism board expectations. As a result, the channel achieved consistent output without quality degradation, improved organic reach through structured SEO, increased audience engagement through professional presentation, and a sponsor-ready brand architecture capable of generating business leads and long-term monetization opportunities.",
      image: "/travel.jpeg",
      tags: ["Travel Content", "Brand Positioning", "Sponsor-Ready Channel", "SEO for Travel", "Channel Management", "Content Quality Control", "Monetization Infrastructure", "Business Development", "Organic Growth Systems", "Professional Media Branding"],
      demoUrl: "https://www.hiveschoolsystem.com/",
      githubUrl: "#"
    },
    {
      title: "Online Money-Making Channel — Complete Production & Growth Infrastructure",
      description: "Operating in a highly saturated online money-making niche, this channel required more than isolated optimizations—it needed end-to-end operational infrastructure to compete at scale.",
      longDescription: "Operating in a highly saturated online money-making niche, this channel required more than isolated optimizations—it needed end-to-end operational infrastructure to compete at scale. The owner lacked systems for validated topic selection, professional scripting and production, conversion-focused packaging, SEO implementation, and consistent publishing. We built a full-cycle automation framework covering research, scripting, editing, thumbnail design, metadata optimization, and scheduling, enabling consistent output without sacrificing quality. Topic intelligence was driven by trend monitoring and competitor analysis, while packaging and SEO were engineered to maximize discoverability in a competitive category. The result was a streamlined production system capable of sustained publishing, a high-retention video library optimized for algorithmic performance, and a scalable operational foundation designed to support predictable growth and long-term revenue generation in a crowded market.",
      image: "/business 1.jpeg",
      tags: ["YouTube Automation", "Online Business Niche", "Full-Cycle Production", "Scriptwriting Systems", "Thumbnail Engineering", "SEO & Metadata Optimization","Publishing Workflows","Scalable Operations","Competitive Niche Strategy","Revenue-Focused Growth"],
      demoUrl: "https://www.brewcart.co.uk/",
      githubUrl: "#"
    },
    // {
    //   title: "Task Management App",
    //   description: "Welcome to Quantum Sync, a company where technology, innovation, and opportunity come together. This portfolio is just a showcase of our capabilities in web, mobile, and SaaS development.",
    //   longDescription: "Welcome to Quantum Sync — a company where technology, innovation, and opportunity come together. This portfolio is more than just a showcase of our capabilities in web, mobile, and SaaS development. It’s a reflection of our commitment to solving real-world problems for startups, growing businesses, and mission-driven organizations—especially across the United States. From sleek front-end interfaces to scalable back-end architectures, our work speaks to the quality and impact we strive for in every build. But what truly sets Quantum Sync apart is our commitment to nurturing the next generation of developers, designers, and thinkers. This website serves as a launchpad for students — a gateway into the world of modern software development through real-world experience, mentorship, and hands-on collaboration. We believe in learning by doing. That’s why we’ve built a culture where students don’t just observe—they contribute. Here, they gain practical exposure to high-impact projects, modern tech stacks, agile teamwork, and product thinking. Whether you’re a student looking to kickstart your tech career, or someone simply curious about the work we do, we invite you to explore our projects, learn more about our mission, and consider becoming a part of our growing community. At Quantum Sync, we don’t just build software—we build people, teams, and futures.",
    //   image: "/1.png",
    //   tags: ["NextJS", "Tailwind", "Redux", "NodeJS", "ExpressJS", "MongoDB", "Vercel", "Docker", "backplate", "CI/CD"],
    //   demoUrl: "https://quantum-sync.vercel.app/",
    //   githubUrl: "#"
    // }
    // ,
    // {
    //   title: "Paste View",
    //   description: "Pasteview is a modern and efficient pastebin platform designed to make sharing and storing text or code snippets simple and seamless.",
    //   longDescription: "Pasteview is a modern and efficient pastebin platform designed to make sharing and storing text or code snippets simple and seamless. Unlike traditional paste sites, it emphasizes a clean, user-friendly interface and an intuitive experience tailored for developers. The frontend is developed using React.js and Next.js, delivering a fast and responsive user experience, while the backend, powered by Node.js, ensures reliable performance and smooth paste management. Key features of Pasteview include syntax highlighting for various programming languages, support for markdown formatting, and real-time preview capabilities. Users can also set expiration times for temporary pastes, create custom URLs for easy sharing, and switch between light and dark themes. Additionally, Pasteview offers clipboard integration and is fully optimized for mobile devices. Overall, Pasteview provides a developer-friendly environment for effortless collaboration and code sharing.",
    //   image: "/pasteview-project.png",
    //   tags: ["NextJS", "Tailwind", "Redux", "NodeJS", "ExpressJS", "MongoDB", "Vercel", "Docker", "CI/CD"],
    //   demoUrl: "https://pasteview.com/",
    //   githubUrl: "#"
    // }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.span
              className="inline-block px-4 py-2 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-full text-sm font-medium text-accent mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Featured Work
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-300% animate-gradient-x bg-clip-text text-transparent">
              Case Studies
            </h2>
            <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
              Channels are anonymized due to client confidentiality and NDAs<br></br>
Detailed channel links and analytics are available during private consultations.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative bg-glass-light backdrop-blur-xl border border-glass-border rounded-3xl overflow-hidden hover:bg-glass-medium transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/15">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-120"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <ExternalLink size={18} className="text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      <span>View Details</span>
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Projects;

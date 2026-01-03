
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15"></div>
      <motion.div 
        className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl"
        animate={{ 
          y: scrollY * -0.5,
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent/30 to-primary/20 rounded-full blur-3xl"
        animate={{ 
          y: scrollY * -0.3,
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ 
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          delay: 1.5
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6 backdrop-blur-sm">
              ✨ Available for Freelance Work
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient-x bg-clip-text text-transparent">
              Ahmad Majid
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 font-light max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Youtube Automation Expert
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build fully automated, faceless YouTube channels that generate consistent views, engagement, and revenue. From niche research and scripting to AI voiceovers, video production, SEO, and monetization, I create end-to-end YouTube automation systems so you can scale without stress, burnout, or guesswork.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="#projects">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-4 rounded-full font-semibold transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-primary/30 backdrop-blur-sm border border-primary/20 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              </Button>
            </a>
            <a href="#contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary/30 bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary/50 px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/20"
              >
                Contact Me
              </Button>
            </a>
          </motion.div>
          
          <motion.div
            className="flex justify-center items-center gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">6+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </motion.div>
          
          {/* <motion.div 
            className="flex justify-center space-x-6 mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {[
              { icon: Github, href: "https://github.com/basitshykh", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/abdul-basit-shakeel/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:basitshykh8@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-full bg-glass backdrop-blur-sm border border-glass-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
      
      {/* <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      ><a href="#contact" aria-label="Scroll to contact section">
        <ArrowDown href="" className="text-muted-foreground" size={24} /></a>
      </motion.div> */}
    </section>
  );
};

export default Hero;

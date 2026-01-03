import { motion } from "framer-motion";
import { Code, Database, Github, Linkedin, Mail, Server, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "HTML, CSS, SCSS, JavaScript, jQuery, React.js, Next.js, Redux for State Management, Bootstrap, Tailwind, Material-UI",
      gradient: "from-primary to-accent"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform apps with React Native, delivering native performance on iOS and Android.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable APIs with Node.js, ExpressJS, Firebase and cloud infrastructure, Strapi, Restful Apis, JWT, Oauth, SQL and NoSQL(MongoDb) databases.",
      gradient: "from-primary/80 to-accent/80"
    },
    {
      icon: Database,
      title: "Tools",
      description: "Experienced with version control (Git, GitHub, GitLab), VS Code, Project Management (Jira, Trello), API Testing (Postman), and Deployment Platforms (Vercel, Netlify, AWS, Google Cloud).",
      gradient: "from-accent/80 to-primary/80"
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full text-sm font-medium text-primary mb-4 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient-x bg-clip-text text-transparent">
            Crafting Digital Experiences
          </h2>
          <p className="text-xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Specializing in the MERN stack, with over 6 years of experience building dynamic, user-focused web and mobile applications. I deliver efficient, scalable digital solutions that drive results.
          </p>
        </motion.div>

        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground/90 text-lg leading-relaxed">
              Throughout my career, I've contributed to a wide range of projects, from responsive websites to cross-platform mobile apps, with a strong focus on performance, clean code, and user experience. I also have hands-on experience with cloud deployment, ensuring applications are secure, reliable, and ready for scale.
            </p>
            <p className="text-muted-foreground/90 text-lg leading-relaxed">
              In addition to full-time roles, I've collaborated with international clients through freelance platforms like Fiverr and Upwork. These projects sharpened my ability to adapt, communicate effectively, and solve real-world problems across different industries.
            </p>
            <p className="text-muted-foreground/90 text-lg leading-relaxed">
              I'm passionate about continuous learning and love turning complex challenges into smooth, functional solutions. Always open to exciting opportunities — let's build something great together!
            </p>
            
            <motion.div 
              className="flex justify-start space-x-6 pt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/basitshykh", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/abdul-basit-shakeel/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:basitshykh8@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 p-4 rounded-2xl bg-glass-light backdrop-blur-sm border border-glass-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:bg-glass-medium"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-glass-light backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:bg-glass-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/15"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-foreground font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
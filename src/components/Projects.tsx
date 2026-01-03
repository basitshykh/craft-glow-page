import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "TUTOR - LMS Platform",
      description: "TUTOR is a powerful and feature-rich Learning Management System (LMS) thoughtfully engineered to redefine the online education experience for both students and educators.",
      longDescription: "TUTOR is a powerful and feature-rich Learning Management System (LMS) thoughtfully engineered to redefine the online education experience for both students and educators. Designed with flexibility, performance, and user experience at its core, TUTOR provides a seamless platform for managing courses, tracking progress, delivering assessments, and fostering engagement in a virtual learning environment. Built with modern technologies like React, Next.js, and Tailwind CSS, TUTOR offers a fully responsive and accessible user interface that performs beautifully across all devices—from desktop to mobile. The application architecture ensures high performance and scalability, while the design system supports clean, intuitive navigation that keeps users focused on learning, not clicking around. For robust and centralized state management, TUTOR integrates Redux, allowing for real-time updates, efficient data handling, and a fluid experience as users interact with dynamic components such as live class sessions, quizzes, dashboards, and discussion forums. Educators can easily create and manage multimedia-rich course content, monitor student activity, and evaluate performance through customizable grading tools. Meanwhile, students benefit from a personalized learning journey, with access to structured lesson plans, progress tracking, assignment submission, and peer interaction. Whether you're a school, university, corporate training team, or independent instructor, TUTOR is built to scale with your needs, offering modular features, secure authentication, role-based access, and future-ready architecture to support integrations like video conferencing, gamification, and AI-based learning analytics. With TUTOR, online education isn’t just easier—it’s smarter, more engaging, and built for the digital age.",
      image: "/mockup 6.png",
      tags: ["React", "TailwindCSS", "NodeJs", "ExpressJS", "MongoDB", "NextJS", "Vercel", "Docker", "Backblaze", "CI/CD"],
      demoUrl: "http://tutorinc.co/",
      githubUrl: "#"
    },
    {
      title: "AI Auto Parts – Auto Parts Management SaaS",
      description: "Auto Parts is a comprehensive, feature-rich SaaS platform built on the powerful MERN stack, specifically designed to streamline and optimize the operations of auto parts warehouses",
      longDescription: "Auto Parts is a comprehensive, feature-rich SaaS platform built on the powerful MERN stack—MongoDB, Express.js, React, and Node.js—specifically designed to streamline and optimize the operations of auto parts warehouses, retailers, and distributors. Tailored for the automotive supply chain, it simplifies complex workflows such as inventory tracking, order processing, and warehouse logistics through an intuitive and responsive interface. Businesses can manage everything from stock levels and supplier data to purchase orders, invoices, and customer interactions in real time using a centralized, cloud-based system accessible from any device. The platform includes essential modules like intelligent inventory management with barcode scanning and low-stock alerts, seamless order fulfillment, supplier and customer CRM tools, and robust reporting with actionable sales and performance analytics. Role-based access controls ensure secure multi-user collaboration, while flexible integrations with shipping carriers, ERP software, and e-commerce platforms allow for scalable, end-to-end automation. Whether serving a local parts shop or a multi-location distributor, Auto Parts provides a reliable and scalable foundation to manage, grow, and future-proof automotive operations efficiently.",
      image: "/mockup 8 1.png",
      tags: ["ReactJS", "TypeScript", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB", "NextJS", "Vercel", "Docker", "Backblaze", "CI/CD"],
      demoUrl: "https://myardmanager.com/",
      githubUrl: "#"
    },
    {
      title: "School Website and LMS",
      description: "School Website and LMS is a comprehensive, all-in-one student-teacher management system developed to modernize academic operations for schools, colleges, and educational institutions.",
      longDescription: "School Website and LMS is a comprehensive, all-in-one student-teacher management system developed to streamline and modernize academic operations for schools, colleges, and educational institutions. This platform combines the functionality of a dynamic school website with a powerful Learning Management System (LMS), allowing administrators, teachers, students, and parents to stay connected in real time. Built using cutting-edge web technologies, it supports online admission processes, class scheduling, attendance tracking, fee management, grade reporting, and real-time communication via notifications and messaging. Teachers can create and manage courses, upload assignments and materials, host discussions, and monitor student progress through detailed analytics. Students benefit from a centralized dashboard for accessing class resources, submitting work, checking grades, and communicating with instructors. The platform also includes role-based dashboards, secure login access, and seamless mobile responsiveness for use across devices. With its user-friendly design and scalable architecture, this system empowers institutions to transition from paper-based operations to a fully digital learning ecosystem, enhancing both teaching effectiveness and student engagement.",
      image: "/mockup 1.png",
      tags: ["NextJS", "Tailwind", "Redux", "NodeJS", "ExpressJS", "MongoDB", "Vercel", "Docker", "Backblaze", "CI/CD"],
      demoUrl: "https://www.hiveschoolsystem.com/",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Brew Cart is a modern online platform created to empower local independent microbreweries and celebrate the growing indie beer culture.",
      longDescription: "Brew Cart is a modern online platform created to empower local independent microbreweries and celebrate the growing indie beer culture. It enables users to explore and discover craft ales from nearby breweries as well as those across different regions. The platform is built with a ReactJS frontend for a dynamic and engaging user experience, paired with TailwindCSS for a sleek, responsive design. Redux is used for efficient state management, ensuring seamless personalization and beer discovery across the application. On the backend, Node.js powers the server-side logic, efficiently handling data requests related to breweries and their beer offerings. Brew Cart acts as a digital bridge between craft beer enthusiasts and independent brewers, making it easier to access and support high-quality, small-batch beers. By highlighting local talent and offering a curated discovery experience, Brew Cart contributes to the growth of the indie beer community and fosters deeper connections between brewers and their customers.",
      image: "/mockup 4.png",
      tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "Redux", "ExpressJS"],
      demoUrl: "https://www.brewcart.co.uk/",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Welcome to Quantum Sync, a company where technology, innovation, and opportunity come together. This portfolio is just a showcase of our capabilities in web, mobile, and SaaS development.",
      longDescription: "Welcome to Quantum Sync — a company where technology, innovation, and opportunity come together. This portfolio is more than just a showcase of our capabilities in web, mobile, and SaaS development. It’s a reflection of our commitment to solving real-world problems for startups, growing businesses, and mission-driven organizations—especially across the United States. From sleek front-end interfaces to scalable back-end architectures, our work speaks to the quality and impact we strive for in every build. But what truly sets Quantum Sync apart is our commitment to nurturing the next generation of developers, designers, and thinkers. This website serves as a launchpad for students — a gateway into the world of modern software development through real-world experience, mentorship, and hands-on collaboration. We believe in learning by doing. That’s why we’ve built a culture where students don’t just observe—they contribute. Here, they gain practical exposure to high-impact projects, modern tech stacks, agile teamwork, and product thinking. Whether you’re a student looking to kickstart your tech career, or someone simply curious about the work we do, we invite you to explore our projects, learn more about our mission, and consider becoming a part of our growing community. At Quantum Sync, we don’t just build software—we build people, teams, and futures.",
      image: "/1.png",
      tags: ["NextJS", "Tailwind", "Redux", "NodeJS", "ExpressJS", "MongoDB", "Vercel", "Docker", "backplate", "CI/CD"],
      demoUrl: "https://quantum-sync.vercel.app/",
      githubUrl: "#"
    }
    ,
    {
      title: "Paste View",
      description: "Pasteview is a modern and efficient pastebin platform designed to make sharing and storing text or code snippets simple and seamless.",
      longDescription: "Pasteview is a modern and efficient pastebin platform designed to make sharing and storing text or code snippets simple and seamless. Unlike traditional paste sites, it emphasizes a clean, user-friendly interface and an intuitive experience tailored for developers. The frontend is developed using React.js and Next.js, delivering a fast and responsive user experience, while the backend, powered by Node.js, ensures reliable performance and smooth paste management. Key features of Pasteview include syntax highlighting for various programming languages, support for markdown formatting, and real-time preview capabilities. Users can also set expiration times for temporary pastes, create custom URLs for easy sharing, and switch between light and dark themes. Additionally, Pasteview offers clipboard integration and is fully optimized for mobile devices. Overall, Pasteview provides a developer-friendly environment for effortless collaboration and code sharing.",
      image: "/pasteview-project.png",
      tags: ["NextJS", "Tailwind", "Redux", "NodeJS", "ExpressJS", "MongoDB", "Vercel", "Docker", "CI/CD"],
      demoUrl: "https://pasteview.com/",
      githubUrl: "#"
    }
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
              Recent Projects
            </h2>
            <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
              Some of my recent work and contributions that showcase my expertise in full-stack development
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

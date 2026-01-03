import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xbdlzqzz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      setSubmissionStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "creatoropsbusiness@gmail.com",
      href: "mailto:creatoropsbusiness@gmail.com",
      gradient: "from-primary to-accent"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+923299808218",
      href: "tel:+923299808218",
      gradient: "from-accent to-primary"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      href: "#",
      gradient: "from-primary/80 to-accent/80"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
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
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient-x bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                I'm always open to discussing new opportunities, creative projects,
                or potential collaborations. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-glass backdrop-blur-sm border border-glass-border rounded-lg hover:bg-glass/70 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    className={`bg-gradient-to-br ${info.gradient} p-3 rounded-lg shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="text-white" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="text-foreground font-medium">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="bg-glass-light backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:bg-glass-medium transition-all duration-500"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-foreground text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-primary/25"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>

              {/* Inline Success/Error Message */}
              {submissionStatus === "success" && (
                <p className="text-green-600 text-center font-medium mt-2">
                  Thanks for submitting!
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="text-red-600 text-center font-medium mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 pt-8 border-t border-glass-border text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-muted-foreground">
            Let’s connect or collaborate - feel free to drop a message anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    company: "TechStart",
    review: "Working with this developer was an absolute pleasure. They delivered a stunning website that exceeded our expectations and helped boost our online presence significantly. The attention to detail was remarkable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Founder, DesignHub",
    company: "DesignHub",
    review: "Exceptional attention to detail and great communication throughout the project. The final product was exactly what we envisioned, delivered on time and within budget. Highly professional work!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    company: "GrowthCo",
    review: "The quality of work is outstanding. Our new web application has received amazing feedback from our users. I would highly recommend them for any web development project you have in mind!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              {/* Avatar with ring */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary p-2">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Decorative circles */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full border-4 border-primary bg-background" />
                <div className="absolute -bottom-6 right-6 w-6 h-6 rounded-full border-4 border-primary bg-background" />
              </div>

              {/* Quote content */}
              <div className="flex-1 text-center md:text-left">
                {/* Company name */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {testimonials[activeIndex].company}
                </h3>

                {/* Quote with marks */}
                <div className="relative">
                  <span className="absolute -left-4 md:-left-8 -top-4 text-5xl md:text-6xl text-muted-foreground/30 font-serif">
                    "
                  </span>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed px-4 md:px-0">
                    {testimonials[activeIndex].review}
                  </p>
                  <span className="absolute -right-4 md:right-0 bottom-0 text-5xl md:text-6xl text-muted-foreground/30 font-serif">
                    "
                  </span>
                </div>

                {/* Client info */}
                <div className="mt-8">
                  <h4 className="font-bold text-foreground text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar / Navigation */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative h-2 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: index === activeIndex ? "120px" : "80px" }}
              >
                <div className="absolute inset-0 bg-muted-foreground/20 rounded-full" />
                {index === activeIndex && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5 }}
                    className="absolute inset-0 bg-primary rounded-full"
                    onAnimationComplete={() => {
                      if (index === activeIndex) {
                        setActiveIndex((prev) => (prev + 1) % testimonials.length);
                      }
                    }}
                  />
                )}
                {index < activeIndex && (
                  <div className="absolute inset-0 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

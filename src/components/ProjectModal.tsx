import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  longDescription?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [showAllTags, setShowAllTags] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowAllTags(false);
    }
  }, [isOpen, project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl sm:rounded-xl bg-background text-foreground mx-auto my-10 max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-20 text-foreground/80 hover:text-foreground hover:bg-foreground/10 h-9 w-9 sm:h-10 sm:w-10 rounded-full backdrop-blur-sm bg-background/50"
              onClick={onClose}
            >
              <X size={18} className="sm:size-5" />
            </Button>

            {/* Image at Top */}
            <div className="relative w-full h-[300px] sm:h-[400px] flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold drop-shadow-lg">{project.title}</h3>

                {/* TAGS Section */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {(showAllTags ? project.tags : project.tags.slice(0, 4)).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && !showAllTags && (
                    <button
                      onClick={() => setShowAllTags(true)}
                      className="px-3 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30 backdrop-blur-sm"
                    >
                      +{project.tags.length - 4}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Scrollable Content when content overflows */}
            <div
              className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1"
              style={{
                minHeight: "100px",
                maxHeight: "calc(90vh - 400px)", // adjust based on image and buttons
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>

              {/* Title for Mobile */}
              <div className="block lg:hidden">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>

              <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground">
                <p>{project.longDescription || project.description}</p>
              </div>
            </div>

            {/* Bottom Buttons */}
            {/* <div className="border-t border-border/20 bg-background/95 backdrop-blur-sm p-4 sm:p-6 flex justify-end">
              <Button
                variant="default"
                className="h-10 px-4 text-sm font-medium hover:scale-[1.02] transition-all w-fit"
                asChild
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
              </Button>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

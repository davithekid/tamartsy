"use client";;
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const easeTransition = [0.25, 0.1, 0.25, 1];

const Industries1 = ({
  title = "Produtos",
  industryLabel = "Overview",

  industries = [
    {
      name: "Bolsas",
      description:
        "Revolutionary medical solutions and digital health platforms that improve patient outcomes and streamline healthcare delivery.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      imageAlt: "Healthcare technology illustration",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      name: "Tops",
      description:
        "Cutting-edge financial technology solutions that transform banking, payments, and investment management for the digital age.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      imageAlt: "Financial technology illustration",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      name: "Headpiece",
      description:
        "Comprehensive online retail platforms and marketplace solutions that drive sales and enhance customer experiences.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      imageAlt: "E-commerce platform illustration",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      name: "Saquinho para cyber shot",
      description:
        "Innovative learning management systems and educational technology that empower students and educators worldwide.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      imageAlt: "Educational technology illustration",
      url: "http://shadcnblocks.com/blocks",
    },
  ]
}) => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-foreground mb-8 text-3xl font-medium">{title}</h2>

        <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <a href={industry.url} key={index}>
              <motion.div
                key={index}
                className="bg-muted group relative overflow-hidden"
                whileHover="hover"
                initial="initial">
                {/* Default state: Image and heading */}
                <motion.div
                  variants={{
                    initial: {
                      opacity: 1,
                      pointerEvents: "auto",
                      clipPath: "inset(0% 0% 0% 0%)",
                    },
                    hover: {
                      opacity: 0,
                      pointerEvents: "none",
                      clipPath: "inset(0% 0% 100% 0%)",
                    },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                  className="min-h-120 lg:min-h-144 xl:min-h-112 relative z-0 flex h-full flex-col items-center justify-center">
                  <div className="flex h-full justify-center">
                    <img
                      src={industry.image}
                      alt={industry.imageAlt}
                      className="h-full w-full object-cover" />
                  </div>
                  <h3 className="text-foreground absolute bottom-10 text-lg font-medium">
                    {industry.name}
                  </h3>
                </motion.div>

                {/* Black overlay - slides up from bottom */}
                <motion.div
                  className="absolute inset-0 z-10 bg-black"
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: "0%" },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                  style={{ willChange: "transform" }} />

                {/* Hover state: Description */}
                <motion.div
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}
                  className="min-h-120 lg:min-h-144 xl:min-h-112 absolute inset-0 z-20 flex items-center justify-center p-8 text-white">
                  <div className="space-y-3">
                    <p className="font-medium opacity-90">{industryLabel}:</p>
                    <p>{industry.description}</p>
                  </div>
                </motion.div>

                {/* Plus button */}
                <motion.div
                  className="absolute right-4 top-4 z-30"
                  variants={{
                    initial: { opacity: 0.7, rotate: 0 },
                    hover: { opacity: 1, rotate: 90 },
                  }}
                  transition={{ duration: 0.4, ease: easeTransition }}>
                  <div className="relative rounded-full p-2">
                    <div className="bg-muted-foreground/20 absolute inset-0 rounded-full" />
                    <motion.div
                      className="bg-muted-foreground absolute inset-0 rounded-full"
                      variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.4, ease: easeTransition }} />
                    <Plus className="relative z-10 size-4" />
                  </div>
                </motion.div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Industries1 };

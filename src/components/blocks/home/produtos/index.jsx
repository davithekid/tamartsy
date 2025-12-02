"use client";;
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const easeTransition = [0.25, 0.1, 0.25, 1];

const Industries1 = ({
  title = "Produtos",
  industryLabel = "Prévia",

 industries = [
  {
    name: "Bolsas",
    description:
      "Bolsas de alta qualidade que combinam estilo, funcionalidade e durabilidade para o uso diário.",
    image: "./bolsa.jpeg",
    imageAlt: "Ilustração de bolsa",
    url: "http://shadcnblocks.com/blocks",
  },
  {
    name: "Tops",
    description:
      "Tops modernos, confeccionados com atenção ao conforto, tendências e tecidos de qualidade para diversas ocasiões.",
    image: "./bolsa.jpeg",
    imageAlt: "Ilustração de top",
    url: "http://shadcnblocks.com/blocks",
  },
  {
    name: "Headpiece",
    description:
      "Acessórios para cabeça elegantes, projetados para realçar o estilo pessoal com conforto e sofisticação.",
    image: "./bolsa.jpeg",
    imageAlt: "Ilustração de acessório de cabeça",
    url: "http://shadcnblocks.com/blocks",
  },
  {
    name: "Saquinho para cyber shot",
    description:
      "Saquinhos protetores e práticos para câmeras digitais, garantindo segurança e facilidade no transporte do seu Cyber-shot.",
    image: "./bolsa.jpeg",
    imageAlt: "Ilustração de saquinho para câmera",
    url: "http://shadcnblocks.com/blocks",
  },
]
}) => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-foreground mb-8 text-4xl font-bold">{title}</h2>

        <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <a href={industry.url} key={index}>
              <motion.div
                key={index}
                className=" group relative overflow-hidden rounded-2xl"
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
                      className="h-120 w-full object-cover opacity-50" />
                  </div>
                  <h3 className="text-foreground absolute bottom-10 text-lg font-extrabold">
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

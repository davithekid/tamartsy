'use client'

import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const easeTransition = [0.25, 0.1, 0.25, 1]

const IndustryCard = ({ industry, industryLabel }) => (
  <motion.div
    className="group relative h-[420px] overflow-hidden rounded-3xl hover:opacity-60 cursor-pointer"
    whileHover="hover"
    initial="initial"
  >
    <img
      src={industry.image}
      alt={industry.imageAlt}
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

    <motion.h3
      variants={{
        initial: { y: 0, opacity: 1 },
        hover: { y: -20, opacity: 0 },
      }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-8 left-6 z-10 text-2xl font-bold text-white"
    >
      {industry.name}
    </motion.h3>

    <motion.div
      variants={{
        initial: { opacity: 0, y: 30 },
        hover: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: easeTransition }}
      className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white"
    >
      <span className="mb-2 text-sm uppercase tracking-wide text-white/70">
        {industryLabel}
      </span>
      <p className="mb-4 text-sm leading-relaxed text-white/90">
        {industry.description}
      </p>

      <Button
        size="sm"
        className="w-fit rounded-full bg-white/90 text-black hover:bg-white"
        asChild
      >
        <Link href={industry.url}>Explorar</Link>
      </Button>
    </motion.div>

    {/* Plus icon */}
    <motion.div
      className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur"
      variants={{
        initial: { rotate: 0 },
        hover: { rotate: 90 },
      }}
      transition={{ duration: 0.4 }}
    >
      <Plus size={16} />
    </motion.div>
  </motion.div>
)


const IndustriesResponsive = ({ industries, industryLabel }) => (
  <>
    <div className="lg:hidden">
      <Carousel opts={{ align: 'start', dragFree: true }}>
        <CarouselContent>
          {industries.map((industry, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] sm:basis-[60%]"
            >
              <IndustryCard
                industry={industry}
                industryLabel={industryLabel}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>

    <div className="hidden grid-cols-2 gap-6 lg:grid xl:grid-cols-4">
      {industries.map((industry, index) => (
        <IndustryCard
          key={index}
          industry={industry}
          industryLabel={industryLabel}
        />
      ))}
    </div>
  </>
)

const Industries1 = ({
  title = 'Produtos',
  industryLabel = 'Prévia',
  industries = [
    {
      name: 'Bolsas',
      description:
        'Bolsas de alta qualidade que combinam estilo, funcionalidade e durabilidade.',
      image: './bolsa.jpeg',
      imageAlt: 'Ilustração de bolsa',
      url: '/bolsas',
    },
    {
      name: 'Tops',
      description:
        'Tops modernos com conforto, tendências atuais e tecidos premium.',
      image: './top.jpeg',
      imageAlt: 'Ilustração de top',
      url: '/tops',
    },
    {
      name: 'Headpiece',
      description:
        'Acessórios elegantes para realçar o visual com sofisticação.',
      image: './headpiece.png',
      imageAlt: 'Ilustração de headpiece',
      url: '/headpiece',
    },
    {
      name: 'Variados',
      description:
        'Saquinhos e acessórios práticos para proteção e transporte.',
      image: './cyberhsot.png',
      imageAlt: 'Ilustração de acessórios',
      url: '/produtos',
    },
  ],
}) => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-8">
        <header className="space-y-3">
          <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
          <p className="max-w-xl text-muted-foreground">
            Explore nossas categorias exclusivas e descubra produtos feitos
            com atenção aos detalhes.
          </p>
        </header>

        <IndustriesResponsive
          industries={industries}
          industryLabel={industryLabel}
        />

        <div className="flex justify-center pt-8">
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/produtos">Visualizar catálogo completo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export { Industries1 }

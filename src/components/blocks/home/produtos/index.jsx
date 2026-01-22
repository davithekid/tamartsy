'use client'

import { motion } from 'framer-motion'
import { Plus, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const easeTransition = [0.25, 0.1, 0.25, 1]

const IndustryCard = ({ industry, industryLabel }) => (
  <motion.div
    className="group relative h-[450px] overflow-hidden rounded-[2rem] border border-border/50"
    whileHover="hover"
    initial="initial"
  >
    <Link 
      href={industry.url} 
      className="absolute inset-0 z-50"
    >
      <span className="sr-only">Ver {industry.name}</span>
    </Link>

    <img
      src={industry.image}
      alt={industry.imageAlt}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:via-black/50" />
    <motion.h3
      variants={{
        initial: { y: 0 },
        hover: { y: -140 },
      }}
      transition={{ duration: 0.4, ease: easeTransition }}
      className="absolute bottom-10 left-8 z-10 text-3xl font-black tracking-tighter text-white"
    >
      {industry.name}
    </motion.h3>
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        hover: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: easeTransition }}
      className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white"
    >
      <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
        {industryLabel}
      </span>
      <p className="mb-6 text-sm leading-relaxed text-white/80 max-w-[25ch] font-light">
        {industry.description}
      </p>

      <div className="flex items-center gap-2 font-bold text-sm">
        Explorar Categoria <ArrowUpRight className="size-4" />
      </div>
    </motion.div>
    <motion.div
      className="absolute right-6 top-6 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20"
      variants={{
        initial: { rotate: 0, scale: 1 },
        hover: { rotate: 90, scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)", color: "#000" },
      }}
      transition={{ duration: 0.4 }}
    >
      <Plus size={20} />
    </motion.div>
  </motion.div>
)

const IndustriesResponsive = ({ industries, industryLabel }) => (
  <>
    <div className="lg:hidden -mx-4 px-4">
      <Carousel opts={{ align: 'start', dragFree: true }}>
        <CarouselContent className="-ml-4">
          {industries.map((industry, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] sm:basis-[50%] pl-4"
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

    <div className="hidden grid-cols-2 gap-4 lg:grid xl:grid-cols-5">
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
  title = 'Categorias',
  industryLabel = 'Coleção',
  industries = [
    {
      name: 'Bolsas',
      description: 'Design exclusivo que une a tradição do crochê com o lifestyle moderno.',
      image: './bolsa.jpeg',
      url: '/bolsas',
    },
    {
      name: 'Tops',
      description: 'Peças premium que elevam qualquer look com conforto e estilo autêntico.',
      image: './top.jpeg',
      url: '/tops',
    },
    {
      name: 'Headpieces',
      description: 'Detalhes que transformam o visual. Headpieces e itens variados.',
      image: './headpiece.png',
      url: '/headpiece',
    },
    {
      name: 'Variados',
      description: 'Saquinhos e utilitários artesanais para o seu dia a dia.',
      image: './saquinho.png',
      url: '/variados',
    }, 
    {
      name: 'Unissex',
      description: 'Bolsas saco versáteis feitas com a resistência do fio barbante.',
      image: './bag.png',
      url: '/unissex',
    },
  ],
}) => {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl space-y-16 px-6">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">O que fazemos</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">{title}</h2>
          </div>
          <p className="max-w-xs text-muted-foreground text-lg font-light leading-relaxed">
            Escolha a categoria que mais combina com você.
          </p>
        </header>

        <IndustriesResponsive
          industries={industries}
          industryLabel={industryLabel}
        />

        <div className="flex justify-center pt-8">
          <Button size="lg" variant="outline" className="rounded-full px-12 border-2 font-bold hover:bg-primary hover:text-primary-foreground transition-all" asChild>
            <Link href="/produtos">Ver Catálogo Completo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export { Industries1 }
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const allProducts = [
  { id: 1, title: 'Bolsa Eclipse Lunar', image: './bolsa.jpeg', price: 80, category: 'mais vendidos', type: 'Ombro' },
  { id: 2, title: 'Bolsa Duo', image: './bolsa-duo.jpeg', price: 75, category: 'mais vendidos', type: 'Mão' },
  { id: 3, title: 'Bolsa Saco', image: './bolsa-saco.png', price: 75, category: 'mais vendidos', type: 'Casual' },
  { id: 4, title: 'Bolsa Baguete', image: './bolsa-preta.png', price: 99, category: 'baguete', type: 'Clássica' },
  { id: 6, title: 'Bolsa Praia', image: './bolsa-praia.png', price: 49, category: 'duo', type: 'Verão' },
]

const categories = ['todas', 'baguete', 'duo']

const ProductCard = ({ product }) => {
  const productLink = `/bolsas/${product.id}`
  const isBestSeller = product.category === 'mais vendidos'

  return (
    <div className="group flex flex-col gap-4">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted/30 border">
        <Link
          href={productLink}
          className="absolute inset-0 z-10"
        >
          <span className="sr-only">Ver detalhes de {product.title}</span>
        </Link>
        {isBestSeller && (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black shadow-sm backdrop-blur-md">
            Destaque
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={cn(
          "absolute inset-x-0 bottom-0 z-20 p-4 transition-all duration-300 flex justify-center",
          "lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
        )}>
          <Button
            className="w-full rounded-xl bg-white/90 text-black hover:bg-white shadow-xl font-bold"
            asChild
          >
            <Link href={productLink}>
              Ver Detalhes
            </Link>
          </Button>
        </div>
      </div>
      <Link href={productLink} className="flex flex-col gap-1 px-1 text-inherit">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-medium group-hover:text-muted-foreground transition-colors">
            {product.title}
          </h3>
          <span className="text-sm font-bold">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
        <p className="text-xs text-muted-foreground capitalize">{product.type || product.category}</p>
      </Link>
    </div>
  )
}

const ProductsResponsive = ({ items, cols = 4 }) => {
  return (
    <>
      <div className="lg:hidden -mx-4 px-4">
        <Carousel opts={{ align: 'start', dragFree: true }}>
          <CarouselContent className="-ml-4">
            {items.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-[82%] sm:basis-[60%] pl-4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div
        className={cn(
          "hidden gap-6 lg:grid",
          cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
        )}
      >
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

const ProductCard2 = () => {
  const [filter, setFilter] = useState('todas')

  const filteredProducts = allProducts.filter(
    (p) => filter === 'todas' || p.category === filter
  )

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 space-y-20">
      <div id="vendidas" className="space-y-8">
        <header className="flex flex-col md:flex-row md:items-end border-b justify-between pb-6 gap-6">
          <div className="space-y-2">
            <h2 className="text-5xl font-black tracking-tighter lg:text-6xl">
              Destaques
            </h2>
            <p className="max-w-[70ch] text-muted-foreground leading-relaxed">
              Feitas à mão, únicas e perfeitas pra elevar seu look.
            </p>
          </div>
          <Link href="#catalogo" className="hidden text-sm font-bold uppercase tracking-widest hover:text-muted-foreground lg:block transition-colors">
            Ver tudo
          </Link>
        </header>

        <ProductsResponsive
          items={allProducts.filter((p) => p.category === 'mais vendidos')}
          cols={3}
        />
      </div>

      <div id="catalogo" className="space-y-12">
        <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between ">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Explore o Catálogo
            </h2>
            <p className="text-muted-foreground">Filtre por estilo e encontre sua próxima bolsa favorita.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all",
                  filter === cat
                    ? "bg-zinc-900 text-white shadow-lg"
                    : "bg-zinc-200  dark:text-background"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <ProductsResponsive items={filteredProducts} cols={4} />
      </div>
    </section>
  )
}

export default ProductCard2
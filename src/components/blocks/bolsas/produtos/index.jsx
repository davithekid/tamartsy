'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Plus, ArrowRight } from 'lucide-react'
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

const ProductCard = ({ product }) => (
  <div className="group flex flex-col gap-4">
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-50 border border-zinc-100">
      {product.category === 'mais vendidos' && (
        <div className="absolute left-4 top-4 z-10">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-900 shadow-sm backdrop-blur-md">
            Destaque
          </span>
        </div>
      )}
      
      <img
        src={product.image}
        alt={product.title}
        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <Button 
          variant="secondary"
          className="rounded-full bg-white px-6 font-bold text-zinc-900 shadow-2xl hover:bg-zinc-100"
          asChild
        >
          <Link href={`/bolsas/${product.id}`}>
            Ver Detalhes
          </Link>
        </Button>
      </div>
    </div>

    <div className="flex flex-col gap-1 px-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold tracking-tight">
          {product.title}
        </h3>
        <span className="text-base font-medium text-zinc-500">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </span>
      </div>
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
        {product.type || 'Artesanal'}
      </p>
    </div>
  </div>
)

const ProductsResponsive = ({ items, cols = 4 }) => {
  return (
    <>
      <div className="lg:hidden -mx-4 px-4">
        <Carousel opts={{ align: 'start', dragFree: true }}>
          <CarouselContent className="-ml-4">
            {items.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-[82%] pl-4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div
        className={cn(
          "hidden gap-x-8 gap-y-12 lg:grid",
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
    <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
      <div id="vendidas" className="mb-32">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-5xl font-black tracking-tighter lg:text-6xl">
              Destaques
            </h2>
            <p className="max-w-[50ch] text-lg text-zinc-500 font-light leading-relaxed">
              Feitas à mão, únicas e perfeitas pra elevar seu look com a alma do artesanato.
            </p>
          </div>
          <Button variant="link" className="p-0  font-bold tracking-widest uppercase text-xs h-fit">
            Ver Coleção Completa <ArrowRight className="ml-2 size-4" />
          </Button>
        </header>

        <ProductsResponsive
          items={allProducts.filter((p) => p.category === 'mais vendidos')}
          cols={3}
        />
      </div>

      <div id="catalogo" className="space-y-12">
        <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between pt-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight ">
              Explore o Catálogo
            </h2>
            <p className="text-zinc-500">Filtre por estilo e encontre sua próxima bolsa favorita.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-8 py-2.5 text-xs font-bold uppercase tracking-widest transition-all border",
                  filter === cat
                    ? "bg-zinc-900 text-white border-zinc-900 shadow-xl"
                    : "bg-white text-zinc-400 border-zinc-200 hover:border-zinc-900 hover:text-zinc-900"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>
        </header>

        <ProductsResponsive items={filteredProducts} cols={4} />
      </div>
    </section>
  )
}

export default ProductCard2
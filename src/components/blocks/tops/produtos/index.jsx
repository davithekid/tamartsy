'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ShoppingBag, Plus } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const allProducts = [
  { id: 1, title: 'Top Paparazzi', image: './top.png', price: 120, category: 'tops', featured: true },
  { id: 2, title: 'Regata Joy', image: './regata-joy.png', price: 120, category: 'regatas', featured: true },
  { id: 3, title: 'Top Glamour', image: './top-paparazzi-verde.jpeg', price: 135, category: 'tops', featured: true },
]

const categories = ['todos', 'tops', 'regatas']

const ProductCard = ({ product }) => (
  <div className="group flex flex-col gap-4">
    {/* Container da Imagem */}
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-100">
      {product.featured && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-900 shadow-sm backdrop-blur-md">
          Destaque
        </span>
      )}
      
      <img
        src={product.image}
        alt={product.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 flex items-end justify-center bg-black/5 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Button 
          className="w-full rounded-xl bg-white text-zinc-900 hover:bg-zinc-100 shadow-xl translate-y-4 transition-transform duration-300 group-hover:translate-y-0"
          asChild
        >
          <Link href={`/tops/${product.id}`}>
            Ver Detalhes
          </Link>
        </Button>
      </div>
    </div>

    <div className="flex flex-col gap-1 px-1">
      <div className="flex items-start justify-between">
        <h3 className="text-base font-medium group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <span className="text-sm font-bold ">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </span>
      </div>
      <p className="text-xs text-zinc-400 capitalize">{product.category}</p>
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
                className="basis-[75%] pl-4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div
        className={cn(
          "hidden gap-x-6 gap-y-10 lg:grid",
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

const TopProdutos = () => {
  const [filter, setFilter] = useState('todos')

  const filteredProducts = allProducts.filter(
    (p) => filter === 'todos' || p.category === filter
  )

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div id="vendidas" className="mb-24">
        <div className="mb-10 flex items-end justify-between border-b pb-6">
          <div className="space-y-1">
            <h2 className="text-5xl font-black tracking-tighter lg:text-6xl">
              Os mais desejados
            </h2>
            <p className="text-zinc-500">
             Para looks cheios de atitude.
            </p>
          </div>
          <Link href="#catalogo" className="hidden text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 lg:block transition-colors">
            Ver tudo
          </Link>
        </div>

        <ProductsResponsive
          items={allProducts.slice(0, 3)}
          cols={3}
        />
      </div>

      <div id="catalogo" className="space-y-12">
        <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight ">
              Catálogo Completo
            </h2>
            <p className="text-zinc-500">Explore cada detalhe das nossas criações.</p>
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
        
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-zinc-400 border-2 border-dashed rounded-3xl">
            Nenhum produto encontrado nesta categoria.
          </div>
        )}
      </div>
    </section>
  )
}

export default TopProdutos
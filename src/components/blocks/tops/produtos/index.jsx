'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const allProducts = [
  { id: 1, title: 'Top Paparazzi', image: './top.png', price: 80, category: 'mais vendidos', size: 'lg' },
  { id: 2, title: 'Regata Joy', image: './regata.jpeg', price: 75, category: 'mais vendidos' ,size: 'lg'},
  { id: 3, title: 'Top Glamour', image: './top-paparazzi-verde.jpeg', price: 135, category: 'mais vendidos', size: 'lg' },
]

const categories = ['todos', 'tops', 'regatas']

const ProductCard = ({ product }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-muted/30 transition-all duration-300 hover:bg-muted/50">
    <div className="relative">
      <img
        src={product.image}
        alt={product.title}
        className="aspect-square w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </div>

    <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
      <h3 className="line-clamp-1 text-lg font-semibold">
        {product.title}
      </h3>

      <div className="mt-1 text-lg font-bold">
        R$ {product.price.toFixed(2).replace('.', ',')}
      </div>

      <Button
        variant="secondary"
        className="mt-3 w-fit rounded-full bg-white/90 text-black hover:bg-white"
        asChild
      >
        <Link href={`/tops/${product.id}`}>
          Ver detalhes
        </Link>
      </Button>
    </div>
  </div>
)

const ProductsResponsive = ({ items, cols = 4 }) => {
  return (
    <>
      <div className="lg:hidden">
        <Carousel opts={{ align: 'start', dragFree: true }}>
          <CarouselContent>
            {items.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-[85%] sm:basis-[60%]"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div
        className={`hidden gap-6 lg:grid ${cols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
          }`}
      >
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

const TopProdutos = () => {
  const [filter, setFilter] = useState('todas')

  const filteredProducts = allProducts.filter(
    (p) => filter === 'todas' || p.category === filter
  )

  return (
    <section className="mx-auto max-w-7xl space-y-20 px-4 py-14 sm:px-8">
      <div id="vendidas" className="space-y-8">
        <header className="space-y-2">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Os mais desejados
          </h2>
          <p className="max-w-[70ch] text-muted-foreground">
            Feitos à mão pra looks cheios de atitude.
          </p>
        </header>


        <ProductsResponsive
          items={allProducts.filter((p) => p.category === 'mais vendidos')}
          cols={3}
        />
      </div>

      <div id="catalogo" className="space-y-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Explore Todos os Tops
            </h2>
            <p className="max-w-[70ch] text-muted-foreground">
              Descubra outros modelos feitos à mão, cada um com cuidado
              e estilo únicos.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-muted-foreground/10'
                  }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </header>

        <ProductsResponsive items={filteredProducts} cols={4} />
      </div>
    </section>
  )
}

export default TopProdutos

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
  { id: 1, title: 'Bolsa Eclipse Lunar', image: './bolsa.jpeg', price: 80, category: 'mais vendidos' },
  { id: 2, title: 'Top Paparazzi', image: './top.jpeg', price: 75, category: 'mais vendidos' },
  { id: 3, title: 'Bolsa Baguete', image: './bolsa-baguete-batom.jpeg', price: 399, category: 'bolsas' },
  { id: 5, title: 'Bolsa Camesin', image: './bolsa-camesin.jpeg', price: 349, category: 'bolsas' },
  { id: 6, title: 'Bolsa Duo', image: './bolsa-roxa.jpeg', price: 349, category: 'bolsas' },
  { id: 7, title: 'Bolsa Praria', image: './bolsa-praia.jpeg', price: 349, category: 'bolsas' },
  { id: 8, title: 'Headpiece EG', image: './headpiece.png', price: 349, category: 'mais vendidos' },
  { id: 9, title: 'Headpiece LG', image: './headpiece-branco.png', price: 349, category: 'headpieces' },
  { id: 10, title: 'Regata', image: './top.png', price: 349, category: 'tops' },
  { id: 11, title: 'Regata', image: './regata-verde.jpeg', price: 349, category: 'tops' },
  { id: 12, title: 'Regata', image: './regata.jpeg', price: 349, category: 'tops' },
  { id: 13, title: 'Cybershot', image: './cyberhsot.png', price: 349, category: 'variados' },
]

const categories = ['todos', 'bolsas', 'tops', 'headpieces', 'variados']

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
        <Link href={`/bolsas/${product.id}`}>
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

const Products = () => {
  const [filter, setFilter] = useState('todas')

  const filteredProducts = allProducts.filter(
    (p) => filter === 'todas' || p.category === filter
  )

  return (
    <section className="mx-auto max-w-7xl space-y-20 px-4 py-14 sm:px-8">
      <div id="vendidas" className="space-y-8">
        <header className="space-y-2">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Queridinhos da loja
          </h2>
          <p className="max-w-[70ch] text-muted-foreground">
            As peças mais amadas, escolhidas por quem já conhece.
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
              Explore Tudo
            </h2>
            <p className="max-w-[70ch] text-muted-foreground">
              Navegue por todos os produtos e encontre sua vibe.

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

export default Products

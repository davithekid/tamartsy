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
  { id: 2, title: 'Bolsa Duo', image: './bolsa-duo.jpeg', price: 75, category: 'mais vendidos' },
  { id: 3, title: 'Bolsa Saco', image: './bolsa-saco.png', price: 75, category: 'mais vendidos' },
  { id: 4, title: 'Bolsa Baguete', image: './bolsa-preta.png', price: 99, category: 'baguete' },
  { id: 6, title: 'Bolsa Praia', image: './bolsa-praia.png', price: 49, category: 'duo' },
]

const categories = ['todas', 'baguete', 'duo']

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

const ProductCard2 = () => {
  const [filter, setFilter] = useState('todas')

  const filteredProducts = allProducts.filter(
    (p) => filter === 'todas' || p.category === filter
  )

  return (
    <section className="mx-auto max-w-7xl space-y-20 px-4 py-14 sm:px-8">
      <div id="vendidas" className="space-y-8">
        <header className="space-y-2">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Destaques
          </h2>
          <p className="max-w-[70ch] text-muted-foreground">
            Feitas à mão, únicas e perfeitas pra elevar seu look.
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
              Explore todas as bolsas
            </h2>
            <p className="max-w-[70ch] text-muted-foreground">
              Descubra modelos únicos pra combinar com seu estilo.
            </p>
          </div>
        </header>

        <ProductsResponsive items={filteredProducts} cols={4} />
      </div>
    </section>
  )
}

export default ProductCard2

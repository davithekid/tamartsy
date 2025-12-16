'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const allProducts = [
  { id: 1, title: 'Bolsa Eclipse Lunar', image: './bolsa.jpeg', price: 80, category: 'mais vendidos' },
  { id: 2, title: 'Bolsa Duo', image: './bolsa-roxa.jpeg', price: 75, category: 'mais vendidos' },
  { id: 3, title: 'Eclax Cage Pack', image: './bolsa-roxa.jpeg', price: 399, category: 'mais vendidos' },
  { id: 4, title: 'Bolsa Baguete', image: './bolsa-roxa.jpeg', price: 299, category: 'baguete' },
  { id: 5, title: 'Bolsa Duo', image: './bolsa-roxa.jpeg', price: 349, category: 'duo' },
  { id: 6, title: 'Bolsa de Praia', image: './bolsa.jpeg', price: 499, category: 'todas' },
]

const categories = ['todas', 'baguete', 'duo']

const ProductCard2 = () => {
  const [filter, setFilter] = useState('todas')

  const renderProducts = (items, cols) => (
    <div
      className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${
        cols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
      }`}
    >
      {items.map((product) => (
        <div
          key={product.id}
          className="group relative overflow-hidden rounded-2xl bg-muted/30 transition-all duration-300 hover:bg-muted/50"
        >
          {/* imagem como parte do background */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="aspect-square w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* conteúdo sobreposto */}
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
              <Link href="">Ver detalhes</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )

  const filteredProducts = allProducts.filter(
    (p) => filter === 'todas' || p.category === filter
  )

  return (
    <section className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-8">
      {/* Mais vendidos */}
      <div id='vendidas' className="space-y-8">
        <header className="space-y-2">
          <h2 className="text-3xl font-bold sm:text-4xl">Sucesso de vendas</h2>
          <p className="max-w-[70ch] text-muted-foreground">
            Feitas à mão com cuidado e dedicação, cada peça combina charme, estilo e personalidade.
          </p>
        </header>
        {renderProducts(
          allProducts.filter((p) => p.category === 'mais vendidos'),
          3
        )}
      </div>

      {/* Todos os produtos */}
      <div id='catalogo' className="space-y-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold sm:text-4xl">Todas as bolsas</h2>
            <p className="max-w-[70ch] text-muted-foreground">
              Descubra outros modelos feitos à mão, cada um com cuidado e estilo únicos.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-muted-foreground/10'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </header>

        {renderProducts(filteredProducts, 4)}
      </div>
    </section>
  )
}

export default ProductCard2

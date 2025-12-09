'use client'
import { useState } from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

const allProducts = [
  { id: 1, title: 'Eclax Semispherica', image: './bolsa.jpeg', price: 399, rating: 5, category: 'mais vendidos' },
  { id: 2, title: 'Eclax Cone', image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=60&w=600&auto=format&fit=crop', price: 399, rating: 4, category: 'mais vendidos' },
  { id: 3, title: 'Eclax Cage Pack', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=60&w=600&auto=format&fit=crop', price: 399, rating: 5, category: 'mais vendidos' },
  { id: 4, title: 'Bolsa Baguete', image: './bolsa-baguete.jpeg', price: 299, rating: 5, category: 'baguete' },
  { id: 5, title: 'Bolsa Duo', image: './bolsa-duo.jpeg', price: 349, rating: 4, category: 'duo' },
  { id: 6, title: 'Bolsa de Praia', image: './todas-bolsas.jpeg', price: 499, rating: 5, category: 'todas' },
]

const categories = ['todas', 'baguete', 'duo']

const ProductCard2 = () => {
  const [filter, setFilter] = useState('todas')

  const renderProducts = (items, cols) => (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 ${
        cols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
      }`}
    >
      {items.map((product) => (
        <Card key={product.id} className='group overflow-hidden transition-all hover:shadow-lg'>
          <CardContent className='space-y-4 p-4'>
            <div className='overflow-hidden rounded-md'>
              <img
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className='aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='space-y-2'>
              <CardTitle className='line-clamp-1 text-lg font-semibold text-balance sm:text-xl'>
                {product.title}
              </CardTitle>
              <p className='text-lg font-bold text-primary sm:text-xl'>R$ {product.price.toFixed(2).replace('.', ',')}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const filteredProducts = allProducts.filter(p => filter === 'todas' || p.category === filter)

  return (
    <section className='mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-8'>
      
      <div className='space-y-8'>
        <header className='space-y-2'>
          <h2 className='text-3xl font-bold text-balance sm:text-4xl'>Sucesso de vendas!</h2>
          <p className='text-muted-foreground max-w-[75ch] text-balance'>
            Feitas à mão com cuidado e dedicação, cada peça combina charme, estilo e personalidade.
          </p>
        </header>
        {renderProducts(allProducts.filter(p => p.category === 'mais vendidos'), 3)}
      </div>

      <div className='space-y-8'>
        <header className='space-y-2 flex flex-col sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h2 className='text-3xl font-bold text-balance sm:text-4xl'>Todas as bolsas</h2>
            <p className='text-muted-foreground max-w-[75ch] text-balance'>
              Descubra outros modelos feitos à mão, cada um com cuidado e estilo únicos.
            </p>
          </div>
          <div className='flex gap-2 mt-4 sm:mt-0'>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  filter === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-muted-foreground/10'
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
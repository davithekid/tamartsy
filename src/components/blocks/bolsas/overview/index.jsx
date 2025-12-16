'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Heart } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const ProductOverview1 = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [carouselApi, setCarouselApi] = useState()
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    if (!carouselApi) return

    carouselApi.scrollTo(selectedImage)

    const onSelect = () => {
      setSelectedImage(carouselApi.selectedScrollSnap())
    }

    carouselApi.on('select', onSelect)
    return () => carouselApi.off('select', onSelect)
  }, [carouselApi, selectedImage])

  return (
    <section className="mx-auto max-w-7xl p-4 lg:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold lg:text-3xl">
            {product.title}
          </h1>

          <p className="text-muted-foreground">
            {product.description}
          </p>

          <p className="text-2xl font-semibold">
            R$ {product.price}
          </p>

          {/* Thumbnails */}
          <div className="flex gap-3 pt-4">
            {product.images.map((img, index) => (
              <button
                key={index}
                onMouseEnter={() => setSelectedImage(index)}
                className={cn(
                  'h-16 w-16 overflow-hidden rounded-md border',
                  selectedImage === index && 'ring-2 ring-primary'
                )}
              >
                <img
                  src={img}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-6">
            <Button size="lg" className="flex-1">
              Adicionar ao carrinho
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart
                className={cn(
                  'h-5 w-5',
                  isWishlisted && 'fill-primary text-primary'
                )}
              />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="aspect-square">
          <Carousel setApi={setCarouselApi}>
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem key={index}>
                  <img
                    src={img}
                    alt={product.title}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

      </div>
    </section>
  )
}

export default ProductOverview1

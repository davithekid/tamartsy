'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Search, ArrowRight, Star, TrendingUp, ShoppingBag, Flame } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const storeData = {
    title: "Bolsas que transformam seu look!",
    subtitle: "Descubra nossa coleção exclusiva: design único, qualidade premium e estilo que se destaca em qualquer ocasião.",
    featuredProducts: [
        {
            id: 1,
            name: 'Bolsa Baguete',
            image: './bolsa.jpeg',
            tag: 'Best Seller',
        },
        {
            id: 2,
            name: 'Bolsa Tote Elegante',
            image: './bolsa.jpeg',
            tag: 'Novidade',
        },
        {
            id: 3,
            name: 'Bolsa Transversal Luxo',
            image: './bolsa.jpeg',
            tag: 'Premium',
        },
        {
            id: 4,
            name: 'Bolsa Mochila Fashion',
            image: './bolsa.jpeg',
            tag: 'Destaque',
        },
    ],
}

export default function StorefrontHero2() {
    const [searchQuery, setSearchQuery] = useState('')
    const [api, setApi] = useState()
    const [currentSlide, setCurrentSlide] = useState(0)

    // Auto-scroll functionality
    useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % storeData.featuredProducts.length
            api.scrollTo(nextSlide)
            setCurrentSlide(nextSlide)
        }, 5000)

        return () => clearInterval(interval)
    }, [api, currentSlide])

    return (
        <section className='from-background to-accent/20 relative bg-linear-to-b'>
            <div className='relative container mx-auto px-4 py-16 md:px-8 lg:px-12 lg:py-20'>
                <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                    <header className='space-y-8'>
                        <h1 className='text-4xl font-bold text-balance md:text-5xl lg:text-6xl'>{storeData.title}</h1>
                        <p className='text-muted-foreground max-w-lg text-xl text-balance'>{storeData.subtitle}</p>
                        <div className='flex gap-4'>
                            <Button size='lg' className='cursor-pointer gap-2 rounded-full px-8'>
                                Compre Agora
                                <ArrowRight className='size-4' />
                            </Button>
                            <Button size='lg' variant='outline' className='cursor-pointer gap-2 rounded-full px-8'>
                                <ShoppingBag className='size-4' />
                                Visitar Catálogo
                            </Button>
                        </div>
                    </header>

                    <div className='flex flex-col gap-4'>
                        <div className='relative h-[500px] w-full border-0'>
                            <Carousel
                                className='group size-full'
                                setApi={setApi}
                                opts={{
                                    align: 'start',
                                    loop: true,
                                    duration: 20,
                                    skipSnaps: true,
                                }}
                                onSelect={() => {
                                    if (api) {
                                        setCurrentSlide(api.selectedScrollSnap())
                                    }
                                }}
                            >
                                <CarouselContent className='h-full'>
                                    {storeData.featuredProducts.map(product => (
                                        <CarouselItem key={product.id} className='h-full'>
                                            <Card className='relative size-full overflow-hidden py-4'>
                                                <CardContent className='px-4'>
                                                    <div className='relative size-full overflow-hidden rounded-md'>
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className='h-[500px] w-full object-cover'
                                                            loading='lazy'
                                                        />
                                                    </div>
                                                    <div className='from-background/90 via-background/30 absolute inset-0 bg-linear-to-t to-transparent' />

                                                    <div className='text-background-foreground absolute inset-0 flex flex-col justify-end p-8'>
                                                        <div className='relative z-10 max-w-md space-y-4'>
                                                            <Badge className='w-fit rounded-full'>{product.tag}</Badge>
                                                            <h2 className='text-4xl font-bold'>{product.name}</h2>
                                                            <p className='text-background-foreground/80 text-lg'>
                                                                Discover the latest in style and comfort with our premium collection.
                                                            </p>
                                                            <div className='flex items-center gap-4 pt-2'>
                                                                <Button size='lg' className='cursor-pointer rounded-full'>
                                                                    Shop Now
                                                                </Button>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    {product.trending && (
                                                        <div className='text-background-foreground bg-foreground/10 dark:bg-background/20 absolute end-8 top-8 flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-xs'>
                                                            <Flame className='size-4' /> Trending
                                                        </div>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>

                        {/* Dots Navigation - Enhanced */}
                        <div className='relative mt-8 flex justify-center gap-3'>
                            {storeData.featuredProducts.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        api?.scrollTo(index)
                                        setCurrentSlide(index)
                                    }}
                                    className={`relative size-3 rounded-full transition-all ${currentSlide === index ? 'bg-primary' : 'bg-foreground/20 hover:bg-foreground/40'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                    aria-current={currentSlide === index ? 'step' : undefined}
                                >
                                    {currentSlide === index && <span className='absolute inset-0 m-auto rounded-full' />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

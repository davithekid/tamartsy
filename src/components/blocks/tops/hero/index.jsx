'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'

const storeData = {
    title: 'Nada básico.',
    subtitle: 'Tops em crochê feitos à mão pra quem gosta de se destacar.',
    featuredProducts: [
        {
            id: 1,
            name: 'Top Paparazzi',
            image: './top-modelo.png',
            tag: 'Best Seller',
        },
        {
            id: 2,
            name: 'Top Paparazzi',
            image: './top.png',
            tag: 'Novidade',
        }, {
            id: 3,
            name: 'Regata Joy',
            image: './regata.jpeg',
            tag: 'Novidade',
        },

    ],
}

export default function TopsHero() {
    const [api, setApi] = useState()
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            const next = (currentSlide + 1) % storeData.featuredProducts.length
            api.scrollTo(next)
            setCurrentSlide(next)
        }, 5000)

        return () => clearInterval(interval)
    }, [api, currentSlide])

    return (
        <section className="relative overflow-hidden bg-background">
            <div className="pointer-events-none absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <header className="space-y-8">
                        <Badge className="w-fit rounded-full">Coleção exclusiva</Badge>

                        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                            {storeData.title}
                        </h1>

                        <p className="max-w-xl text-lg text-muted-foreground">
                            {storeData.subtitle}
                        </p>

                        <div className="flex gap-4">
                            <Link href="#vendidas" scroll={true}>
                                <Button size="lg" className="rounded-full px-8">
                                    Mais vendidas <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </Link>


                            <Link href="#catalogo" scroll={true}>
                                <Button size="lg" variant="outline" className="rounded-full px-8">
                                    <ShoppingBag className="mr-2 size-4" />
                                    Catálogo
                                </Button>
                            </Link>

                        </div>
                    </header>

                    <div className="relative h-[520px]">
                        <Carousel setApi={setApi} opts={{ loop: true }}>
                            <CarouselContent>
                                {storeData.featuredProducts.map((product) => (
                                    <CarouselItem key={product.id}>
                                        <div className="relative h-[520px] overflow-hidden rounded-3xl">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-full object-cover"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
                                                <Badge className="w-fit bg-white/90 text-black">
                                                    {product.tag}
                                                </Badge>

                                                <h2 className="mt-3 text-3xl font-semibold">
                                                    {product.name}
                                                </h2>

                                                <Button className="mt-4 w-fit rounded-full">
                                                    Compre agora
                                                </Button>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        <div className="mt-6 flex justify-center gap-3">
                            {storeData.featuredProducts.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        api?.scrollTo(index)
                                        setCurrentSlide(index)
                                    }}
                                    className={`h-2.5 w-2.5 rounded-full ${currentSlide === index
                                        ? 'bg-primary scale-125'
                                        : 'bg-foreground/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

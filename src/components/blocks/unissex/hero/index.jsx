'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'

const storeData = {
    title: 'Nada básico.',
    subtitle: 'Tops em crochê feitos à mão pra quem gosta de se destacar.',
    featuredProducts: [
        {
            id: 1,
            name: 'Shoulder Bag',
            image: './bag.png',
            tag: 'Best Seller',
        },
    ],
}

export default function UnissexHero() {
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
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-200 py-10 md:py-0">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 w-full">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="w-fit rounded-full px-4 py-1.5 bg-zinc-100 text-zinc-900 border-none font-medium">
                                <Sparkles className="mr-2 size-3.5 fill-zinc-900" />
                                Nova Coleção
                            </Badge>

                            <h1 className="text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl text-zinc-900 leading-[0.9]">
                                {storeData.title}
                            </h1>

                            <p className="max-w-md text-lg md:text-xl text-zinc-500 leading-relaxed font-light">
                                {storeData.subtitle}
                            </p>
                        </div>

                        <div className="flex-col sm:flex-row gap-4 hidden md:flex">
                            <Button size="lg" className="rounded-full h-14 px-10 text-base font-bold shadow-xl shadow-zinc-200 hover:shadow-none transition-all">
                                Ver mais vendidas <ArrowRight className="ml-2 size-5" />
                            </Button>

                            <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-base  font-semibold dark:text-background">
                                <ShoppingBag className="mr-2 size-5" />
                                Catálogo
                            </Button>
                        </div>
                    </div>

                    <div className="relative order-2     lg:order-2">
                        <div className="relative z-10 mx-auto max-w-[440px] lg:max-w-none">
                            <Carousel setApi={setApi} opts={{ loop: true }}>
                                <CarouselContent className="-ml-0">
                                    {storeData.featuredProducts.map((product) => (
                                        <CarouselItem key={product.id} className="pl-0">
                                            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-100 border border-zinc-200 shadow-2xl">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />

                                                <div className="absolute inset-x-4 bottom-4">
                                                    <div className="rounded-[2rem] border border-white/20 bg-white/40 p-6 backdrop-blur-xl shadow-lg flex items-center justify-between">
                                                        <div className="space-y-1">
                                                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-800">
                                                                {product.tag}
                                                            </span>
                                                            <h2 className="text-2xl font-bold text-zinc-900">
                                                                {product.name}
                                                            </h2>
                                                        </div>
                                                        <Button size="icon" className="h-12 w-12 rounded-full shadow-lg">
                                                            <ArrowRight className="size-5" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>

                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                            {storeData.featuredProducts.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        api?.scrollTo(index)
                                        setCurrentSlide(index)
                                    }}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === index ? 'w-10 bg-zinc-900' : 'w-4 bg-zinc-300'
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
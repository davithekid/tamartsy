'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Truck, ShieldCheck, Instagram, ChevronRight, Ruler, Fingerprint } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import Link from 'next/link'

const UnissexOverview = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [carouselApi, setCarouselApi] = useState()

    useEffect(() => {
        if (!carouselApi) return
        carouselApi.scrollTo(selectedImage)
        const onSelect = () => setSelectedImage(carouselApi.selectedScrollSnap())
        carouselApi.on('select', onSelect)
        return () => carouselApi.off('select', onSelect)
    }, [carouselApi, selectedImage])

    return (
        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
                
                <div className="flex flex-col gap-6">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-50 border border-zinc-100 shadow-sm">
                        {product.images.length > 1 ? (
                            <Carousel setApi={setCarouselApi}>
                                <CarouselContent>
                                    {product.images.map((img, index) => (
                                        <CarouselItem key={index}>
                                            <img
                                                src={img}
                                                alt={product.title}
                                                className="aspect-[4/5] w-full object-cover transition-all"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        ) : (
                            <img
                                src={product.images[0]}
                                alt={product.title}
                                className="aspect-[4/5] w-full object-cover"
                            />
                        )}
                    </div>

                    {product.images.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {product.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={cn(
                                        'relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border-2 transition-all',
                                        selectedImage === index
                                            ? 'border-zinc-900 ring-2 ring-zinc-900 ring-offset-2'
                                            : 'border-transparent opacity-60 hover:opacity-100'
                                    )}
                                >
                                    <img src={img} alt="Thumbnail" className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        
                        <h1 className="text-4xl font-black tracking-tighter lg:text-5xl">
                            {product.title}
                        </h1>
                        <p className="text-lg leading-relaxed text-zinc-500 font-light">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex items-baseline gap-4 rounded-3xl p-6 border bg-muted dark:bg-muted ">
                        <span className="text-sm font-medium text-muted-foreground">Valor</span>
                        <div className="text-4xl font-black ">
                            R$ {product.price.toFixed(2).replace('.', ',')}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest">Cores Disponíveis</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.colors.map((col) => (
                                <button
                                    key={col}
                                    className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium transition-all hover:bg-muted-foreground  hover:text-white"
                                >
                                    {col}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border  p-6 space-y-4">
                        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest ">
                            <Ruler className="size-4" /> Detalhes Técnicos
                        </h3>
                        <div className="grid grid-cols-2 gap-y-4 text-sm">
                            <div className="text-zinc-400 font-medium">Material</div>
                            <div className="text-right font-bold text-zinc-900">{product.material}</div>
                            
                           
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex items-center gap-4 rounded-2xl  p-4 border border-zinc-100">
                            <div className="rounded-full bg-white p-2 shadow-sm">
                                <Truck className="h-5 w-5 text-zinc-900" />
                            </div>
                            <span className="text-xs font-bold leading-tight uppercase tracking-tight ">
                                Entrega combinada <br/> via Instagram
                            </span>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl  p-4 border border-zinc-100">
                            <div className="rounded-full bg-white p-2 shadow-sm">
                                <ShieldCheck className="h-5 w-5 text-zinc-900" />
                            </div>
                            <span className="text-xs font-bold leading-tight uppercase tracking-tight ">
                                Produto único <br/> e exclusivo
                            </span>
                        </div>
                    </div>

                    <Button asChild size="lg" className="h-16 w-full rounded-2xl text-lg font-bold shadow-xl shadow-zinc-200 transition-all hover:scale-[1.02]">
                        <Link href={'https://www.instagram.com/tam.artsy/'} target='_blank' className="flex items-center justify-center gap-3">
                            <Instagram className="size-6" />
                            Pedir pelo Instagram
                            <ChevronRight className="size-5 opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default UnissexOverview
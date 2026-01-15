'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Truck, ShieldCheck } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from 'next/link'

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
        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                <div className="space-y-4">
                    <div className="overflow-hidden rounded-2xl border bg-muted/20">
                        {product.images.length > 1 ? (
                            <Carousel setApi={setCarouselApi}>
                                <CarouselContent>
                                    {product.images.map((img, index) => (
                                        <CarouselItem key={index}>
                                            <img
                                                src={img}
                                                alt={product.title}
                                                className="w-full object-contain"
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        ) : (
                            <img
                                src={product.images[0]}
                                alt={product.title}
                                className=" w-full object-contain"
                            />
                        )}

                    </div>
                    <div className="flex gap-3">
                        {product.images.map((img, index) => (
                            <button
                                key={index}
                                onMouseEnter={() => setSelectedImage(index)}
                                className={cn(
                                    'h-16 w-16 overflow-hidden rounded-xl border transition',
                                    selectedImage === index
                                        ? 'ring-2 ring-primary'
                                        : 'hover:border-primary'
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
                </div>
                <div className="space-y-6">

                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                            {product.title}
                        </h1>

                        <p className="text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>
                    </div>
                    <div className="rounded-2xl bg-muted/30 p-5">
                        <p className="text-sm text-muted-foreground">
                            Valor
                        </p>
                        <p className="text-3xl font-bold">
                            R$ {product.price}
                        </p>
                    </div>
                    <div>
                        <h1 className='font-semibold'>Cores Disponíveis</h1>

                        {product.color.map((colors) => (
                            <Button
                                key={colors}
                                className="rounded-md border mt-1 px-4 py-2 text-sm hover:bg-black hover:text-white mr-2"
                            >
                                {colors}
                            </Button>
                        ))}
                    </div>

                    <div>
                        <h1 className='font-semibold'>Detalhes do Produto</h1>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Material</TableHead>
                                    <TableHead className="text-right font-semibold">{product.material}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Tamanho</TableCell>
                                    <TableCell className="text-right">{product.tamanho}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Altura da Alça</TableCell>
                                    <TableCell className="text-right">{product.alca}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-xl border p-4">
                            <Truck className="h-5 w-5 text-primary" />
                            <span className="text-sm">
                                Entrega combinada diretamente
                            </span>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl border p-4">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                            <span className="text-sm">
                                Produto artesanal exclusivo
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-3 pt-4">
                        <Button size="lg" className="flex-1 rounded-xl cursor-pointer">
                            <Link href={'https://www.instagram.com/tam.artsy/'} target='blank'>
                                Entrar em contato para comprar
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductOverview1

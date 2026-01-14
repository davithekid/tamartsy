import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowUpRight, CirclePlay } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-6 md:skew-y-12"
        )}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Badge
          variant="secondary"
          className="rounded-full border-border py-1 font-serif"
        >
          desde 2025 <ArrowUpRight className="ml-1 h-4 w-4" />
        </Badge>

        <Image
          src="/logo.svg"
          width={420}
          height={420}
          alt="logo"
          priority
          className="mx-auto w-[280px] sm:w-[360px] md:w-[420px]"
        />

        <p className="mt-4 text-foreground/80 md:text-lg font-serif">
          Quem tem estilo, usa Tam Artsy.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <Link href="/produtos">
              Produtos <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="mr-2 h-5 w-5" />
            <Link href={'/sobre'}>
              Sobre
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

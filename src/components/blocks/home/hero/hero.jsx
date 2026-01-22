import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
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

      <div className="relative z-10 mx-auto max-w-3xl text-center py-18 lg:py-0">
      <Badge
          variant="secondary"
          className="mb-8 rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md"
        >
           Desde 2025
        </Badge>

        <Image
          src="/logo-carnaval.svg"
          width={420}
          height={420}
          alt="logo"
          priority
          className="mx-auto w-[320] sm:w-[420px] md:w-[520px]"
        />

       <div className="space-y-4">
          <p className="mx-auto max-w-[30ch] text-xl font-light italic tracking-tight text-muted-foreground md:text-2xl">
            Quem tem estilo, usa <span className="font-bold text-foreground not-italic">Tam Artsy</span>.
          </p>
        </div>

         <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            size="lg" 
            className="h-14 min-w-[180px] rounded-full px-8 text-base font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95" 
            asChild
          >
            <Link href="/produtos">
              Explorar Catálogo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="h-14 min-w-[180px] rounded-full border border-border/40 text-base font-bold transition-all hover:bg-accent"
            asChild
          >
            <Link href="/sobre">
              Conheça a Loja
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

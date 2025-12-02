import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )} />
      <div className="relative z-10 text-center max-w-3xl">
        <Badge variant="secondary" className="rounded-full py-1 border-border" asChild>
          <Link href="#">
            since 2025 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <Image
          src={'/logo.svg'}
          width={600}
          height={600}
          className="mx-auto object-cover"
        />
        <p className="md:text-lg text-foreground/80">
          Tudo para deixar você no estilo que a cena precisa!.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Produtos <ArrowUpRight className="h-5! w-5!" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none">
            <CirclePlay className="h-5! w-5!" /> Sobre a marca
          </Button>
        </div>
      </div>
    </div>
  );
}

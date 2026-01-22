"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Carla Souza",
    designation: "Cliente",
    testimonial: "Comprei uma bolsa de crochê e fiquei encantada! A peça chegou linda, bem feita e com muito capricho.",
  },
  {
    id: 2,
    name: "Fernanda Lima",
    designation: "Cliente",
    testimonial: "Os tops de crochê são maravilhosos! Super confortáveis, elegantes e entregues rapidinho. Recomendo muito!",
  },
  {
    id: 3,
    name: "Lucas Martins",
    designation: "Cliente",
    testimonial: "Adorei o saquinho para a minha câmera. Protege bem e ainda é um charme! Atendimento excelente.",
  },
  {
    id: 4,
    name: "Mariana Rocha",
    designation: "Cliente",
    testimonial: "Cada peça tem um detalhe especial. Dá para sentir o carinho em cada ponto do crochê.",
  },
  {
    id: 5,
    name: "Rafael Oliveira",
    designation: "Cliente",
    testimonial: "O headpiece de crochê é simplesmente incrível. Qualidade impecável e entrega rápida.",
  },
  {
    id: 6,
    name: "Juliana Campos",
    designation: "Cliente",
    testimonial: "As peças são lindas, práticas e feitas com muito cuidado. Recomendo para quem ama arte artesanal.",
  },
];

export default function Testimonial04() {
  return (
    <section className="py-24 flex flex-col justify-center items-center overflow-hidden gap-12">
      <div className="text-center space-y-4 px-6">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
          Feedbacks de clientes
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light">
          Depoimentos reais de quem já se apaixonou pelas nossas peças.
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {/* primeira linha */}
        <div className="relative w-full overflow-hidden marquee-container">
          <FadeSides />
          <div className="marquee-track-left flex gap-6 min-w-max px-6">
            <TestimonialList items={testimonials.slice(0, 3)} />
            <TestimonialList items={testimonials.slice(0, 3)} />
            <TestimonialList items={testimonials.slice(0, 3)} />
          </div>
        </div>

        {/* segunda lkinha */}
        <div className="relative w-full overflow-hidden marquee-container">
          <FadeSides />
          <div className="marquee-track-right flex gap-6 min-w-max px-6">
            <TestimonialList items={testimonials.slice(3, 6)} />
            <TestimonialList items={testimonials.slice(3, 6)} />
            <TestimonialList items={testimonials.slice(3, 6)} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track-left {
          animation: marqueeLeft 40s linear infinite;
        }
        .marquee-track-right {
          animation: marqueeRight 40s linear infinite;
        }
        .marquee-container:hover .marquee-track-left,
        .marquee-container:hover .marquee-track-right {
          animation-play-state: paused;
        }
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-33.33%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function TestimonialList({ items }) {
  return items.map((item, index) => (
    <div
      key={`${item.id}-${index}`}
      className="w-[350px] md:w-[450px] bg-accent/40 border border-border/50 rounded-[2rem] p-8 flex-shrink-0 transition-all duration-500 hover:bg-accent hover:border-primary/20 group"
    >
      <div className="flex flex-col h-full justify-between gap-6">
        <div className="space-y-4">
          <Quote className="size-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
          <p className="text-lg md:text-xl font-medium leading-relaxed tracking-tight italic">
            "{item.testimonial}"
          </p>
        </div>

        <div className="flex items-center gap-4 border-t border-border/50 pt-6">
          <Avatar className="h-12 w-12 border-2 border-background">
            <AvatarFallback className="font-bold bg-primary text-primary-foreground">
              {item.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="font-bold text-zinc-900">{item.name}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {item.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
}

function FadeSides() {
  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
    </>
  );
}
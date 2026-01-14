"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Carla Souza",
    designation: "Cliente",
    testimonial:
      "Comprei uma bolsa de crochê e fiquei encantada! A peça chegou linda, bem feita e com muito capricho.",
  },
  {
    id: 2,
    name: "Fernanda Lima",
    designation: "Cliente",
    testimonial:
      "Os tops de crochê são maravilhosos! Super confortáveis, elegantes e entregues rapidinho. Recomendo muito!",
  },
  {
    id: 3,
    name: "Lucas Martins",
    designation: "Cliente",
    testimonial:
      "Adorei o saquinho para a minha câmera. Protege bem e ainda é um charme! Atendimento excelente.",
  },
  {
    id: 4,
    name: "Mariana Rocha",
    designation: "Cliente",
    testimonial:
      "Cada peça tem um detalhe especial. Dá para sentir o carinho em cada ponto do crochê.",
  },
  {
    id: 5,
    name: "Rafael Oliveira",
    designation: "Cliente",
    testimonial:
      "O headpiece de crochê é simplesmente incrível. Qualidade impecável e entrega rápida.",
  },
  {
    id: 6,
    name: "Juliana Campos",
    designation: "Cliente",
    testimonial:
      "As peças são lindas, práticas e feitas com muito cuidado. Recomendo para quem ama arte artesanal.",
  },
];

export default function Testimonial04() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-8 gap-12">
      <h2 className="text-5xl font-semibold text-center tracking-tight px-6">
        Feedbacks de clientes
      </h2>

      <p className="text-center text-muted-foreground text-xl max-w-2xl px-6">
        Depoimentos reais de pessoas que avaliaram nosso trabalho {':)'}
      </p>

      <div className="relative w-full overflow-hidden marquee-container">
        <FadeSides />
        <div className="marquee-track-left flex gap-6 min-w-max">
          <TestimonialList />
          <TestimonialList />
        </div>
      </div>

      <div className="relative w-full overflow-hidden marquee-container">
        <FadeSides />
        <div className="marquee-track-right flex gap-6 min-w-max">
          <TestimonialList />
          <TestimonialList />
        </div>
      </div>

      <style jsx>{`
        .marquee-track-left,
        .marquee-track-right {
          flex-shrink: 0;
          animation-play-state: running;
        }

        .marquee-container:hover .marquee-track-left,
        .marquee-container:hover .marquee-track-right {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .marquee-track-left {
          animation: marqueeLeft 25s linear infinite;
        }

        .marquee-track-right {
          animation: marqueeRight 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

function TestimonialList() {
  return testimonials.map((item, index) => (
    <div
      key={`${item.id}-${index}`}
      className="min-w-[24rem] max-w-sm bg-accent rounded-xl p-6 flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
            {item.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-sm text-muted-foreground">{item.designation}</p>
        </div>
      </div>

      <p className="mt-5 text-[17px] leading-relaxed">
        {item.testimonial}
      </p>
    </div>
  ));
}

function FadeSides() {
  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </>
  );
}

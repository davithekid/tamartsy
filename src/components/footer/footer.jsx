"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Instagram, MapPin, Send, ArrowUp } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Logo } from "../logo";

const newsletterFormSchema = z.object({
  email: z.string().email("E-mail inválido"),
});

const FOOTER_LINKS = [
  {
    title: "Produtos",
    items: [
      { text: "Bolsas", link: "/bolsas" },
      { text: "Tops", link: "/tops" },
      { text: "Headpieces", link: "/headpiece" },
      { text: "Variados", link: "/variados" },
      { text: "Unissex", link: "/unissex" },
      { text: "Ver Todos", link: "/produtos" },
    ],
  },
  {
    title: "Coleções",
    items: [
      { text: "Carnaval 2026", link: "#" },
      { text: "Verão Artsy", link: "#" },
    ],
  },
  {
    title: "Tam Artsy",
    items: [
      { text: "Sobre a Marca", link: "/sobre" },
      { text: "Fale Conosco", link: "/contato" },
      { text: "Instagram", link: "https://www.instagram.com/tam.artsy/" },
    ],
  },
];

const Footer = ({ className }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={cn("bg-black text-white pt-20 pb-10 px-6", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-6">
            <NewsletterSection />
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="space-y-6">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.text}>
                      <Link 
                        href={item.link} 
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Social</h2>
            <div className="flex gap-4">
              <Link 
                href="https://www.instagram.com/tam.artsy/" 
                target="_blank"
                className="flex size-10 items-center justify-center rounded-full border border-zinc-800 hover:bg-white hover:text-black transition-all"
              >
                <Instagram className="size-5" />
              </Link>
              <button 
                onClick={scrollToTop}
                className="flex size-10 items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-500 transition-all"
              >
                <ArrowUp className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-8">
          <div className="flex items-center gap-8">
            <Separator className="bg-zinc-800 flex-1" />
            <div className="opacity-50 grayscale hover:grayscale-0 transition-all">
              <Logo />
            </div>
            <Separator className="bg-zinc-800 flex-1" />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600 md:flex-row">
            <p>© 2026 Tam Artsy </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

const NewsletterSection = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data) => {
    console.log("Newsletter:", data);
    reset();
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-black tracking-tighter">
        Fique por dentro.
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="relative mt-4 max-w-sm">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="seu@email.com"
              className="h-12 rounded-full border-zinc-800 bg-zinc-900/50 pr-12 text-white placeholder:text-zinc-600 focus:border-primary"
            />
          )}
        />
        <Button 
          type="submit" 
          size="icon" 
          className="absolute right-1 top-1 size-10 rounded-full"
        >
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  );
};

export { Footer };
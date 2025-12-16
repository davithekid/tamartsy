"use client";
import { Sparkles, HeartHandshake, Leaf, Rocket, TwitterIcon, DribbbleIcon, TwitchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const teamMembers = [
  {
    name: "Tamires",
    title: "Fundadora & CEO",
    bio: "Minha missão é transformar a tradição do crochê em peças modernas e cheias de personalidade. Cada bolsa ou acessório é feito com fios de alta qualidade e dedicação total para garantir que você tenha um item único.",
    imageUrl: "/fundadora.jpeg",
  },
];

const Services4Content = () => {
  const services = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Estilo e Tendência",
      description:
        "Peças de crochê que são tendências de moda, elevando o estilo autêntico do nosso público com itens exclusivos e 'aesthetic'.",
      items: ["Lançamento de Coleções", "Crochê 'Instagramável'", "Peças Versáteis"],
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Conexão e Comunidade",
      description:
        "Construir uma comunidade engajada, promovendo a valorização do 'feito à mão' entre os jovens.",
      items: ["Conteúdo de DIY/Crochê", "Interação nas Redes", "Experiência Personalizada"],
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Valorização do Artesanal",
      description:
        "Destacar o processo artesanal, a sustentabilidade e a qualidade única do crochê, incentivando o consumo consciente.",
      items: ["Transparência no Processo", "Materiais de Qualidade", "Peças Duráveis"],
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Crescimento de Marca",
      description:
        "Expandir o alcance da marca no mercado jovem, garantindo uma presença digital forte e eficiente.",
      items: ["Parcerias com Influencers", "Otimização para Mobile", "Novos Nichos de Produtos"],
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold tracking-tight text-center lg:text-left pt-6 lg:pt-0">
        Nossos Objetivos na Missão Crochê
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-border p-6 rounded-xl transition-shadow hover:shadow-lg hover:shadow-primary/10 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-3">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold">{service.title}</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              {service.description}
            </p>
            <ul className="space-y-1 text-sm pt-2">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2 text-muted-foreground/80">
                  <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamContent = () => {
  const member = teamMembers[0];
  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="w-full max-w-xs aspect-square overflow-hidden rounded-full lg:rounded-xl shadow-xl">
          <Image
            src={member.imageUrl}
            alt={member.name}
            className="w-full h-full object-cover bg-secondary"
            width={300}
            height={300}
          />
        </div>

        <div className="mt-6 w-full">
          <h3 className="text-3xl font-semibold tracking-tight">{member.name}</h3>
          <p className="text-primary font-medium text-lg">{member.title}</p>
          <p className="mt-4 text-base text-muted-foreground">
            {member.bio}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center lg:justify-start gap-2.5">
          <Button size="icon" variant="outline" asChild>
            <Link href="#" target="_blank">
              <TwitterIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
          </Button>
          <Button size="icon" variant="outline" asChild>
            <Link href="#" target="_blank">
              <DribbbleIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
          </Button>
          <Button size="icon" variant="outline" asChild>
            <Link href="#" target="_blank">
              <TwitchIcon className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
          </Button>
        </div>
      </div>

    </div>
  );
};
const CEOAndObjectives = () => {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-center text-primary text-sm font-semibold uppercase">
          Sobre a Tam Artsy!
        </p>
        <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Conheça Nossa Missão
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Nascido de um simples hobby, hoje eu amo fazer outras pessoas felizes e estilosas a partir do crochê.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
        <div className="lg:sticky lg:top-8 h-fit">
          <TeamContent />
        </div>
        <div>
          <Services4Content />
        </div>
      </div>
    </div>
  );
};

export default CEOAndObjectives;
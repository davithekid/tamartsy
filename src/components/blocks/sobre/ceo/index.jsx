import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; // Importação do Card para o testemunho
import { DribbbleIcon, TwitchIcon, TwitterIcon, Quote } from "lucide-react"; // Adicionada a Lucide 'Quote'
import Image from "next/image";
import Link from "next/link";
import { Services4 } from "../objetivos";

const teamMembers = [
  {
    name: "Tamires",
    title: "Fundadora & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    imageUrl:
      "/bolsa.jpeg",
  },
];

const FounderQuote = () => {
  return (
    <Card className="col-span-2 h-full flex flex-col justify-between p-6 bg-primary/5 border-primary/20 shadow-lg">
      <CardContent className="p-0 space-y-4">
        <Quote className="h-8 w-8 text-primary/80" />
        <p className="text-xl sm:text-2xl font-serif leading-relaxed text-foreground">
          "A Tam Artsy nasceu de um desejo profundo de unir a **arte do crochê com a moda moderna**. Meu objetivo não é apenas vender uma peça, mas sim entregar uma **extensão do seu estilo**, algo que carregue a energia e a história de ter sido feito à mão. Cada ponto é um passo na realização de um sonho, e a escala para mim é ver o crochê feito com paixão se espalhando pelo Brasil."
        </p>
        <div className="pt-4">
          <p className="font-semibold text-lg text-primary">Tamires</p>
          <p className="text-sm text-muted-foreground">Fundadora e Designer Chefe</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Team = () => {
  return (
    <div
      className="flex flex-col justify-center py-8 sm:py-12 px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-16">
      <div className="text-center max-w-2xl mx-auto">
        <b
          className="text-center text-muted-foreground text-sm font-semibold uppercase">
          Sobre a tam artsy!
        </b>
        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter">
          Conheça por trás das telas!
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground">
          Nascido de um simples hobby, hoje eu amo fazer outras pessoas felizes e estilosas a partir do crochê.
        </p>
      </div>
      
      {/* O grid foi ajustado para ter 1 coluna em mobile e 2 colunas em telas grandes */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
        
        {/* Coluna 1: Informações da Tamires */}
        {teamMembers.map((member) => (
          <div key={member.name}>
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="w-full aspect-square rounded-lg object-cover bg-secondary"
              width={500}
              height={500} />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>
            {/* O bio original de emprego foi substituído por uma descrição mais adequada ao crochê */}
            <p className="mt-3 text-muted-foreground">
              Minha missão é transformar a tradição do crochê em peças modernas e cheias de personalidade. 
              Cada bolsa ou acessório é feito com fios de alta qualidade e dedicação total para garantir que você tenha um item único.
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              {/* Botões de Mídias Sociais */}
              <Button
                className="bg-accent hover:bg-accent text-muted-foreground shadow-none"
                size="icon"
                asChild>
                <Link href="#" target="_blank">
                  <TwitterIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild>
                <Link href="#" target="_blank">
                  <DribbbleIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild>
                <Link href="#" target="_blank">
                  <TwitchIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
            </div>
          </div>
        ))}

        {/* Coluna 2: Testemunho (Card de Citação) */}
        <Services4/>
      </div>
    </div>
  );
};

export default Team;
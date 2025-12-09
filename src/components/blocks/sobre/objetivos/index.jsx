"use client";
import { Sparkles, HeartHandshake, Leaf, Rocket } from "lucide-react";

const Services4 = () => {
  const services = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Estilo e Tendência",
      description:
        "Oferecer peças de crochê que são tendências de moda, elevando o estilo autêntico do nosso público com itens exclusivos e 'aesthetic'.",
      items: ["Lançamento de Coleções Sazonais", "Crochê 'Instagramável'", "Peças Versáteis (Bolsas, Tops, Headpieces)"],
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Conexão e Comunidade",
      description:
        "Construir uma comunidade engajada, promovendo a criatividade e a valorização do 'feito à mão' entre os jovens.",
      items: ["Conteúdo de DIY/Crochê", "Interação nas Redes Sociais (TikTok/Insta)", "Experiência de Compra Personalizada"],
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Valorização do Artesanal",
      description:
        "Destacar o processo artesanal, a sustentabilidade e a qualidade única do crochê, incentivando o consumo consciente.",
      items: ["Transparência no Processo", "Foco em Materiais de Qualidade", "Peças Duráveis e Exclusivas"],
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Crescimento de Marca",
      description:
        "Expandir o alcance da marca no mercado jovem, garantindo uma presença digital forte e eficiente.",
      items: ["Parcerias com Influencers", "Otimização para Mobile (E-commerce)", "Novos Nichos de Produtos (Acessórios, Casa)"],
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

export { Services4 };
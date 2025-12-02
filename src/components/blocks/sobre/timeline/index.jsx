import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react"; // Building2 não é mais necessário

const experiences = [
  {
    title: "Prefácio",
    period: "2020 - 2024",
    description:
      "Tudo começou como um hobby relaxante. O crochê deixou de ser apenas um passatempo e se tornou uma paixão genuína, onde cada laçada e cada ponto representavam uma forma de arte e expressão pessoal.",
  },
  {
    title: "O Salto para o Empreendedorismo",
    period: "2025",
    description:
      "Percebendo o carinho e a procura por peças exclusivas feitas à mão, decidi transformar a paixão em um negócio. Este foi o momento de planejar e estruturar a tam artsy, definindo nosso propósito: oferecer produtos únicos, duráveis e cheios de história, que resgatam o valor do feito à mão.",
  },
  {
    title: "Lançamento da Loja Virtual",
    period: "12/2025",
    description:
      "Com a ajuda de amigos e muita dedicação, a loja virtual saiu do papel! Hoje, a 'experiência' é colocar toda a técnica e carinho na curadoria e confecção de cada produto. Priorizamos a **qualidade dos materiais**, o **acabamento impecável** e a **sustentabilidade**, garantindo que cada peça de crochê chegue até você como um presente especial.",
  },
];


export default function Timeline() {
  return (
    <div className="max-w-(--breakpoint-sm) mx-auto py-12 md:py-20 px-6">
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />

        {/* Ajuste na desestruturação: 
          - Removido 'company' e 'technologies'.
          - Adicionado 'keywords'.
        */}
        {experiences.map(({ description, period, keywords, title }, index) => (
          <div key={index} className="relative pl-8 pb-12 last:pb-0">
            {/* Timeline dot */}
            <div
              className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background ring-8 ring-background" />

            {/* Content */}
            <div className="space-y-3">
              {/* Removida a seção de 'company' para focar na jornada,
                mantendo a bolha visual da linha do tempo.
              */}
              
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.01em]">
                  {title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{period}</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                {description}
              </p>
              

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
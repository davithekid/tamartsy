import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Prefácio",
    period: "2020 - 2024",
    description:
      "Tudo começou como um hobby relaxante. Com o tempo, o crochê deixou de ser apenas um passatempo e virou uma paixão — uma forma de arte, expressão e criatividade.",
  },
  {
    title: "O Salto",
    period: "2025",
    description:
      "Com o carinho e a procura por peças feitas à mão, a paixão virou propósito. Foi o momento de planejar, estruturar e dar forma à Tam Artsy, valorizando o artesanal e o feito com cuidado.",
  },
  {
    title: "A loja saiu do papel",
    period: "01/2026",
    description:
      "Um novo espaço pra conhecer, compartilhar e se apaixonar pelos nossos produtos.",
  },
];



export default function Timeline() {
  return (
    <div className="max-w-(--breakpoint-sm) mx-auto py-12 md:py-20 px-6">
      <div className="relative ml-3">
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />
        {experiences.map(({ description, period, keywords, title }, index) => (
          <div key={index} className="relative pl-8 pb-12 last:pb-0">
            <div
              className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background ring-8 ring-background" />

            <div className="space-y-3">
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
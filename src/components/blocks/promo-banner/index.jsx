import { Truck } from "lucide-react";

import { cn } from "@/lib/utils";

import { Progress } from "@/components/ui/progress";

const PromoBanner1 = ({
  threshold = 75,
  currentAmount = 45,
  className
}) => {
  const progress = Math.min((currentAmount / threshold) * 100, 100);
  const remaining = threshold - currentAmount;
  const hasQualified = remaining <= 0;

  return (
    <div className={cn("w-full bg-primary text-primary-foreground", className)}>
      <div className="flex items-center justify-center gap-3 py-2.5 mt-16">
        <Truck className="size-4 shrink-0" />
        {hasQualified ? (
          <p className="text-sm font-medium">
            🎉 You&apos;ve unlocked FREE shipping!
          </p>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <p className="text-sm flex justify-center">
              Coleção de Carnaval ja Disponivel!
            </p>

          </div>
        )}
      </div>
    </div>
  );
};

export { PromoBanner1 };


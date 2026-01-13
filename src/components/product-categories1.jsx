import { cn } from "@/lib/utils";

const PRODUCT_CATEGORIES = {
  title: "Bolsas",
  summary: "Design em crochê, feito à mão, pra quem ama se destacar.",
  image: {
    src: "./bolsa.png",
    srcset:
      "./bolsa-roxa.jpeg",
    alt: "",
    sizes: "(min-width: 992px) 992px, 100vw",
  },
};

const ProductCategories1 = ({
  title = PRODUCT_CATEGORIES.title,
  summary = PRODUCT_CATEGORIES.summary,
  image = PRODUCT_CATEGORIES.image,
  className
}) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="">
        <div
          className="grid grid-cols-1 overflow-hidden rounded-xl bg-muted max-md:grid-rows-[repeat(2,minmax(13.75rem,1fr))] md:min-h-91.5 md:grid-cols-2">
          <div
            className="flex h-full place-content-center place-items-center px-20 py-8">
            <div className="flex flex-col gap-3">
              <h1
                className="animate-in text-center text-4xl font-bold leading-relaxed duration-600 ease-in slide-in-from-bottom-50 fade-in">
                {title}
              </h1>
              <p
                className="animate-in text-center text-lg leading-normal text-balance duration-600 ease-in slide-in-from-bottom-50 fade-in">
                {summary}
              </p>
            </div>
          </div>
          <div className="relative h-full overflow-hidden">
            <img
              src={image.src}
              alt={image.src}
              srcSet={image.srcset}
              sizes={image.sizes}
              className="absolute inset-0 size-full origin-center animate-in object-cover object-center duration-600 ease-in zoom-in-140" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductCategories1 };

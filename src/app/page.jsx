import { Cta10 } from "@/components/blocks/cta";
import Testimonial04 from "@/components/blocks/feedbacks";
import Hero from "@/components/blocks/hero/hero";
import { Process1 } from "@/components/blocks/processo";
import { Industries1 } from "@/components/blocks/produtos";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mx-auto container">
        <Hero />
      </main>

      <section className="mx-auto container">
        <article>
          <Industries1 />
        </article>

        <article>
          <Process1 />
        </article>

        <article>
          <Testimonial04 />
        </article>
      </section>



      <Cta10 />
    </>
  );
}

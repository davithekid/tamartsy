import { Cta10 } from "@/components/blocks/home/cta";
import Testimonial04 from "@/components/blocks/home/feedbacks";
import Hero from "@/components/blocks/home/hero/hero";
import { Process1 } from "@/components/blocks/home/processo";
import { Industries1 } from "@/components/blocks/home/produtos";
import Footer from "@/components/footer/footer";
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

      <section className="mx-auto container bg-url">
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

      <footer>
        <Footer />
      </footer>
    </>
  );
}

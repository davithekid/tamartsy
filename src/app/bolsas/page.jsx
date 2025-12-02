import StorefrontHero2 from "@/components/blocks/bolsas/hero";
import ProductCard2 from "@/components/blocks/bolsas/produtos";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/ui/navbar";

export default function Bolsas() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <StorefrontHero2 />
            </main>
            <section>
                <ProductCard2 />
            </section>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}
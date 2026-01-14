import VariadosHero from "@/components/blocks/variados/hero";
import VariadosProdutos from "@/components/blocks/variados/products";
import {Footer} from "@/components/footer/footer";
import Navbar from "@/components/ui/navbar";

export default function Variados() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <VariadosHero />
            </main>

            <section>
                <VariadosProdutos />
            </section>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
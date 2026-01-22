import UnissexHero from "@/components/blocks/unissex/hero";
import UnissexProdutos from "@/components/blocks/unissex/produtos";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/ui/navbar";

export default function UnissexPage() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <UnissexHero />
            </main>

            <section>
                <UnissexProdutos />
            </section>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}
import UnissexHero from "@/components/blocks/unissex/hero";
import UnissexProdutos from "@/components/blocks/unissex/produtos";
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
        </>
    )
}
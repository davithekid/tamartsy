import TopsHero from "@/components/blocks/tops/hero";
import TopProdutos from "@/components/blocks/tops/produtos";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/ui/navbar";

export default function Tops() {
    return (
        <>

        <header>
            <nav>
                <Navbar/>
            </nav>

        <main>
            <TopsHero/>
        </main>

        <section>
            <TopProdutos/>
        </section>
            <footer>
                <Footer/>
            </footer>
        </header>
        </>
    )
}
import HeadpieceHero from "@/components/blocks/headpiece/hero";
import HeadpieceProducts from "@/components/blocks/headpiece/products/page";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/ui/navbar";

export default function Headpiece() {
    return (
        <>
            <nav>
                <header>
                    <Navbar />
                </header>

                <main>
                    <HeadpieceHero />
                </main>

                <section>
                    <HeadpieceProducts/>
                </section>
                <footer>
                    <Footer />
                </footer>
            </nav>
        </>
    )
}
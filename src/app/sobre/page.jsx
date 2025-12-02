import Team from "@/components/blocks/sobre/ceo";
import Timeline from "@/components/blocks/sobre/timeline";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/ui/navbar";

export default function Sobre() {
    return (
        <>
            <nav>
                <header>
                    <Navbar />
                </header>
            </nav>

            <section>
                <Team />
            </section>

            <section>
                <Timeline />
            </section>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
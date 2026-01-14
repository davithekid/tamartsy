import CEOAndObjectives from "@/components/blocks/sobre/ceo";
import Timeline from "@/components/blocks/sobre/timeline";
import {Footer} from "@/components/footer/footer";
import Navbar from "@/components/ui/navbar";

export default function Sobre() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <section>
                <CEOAndObjectives />
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
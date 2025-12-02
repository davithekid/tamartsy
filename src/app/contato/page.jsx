import Contact from "@/components/blocks/contato/form";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/ui/navbar";

export default function Contato(){
    return (
        <>
        <nav>
            <header>
                <Navbar/>
            </header>
        </nav>

        <section>
            <Contact/>
        </section>

        <footer>
            <Footer/>
        </footer>
        </>
    )
} 

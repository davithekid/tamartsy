import Products from "@/components/blocks/products/hero";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/ui/navbar";

export default function Produtos() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main className="py-12">
                <Products />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}
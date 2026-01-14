import { notFound } from 'next/navigation'
import { products } from '@/lib/produtos'
import Navbar from '@/components/ui/navbar'
import {Footer} from '@/components/footer/footer'
import ProdutosOverview from '@/components/blocks/products/overview'

export default async function BolsaPage({ params }) {
    const resolvedParams = await params

    if (!resolvedParams?.id) {
        notFound()
    }
    const produtoId = Number(resolvedParams.id)
    const produto = products.find(b => b.id === produtoId)

    if (!produto) {
        notFound()
    }
    return (<>
        <header>
            <nav>
                <Navbar />
            </nav>
        </header>

        <main className='py-16'>
            <ProdutosOverview product={produto} />
        </main>

        <footer>
            <Footer />
        </footer>
    </>
    )
}
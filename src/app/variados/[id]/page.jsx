import { notFound } from 'next/navigation'
import { variados } from '@/lib/variados'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/footer/footer'
import VariadosOverview from '@/components/blocks/variados/overview'

export default async function BolsaPage({ params }) {
    const resolvedParams = await params

    if (!resolvedParams?.id) {
        notFound()
    }
    const variadoId = Number(resolvedParams.id)
    const variado = variados.find(b => b.id === variadoId)

    if (!variado) {
        notFound()
    }
    return (<>
        <header>
            <nav>
                <Navbar />
            </nav>
        </header>

        <main className='py-16'>
            <VariadosOverview product={variado} />
        </main>

        <footer>
            <Footer />
        </footer>
    </>
    )
}
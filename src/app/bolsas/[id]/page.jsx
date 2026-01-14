import { notFound } from 'next/navigation'
import { bolsas } from '@/lib/bolsas'
import ProductOverview1 from '@/components/blocks/bolsas/overview'
import Navbar from '@/components/ui/navbar'
import {Footer} from '@/components/footer/footer'

export default async function BolsaPage({ params }) {
    const resolvedParams = await params

    if (!resolvedParams?.id) {
        notFound()
    }
    const bolsaId = Number(resolvedParams.id)
    const bolsa = bolsas.find(b => b.id === bolsaId)

    if (!bolsa) {
        notFound()
    }
    return (<>
        <header>
            <nav>
                <Navbar />
            </nav>
        </header>

        <main className='py-16'>
            <ProductOverview1 product={bolsa} />
        </main>

        <footer>
            <Footer />
        </footer>
    </>
    )
}
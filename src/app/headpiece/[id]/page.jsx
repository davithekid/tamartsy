import { notFound } from 'next/navigation'
import { headpieces } from '@/lib/headpieces'
import Navbar from '@/components/ui/navbar'
import {Footer} from '@/components/footer/footer'
import HeadpieceOverview from '@/components/blocks/headpiece/overview'

export default async function BolsaPage({ params }) {
    const resolvedParams = await params

    if (!resolvedParams?.id) {
        notFound()
    }
    const headpieceId = Number(resolvedParams.id)
    const headpiece = headpieces.find(b => b.id === headpieceId)

    if (!headpiece) {
        notFound()
    }
    return (<>
        <header>
            <nav>
                <Navbar />
            </nav>
        </header>

        <main className='py-16'>
            <HeadpieceOverview product={headpiece} />
        </main>

        <footer>
            <Footer />
        </footer>
    </>
    )
}
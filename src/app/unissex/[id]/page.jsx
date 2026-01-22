import { notFound } from 'next/navigation'
import { unissexs } from '@/lib/unissex'
import Navbar from '@/components/ui/navbar'
import {Footer} from '@/components/footer/footer'
import UnissexOverview from '@/components/blocks/unissex/overview/page'

export default async function TopPage({ params }) {
    const resolvedParams = await params

    if (!resolvedParams?.id) {
        notFound()
    }
    const unissexId = Number(resolvedParams.id)
    const unissex = unissexs.find(t => t.id === unissexId)

    if (!unissex) {
        notFound()
    }
    return (<>
        <header>
            <nav>
                <Navbar />
            </nav>
        </header>

        <main className='py-16'>
            <UnissexOverview product={unissex} />
        </main>

        <footer>
            <Footer />
        </footer>
    </>
    )
}
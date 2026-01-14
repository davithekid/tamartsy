import { notFound } from 'next/navigation'
import { tops } from '@/lib/tops'
import Navbar from '@/components/ui/navbar'
import {Footer} from '@/components/footer/footer'
import TopOverview from '@/components/blocks/tops/overview/page'

export default async function TopPage({ params }) {
    const resolvedParams = await params

    if (!resolvedParams?.id) {
        notFound()
    }
    const topId = Number(resolvedParams.id)
    const top = tops.find(t => t.id === topId)

    if (!top) {
        notFound()
    }
    return (<>
        <header>
            <nav>
                <Navbar />
            </nav>
        </header>

        <main className='py-16'>
            <TopOverview product={top} />
        </main>

        <footer>
            <Footer />
        </footer>
    </>
    )
}
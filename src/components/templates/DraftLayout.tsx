import DraftHeader from '@/components/organisms/DraftHeader'
import { Outlet } from 'react-router-dom'

const DraftLayout = () => {
    return (
        <div className={'grow flex flex-col'}>
            <DraftHeader />
            <main className='pt-14 grow flex flex-col'>
                <Outlet />
            </main>
        </div>
    )
}

export default DraftLayout

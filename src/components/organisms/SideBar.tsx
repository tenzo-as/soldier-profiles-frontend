import { IoHome } from 'react-icons/io5'
import Burger from '../atoms/Burger'
import { useState } from 'react'
import clsx from 'clsx'
import SideBarButton from '../atoms/SideBarButton'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleToggle = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <aside
            className={clsx(
                'flex flex-col w-full bg-blue-400 fixed top-0 bottom-0 left-0 h-full transition-all duration-300',
                isOpen ? 'max-w-[280px]' : 'max-w-14',
            )}
        >
            <Burger isOpen={isOpen} onClick={handleToggle} />
            <div className={'mt-4'}>
                {navigation.map(link => (
                    <SideBarButton key={link.name} icon={link.icon} url={link.url}>
                        {link.name}
                    </SideBarButton>
                ))}
            </div>
        </aside>
    )
}

export default SideBar

const navigation = [
    {
        icon: <IoHome />,
        name: 'Панель',
        url: '/',
    },
]

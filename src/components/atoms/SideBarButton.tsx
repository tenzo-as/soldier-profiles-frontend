import type { ReactNode } from 'react'
import Button from './Button'
import clsx from 'clsx'

type SideBarButtonProps = {
    className?: string
    icon: ReactNode
    url: string
    children: ReactNode
}

const SideBarButton = ({ className, icon, url, children }: SideBarButtonProps) => {
    return (
        <Button
            className={clsx('overflow-hidden flex-nowrap', className)}
            size={'p-[17px] text-[22px]'}
            component={'a'}
            href={url}
        >
            <div className={'bg-inherit'}>{icon}</div>
            <p className={'ml-5 mt-[2px] whitespace-nowrap leading-[20px] text-[16px] font-[600]'}>
                {children}
            </p>
        </Button>
    )
}

export default SideBarButton

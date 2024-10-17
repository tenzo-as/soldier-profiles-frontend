import type { ReactNode } from 'react'
import { clsx } from 'clsx'

type TagsProps = {
    className?: string
    children: ReactNode
}

const Tags = ({ className, children }: TagsProps) => {
    return (
        <div
            className={clsx('grid gap-5 items-end justify-center', className)}
            style={{
                gridTemplateColumns: 'auto auto auto auto',
            }}
        >
            {children}
        </div>
    )
}

export default Tags

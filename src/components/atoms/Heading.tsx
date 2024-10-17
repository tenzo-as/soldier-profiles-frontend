import clsx from 'clsx'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = {
    className?: string
    component?: Tag
    variant?: Tag
    children?: ReactNode
}

const Heading = ({ variant = 'h1', component, className, children }: HeadingProps) => {
    const Component = component || variant

    return (
        <Component className={twMerge(clsx('font-bold', Variant[variant]), className)}>
            {children}
        </Component>
    )
}

export default Heading

const Variant = {
    h1: 'text-5xl',
    h2: 'text-4xl',
    h3: 'text-3xl',
    h4: 'text-2xl',
    h5: 'text-xl',
    h6: 'text-lg',
}

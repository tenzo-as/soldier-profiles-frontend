import type { MouseEventHandler, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
    className?: string
    size?: 'small' | 'medium' | 'large' | string
    palette?: 'base' | 'primary'
    borderRadius?: string
    children: ReactNode
} & (ButtonElement | AnchorElement)

type ButtonElement = {
    component?: 'button'
    href?: undefined
    onClick?: MouseEventHandler<HTMLButtonElement>
}

type AnchorElement = {
    component?: 'a'
    href: string
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

const Button = ({
    className,
    onClick,
    component: Component = 'button',
    href,
    palette = 'primary',
    size = 'medium',
    borderRadius = 'rounded-lg',
    children,
}: ButtonProps) => {
    return (
        <Component
            className={twMerge(
                clsx(
                    'flex items-center justify-center cursor-pointer transition-all duration-300 font-semibold text-nowrap text-center',
                    borderRadius,
                    Size.get(size) || size,
                    Palette[palette],
                ),
                className,
            )}
            href={href}
            // @ts-ignore
            onClick={onClick}
        >
            {children}
        </Component>
    )
}

export default Button

const Palette = {
    base: '',
    primary: 'bg-blue-400 hover:bg-blue-500 text-white',
}

const Size = new Map([
    ['small', ''],
    ['medium', 'py-2 px-4 text-4 leading-6'],
    ['large', ''],
])

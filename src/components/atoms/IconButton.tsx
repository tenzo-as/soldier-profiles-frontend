import type { MouseEventHandler, ReactNode } from 'react'
import { clsx } from 'clsx'
import TouchRipple from '@mui/material/ButtonBase/TouchRipple'

type IconButtonProps = {
    className?: string
    size?: 'small' | 'medium' | 'large' | string
    palette?: 'base' | 'primary'
    borderRadius?: 'rounded-full' | 'rounded-lg' | 'none' | string
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: ReactNode
}

const IconButton = ({
    className,
    onClick,
    palette = 'primary',
    size = 'medium',
    borderRadius = 'rounded-lg',
    children,
}: IconButtonProps) => {
    return (
        <button
            className={clsx(
                'flex items-center justify-center cursor-pointer transition-all duration-300',
                borderRadius,
                Size.get(size) || size,
                Palette[palette],
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default IconButton

const Palette = {
    base: '',
    primary: 'bg-blue-400 hover:bg-blue-500 text-white',
}

const Size = new Map([
    ['small', ''],
    ['medium', 'p-[8px] text-[20px] leading-none'],
    ['large', 'p-[10px] text-[20px] leading-none'],
])

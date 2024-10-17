import type { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const TextFieldHelperText = ({ children }: Props) => (
    <div className='label'>
        <span className='label-text-alt'>{children}</span>
    </div>
)

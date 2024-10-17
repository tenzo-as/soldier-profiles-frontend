import type { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const TextFieldLabel = ({ children }: Props) => (
    <div className='label'>
        <span className='label-text'>{children}</span>
    </div>
)

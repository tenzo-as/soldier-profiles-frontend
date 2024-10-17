import { type ChangeEvent } from 'react'
import { clsx } from 'clsx'

type TextAreaProps = {
    className?: string
    value?: string
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
    placeholder?: string
    label?: string
    maxWidth?: 'none' | '2xl' | number
}

const TextArea = ({ className, label, maxWidth = '2xl', ...props }: TextAreaProps) => {
    return (
        <label className={clsx('form-control', className)}>
            {label && (
                <div className='label'>
                    <span className='label-text'>{label}</span>
                </div>
            )}
            <textarea
                className={clsx(
                    'textarea textarea-secondary textarea-bordered h-32 w-full leading-6',
                    `max-w-${typeof maxWidth === 'number' ? `[${maxWidth}]` : maxWidth}`,
                    className,
                )}
                {...props}
            />
        </label>
    )
}

export default TextArea

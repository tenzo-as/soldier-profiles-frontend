import { type ChangeEvent, forwardRef } from 'react'
import { clsx } from 'clsx'
import { TextFieldLabel as Label } from './TextFieldLabel'
import { TextFieldHelperText as HelperText } from './TextFieldHelperText'

type Props = {
    className?: string
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void
    placeholder?: string
    label?: string
    helperText?: string
    start?: string
    size?: InputSize
}

export const TextField = forwardRef<HTMLInputElement, Props>(
    ({ className, onChange, label, helperText, start, size = 'md', ...props }, ref) => {
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            const target = event.currentTarget

            if (onChange) onChange(event, target.value)
        }

        return (
            <label className={clsx('form-control', className)}>
                {label && <Label>{label}</Label>}
                <div
                    className={clsx(
                        'flex items-center gap-2',
                        'input input-bordered w-full',
                        inputSize[size],
                    )}
                >
                    {start}
                    <input className={'grow'} onChange={handleChange} ref={ref} {...props} />
                </div>
                {helperText && <HelperText>{helperText}</HelperText>}
            </label>
        )
    },
)

type InputSize = 'xs' | 'sm' | 'md' | 'lg'

const inputSize: Record<InputSize, string> = {
    xs: 'input-xs',
    sm: 'input-sm',
    md: 'input-md h-10',
    lg: 'input-lg',
}

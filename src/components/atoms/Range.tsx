import type { ChangeEvent } from 'react'

type RangeProps = {
    value?: number
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: number) => void
    min?: number
    max?: number
    stepSize?: number
    label?: string
    className?: string
}

const Range = ({
    value = 50,
    onChange,
    min = 0,
    max = 100,
    stepSize,
    label,
    className,
}: RangeProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.currentTarget.value)

        if (onChange) onChange(event, value)
    }

    return (
        <label className={className}>
            {label && (
                <div className={'label'}>
                    <span className={'label-text'}>{label}</span>
                    <span className={'label-text'}>{value}</span>
                </div>
            )}
            <input
                className='range range-xs'
                type='range'
                value={value}
                min={min}
                max={max}
                step={stepSize}
                onChange={handleChange}
            />
        </label>
    )
}

export default Range

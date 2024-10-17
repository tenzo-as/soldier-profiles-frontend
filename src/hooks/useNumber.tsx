import { type ChangeEvent, useState } from 'react'

export const useNumber = (defaultValue: number = 0) => {
    const [value, setValue] = useState<number>(defaultValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.currentTarget.value)

        setValue(value)
    }

    const reset = () => setValue(defaultValue)

    return {
        value,
        setValue,
        handleChange,
        reset,
    }
}

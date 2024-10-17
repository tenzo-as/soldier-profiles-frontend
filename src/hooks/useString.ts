import { type ChangeEvent, useState } from 'react'

export const useString = (defaultValue: string = '') => {
    const [value, setValue] = useState<string>(defaultValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.currentTarget.value

        setValue(value)
    }

    const clear = () => setValue('')

    const reset = () => setValue(defaultValue)

    return {
        value,
        setValue,
        handleChange,
        clear,
        reset,
    }
}

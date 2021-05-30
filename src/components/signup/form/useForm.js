import { useState } from "react"


export const UseForm = (initialState) => {
    const [value, setValue] = useState(initialState)

    return [
        value,
        (event) => {
            setValue({
                ...value,
                [event.target.name] : event.target.value
            })
        }
    ]
}
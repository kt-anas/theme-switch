import { useState } from "react"
export const useForm = (initalValue)=>{
    const [value,setValue] = useState(initalValue)

    return [value,(event)=>{
        setValue({
           ...value, 
           [event.target.name]:event.target.value,
        })
    }]
}
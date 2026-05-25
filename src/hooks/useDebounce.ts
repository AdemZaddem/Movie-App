import { useEffect, useState } from "react";

export function useDebounce(text:string,delay:number):string{
    const [value,setValue] = useState(text)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setValue(text)
        },delay)

        return ()=>clearTimeout(timer)
    },[text,delay])

    return value
}
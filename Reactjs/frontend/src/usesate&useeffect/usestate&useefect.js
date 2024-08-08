import { useState } from "react"

export const UseStateFunction=()=>{
    const [count,setCount]=useState(0)

    return(
        <>
        <h2>My count is : {count}</h2>
        </>
    )
}
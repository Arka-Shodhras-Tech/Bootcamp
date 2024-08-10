import { useEffect, useState } from "react"
import { Props } from "../props/props"

export const UseStateFunction=()=>{
    const [count,setCount]=useState(0)

    const Count=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        setCount(count+1)
    },[])

    return(
        <>
        <h2>My count is : {count}</h2>
        <button onClick={()=>Count()}>Update count</button>


        <Props count={count}/>

        
        </>
    )
}
import { useState } from "react"

export const Conditional=()=>{
    const [signin,setSignin]=useState(false)
    return(
        <>
        {
            signin?<h1>Hello world! signin the student</h1>:<h1>Hello world! signup the student</h1>
        }
        <button onClick={()=>setSignin(signin?false:true)}>{signin?"signup":"signin"}</button>
        </>
    )
}
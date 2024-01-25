import { useState } from "react"
import { Outlet } from "react-router-dom"

const Navbar=({handleCitiName})=>{
    const [input,setInput]=useState("")
    return(
        <>
        <div className="navbar">
            <input type="text" className="search-input" placeholder="search for cities" onChange={(e)=>setInput(e.target.value)}  />
            <button onClick={()=>handleCitiName(input)}>Search</button>
        </div>
        <Outlet/>
        </>
        
    )
}
export default Navbar
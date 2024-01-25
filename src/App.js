import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLoaderData } from "react-router-dom"
import "./App.css"
import Navbar from "./Pages/Navbar/Navbar"
import Home, { homeLoader } from "./Pages/Home/Home"
import Error from "./Pages/Error/Error"
import NotFound from "./Pages/NotFound/NotFound"
import { useState } from "react"
// import Contact from ".//Contact/Contact"
const App=()=>{
  const [city,setCity]=useState("")
  const handleCitiName=(city)=>{
        setCity(city)
  }
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route path="/" element={<Navbar handleCitiName={handleCitiName} />} errorElement={<Error/>}>
          <Route index element={<Home city={city}/>} 
          loader={()=>homeLoader(city)}
           />
          
          {/* <Route path="Contact" element={<Contact/>}/> */}
       </Route>
       <Route path="*" element={<NotFound/>}/>
      </>
     

    )
  )
  return(
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
}
export default App
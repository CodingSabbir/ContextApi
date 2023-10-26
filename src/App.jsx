import { createContext, useState } from "react"
import Home from "./Components/Home"
import About from "./Components/About"
export const CatagoryContext=createContext()

function App() {
const [catagory,SetCatagory]=useState('Laptop')

  return (
    <>
      <CatagoryContext.Provider value={[catagory,SetCatagory]} >
      <Home/>
      <About/>
      </CatagoryContext.Provider>
    </>
  )
}

export default App

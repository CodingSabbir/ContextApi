import { createContext, useState } from "react"
import Home from "./Components/Home"
import About from "./Components/About"
export const CatagoryContext=createContext()

function App() {
const [count,setCount]=useState(0)

  return (
    <>
      <CatagoryContext.Provider value={[count,setCount]} >
      <Home/>
      <About/>
      </CatagoryContext.Provider>
    </>
  )
}

export default App

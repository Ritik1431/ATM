import React from "react"
import Homepage from "./Components/Homepage/Homepage"
import Loginpage from "./Components/Login/Loginpage"
import { BrowserRouter, Routes , Route } from "react-router-dom"
import Pin from "./Components/Pin/Pin"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage/>} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/pin" element={<Pin />} />
          
        </Routes>         
      </BrowserRouter>
    </>
  )
}

export default App

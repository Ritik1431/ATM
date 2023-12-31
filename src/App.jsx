import React from "react"
import Homepage from "./Components/Homepage/Homepage"
import Loginpage from "./Components/Login/Loginpage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pin from "./Components/Pin/Pin"
import Withdrawl from "./Components/Withdrawl/Withdrawl"
import Cash from "./Components/Cash/Cash"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/pin" element={<Pin />} />
          <Route path="/withdrawl" element={<Withdrawl />} />
          <Route path="/Cash" element={<Cash/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

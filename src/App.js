
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/login.jsx"
import Signup from "./pages/signup.jsx"
import Landing from "./pages/landing.jsx"
import { useState } from "react"

function App()
{const [users,setusers] = useState(
  [
      {
          username:"Shahana",
          password:"Bash@786"
      }
    
  ])

  return(
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
        <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path='/landing' element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}
export default App

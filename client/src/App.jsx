import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Services from "./pages/Services"
import ErrorPage from "./pages/ErrorPage"
import Logout from "./pages/Logout"


import Navigation from "./components/Navigation"
import './App.css'
const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Navigation/>
        <Routes>
          {/* <div className="wrapper"> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

            <Route path="*" element={<ErrorPage/>} />
          
      {/* </div> */}
        </Routes>
        
        </BrowserRouter>
        
      
     
    </>
  )
}

export default App
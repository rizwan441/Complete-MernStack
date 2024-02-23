import { NavLink } from "react-router-dom"
import './navigation.css'
import {useAuth} from '../store/Auth'
const Navigation = () => {  
  const { isloggedin } = useAuth()
  console.log("status", isloggedin)
  
  const tokenData = localStorage.getItem('token')
    

  return (
      <div className="wrapper">
          <nav>
              <div className="logo">Rizwan</div>
              <ul className="list">    
                  <li><NavLink to='/'>Home</NavLink></li>
                  <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='services'>Services</NavLink></li>
          <li><NavLink to='contact'>Contact us</NavLink></li>

                          {/* <li><NavLink to='/logout'>Logout</NavLink></li> */}




          {
            tokenData? (<>
              <li><NavLink to='/logout'>Logout</NavLink></li>
           
            </>) : (
              <>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
                  
              </>
            )
          }
      
              
                
             
            
      
              
    
          
          
          
                                  
          
              </ul>
          </nav>
        
    </div>
  )
}

export default Navigation
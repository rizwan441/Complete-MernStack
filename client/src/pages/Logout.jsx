import { useEffect } from 'react'
import { useAuth } from '../store/Auth';
import { useNavigate} from 'react-router-dom'


const Logout = () => {
    const navigate = useNavigate();
    const HanldeCutton = () => {
        localStorage.removeItem('token');
        
        navigate('/login')
        console.log("token remove")
        
    }


    return (
        <>
            <button onClick={HanldeCutton}>Log Out</button>
            
        </>
   )
  
}

export default Logout
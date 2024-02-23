import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'
import { useAuth} from '../store/Auth'


const Register = () => {
  const [form, setform] = useState({
    username: "",
    email: "",
    password: "",
    phone:""
    
  })
  const hanldeChange = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setform({
      ...form,
      [name]: e.target.value
    })
    console.log(name)
    console.log(value)


    
  }
  const navigate = useNavigate()
  const  {storeTokenInLS} = useAuth()


  const hanleSubmit = async(e) => {
    e.preventDefault()
    console.log(form) 
    try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",        
      },
      body:JSON.stringify(form)
      
        })
      if (response.ok) {
        const res_data = await response.json()
        console.log(res_data.token)
        storeTokenInLS(res_data.token)

        navigate('/login')
       }
      console.log(response)
       setform({
      email: '',
      password: '',
      phone: " ",
      username:""
    }); 
      
    } catch (error) {
      console.log("first", error)
      
    }
  
    
  }



  return (
    <div>
      <div className="wrapper">
        <main>
          <div className="left">
            <img src="/arranging-files.svg" alt=""  />
          </div>
          <div className="right">
            <form onSubmit={hanleSubmit}>
              <label htmlFor="name">Name:</label><br/>
              <input type="text" name='username' placeholder='Username' required value={form.username} onChange={hanldeChange} /><br />
              <label htmlFor="email">Email:</label><br />
              <input type="email" name='email' placeholder='email' required  value={form.email} onChange={hanldeChange}></input><br /><br />
              <label htmlFor="password">Password:</label><br />
              <input type="password" name='password' id='pwd' placeholder='Password' required value={form.password} onChange={hanldeChange}></input><br /><br />
              <label htmlFor="phone">Phone:</label><br />
              <input type="number" required placeholder='Phone #' name='phone' value={form.phone} onChange={hanldeChange} id="phone" /><br />
              
              <button type='submit' className='btn regiseter' >Register</button>

              
            </form>
          </div>

        </main>
        
      </div>
    </div>
  )
}

export default Register
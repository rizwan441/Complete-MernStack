import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";


const Login = () => {
    const [form, setform] = useState({
    email: "",
    password: "",
   
    
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

  const {SetTokenToLS,isloggedin}  = useAuth()

  const hanleSubmit =  async (e) => {
    e.preventDefault()

    try {
       const response =  await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(form)
      
       })
      if (response.ok) {
        const resdata = await response.json();
        SetTokenToLS(resdata.token)
        isloggedin(true)
        navigate('/')

        
      }
      
    } catch (error) {
      console.log("erroe",error)
      
    }
   

    console.log(form) 
    setform({
      email: '',
      password: '',
     
    });
    
  }
  return (
    <div>
         <div className="wrapper">
        <main>
          <div className="left">
            <img src="./arranging-files.svg" alt=""/>
          </div>
          <div className="right">
            <form onSubmit={hanleSubmit}>
              <label htmlFor="email">Email:</label><br />
              <input type="email" name='email' placeholder='email' required  value={form.email} onChange={hanldeChange}></input><br /><br />
              <label htmlFor="password">Password:</label><br />
               <input type="password" name='password' id='pwd' placeholder='Password' required value={form.password} onChange={hanldeChange}></input><br /><br />

              
              
              <button type='submit' >Login</button>

              
            </form>
          </div>

        </main>
        
      </div>
    </div>
  )
}

export default Login
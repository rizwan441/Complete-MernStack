import { useState } from "react"
import { useAuth } from "../store/Auth"

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  })
  const { isUser } = useAuth()

  // const handleInputChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   setContact({
  //     ...contact, 
  //     [name] : value
  //   })
  //   console.log(contact)
    
  // }
  
  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log(isUser)
    if (contact.username !== "" && contact.email !== "" && contact.message !== "") {
      alert(contact)
      setContact(Contact)
        setContact({
      username: "",
      email: "",
      message: ""

    })
    }

    else (alert("Please fill out all fields"))

    setContact({
      username: "",
      email: "",
      message: ""

    })
  }
  // const submitForm = (e) => {
  //   e.preventDefault();
  //   console.log("first")
  //   console.log(isUser)
    
  // }
  return (
    <div>
      <h1 className="">Contact Me</h1>
      <form onSubmit={hanldeSubmit} >
        <input
          type="text"
          name="username"
          value={contact.username || ''}
          placeholder="Your Name"
          onChange={(e) => setContact({ ...contact, username: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={contact.email || ''}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        /><br />
        <input
          type="text"
          name="message"
          value={contact.message || ''}
          onChange={(e) => setContact({ ...contact, message: e.target.value })}
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
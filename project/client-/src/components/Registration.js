import React, { useState } from 'react'
import {useHistory,Link} from 'react-router-dom'
import { Container,Form,Button } from 'react-bootstrap'
const Registration = () => {
  const history = useHistory()
  const [user, setUser] = useState({
    name:"",email:"",password:"",userType:"Admin"
  })
  const [error, setError] = useState({ error: false, message: "" })
  const [isRegister, setIsRegister] = useState(false)
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
  }
  const submit = async (e) => {
    e.preventDefault()
    const { name, email, password, userType } = user
    if (name && email&& password&& userType) {
      const resp = await fetch("api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password, userType })
      })
      const res = await resp.json()
      if (resp.status === 200) {
        // alert("Registration Successfull")
        setError({ error: false, message: "" })
        setIsRegister(true)
      } else {
        setError({error:true,message:res.error})
      }
    } else {
      alert("All fields are required")
    }
  }
    return (
      <Container>
        <div className="form">
        <center><h1>Registration</h1></center>  
          <Form className="yellowBox">
            {
              error.error ? <center><h6 className="text-danger">{error.message}</h6></center> : ""}
            {
              (!error.error && isRegister) ? <center><h6 className="text-success">Registration Succeefull please 
              <Link to='/login'>login</Link></h6></center> : ""
            }
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                required
                onChange={handleInput}
                name="name"
                value={user.name}
              />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required 
                onChange={handleInput}
                name="email"
                value={user.email}
              />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
              type="password"
              placeholder="Password"
              required
              name="password"
                onChange={handleInput}
                value={user.password}
              />
              </Form.Group>
        <Form.Group className="mb-3" controlId="formUsertype">
          <Form.Label>Select User</Form.Label>
          <Form.Control
            required
            type="text"
            as="select"
            name="userType"
            onChange={handleInput}
            value={user.userType}    
          >
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="user">User</option>
          </Form.Control>
        
        </Form.Group>
        <Button variant="dark" type="submit" onClick={submit}>Register</Button>
        </Form>
      </div>
    </Container>
    )
  }
export default Registration;
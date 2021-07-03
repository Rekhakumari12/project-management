import React, { Component } from 'react'
import { Container,Form,Button } from 'react-bootstrap'
export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      error: "",
    }
    this.userType = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
  }
  login = async(e) => {
    e.preventDefault()
    let email = this.email.current.value;
    let userType = this.userType.current.value;
    let password = this.password.current.value;

    if (email && userType && password) {
      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email,password,userType
        })
      })
      const resp = await res.json()
      // console.log(res)
      if (res.status === 200) {
        alert("Login Successfull")
        this.props.history.push('/dashboard')
      } else {
        this.setState({error:resp.error})
      }
    } else {
      alert("All fields are required")
    }
  }
  render() {
    return (
      <Container>  
        <div className="form">
        <center><h1>Login</h1></center>    
          <Form className="yellowBox">
            {this.state.error ? <h6 className="text-danger">{this.state.error}</h6>:""}
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Email</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter email"
                required
                name="email"
                // onChange={this.getUserData}
                ref={this.email}
              />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
              type="password"
              placeholder="Password"
              required
              name="password"
              // onChange={this.getUserData}  
              ref={this.password}  
              />
              </Form.Group>
        <Form.Group className="mb-3" controlId="formUsertype">
          <Form.Label>Select User</Form.Label>
          <Form.Control
            required
            type="text"
            as="select"
            name="select"
            // onChange={this.getUserData} 
            ref={this.userType}    
          >
          <option value="1">Admin</option>
          <option value="2">Manager</option>
          <option value="3">User</option>
          </Form.Control>
        
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.login}>Login</Button>
        </Form>
      </div>
    </Container>
    )
  }
}

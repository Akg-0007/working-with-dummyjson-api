import React from 'react'
import  { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Login = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const nav=useNavigate();



    const handleLogin =  async (e) => {
        e.preventDefault()

        if(!username) {
          alert("Name field required")
          return ;
        } 
         if(!password) {
          alert("Password field required")
          return ;
         }
         const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: username,
              password:  password,
    })
  })
  const resp= await res.json();
  console.log(resp)
  if(resp.ok === false) {
    alert(resp.message)
    return
  }
  localStorage.setItem("username",username)
  localStorage.setItem("lname",resp.firstName)
  localStorage.setItem("email",resp.email)
  localStorage.setItem("image", resp.image)


//   localStorage.setItem(username,JSON.stringify({name: resp.firstName,email: resp.email,image: resp.image}))

  setUsername(username);
  nav("/Logout")
    }
    
  return (
    <div>
        <Card className='mx-auto mt-5'  style={{ width: '24rem'}}>
        <Card.Img variant="top" src="https://images.hdqwalls.com/wallpapers/across-the-spider-verse-c7.jpg" />

            <Card.Body>
                <Card.Title className='text-center mb-3 fs-2 fw-bold text-secondary'>LOGIN</Card.Title>
        <InputGroup className="mb-3">
        <InputGroup.Text   id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          type='text'
          onChange={(e)=>setUsername(e.target.value)}
          
        />
      </InputGroup>
      <InputGroup className="mb-3" >
        <InputGroup.Text  id="basic-addon2">*</InputGroup.Text>
        <Form.Control
          placeholder="Password"
           aria-label="Password"
           type='password'
           onChange={(e)=>setPassword(e.target.value)}
        />
      </InputGroup>
      </Card.Body>
      <Button className='mb-0' variant="outline-secondary" onClick={handleLogin}>Login</Button>{' '}
      </Card>
      

    </div>
  )
}

export default Login;
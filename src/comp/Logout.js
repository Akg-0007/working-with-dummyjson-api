import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const[data,Setdata]=useState();
    const[email1,Setdata1]=useState();
    const[image1,Setdata2]=useState();
    const nav=useNavigate();



    useEffect(()=>{
        const user1=localStorage.getItem("username");
        const user2=localStorage.getItem("email");
        const user3=localStorage.getItem("image");
        Setdata(user1);Setdata1(user2);Setdata2(user3) 
    },[])
               
        

    const handleLogout = () => {
        localStorage.clear();
        Setdata(null);
        Setdata1(null);
        Setdata2(null);
         nav("/Login")
        
           }
    // console.log(data)
   
  return (
    <div >
        <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src={image1} width="30" height="30" class="d-inline-block align-top" alt=""/>
    {data}
  </a>
  <Button className='position-absolute top-0 end-0' variant='outline-dark' onClick={handleLogout}>Logout</Button>

</nav>
        {/* <Card  className='mx-auto bg-dark mb-3 position-absolute top-0 '>
        <Card.Body>
        <Card.Img className=' ' variant="top" src={image1} />

    
            <Card.Title className='text-center mb-3 fs-4 fw-bold text-Dark'>Profile</Card.Title>
            <Card.Text>
          <h6 className=' mb-3 text-center fw-bold text-light'>{data} </h6>
          <h6 className=' mb-3 text-center fw-bold text-light'>{email1}</h6>
        </Card.Text>
        </Card.Body>
        
        </Card>  */}
        <div className=' h-100 d-flex align-items-center justify-content-center'>
        <Card style={{ width: '18rem'}} onClick={()=>{nav('/Users')}}>
            <Card.Img variant="top" src="https://i0.wp.com/networknuts.net/wp-content/uploads/2019/11/zahir-accounting-software-have-more-than-60.000-users.png"></Card.Img>
            <Card.Title className='text-center mb-3 fs-4 fw-bold text-Dark'>Users</Card.Title>
        </Card>
        <Card style={{ width: '18rem'}} onClick={()=>{nav('/Product')}}>
            <Card.Img variant="top" src="https://images.news18.com/ibnlive/uploads/2021/06/1624945730_featured-image-2021-06-29t111724.512.jpg"></Card.Img>
            <Card.Title className='text-center mb-3 fs-4 fw-bold text-Dark'>products</Card.Title>
        </Card>
        <Card style={{ width: '18rem'}} onClick={()=>{nav('/Cart')}}>
            <Card.Img variant="top"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQaD2xYElQ2b-z-9t3I1C2wHi445kflTUHw&usqp=CAU"></Card.Img>
            <Card.Title className='text-center mb-3 fs-4 fw-bold text-Dark'>Carts</Card.Title>
        </Card>
        </div>

    </div>
  )
}

export default Logout




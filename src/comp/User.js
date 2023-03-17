import React from 'react'
import  { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";



const User = () => {
    const e=localStorage.getItem('uid');
    console.log(e)
    const [user, Setuser] = useState({});
    useEffect(() => {
        fetch(`https://dummyjson.com/users/${e}`)
          .then((res) => {
            return res.json();
          })
          .then((resp) => {
            Setuser(resp);
          })
          .catch((err) => {
            console.log(err.messsage);
          });
      }, [e]);
      console.log(user)
  return (
    
    <>
    {/* <div className='card w-25 mx-auto my-auto'>
        <img src={user.image} style={{width:"400px",height:"200px"}} alt="" />
        <p>email:{user.email}</p>
        <p>phone:{user.phone}</p>
        <p>height:{user.height}</p>
        <p>weight:{user.weight}</p>
        <p>Bloodgrp:{user.bloodGroup}</p>
        <p>eyecolor:{user.eyeColor}</p>
    </div> */}
    <div className="col col-md-4 col-lg-3 mx-auto mt-5">
            <Card  className="card mb-3">
              <Card.Header className="bg-success">
                <Card.Title className="text-center mb-0 fs-4 fw-bold text-light">
                  USER:{user.id}
                </Card.Title>
              </Card.Header>
              <Card.Body className="text-center">
                <span className="img">
                  <Card.Img variant="top" src={user.image} className='mb-3' />
                </span>
              
                  <ul class="list-group list-group-flush text-start">
                    
                    <li class="list-group-item">
                        <label className="fw-bold me-3">Email:</label>
                        <span>
                        {user.email}
                        </span>
                    </li>
                    <li class="list-group-item">
                        <label className="fw-bold me-3">Phone:</label>
                        <span>
                        {user.phone}
                        </span>
                    </li>
                    <li class="list-group-item">
                        <label className="fw-bold me-3">Height:</label>
                        <span>
                        {user.height}
                        </span>
                    </li>
                    <li class="list-group-item">
                        <label className="fw-bold me-3">Weight:</label>
                        <span>
                        {user.weight}
                        </span>
                    </li>
                    <li class="list-group-item">
                        <label className="fw-bold me-3">Blood-Group</label>
                        <span>
                        {user.bloodGroup}
                        </span>
                    </li>
                    <li class="list-group-item">
                        <label className="fw-bold me-3">Eye-Color</label>
                        <span>
                        {user.eyeColor}
                        </span>
                    </li>
                    <li class="list-group-item">
                        <label className="fw-bold me-3">university</label>
                        <span>
                        {user.university}
                        </span>
                    </li>
                  </ul>
                  
              
              </Card.Body>
            </Card>
          </div>
    </>
  )
}

export default User
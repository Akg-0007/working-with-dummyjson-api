
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [user, Setuser] = useState([]);
  const [inp, Setinp] = useState('');
  const use=useNavigate();
  const [api,setapi]=useState("https://dummyjson.com/users/search?q=")
  const dalla=(e)=>{
   localStorage.setItem("uid",e);
   use('/User');
  }
  
  useEffect(() => {
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        Setuser(resp);
      })
      .catch((err) => {
        console.log(err.messsage);
      });
  }, [api]);

  return (
    <div
      className="row d-flex flex-wrap  mx-auto mt-3"
      style={{ width: "85%" }}>
        <div>
            <input type="text" placeholder="search" value={inp} onChange={(e)=>{Setinp(e.target.value)}}></input>
            <button  onClick={()=>setapi(api+inp)} >search</button>
        </div>
      {user.users &&
        user.users.map((it) => (
          <div className="col col-md-4 col-lg-3">
            <Card key={it.id} className="card mb-3" onClick={()=>dalla(it.id)}>
              <Card.Header className="bg-success">
                <Card.Title className="text-center mb-0 fs-4 fw-bold text-light">
                  USER:{it.id}
                </Card.Title>
              </Card.Header>
              <Card.Body className="text-center">
                <span className="img">
                  <Card.Img variant="top" src={it.image} className='mb-3' />
                </span>
              
                  <ul class="list-group list-group-flush text-start">
                    
                    <li class="list-group-item">
                        <label className="fw-bold me-3">Username:</label>
                        <span>
                        {it.username}
                        </span>
                    </li>
                    <li class="list-group-item">
                        <label className="fw-bold me-3">University:</label>
                        <span>
                        {it.university}
                        </span>
                    </li>
                    <li class="list-group-item">
                        <label className="fw-bold me-3">Gender:</label>
                        <span>
                        {it.gender}
                        </span>
                    </li>
                    
                  </ul>
                  
              
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default Users;

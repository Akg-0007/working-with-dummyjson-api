import React, { useEffect,useState } from 'react'
import Card from 'react-bootstrap/Card';

const Cart = () => {
    const[car,setcar]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/carts')
        .then((res)=>{ return res.json()})
        .then((resp)=>{setcar(resp)}).catch((err) => {
                 console.log(err.messsage)
             });
        
    },[]);
    console.log(car);
  return (
    <div className='d-flex flex-wrap  mx-auto mt-3' style={{width:'85%'}}>
    {car.carts && car.carts.map((it)=>
    
    <Card key={it.id} className='mx-auto bg-light mb-3' style={{ width: '18rem'}}>
     <Card.Body>
     <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" />

         <Card.Title className='text-center mb-3 fs-4 fw-bold text-secondary'>CART:{it.id}</Card.Title>
         <Card.Text>
       <h6 className=' mb-3  fw-bold text-success'>total-discounts : {it.discountedTotal}</h6>
       <h6 className=' mb-3  fw-bold text-body'>Quantity : {it.total}</h6>
       <h6 className=' mb-3  fw-bold  text-dark'>Products : 
       <span className='mx-auto'>{it.products[0].title}</span><br />
       <span className='mx-auto'>{it.products[1].title}</span><br />
       <span className='mx-auto'>{it.products[2].title}</span><br />
       <span className='mx-auto'>{it.products[3].title}</span><br />
       <span className='mx-auto'>{it.products[4].title}</span><br />
       </h6>
     </Card.Text>
     </Card.Body>
     </Card> 
     )}
 </div>
  )
}

export default Cart
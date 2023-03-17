
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
const Product = () => {
    const[pro,Setpro]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res)=>{ return res.json()})
        .then((resp)=>{Setpro(resp)}).catch((err) => {
                 console.log(err.messsage)
             });
        
    },[]);
    console.log(pro);
  return (
    <div className='d-flex flex-wrap  mx-auto mt-3' style={{width:'85%'}}>
       {pro.products && pro.products.map((it)=>
       
       <Card key={it.id} className='mx-auto bg-light mb-3 'style={{ width: '18rem'}}
>
        <Card.Body>
        <Card.Img className='h-50' variant="top" src={it.thumbnail} />

            <Card.Title className='text-center mb-3 fs-4 fw-bold text-secondary'>Product:{it.id}</Card.Title>
            <Card.Text>
          <h6 className=' mb-3  fw-bold text-secondary'> {it.title}</h6>
          <h6 className=' mb-3  fw-bold text-secondary'>Price : ${it.price}</h6>
          <h6 className=' mb-3  fw-bold fs-2 text-success'> {it.discountPercentage}% off</h6>
        </Card.Text>
        </Card.Body>
        </Card> 
        )}
    </div>
  )
}

export default Product
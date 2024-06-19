import React from 'react'
import {  useEffect} from 'react';
import {Card,Button} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { addItem } from '../store/cartSlice';
import { getProducts } from './productSlice';
const Product =  () => {


  const dispatch = useDispatch()
  const {data:products} =useSelector(state=>state.products)


  useEffect(()=>{

    //dispatch action for fetch products
    dispatch(getProducts())
  });
  
function addToCart(product){
//dispatch add action

dispatch(addItem(product))

}
  

const cards=products.map(
  product =>(
    <div className='col-md-3' style={{marginBottom:'18px'}}>
<Card style={{ width: '18rem' }}>
  <div className="text-center">
      <Card.Img variant="top" src={product.image}
        style={{width:'100px' ,height:'130px'}}
        />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        INR :{product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:'white'}}>
      <Button variant="primary"
      
     onClick={()=>addToCart(product)} 
      >Add to Cart</Button>

      </Card.Footer>
      </div>
    </Card>
    </div>
  )
)

  return (
    <>
    <div className="row">

      {cards}
      </div> 
    
    </>
  )
}

export default Product;
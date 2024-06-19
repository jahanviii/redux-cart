import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap'; // Assuming you're using react-bootstrap components
import { deleteItem } from '../store/cartSlice';
const Cart = () => {
  const products = useSelector(state => state.cart);
const dispatch=useDispatch();
function removeItem(id){
//dispatch remove action
dispatch(deleteItem(id))
}
  const Cards = products.map(product => (
    <div className='col-md-4' key={product.id} style={{ marginBottom: '18px' }}>
      <Card style={{ width: '18rem' }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: '100px', height: '130px' }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              INR: {product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: 'white' }}>
            <Button
              variant="danger"
              onClick={() => removeItem(product.id)}
            >
Remove
             </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        {Cards}
      </div>
    </div>
  );
}

export default Cart;

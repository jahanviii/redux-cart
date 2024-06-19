import React from 'react';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cartProducts = useSelector(state => state.cart); // Connect to cart state from Redux store

  // Check if cartProducts is defined before accessing its length
  const cartItemCount = cartProducts ? cartProducts.length : 0;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Shopoholic</Navbar.Brand>
        <Navbar.Brand as={Link} to="/products">Products</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />{' '}
              Cart 
              <Badge pill bg="info" className='ml-1'>{cartItemCount}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;







// import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useSelector } from 'react-redux'; // Import useSelector from react-redux


// const NavBar = () => {
//   const cartProducts = useSelector(state => state.cart); // Connect to cart state from Redux store

//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//     <Container>
//       <Navbar.Brand as={Link} to="/">Shopoholic</Navbar.Brand>
//       <Navbar.Brand as={Link} to="/products">Products</Navbar.Brand>

//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Link as={Link} to="/cart">
//             <FontAwesomeIcon icon={faShoppingCart} />{' '}
//             Cart 
//             <Badge pill bg="info" className='ml-1'>{cartProducts.length}</Badge>
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   )
// }

// export default NavBar

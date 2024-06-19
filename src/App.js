import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './components/Product';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout'; // Assuming this is your main layout component
import { createRoutesFromElements,Route,createBrowserRouter 
  ,RouterProvider} from 'react-router-dom';

function App() {
const router=createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<RootLayout/>}>
<Route index element={<Product />} ></Route>

  <Route path="/cart" element={<Cart />} ></Route>
</Route>

))
  return (
<div >
  <RouterProvider router={router}/>
</div>
  );
}

export default App;

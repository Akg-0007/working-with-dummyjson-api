
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './comp/Cart';
import Login from './comp/Login';
import Logout from './comp/Logout';
import Product from './comp/Product';
import User from './comp/User';
import Users from './comp/Users';


function App() {
  return (
    <div >
     
   {/* <Login/> */}
   {/* <Users/> */}
   {/* <Product/> */}
   {/* <Cart/> */}
   {/* <Logout/> */}



   <Routes>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Users' element={<Users/>}></Route>
    <Route path='/Product' element={<Product/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
    <Route path='/Logout' element={<Logout/>}></Route>
    <Route path='/User' element={<User/>}></Route>
   </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import AddItemToCart from './components/cart/AddItemToCart';
import AddItem from './components/item/AddItem';
import DisplayCartContent from './components/cart/DisplayCartContent';
import UpdateCartItem from './components/item/UpdateCartItem';

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>

        <Link to ='/' style={{ margin: "5px" }}>Home</Link>
        <Link to = '/cart' style={{ margin: "5px" }}>Cart</Link>
        <Link to='/item' style={{ margin: "5px" }}>Item </Link>
      </nav>

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/item/:id' element={<AddItemToCart />} />
      <Route path='/item' element={<AddItem />} />
      <Route path='/cart/get/:id' element={<DisplayCartContent />} />
      <Route path='/item/update/:id' element={<UpdateCartItem />} />
      
      
      


      </Routes>
      
      
      </BrowserRouter>



    </div>

  );
}

export default App;

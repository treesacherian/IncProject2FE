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
      <nav className="navbar align-content-center " style={{display: "flex",  backgroundColor: "#BDA62D",}}>
      <div className="homeimage"></div>

        <Link to ='/'><button type="button" className="btn btn-dark" style={{margin:"10px"}}>Home</button></Link>
        <Link to = '/cart'><button type="button" className="btn btn-dark" style={{margin:"10px"}}>Cart</button></Link>
        <Link to='/item'><button type="button" className="btn btn-dark" style={{margin:"10px"}}>Item</button> </Link>
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

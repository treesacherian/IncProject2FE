import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';
import AddItemToCart from './components/cart/AddItemToCart';
import AddItem from './components/item/AddItem';
import DisplayCartContent from './components/cart/DisplayCartContent';
import UpdateCartItem from './components/item/UpdateCartItem';
import BuyerCart from './components/cart/BuyerCart';
import DisplayItems from './components/item/DisplayItems';
import DisplayStockItems from './components/item/DisplayStockItems';
import homeLogo from "./pictures/homeLogo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <body>
      <div>
        <BrowserRouter>
          {/* <nav className="navbar align-content-center " style={{ display: "flex", backgroundColor: "#526899", }}> */}

          <nav className="navbar align-content-center " style={{ display: "flex", backgroundColor: "  #2E7D32" }}   >
            <div>

              <div className="homeimage"></div>
              <img class="text-center" style={{ width: "10%" }} src={homeLogo}></img>
              <Link to='/'><button type="button" className="btn btn-success" style={{ margin: "10px" }}>Home</button></Link>
              <Link to='/cart'><button type="button" className="btn btn-success" style={{ margin: "10px" }}>Cart</button></Link>
              <Link to='/item'><button type="button" className="btn btn-success" style={{ margin: "10px" }}>Item</button> </Link>
              <Link to='/shopping'><button type="button" className="btn btn-success" style={{ margin: "10px" }}>Shopping</button> </Link>
              <p style={{ float: "inline-end", textAlign: "end", fontFamily: "cursive", color: "white" }}><b>Here to help with the cost of living!</b></p>
              {/* <img class="text-center" style={{ width: "20%", marginLeft: "600px" }} src={homeLogo}></img> */}
            </div>

          </nav>

          <div class="border border-primary p-2 mb-2" style={{/* backgroundColor: "#5dbc4d",*/ width: "100%" }}>
            {/* <img class="text-center" style={{ width: "20%", marginLeft: "600px" }} src={homeLogo}></img> */}
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/item/:id' element={<AddItemToCart />} />
            <Route path='/item' element={<AddItem />} />

            <Route path='/cart/get/:id' element={<DisplayCartContent />} />
            <Route path='/item/update/:id' element={<UpdateCartItem />} />
            <Route path='/shopping' element={<BuyerCart />} />

            <Route path='/item' element={<DisplayStockItems />} />






          </Routes>


        </BrowserRouter>



      </div>
    </body>

  );
}

export default App;

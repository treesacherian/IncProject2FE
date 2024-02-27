import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>

        <Link>Home</Link>
        <Link>Cart</Link>
      </nav>

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />


      </Routes>
      
      
      </BrowserRouter>



    </div>

  );
}

export default App;

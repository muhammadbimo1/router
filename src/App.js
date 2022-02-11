import './App.css';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/product/Products';
import Customer from './pages/customer/Customer';
import ProductForm from './pages/product/ProductForm';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/products">Product</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/customers">Customer</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/' element={<Outlet />}>
          <Route index element={<Product/>}/>
          <Route path='form' element={<ProductForm />} />
        </Route>
        <Route path='/customers/*' element={<Customer />} />
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

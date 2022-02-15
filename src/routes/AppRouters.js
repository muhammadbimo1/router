import { Outlet, Route, Routes } from "react-router-dom"
import Customer from "../pages/customer/Customer"
import Home from "../pages/home/Home"
import ProductFormBloc from "../pages/product/bloc/ProductFormBloc"
import ProductListBloc from "../pages/product/bloc/ProductListBloc"
import ProductForm from "../pages/product/ProductForm"
import Product from "../pages/product/Products"
import ProductService from "../pages/product/service/ProductService"

const AppRouters = () => {
    return(
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/' element={<Outlet />}>
          <Route index element={<Product bloc={() => ProductListBloc(ProductService)}/>}/>
          <Route path='form' element={<ProductForm bloc={() => ProductFormBloc(ProductService)}/>} />
          <Route path='form/:id' element={<ProductForm bloc={() => ProductFormBloc(ProductService)}/>} />
        </Route>
        <Route path='/customers/*' element={<Customer />} />
        <Route path="*" element={<Home/>}/>
      </Routes>
    )
}

export default AppRouters;
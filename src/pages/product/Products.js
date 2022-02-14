import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/umd/react-router-dom.development"
import { getProducts } from "./service/ProductService";

const Product = () => {
  const [list,setList] = useState(
    {products:[],
    response:''
    }
    )

  useEffect(() => {
    getProductList()
  },[])

  const getProductList = async () => {
    try{
      const response =  await getProducts();
      console.log(response);
      setList({
        products:response.data.data,
        response:response.request.status})
    } catch (error){
      ///do error
      console.log(error);
    }

  }

  const deleteProducts = async (e) => {
    try {
      await axios.delete(`http://localhost:3002/products/${e.target.name}`)
      getProductList()
    } catch (error) {
      console.log(error);
    } 
  }



  let navigate = useNavigate();

if (list.response===200) {
  return (
    <div>
      <button onClick={() => { navigate("/products/form") }}> User </button>

      <div><h2>Product List</h2>
        <button type="button" className="btn btn-success" onClick={() => { navigate("/products/form") }}> Add Product </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody> {list.products.map((product, index) => {
            return (<tr key={product.id}><td>{index + 1}</td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td><button name={product.id}onClick={deleteProducts}>Delete</button>
              <button name={product.id}onClick={()=> {navigate("form",{state:product})}}>Edit</button>
              {/* send whole object to edit form */}
              <button name={product.id}onClick={()=> {navigate(`form/${product.id}`)}}>Edit(SEND ID)</button></td>
              {/* Send ID only to edit form, and then get the data from backend */}
            </tr>);
          })}</tbody>
        </table>
      </div>
      </div>
  )
}else{
  return(
    <div>
    please wait...
  </div>
  )

}

}

export default Product
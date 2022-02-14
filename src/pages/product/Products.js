import { useEffect } from "react";
import { useNavigate } from "react-router-dom/umd/react-router-dom.development"

const Product = ({ bloc }) => {

  let navigate = useNavigate();
  const {list,getProductList,deleteProducts,updateProduct,updateProductById} = bloc();

  useEffect(() => {
    getProductList()
  }, [])

  if (list.response === 200) {
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
                <td><button name={product.id} onClick={deleteProducts}>Delete</button>
                  <button name={product.id} onClick={() => { updateProduct(product) }}>Edit</button>
                  {/* send whole object to edit form */}
                  <button name={product.id} onClick={() => { updateProductById(product.id) }}>Edit(SEND ID)</button></td>
                {/* Send ID only to edit form, and then get the data from backend */}
              </tr>);
            })}</tbody>
          </table>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        please wait...
      </div>
    )

  }

}

export default Product
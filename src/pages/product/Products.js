import { useNavigate } from "react-router-dom/umd/react-router-dom.development"

const Product = () => {

    let navigate = useNavigate();

    return(
      <>
     <button onClick={() => { navigate("/products/form") }}> User </button> 
      </>
    )
  }
  
  export default Product
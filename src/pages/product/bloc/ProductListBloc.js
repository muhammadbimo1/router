import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom/umd/react-router-dom.development";
import { getProducts } from "../service/ProductService";

const ProductListBloc = () => {
    const [list, setList] = useState(
        {
            products: [],
            response: ''
        }
    )
    let navigate = useNavigate();
    const getProductList = async () => {
        try {
            const response = await getProducts();
            console.log(response);
            setList({
                products: response.data.data,
                response: response.request.status
            })
        } catch (error) {
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

    const updateProduct = (product) => {
        navigate("form", { state: product }) 
    }

    const updateProductById = (id) => {
        navigate(`form/${id}`);
    }

    return {
        list,
        getProductList,
        deleteProducts,
        updateProduct,
        updateProductById
    }

}

export default ProductListBloc;
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom/umd/react-router-dom.development";

const ProductFormBloc = (productService) => {
    let {getProducts,getProductById,postProduct} = productService();
    const [loading, setLoading] = useState(false)
    let navigate = useNavigate();

    const handleUpdate = async (values) => {
        try {
            setLoading(true)
            const response = await postProduct(values)
            console.log(response);
            navigate("/products/form")
        } catch (error) {
            ///do error
            alert(error)
            setLoading(false)
        }
    }

    const submitData = async (values) => {
        try {
            setLoading(true)
            console.log(values);
            const response = await postProduct(values)
            console.log(response);
            navigate("/products/form")
        } catch (error) {
            ///do error
            alert(error)
            setLoading(false)
        }

    }

    const getProduct = async (id) => {
        try {
            const response = await getProductById(id);
            return response;
        } catch (error) {
            ///do error
            console.log(error);
        }

    }



    return {
        loading,
        handleUpdate,
        submitData,
        getProduct
    }



}

export default ProductFormBloc;
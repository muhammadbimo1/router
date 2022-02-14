import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom/umd/react-router-dom.development";
import { getProductById, getProducts, postProduct } from "../service/ProductService";

const ProductFormBloc = () => {
    const [loading, setLoading] = useState(false)
    let params = useParams();
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



    return {
        loading,
        handleUpdate,
        submitData,
    }



}

export default ProductFormBloc;
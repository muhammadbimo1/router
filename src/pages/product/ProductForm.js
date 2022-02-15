import { useLocation, useParams } from "react-router-dom";
import {useFormik} from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom/umd/react-router-dom.development";
import { getProductById, postProduct } from "./service/ProductService";
const ProductForm = ({bloc}) => {
    const {loading,handleUpdate,submitData,getProduct} = bloc();
    let params = useParams();

    useEffect(() => {
        getProductInfoById()
      }, [])


    const formik = useFormik({
        initialValues:{
            id:"",
            name: ""
        },
        validationSchema: Yup.object({
            id: Yup.string().required("required field"),
            name: Yup.string().required("requiredfield").min(5,"minimum 5 character")
        }) ,
        onSubmit: () => {
            if(params.id){
                handleUpdate(formik.values);
            }else{
                submitData(formik.values);
            }
        }
    })// example formik usage

    const getProductInfoById = async () => {
        try {
            const response = await getProduct(params.id)
            console.log("RESPONSE",response);
            formik.values.id = response.data.data.id;
            formik.values.name = response.data.data.name;
            formik.setFieldValue()
            console.log("FORMIK VALUES = ", formik.values.id);
        } catch (error) {
            ///do error
            console.log(error);
        }

    } //setting values with formik




    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                        <input className="m-1" type="text" name="id" id="id" placeholder="Title" defaultValue={formik.values.id} />
                        {formik.errors.id && formik.touched.id && (<small>{formik.errors.id}</small>)}
                         <br />
                        <input className="m-1" type="text" name="name" id="name" placeholder="Subtitle" defaultValue={formik.values.name} /> 
                        {formik.errors.name && formik.touched.name && (<small>{formik.errors.name}</small>)}<br />
                        <input className="btn btn-primary" type="submit" disabled={loading} />
                        
                </form>
            </div>
            <button >Cancel</button>
        </>
    )
}

export default ProductForm
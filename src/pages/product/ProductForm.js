import { useLocation, useParams } from "react-router-dom";
import {useFormik} from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom/umd/react-router-dom.development";
import { getProductById, postProduct } from "./service/ProductService";
const ProductForm = () => {

    let params = useParams(); //use this if you want to pass from params (ex: products/3)
    let object = useLocation();  //use this if you want to pass whole objects
    console.log("params", params);
    console.log("object", object);
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)

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
                  handleUpdate();
              }else{
                  submitData();
              }
          }
      })// example formik usage

    const getProductInfoById = async () => {
        try {
            const response = await getProductById(params.id)
            console.log(response);
            formik.values.id = response.data.id;
            formik.values.name = response.data.name;
            formik.setFieldValue();
        } catch (error) {
            ///do error
            console.log(error);
        }

    } //setting values with formik

    const submitData = async () => {
        try {
            setLoading(true)
            console.log(formik.values);
            const response = await postProduct(formik.values)
            console.log(response);
            navigate("/products/form")
        } catch (error) {
            ///do error
            alert(error)
            setLoading(false)
        }

    }

    const handleUpdate = async () => {
        try {
            setLoading(true)
            const response = await postProduct(formik.values)
            console.log(response);
            navigate("/products/form")
        } catch (error) {
            ///do error
            alert(error)
            setLoading(false)
        }
    }


    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                        <input className="m-1" type="text" name="id" id="id" placeholder="Title" defaultValue={formik.values.id} />
                        {formik.errors.id && formik.touched.id && (<small>{formik.errors.id}</small>)}
                         <br />
                        <input className="m-1" type="text" name="name" id="name" placeholder="Subtitle" defaultValue={formik.values.name} /> 
                        {formik.errors.name && formik.touched.name && (<small>{formik.errors.name}</small>)}<br />
                        <input className="btn btn-primary" type="submit" disabled={!formik.isValid} />
                        
                </form>
            </div>

            <button >Cancel</button>
        </>
    )
}

export default ProductForm
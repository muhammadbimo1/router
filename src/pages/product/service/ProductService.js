import axios from "axios"
import client from "../../../shared/http-client/Client";

const products = "/products/";

export const getProducts = async () => {
    const response = await client.get(products)
    return response;
}

export const getProductById = async (id) => {
    const response = await client.get(`${products}${id}`)
    return response;
}

export const postProduct = async (data) => {
    const response = await client.post(products,data)
    return response;
}
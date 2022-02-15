import client from "../../../shared/http-client/Client";

const products = "/products/";

const ProductService = () => {
    const getProducts = async () => {
        const response = await client.get(products)
        return response;
    }
    
     const getProductById = async (id) => {
        const response = await client.get(`${products}${id}`)
        return response;
    }
    
     const postProduct = async (data) => {
        const response = await client.post(products,data)
        return response;
    }
    return {getProducts,getProductById,postProduct}
}

export default ProductService;


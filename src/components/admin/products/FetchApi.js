import axios from "axios";

const apiURL = import.meta.env.VITE_APP_API_URL;

export const getAllProduct = async () => {
    try {
        let res = await axios.get(`${apiURL}/api/product/all-product`);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const productByPrice = async (price) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/product-by-price`, { price })
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const productByCategory = async (catId) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/product-by-category`, { catId })
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (pId) => {
    try {
        let res = await axios.post(`${apiURL}/api/product/delete-product`, { pId })
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async ({ pName, pDescription, pImage, pStatus, pCategory, pQuantity, pPrice, pOffer }) => {
    let formData = new FormData()
    for (const file of pImage) {
        formData.append("pImage", file)
    }

    formData.append("pName", pName)
    formData.append("pDescription", pDescription)
    formData.append("pStatus", pStatus)
    formData.append("pCategory", pCategory)
    formData.append("pQuantity", pQuantity)
    formData.append("pPrice", pPrice)
    formData.append("pOffer", pOffer)

    try {
        let res = await axios.post(`${apiURL}/api/product/add-product`, formData)
    } catch (error) {
        console.log(error);
    }
}
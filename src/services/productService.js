import axios from '~/axios';

const getProduct = async (inputId) => {
    return await axios.get(`product/get-product?id=${inputId}`, { id: inputId });
};
const createProductFromDB = async (data) => await axios.post(`product/create-new-product`, data);
const productService = {
    getProduct: getProduct,
    createProductFromDB: createProductFromDB,
};
export default productService;

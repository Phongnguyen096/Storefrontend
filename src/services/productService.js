import axios from '~/axios';

const getProduct = async (inputId) => {
    return await axios.get(`api/products?id=${inputId}`, { id: inputId });
};

const productService = {
    getProduct: getProduct,
};
export default productService;

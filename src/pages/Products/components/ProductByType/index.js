import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '~/services/productService';

function ProductByType() {
    const params = useParams();
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        document.title = params.type;
        let TYPE = params.type.toUpperCase();
        console.log(TYPE);
        const fetchData = async () => {
            let response = await productService.getProduct(TYPE);
            if (response && response.data.errorCode === 0) {
                console.log(response.data.product);
                return response.data.product;
            }
        };
        let list = fetchData();
        setListProduct(list);
    }, [params.type]);
    return (
        <div>
            <h1>ok</h1>
        </div>
    );
}

export default ProductByType;

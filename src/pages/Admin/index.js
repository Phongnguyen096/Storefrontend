import classNames from 'classnames/bind';
import { Typography, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import styles from './Admin.module.scss';
import { PrimaryTypography } from '~/components/CustomMetarialUI/ThemeStyle';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import productService from '~/services/productService';
const cx = classNames.bind(styles);

function AdminPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        return async () => {
            let response = await productService.getProduct('ALL');
            let productData = [];
            if (response && response.data.errorCode === 0) {
                response.data.product.forEach((item) => {
                    productData.push({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        description: item.description,
                        view: item.view,
                    });
                });
                setProducts(productData);
            }
        };
    }, []);

    //set table product
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 150,
            editable: true,
        },
        {
            field: 'view',
            headerName: 'View',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 180,
            renderCell: (cellValue) => {
                return (
                    <>
                        <Button variant="container">update</Button>
                        <Button variant="container">Delete</Button>
                    </>
                );
            },
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <CustomComponentMUI
                    comp={Typography}
                    themeCustom={PrimaryTypography}
                    variant="typeTitle"
                    color="primary"
                >
                    Admin
                </CustomComponentMUI>
            </div>
            <div className={cx('user-manager')}></div>
            <div className={cx('product-manager')}>
                <CustomComponentMUI comp={Typography} themeCustom={PrimaryTypography} variant="typeMedium">
                    Products
                </CustomComponentMUI>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={products}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                    />
                </Box>
            </div>
        </div>
    );
}

export default AdminPage;

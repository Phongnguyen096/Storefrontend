import classNames from 'classnames/bind';
import { Typography, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import styles from './Admin.module.scss';
import { PrimaryTypography } from '~/components/CustomMetarialUI/ThemeStyle';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import productService from '~/services/productService';
import userService from '~/services/userService';
const cx = classNames.bind(styles);

function AdminPage() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        return async () => {
            // get User
            let responseUser = await userService.handleGetUser('ALL');
            let userData = [];
            if (responseUser && responseUser.data.errorCode === 0) {
                responseUser.data.user.forEach((item) => {
                    userData.push({
                        id: item.id,
                        firstName: item.firstName,
                        lastName: item.lastName,
                        email: item.email,
                        address: item.address,
                        gender: item.gender === true ? 'Male' : 'Female',
                        roleId: item.roleId,
                        phoneNumber: item.phoneNumber,
                        image: item.image,
                    });
                });
                setUsers(userData);
            }
            //get product
            let responseProduct = await productService.getProduct('ALL');
            let productData = [];
            if (responseProduct && responseProduct.data.errorCode === 0) {
                responseProduct.data.product.forEach((item) => {
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
    //set table user
    const userColumns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First Name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
            editable: true,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 150,
            editable: true,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 150,
            editable: true,
        },
        {
            field: 'roleId',
            headerName: 'Role',
            width: 110,
            editable: true,
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone Number',
            width: 110,
            editable: true,
        },
        {
            field: 'image',
            headerName: 'Image',
            width: 150,
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
    //set table product
    const productColumns = [
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
            <div className={cx('user-manager')}>
                <CustomComponentMUI comp={Typography} themeCustom={PrimaryTypography} variant="typeMedium">
                    Users
                </CustomComponentMUI>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={users}
                        columns={userColumns}
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
            <div className={cx('product-manager')}>
                <CustomComponentMUI comp={Typography} themeCustom={PrimaryTypography} variant="typeMedium">
                    Products
                </CustomComponentMUI>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={products}
                        columns={productColumns}
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

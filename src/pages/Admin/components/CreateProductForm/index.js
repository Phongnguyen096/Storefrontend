import classNames from 'classnames/bind';
import { useState } from 'react';
import {
    Box,
    FormControlLabel,
    Button,
    OutlinedInput,
    FormLabel,
    RadioGroup,
    FormControl,
    Radio,
    Input,
} from '@mui/material';

import styles from './CreateProductForm.module.scss';
import { UploadTask, avatarProductRef, UploadAndSetFireStoreDB, listImageProductRef } from '~/Firebase';
import productService from '~/services/productService';
const cx = classNames.bind(styles);

function CreateProductForm() {
    // const [mess, setMess] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let reqData = {};
        let listImg = [];
        for (let [key, value] of formData) {
            if (key === 'listImage') {
                listImg.push(value);
                reqData[key] = listImg;
            } else {
                reqData[key] = value;
            }
        }
        console.log(reqData.listImage);

        //
        await productService.createProductFromDB(reqData);

        //upload img avatar -> firebase storage
        const uploadAvatar = avatarProductRef(`${reqData.description}/${reqData.imgUrl.name}`);
        const uploadTask = UploadTask(uploadAvatar, reqData.imgUrl);
        UploadAndSetFireStoreDB(uploadTask, { name: reqData.name, serial: reqData.serial });

        //upload img list -> firebase  storage
        reqData.listImage.forEach((img) => {
            let imgStorageRef = listImageProductRef(`${reqData.description}/${img.name}`);
            let uploadTaskListImage = UploadTask(imgStorageRef, img);
            UploadAndSetFireStoreDB(uploadTaskListImage, { name: reqData.name, serial: reqData.serial });
        });
    };
    return (
        <div className={cx('wrapper')}>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                <OutlinedInput required id="name" name="name" placeholder="Name" className={cx('input-width-1')} />
                <OutlinedInput required id="price" name="price" placeholder="Price" className={cx('input-width-1')} />
                <OutlinedInput
                    required
                    id="serial"
                    name="serial"
                    placeholder="Serial"
                    className={cx('input-width-1')}
                />
                <OutlinedInput
                    required
                    id="description"
                    name="description"
                    placeholder="Description"
                    className={cx('input-width-1')}
                />
                <div className={cx('image-product')}>
                    <h4>Image avatar</h4>
                    <Input
                        required
                        name="imgUrl"
                        type="file"
                        id="imgUrl"
                        placeholder="Image"
                        className={cx('input-width-3')}
                        accept=".png, .jpg, .jpeg"
                    />
                </div>
                <div className={cx('image-product')}>
                    <h4>List Image</h4>
                    <input
                        required
                        id="list-image"
                        name="listImage"
                        type="file"
                        className={cx('input-width-3')}
                        multiple="multiple"
                        accept="image/*"
                    />
                </div>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="row-radio-buttons-group-label"
                        name="typeID"
                        className={cx('radio-group')}
                        type="number"
                    >
                        <FormControlLabel value={1} control={<Radio />} label="Acoustic" />
                        <FormControlLabel value={2} control={<Radio />} label="Classic" />
                        <FormControlLabel value={3} control={<Radio />} label="Electric" />
                        <FormControlLabel value={4} control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <div className={cx('submit-button')}>
                    <Button type="submit" variant="contained">
                        create
                    </Button>
                </div>
                <div className={cx('message-response')}>{}</div>
            </Box>
        </div>
    );
}

export default CreateProductForm;

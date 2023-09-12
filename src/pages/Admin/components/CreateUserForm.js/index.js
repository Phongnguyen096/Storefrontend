import classNames from 'classnames/bind';
import { useState } from 'react';
import { Box, FormControlLabel, Button, OutlinedInput, FormLabel, RadioGroup, FormControl, Radio } from '@mui/material';
import styles from './CreateUserForm.module.scss';
import userService from '~/services/userService';

const cx = classNames.bind(styles);
function CreateUserForm() {
    const [mess, setMess] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let reqData = {};
        for (let [key, value] of formData) {
            reqData[key] = value;
        }
        let resMessage = (await userService.handleCreateNewUser(reqData)).data.message.errMessage;
        console.log(resMessage);
        setMess(resMessage);
    };
    return (
        <div className={cx('wrapper')}>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                <OutlinedInput
                    required
                    id="firstName"
                    name="firstName"
                    placeholder="Fist Name"
                    className={cx('input-width-1')}
                />
                <OutlinedInput
                    required
                    id="last-name"
                    name="lastName"
                    placeholder="Last Name"
                    className={cx('input-width-1')}
                />
                <OutlinedInput
                    required
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    placeholder="Email"
                    className={cx('input-width-1')}
                />
                <OutlinedInput
                    required
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    className={cx('input-width-1')}
                />
                <OutlinedInput
                    required
                    id="address"
                    name="address"
                    placeholder="Address"
                    className={cx('input-width-3')}
                />
                <OutlinedInput
                    required
                    id="phone-number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className={cx('input-width-2')}
                />
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="row-radio-buttons-group-label"
                        name="gender"
                        className={cx('radio-group')}
                        type="number"
                    >
                        <FormControlLabel value={0} control={<Radio />} label="Female" />
                        <FormControlLabel value={1} control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
                    <RadioGroup row aria-labelledby="roleId" name="roleId" className={cx('radio-group')}>
                        <FormControlLabel value={1} control={<Radio />} label="Admin" />
                        <FormControlLabel value={2} control={<Radio />} label="Customer" />
                    </RadioGroup>
                </FormControl>
                <div className={cx('submit-button')}>
                    <Button type="submit" variant="contained">
                        create
                    </Button>
                </div>
                <div className={cx('message-response')}>{mess}</div>
            </Box>
        </div>
    );
}

export default CreateUserForm;

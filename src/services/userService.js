import axios from '~/axios';

const handleLoginApi = async (data) => {
    return await axios.post('user/login', data);
};

const handleGetUser = async (inputId) => {
    return await axios.get(`user/get-user?id=${inputId}`, { id: inputId });
};
const userService = {
    handleLoginApi: handleLoginApi,
    handleGetUser: handleGetUser,
};

export default userService;

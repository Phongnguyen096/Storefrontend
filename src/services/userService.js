import axios from '~/axios';

const handleLoginApi = async (data) => {
    return await axios.post('user/login', data);
};

// send request params
const handleGetUser = async (inputId) => {
    return await axios.get(`user/get-user?id=${inputId}`, { id: inputId });
};

const handleCreateNewUser = async (data) => {
    return await axios.post('user/create-new-user', data);
};

// send request body
const handleDeleteUser = async (userId) => {
    return await axios.delete('user/delete-user', { data: { id: userId } });
};

const handleUpdateUser = async (userData) => {
    return await axios.put('user/edit-user', userData);
};
const userService = {
    handleLoginApi: handleLoginApi,
    handleGetUser: handleGetUser,
    handleCreateNewUser: handleCreateNewUser,
    handleDeleteUser: handleDeleteUser,
    handleUpdateUser: handleUpdateUser,
};

export default userService;

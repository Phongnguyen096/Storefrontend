import  axios from  "~/axios"

 const handleLoginApi = async  (data) => {
    return  await axios.post('api/login',data );
} 
export default handleLoginApi ;
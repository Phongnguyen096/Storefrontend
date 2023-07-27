import  axios from  "~/axios"

 const handleLoginApi =  (data) => {
    return axios.post('login',{data} ) ;
} 
export default handleLoginApi ;
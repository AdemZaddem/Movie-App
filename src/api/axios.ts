import axios from "axios";

const api = axios.create({
    baseURL:'https://api.tvmaze.com',
    timeout:5000
})

api.interceptors.response.use(
    response => response,
    error =>{
        if(axios.isAxiosError(error)){
            const status = error.response?.status
            if(status === 404)throw new Error('Not Found')
            else if(status === 500)throw new Error('Server error - try again later')
            else throw new Error(error.message)
        }
        throw new Error('Network error - check your connection')
    }
)


export default api
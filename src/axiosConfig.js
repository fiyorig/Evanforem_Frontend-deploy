import axios from 'axios';

const axiosBase = axios.create({
    // baseURL: 'http://localhost:5500/api',
    baseURL:'https://evanforem-backend-deploy-1.onrender.com',
    })

export default axiosBase
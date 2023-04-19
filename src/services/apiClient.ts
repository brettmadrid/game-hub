import axios from "axios";

// api configuration object
// included with every request
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6193cf05559f4db1b3bab96ade86d9d0'
    }
})
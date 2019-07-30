//all the code related to axios

import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 24b5911dd3d7728304800a1256f6366e1bbab121f9b97074f52fddf28118c0c6'
    }
});
import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://simple-blog-app-4a471.firebaseio.com/'
});

export default instance;